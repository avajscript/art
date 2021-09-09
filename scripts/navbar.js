window.onload = () => {
  // Variables
  const artworkNav = document.querySelector(".artwork-nav");
  const artworkDropdown = document.querySelector(".artwork-dropdown");
  var counter = 1;
  // Functions
  function showArtworkDropdown(state) {
    if (state == "show") {
      artworkDropdown.classList.remove("hide");
    } else {
      artworkDropdown.classList.add("hide");
    }
  }

  // Event Listeners
  artworkNav.addEventListener("mouseover", () => {
    showArtworkDropdown("show");
  });
  artworkNav.addEventListener("mouseout", () => {
    showArtworkDropdown("hide");
  });
};
