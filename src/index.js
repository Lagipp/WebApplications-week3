import "./styles.css";

//let container = document.getElementsByClassName("container");

/*fetch("https://dog.ceo/api/breed/australianshepherd/images/random")
  .then((response) => response.json())
  .then((data) => console.log(data));*/

let container = document.createElement("div");
container.className = "container";

for (let x = 0; x < 5; x++) {
  fetch("https://dog.ceo/api/breed/husky/images/random")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let dogBreed = "Husky";
      let dogImage = data.message;
      createWikiItems(dogBreed, dogImage);
    });
}

function createWikiItems(dogBreed, dogImage) {
  let newDiv = document.createElement("div");
  newDiv.className = "wiki-item";

  let newHeader = document.createElement("h1");
  newHeader.className = "wiki-header";
  newHeader.innerHTML = dogBreed;

  let newContent = document.createElement("div");
  newContent.className = "wiki-content";

  let newParagraph = document.createElement("p");
  newParagraph.className = "wiki-text";

  let newImageContainer = document.createElement("div");
  newImageContainer.className = "img-container";

  let newImage = document.createElement("img");
  newImage.className = "wiki-img";
  newImage.src = dogImage;

  newImageContainer.appendChild(newImage);
  newContent.appendChild(newParagraph);
  newContent.appendChild(newImageContainer);
  newDiv.appendChild(newHeader);
  newDiv.appendChild(newContent);

  container.appendChild(newDiv);

  document.body.appendChild(container);
}

/*
if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
}
*/
