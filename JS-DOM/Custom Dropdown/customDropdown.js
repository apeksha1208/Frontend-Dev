const dropdown = document.getElementById("dropdown");
const btn = document.getElementById("dropdownBtn");
const list = document.getElementById("dropdownList");
const options = document.querySelectorAll(".option");

// Toggle dropdown
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate closing
  list.style.display = list.style.display === "block" ? "none" : "block";
});

// Select option
options.forEach(option => {
  option.addEventListener("click", (e) => {
    btn.textContent = e.target.textContent;
    list.style.display = "none";
  });
});

// Close dropdown by clicking outside (CAPTURING PHASE)
document.addEventListener(
  "click",
  function (e) {
    if (!dropdown.contains(e.target)) {
      list.style.display = "none";
    }
  },
  true // <-- capturing phase
);
