const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;
textBox.addEventListener("keydown", function (e) {
  const currentLength = textBox.value.length;
  if (currentLength >= MAX && e.key !== "Backspace" && e.key !== "Delete") {
    e.preventDefault();
  }
});

textBox.addEventListener("input", function () {
  let length = textBox.value.length;
  let remaining = MAX - length;

  counter.textContent = `Remaining: ${remaining}`;
  counter.classList.remove("yellow", "red");
  if (remaining <= 20 && remaining > 0) {
    counter.classList.add("yellow");
  }
  if (remaining <= 0) {
    counter.classList.add("red");
  }
});
resetBtn.addEventListener("click", function () {
  textBox.value = "";
  counter.textContent = `Remaining: ${MAX}`;
  counter.classList.remove("yellow", "red");
});
