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

const relatedToggles = document.querySelectorAll(".related-toggle");
relatedToggles.forEach(function(toggle) {
  toggle.addEventListener("click", function(e) {
    const content = e.target.parentNode.parentNode.querySelector(".related");
    content.classList.toggle("hidden")
    toggle.classList.toggle("off")
  })
})
