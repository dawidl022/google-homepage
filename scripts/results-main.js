"use strict";

const searchQuery = "build this webpage";
const queryWords = searchQuery.split(" ");
console.log(queryWords);


function inQuery(word, qArr) {
  // looks for substring in each queryWords

  for (let i = 0; i < qArr.length; i++) {
    let qWord = qArr[i];
    if (word.includes(qWord)) return true;
  }

  return false;
}

const resultDescriptions = document.querySelectorAll(".result p");

resultDescriptions.forEach(function(descr) {

  let description = descr.innerText;
  const descriptionWords = description.split(" ");

  for (let i = 0; i < descriptionWords.length; i++) {
      let word = descriptionWords[i];

      if (inQuery(word, queryWords)) {
        word = `<span class="desktop-query-word">${word}</span>`;
        descriptionWords[i] = word;
      }
    }
  descr.innerHTML = descriptionWords.join(" ");
}) 

const relatedToggles = document.querySelectorAll(".related-search");

relatedToggles.forEach(function(toggle) {
  toggle.addEventListener("click", function(e) {

    const content = this.parentNode.querySelector(".related-container");
    content.classList.toggle("hidden");

    const arrow = this.querySelector(".related-toggle");
    arrow.classList.toggle("off");
  })
})

const clearButton = document.querySelector(".clear-search");
clearButton.addEventListener("click", function(e) {
  e.target.parentNode.querySelector("input").value = "";
})

// TODO change header class on sticky
// https://developers.google.com/web/updates/2017/09/sticky-headers

const moreWrapper = document.querySelector(".more-wrapper");
const moreNavs = document.querySelectorAll(".more");
const moreList = document.querySelector(".more-navs");

moreNavs.forEach(function(nav) {
  moreList.appendChild(nav);
})

const moreToggle = document.getElementById("more-toggle")
moreToggle.addEventListener("click", function() {
  moreList.classList.toggle("shown");
  moreWrapper.classList.toggle("on-top");
})

document.addEventListener("click", function(e) {
  if (!(moreWrapper.contains(e.target))) {
    moreList.classList.remove("shown");
    moreWrapper.classList.remove("on-top")
  }
})

function resizeMainNav() {
  // make main-nav same size as search bar
  // for responsiveness in edge cases of about 1024-1100px window width
  const mainNav = document.querySelector(".main-nav");
  const searchBar = document.getElementById("search-box");

  if (window.innerWidth >= 1024) {
    let navWidth = parseFloat(window.getComputedStyle(searchBar).width) + 
      parseFloat(window.getComputedStyle(searchBar).paddingLeft) + 
      parseFloat(window.getComputedStyle(searchBar).paddingRight) + "px";
    mainNav.style.width = navWidth;
  } else {
    mainNav.style.width = null;
  }

}

window.addEventListener('resize', resizeMainNav)
resizeMainNav()
