/* Add you solutions here! */

// #1 Adding Some Images
const ul = document.getElementsByClassName("image-list")[0];

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = "http://picsum.photos/200";
  img.alt = "random photo";
  li.appendChild(img);
  ul.appendChild(li);
}

// #2 Open a dialog

const button = document.getElementById("open-dialog");
button.addEventListener("click", () => {
  const modal = document.getElementById("modal-to-open");
  modal.classList.remove("modal--hidden");
});

// #3 Follow me!

const cow = document.getElementsByClassName("follow-me")[0];
const followMeParent = document.getElementById("follow-me-parent");
followMeParent.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;

  cow.style = `position:absolute;top:${offsetY}px;left:${offsetX}px`;
});

// #4 Children

const hasChildrenUl = document.getElementsByClassName("has-children")[0];

for (let i = 0; i < hasChildrenUl.children.length; i++) {
  if (i % 2 === 0) {
    hasChildrenUl.children.item(i).style.backgroundColor = "lime";
  }
}
hasChildrenUl.firstElementChild.style.backgroundColor = "blue";
hasChildrenUl.lastElementChild.style.backgroundColor = "palevioletred";

// #5 Form Values

const p = document.getElementsByClassName("wrote")[0];
const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  p.innerHTML = e.target.value;
});

// #6 Form Validation
const value1 = document.querySelector("input[name=large-value]");
value1.type = "number";
const value2 = document.querySelector("input[name=smaller-value]");
value2.type = "number";
const label2 = document.querySelector("label[for=smaller-value]");

const error = document.getElementsByClassName("error--hidden")[0];

value1.addEventListener("input", (e) => {
  value1.value = parseInt(e.target.value);
  checkValues();
});

value2.addEventListener("input", (e) => {
  value2.value = parseInt(e.target.value);
  checkValues();
});

function checkValues() {
  if (parseInt(value1.value) < parseInt(value2.value)) {
    label2.style.color = "red";
    error.classList.remove("error--hidden");
  } else {
    label2.style.color = "black";
    error.classList.add("error--hidden");
  }
}

// #7 Working with Objects
const ulObject = document.getElementsByClassName("photos")[0];

data.photos.forEach((row) => {
  const rowList = document.createElement("li");
  const rowImg = document.createElement("img");
  const rowP = document.createElement("p");
  rowP.innerText = row.author + " " + row.format;
  rowImg.src = row.image_url;
  rowList.appendChild(rowImg);
  rowList.appendChild(rowP);
  ulObject.appendChild(rowList);
});
