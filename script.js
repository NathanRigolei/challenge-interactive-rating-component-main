let rating = 0;

function setRating(value) {
  rating = value;
}
const liCols = document.querySelectorAll(".li-select");

liCols.forEach((stars) => {
  stars.addEventListener("click", function () {
    liCols.forEach((b) => b.classList.remove("selected"));
    this.classList.add("selected");
  });
});

function submitRating() {
  document.querySelector("#selected").style.display = "none";
  document.querySelector(".after").style.display = "block";
  document.querySelector("#value-star").innerHTML = rating;
}
