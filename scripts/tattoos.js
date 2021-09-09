// Variables
const folder_length = 9;
const contentContainer = document.querySelector(".content-container");
const column1 = document.querySelector(".col-1");
const column2 = document.querySelector(".col-2");
const column3 = document.querySelector(".col-3");
// Functions
(function () {
  for (let i = 1; i <= folder_length; i++) {
    const directory = "../filler_images/";
    const split = Math.ceil(folder_length / 3);

    // Create img
    let img = document.createElement("img");
    img.src = `${directory}tattoo_${i}.jpg`;
    if (i <= split) {
      column1.appendChild(img);
    } else if (i > split && i <= split + split) {
      column2.appendChild(img);
    } else {
      column3.appendChild(img);
    }
  }
})();

// Event listeners
