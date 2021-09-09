// Variables
const gridContainer = document.querySelector(".grid-container");
const folder_length = 7;
const directory = "../filler_images/";

// Functions
(function () {
  for (let i = 1; i <= folder_length; i++) {
    // Create grid item
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Create img
    let img = document.createElement("img");
    img.src = `${directory}art_${i}.jpg`;

    // Append childs
    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);
  }
})();

// Event listeners
