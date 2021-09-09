// Variables
const gridContainer = document.querySelector(".grid-container");
const folder_length = 32;
const directory = "../filler_images/watercolor/";

// Functions
(function () {
  for (let i = 1; i <= folder_length; i++) {
    // Create grid item
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Create img
    let img = document.createElement("img");
    img.src = `${directory}${i}.png`;

    // Append childs
    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);
  }
})();

// Event listeners
