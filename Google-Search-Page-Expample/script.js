let url = "https://www.google.com.tr/search?q=";
let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  if (searchInput.value != "") {
    url += searchInput.value;
    window.open(url, "_blank");
    searchInput.value = "";
    url = "https://www.google.com.tr/search?q=";
  }
});
