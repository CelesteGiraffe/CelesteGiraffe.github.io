import { portfolioItems } from "./portfolioItems.js";

function generateCards(items) {
  const container = document.getElementById("portfolio-cards");
  container.innerHTML = "";
  items.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4"; // Added col-lg-3 for large screens

    const card = document.createElement("div");
    card.className = "card bg-secondary bg-gradient text-white h-100"; // Ensure card takes full height of column
    card.onclick = () =>
      showModal(item.title, item.longDescription, item.image || "", item.link);
    card.innerHTML = `
        <div class="card-body">
          ${
            item.image
              ? `<img src="${item.image}" class="card-img-top" alt="${item.title}">`
              : ""
          }
          <h3 class="card-title text-center">${item.title}</h3>
          <p class="card-text">${item.description}</p>
          <div class="card-tags">
            ${item.tags
              .map(
                (tag) =>
                  `<button class="btn btn-sm btn-info tag-btn" onclick="event.stopPropagation(); filterCards('${tag}')">${tag}</button>`
              )
              .join(" ")}
          </div>
        </div>
      `;
    card.dataset.tags = item.tags.join(" ");
    card.dataset.date = item.date;
    card.dataset.genre = item.genre;
    col.appendChild(card);
    container.appendChild(col);
  });
}

function filterCards(tag) {
  if (tag === "all") {
    generateCards(portfolioItems);
  } else {
    const filteredItems = portfolioItems.filter((item) => {
      return (
        item.tags.includes(tag) ||
        item.genre.toLowerCase() === tag.toLowerCase()
      );
    });
    generateCards(filteredItems);
  }

  // Update active button
  updateActiveButton(tag);

  // Sort the visible cards after filtering
  sortCards();
}

function sortCards() {
  const sortOption = document.getElementById("sort-options").value;
  const container = document.getElementById("portfolio-cards");
  const cards = Array.from(container.children);

  cards.sort((a, b) => {
    const aValue = a.querySelector(".card-title").innerText;
    const bValue = b.querySelector(".card-title").innerText;
    const aDate = new Date(a.querySelector(".card").dataset.date);
    const bDate = new Date(b.querySelector(".card").dataset.date);

    switch (sortOption) {
      case "date-desc":
        return bDate - aDate;
      case "date-asc":
        return aDate - bDate;
      case "title-asc":
        return aValue.localeCompare(bValue);
      case "title-desc":
        return bValue.localeCompare(aValue);
    }
  });

  // Re-append sorted cards to the container
  cards.forEach((card) => container.appendChild(card));
}

function sortCardsByGenre(genre) {
  const container = document.getElementById("portfolio-cards");

  // Filter cards by genre from the original list
  const filteredItems = portfolioItems.filter((item) => {
    const itemGenre = item.genre.toLowerCase();
    return genre === "all" || itemGenre === genre.toLowerCase();
  });

  // Generate cards for the filtered items
  generateCards(filteredItems);

  // Update active button
  updateActiveButton(genre);
}

function updateActiveButton(tag) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    if (
      button.innerText.toLowerCase() === tag.toLowerCase() ||
      (tag === "all" && button.innerText.toLowerCase() === "all")
    ) {
      button.classList.add("btn-primary");
      button.classList.remove("btn-secondary");
    } else {
      button.classList.remove("btn-primary");
      button.classList.add("btn-secondary");
    }
  });
}

function showModal(title, description, image, link) {
  console.log("showModal called with:", { title, description, image, link });
  const modal = document.getElementById("projectModal");
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal-image").src = image;
  document.getElementById("modal-link").href = link;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
}

// Attach functions to the window object
window.showModal = showModal;
window.closeModal = closeModal;
window.filterCards = filterCards;
window.sortCards = sortCards;
window.sortCardsByGenre = sortCardsByGenre;

// Call generateCards to initialize the cards on page load
document.addEventListener("DOMContentLoaded", () => {
  // Ensure modal is hidden on page load
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";

  generateCards(portfolioItems);
  document.getElementById("sort-options").addEventListener("change", sortCards);
});
