const openMenuBtn = document.querySelector(".open-menu");
const dropdownMenuEl = document.querySelector(".drop-down-menu");
const searchBar = document.querySelector(".header-search-bar");
const openSearch = document.querySelector(".open-search");
const closeSearch = document.createElement("i");
const emptyInput = document.querySelector(".empty-input");
const searchInput = document.querySelector(".search-input");
const darkTint = document.querySelector(".dark-tint");
const playVideo = document.querySelector(".play-video");
const playBtn = document.querySelector(".video-control");
const youTubeVideo = document.querySelector(".youtube-video-container");

closeSearch.className = "fa-solid fa-magnifying-glass-minus";

emptyInput.addEventListener("click", () => {
    searchInput.value = "";
})

let isShowing = false;

closeSearch.addEventListener("click", function () {
    isShowing = !!isShowing;
    closeSearch.replaceWith(openSearch)
    searchBar.style.cssText = "height: 0;"
    darkTint.style.cssText = "height: 0;"
    dropdownMenuEl.style.top = "100px";
    document.querySelector("body").style.overflowY = "auto";
})

openSearch.addEventListener("click", showSearchBar)

function showSearchBar() {
    if (dropdownMenuEl.style.height === "100%") {
        dropdownMenuEl.style.top = "160px";
    }
    isShowing = !isShowing;
    openSearch.replaceWith(closeSearch)
    searchBar.style.cssText = "height: 60px;"
    darkTint.style.cssText = "height: calc(100% - 160px);"
    document.querySelector("body").style.overflowY = "hidden";
}

darkTint.addEventListener("click", function () {
    isShowing = !!isShowing;
    closeSearch.replaceWith(openSearch)
    searchBar.style.cssText = "height: 0;"
    darkTint.style.cssText = "height: 0;"
    document.querySelector("body").style.overflowY = "auto";
})

let isOpen = false;

openMenuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (searchBar.style.cssText === "height: 60px;") {
        dropdownMenuEl.style.top = "160px";
    }
    if (openMenuBtn.classList.contains("active")) {
        dropdownMenuEl.style.height = "0";
        isOpen = !isOpen;
    } else {
        dropdownMenuEl.style.height = "100%";
    }

})

openMenuBtn.addEventListener("click", () => openMenuBtn.classList.toggle("active"))

playVideo.addEventListener("click", function () {
    playBtn.style.cssText = "display: none !important;";
    youTubeVideo.style.display = "block";
    document.querySelector(".video").style.cssText = "padding: 0 0 5vw 0;"
})


// sidebar menu
// if (isOpen && screen.width <= 325) {
//     // max-width: 325px
//     dropdownMenuEl.style.cssText = "width: 125px; right: 0;";
//     darkTint.style.cssText = "display: block;";
//     document.querySelector("body").style.overflowY = "hidden";
//     closeSearch.replaceWith(openSearch)
//     searchBar.style.cssText = "right: 100%;"
//     isShowing = !!isShowing;
//     darkTint.style.left = "-100%";
// } else if (isOpen && screen.width >= 325) {
//     // min-width: 325px
//     dropdownMenuEl.style.cssText = "width: 170px; right: 0;";
//     darkTint.style.cssText = "display: block;";
//     document.querySelector("body").style.overflowY = "hidden";
//     closeSearch.replaceWith(openSearch)
//     searchBar.style.cssText = "right: 100%;";
//     isShowing = !!isShowing;
//     darkTint.style.left = "-100%";
// } else if (isOpen && screen.width >= 576) {
//     // min-width: 576px
//     dropdownMenuEl.style.cssText = "width: 215px; right: 0;";
//     darkTint.style.cssText = "display: block;";
//     document.querySelector("body").style.overflowY = "hidden";
//     closeSearch.replaceWith(openSearch)
//     searchBar.style.cssText = "right: 100%;";
//     isShowing = !!isShowing;
//     darkTint.style.left = "-100%";
// } else if (!isOpen) {
//     dropdownMenuEl.style.cssText = "right: -100%;";
//     darkTint.style.cssText = "display: none;";
//     document.querySelector("body").style.overflow = "scroll";
// }