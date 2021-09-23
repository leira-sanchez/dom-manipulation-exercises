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
// TODO

// const followMe = document.getElementsByClassName("follow-me")[0];
const followMe = document.getElementById("follow-me-parent");
followMe.addEventListener("mouseover", () => {
  console.log("entered");
});
