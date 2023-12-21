const btns = document.querySelectorAll("#btn");
const span = document.getElementById("text");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("decrease")) {
      count--;
    } else if (btn.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      span.style.color = "green";
    }
    if (count < 0) {
      span.style.color = "red";
    }
    if (count === 0) {
      span.style.color = "black";
    }
    span.textContent = count;
  });
});
