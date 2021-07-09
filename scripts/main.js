const search = document.getElementById("search");

search.addEventListener("focus", function(e) {
  e.target.parentNode.classList.add("focused")
})

search.addEventListener("blur", function(e) {
  e.target.parentNode.classList.remove("focused")
})
