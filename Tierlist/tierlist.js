var selectedSquare = null; // Variable to store the currently selected square
var selectedRow = null;
var mouseDownTime;

$(document).ready(function () {
  initializeDraggable();
  initializeDroppable();

  //add new tier on click
  $("#addTier").click(addNewTier);

  $(document).on("click", ".select-row", function () {
    $(".tier-row").removeClass("selected-row"); // Remove selection from all rows
    $(".image-square").removeClass("selected"); // Deselect any selected square
    var $currentRow = $(this).closest(".tier-row");
    $currentRow.addClass("selected-row"); // Add selection to current row
    selectedRow = $currentRow[0]; // Update selectedRow variable
    selectedSquare = null; // Deselect any selected square
    $("#large-image").removeAttr("src");
  });

  //Handle keydown events
  $(document).keydown(handleKeyDown);
});

function initializeDraggable() {
  $(".image-square")
    .draggable({
      revert: "invalid",
      start: function () {
        // Unselect all squares when a drag starts, except the one being dragged
        $(".image-square").not(this).removeClass("selected");
      },
      stop: function () {
        // Make the dragged square the selected one
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
      }
    });
}

function initializeDroppable() {
  $(".tier-row").droppable({
    accept: ".image-square",
    drop: function (event, ui) {
      var dropped = ui.helper;
      var droppedOn = this;
      var children = $(this).children();
      var hasInserted = false;

      children.each(function () {
        var current = $(this);
        if (current.offset().left > dropped.offset().left && !hasInserted) {
          $(dropped).detach().css({ top: 0, left: 0 }).insertBefore(current);
          hasInserted = true;
          return false;
        }
      });

      if (!hasInserted) {
        $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
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
        <div id="${newTierId}" class="tier-row row S">
          <button class="select-row">Select</button>
          <h3>${newTierName}</h3>
        </div>`;

    // Append the new tier after the last existing tier row
    $(".tier-row").last().after(newTierElement);

    // Initialize the new tier as a droppable area
    $("#" + newTierId).droppable({
      accept: ".image-square",
      drop: function (event, ui) {
        var dropped = ui.helper;
        var droppedOn = this;
        var children = $(this).children();
        var hasInserted = false;

        children.each(function () {
          var current = $(this);
          if (current.offset().left > dropped.offset().left && !hasInserted) {
            $(dropped).detach().css({ top: 0, left: 0 }).insertBefore(current);
            hasInserted = true;
            return false;
          }
        });

        if (!hasInserted) {
          $(dropped).detach().css({ top: 0, left: 0 }).appendTo(droppedOn);
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
