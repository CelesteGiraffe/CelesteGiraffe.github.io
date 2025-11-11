var selectedSquare = null; // Variable to store the currently selected square
var selectedRow = null;
var mouseDownTime;
var html2canvasLoaderPromise = null;
var HTML2CANVAS_SRC =
  "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js";

$(document).ready(function () {
  initializeDraggable();
  initializeDroppable();
  warmupHtml2Canvas();

  //add new tier on click
  $("#addTier").click(addNewTier);
  $("#shareTier").on("click", captureTierSnapshot);

  $(document).on("click", ".select-row", function () {
    $(".tier-row").removeClass("selected-row"); // Remove selection from all rows
    $(".image-square").removeClass("selected"); // Deselect any selected square
    var $currentRow = $(this).closest(".tier-row");
    $currentRow.addClass("selected-row"); // Add selection to current row
    selectedRow = $currentRow[0]; // Update selectedRow variable
    selectedSquare = null; // Deselect any selected square
    $("#large-image").removeAttr("src");
    $("#large-image-container").removeClass("has-image");
  });

  //Handle keydown events
  $(document).keydown(handleKeyDown);
});

function initializeDraggable() {
  $(".image-square")
    .draggable({
      revert: "invalid",
      helper: "clone",
      appendTo: "body",
      zIndex: 20000,
      start: function () {
        $(".image-square").not(this).removeClass("selected");
      },
      stop: function () {
        $(".image-square").removeClass("selected");
        $(this).addClass("selected");
        selectedSquare = this;
      },
    })
    .mousedown(function (e) {
      mouseDownTime = new Date().getTime();
    })
    .mouseup(function () {
      var mouseUpTime = new Date().getTime();
      if (mouseUpTime - mouseDownTime < 200) {
        $(".image-square").removeClass("selected");
        $(".tier-row").removeClass("selected-row"); // Deselect any selected row
        $(this).addClass("selected");
        selectedSquare = this;
        selectedRow = null; // Deselect any selected row
        var largeImageSrc = $(this).find("img").attr("src");
        $("#large-image").attr("src", largeImageSrc);
        $("#large-image-container").addClass("has-image");
      }
    });
}

function initializeDroppable() {
  $(".tier-row").droppable({
    accept: ".image-square",
    drop: function (event, ui) {
      var dropped = ui.draggable;
      var droppedOn = this;
      var children = $(this).children(".image-square");
      var hasInserted = false;

      children.each(function () {
        var current = $(this);
        if (current.offset().left > dropped.offset().left && !hasInserted) {
          $(dropped)
            .detach()
            .css({ top: "", left: "", position: "static" })
            .insertBefore(current);
          hasInserted = true;
          return false;
        }
      });

      if (!hasInserted) {
        $(dropped)
          .detach()
          .css({ top: "", left: "", position: "static" })
          .appendTo(droppedOn);
      }
    },
  });
}

// Handle adding new tiers
function addNewTier() {
  const newTierName = $("#newTierName").val();
  if (newTierName) {
    const newTierId = newTierName.replace(/ /g, "-"); // Replace spaces with dashes
    const newTierElement = `
        <div id="${newTierId}" class="tier-row custom-tier">
          <button class="select-row btn btn-secondary btn-compact">Select</button>
          <h3>${newTierName}</h3>
        </div>`;

    // Append the new tier after the last existing tier row
    $(".tier-row").last().after(newTierElement);

    // Initialize the new tier as a droppable area
    $("#" + newTierId).droppable({
      accept: ".image-square",
      drop: function (event, ui) {
        var dropped = ui.draggable;
      var droppedOn = this;
      var children = $(this).children(".image-square");
        var hasInserted = false;

        children.each(function () {
          var current = $(this);
          if (current.offset().left > dropped.offset().left && !hasInserted) {
            $(dropped)
              .detach()
              .css({ top: "", left: "", position: "static" })
              .insertBefore(current);
            hasInserted = true;
            return false;
          }
        });

        if (!hasInserted) {
          $(dropped)
            .detach()
            .css({ top: "", left: "", position: "static" })
            .appendTo(droppedOn);
        }
      },
    });

    initializeDraggable(); // Re-initialize draggable elements
    $("#newTierName").val(""); // Clear the input
  } else {
    alert("Please enter a name for the new tier.");
  }
}

function handleKeyDown(e) {
  // Listen for keydown events on the document
  if (selectedSquare) {
  }
  squaresSelected(e);

  if (selectedRow) {
    rowsSelected(e);
  }
}

function rowsSelected(e) {
  var $selected = $(selectedRow);
  var $prevRow = $selected.prev(".tier-row");
  var $nextRow = $selected.next(".tier-row");

  switch (e.which) {
    case 38: // Up arrow key
      if ($prevRow.length) {
        $selected.insertBefore($prevRow);
      }
      break;
    case 40: // Down arrow key
      if ($nextRow.length) {
        $selected.insertAfter($nextRow);
      }
      break;
  }
}

function squaresSelected(e) {
  var $selected = $(selectedSquare);
  var $parentRow = $selected.closest(".tier-row");

  // Refresh the list of tier rows
  var $allRows = $(".tier-row");
  var rowIndex = $allRows.index($parentRow);
  var $prevRow = rowIndex > 0 ? $($allRows.get(rowIndex - 1)) : null;
  var $nextRow =
    rowIndex < $allRows.length - 1 ? $($allRows.get(rowIndex + 1)) : null;

  // Fetch the first and last rows dynamically
  var $firstRow = $allRows.first();
  var $lastRow = $allRows.last();
  switch (e.which) {
    case 37: // left arrow key
      var $prev = $selected.prev(".image-square");
      if ($prev.length) {
        $prev.before($selected);
      }
      break;
    case 38: // up arrow key
      if ($prevRow && $prevRow.length) {
        $prevRow.append($selected);
      } else if (!$parentRow.length) {
        $firstRow.append($selected);
      }
      break;
    case 39: // right arrow key
      var $next = $selected.next(".image-square");
      if ($next.length) {
        $next.after($selected);
      }
      break;
    case 40: // down arrow key
      if (!$parentRow.length) {
        $lastRow.append($selected);
      } else if ($nextRow && $nextRow.length) {
        $nextRow.append($selected);
      }
      break;
    default:
      return;
  }
  e.preventDefault(); // Prevent the default action (scrolling)
}

function captureTierSnapshot() {
  var board = document.querySelector(".tier-board");
  if (!board) {
    alert("Nothing to capture yet.");
    return;
  }
  setShareButtonState(true);
  var snapshotContext = createSnapshotBoard(board);
  var captureTarget = snapshotContext ? snapshotContext.node : board;
  ensureHtml2Canvas()
    .then(function () {
      return html2canvas(captureTarget, {
        backgroundColor:
          getComputedStyle(document.body).backgroundColor || "#060612",
        scale: window.devicePixelRatio || 2,
        useCORS: true,
        allowTaint: false,
      });
    })
    .then(function (canvas) {
      if (canvas.toBlob) {
        return new Promise(function (resolve) {
          canvas.toBlob(function (blob) {
            if (!blob) {
              fallbackDownload(canvas);
              resolve();
              return;
            }
            var objectUrl = URL.createObjectURL(blob);
            triggerDownload(objectUrl);
            setTimeout(function () {
              URL.revokeObjectURL(objectUrl);
              resolve();
            }, 0);
          }, "image/png");
        });
      }
      fallbackDownload(canvas);
      return null;
    })
    .catch(function (error) {
      console.error(error);
      alert(
        "Snapshot tool could not load. Please check your connection and try again."
      );
    })
    .finally(function () {
      if (snapshotContext && typeof snapshotContext.cleanup === "function") {
        snapshotContext.cleanup();
      }
      setShareButtonState(false);
    });
}

function fallbackDownload(canvas) {
  var dataUrl = canvas.toDataURL("image/png");
  triggerDownload(dataUrl);
}

function triggerDownload(url) {
  var link = document.createElement("a");
  link.href = url;
  link.download = "tier-list-" + Date.now() + ".png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function setShareButtonState(isLoading) {
  var $button = $("#shareTier");
  if (!$button.length) return;
  if (isLoading) {
    $button.prop("disabled", true).text("Sharing...");
  } else {
    $button.prop("disabled", false).text("Share");
  }
}

function ensureHtml2Canvas() {
  if (typeof html2canvas !== "undefined") {
    return Promise.resolve(html2canvas);
  }
  if (html2canvasLoaderPromise) {
    return html2canvasLoaderPromise;
  }
  html2canvasLoaderPromise = new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = HTML2CANVAS_SRC;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    script.onload = function () {
      if (typeof html2canvas !== "undefined") {
        resolve(html2canvas);
      } else {
        reject(new Error("html2canvas failed to initialize"));
      }
    };
    script.onerror = function () {
      reject(new Error("html2canvas failed to load"));
    };
    document.head.appendChild(script);
  });
  return html2canvasLoaderPromise;
}

function warmupHtml2Canvas() {
  ensureHtml2Canvas().catch(function () {
    // captureTierSnapshot will surface user-facing errors if needed
  });
}

function createSnapshotBoard(board) {
  if (!board || !board.parentNode) return null;
  var clone = board.cloneNode(true);
  clone.classList.add("tier-board-capture");
  var style = clone.style;
  style.position = "absolute";
  style.left = "-99999px";
  style.top = "0";
  style.width = board.offsetWidth + "px";
  style.maxHeight = "none";
  style.height = "auto";
  style.overflow = "visible";
  style.zIndex = "-1";
  board.parentNode.appendChild(clone);
  return {
    node: clone,
    cleanup: function () {
      if (clone && clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    },
  };
}
