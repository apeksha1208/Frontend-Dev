const body = document.body;

// Switch Theme Function
function switchTheme(themeName) {
  // Use setAttribute to set data-theme
  body.setAttribute("data-theme", themeName);
}

// Buttons
document.getElementById("lightBtn").addEventListener("click", () => {
  switchTheme("light");
});

document.getElementById("darkBtn").addEventListener("click", () => {
  switchTheme("dark");
});

document.getElementById("blueBtn").addEventListener("click", () => {
  switchTheme("blue");
});
