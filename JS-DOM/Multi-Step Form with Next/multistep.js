const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const summaryBox = document.getElementById("summaryBox");

function showStep(step) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  step.classList.add("active");
}
document.getElementById("next1").addEventListener("click", function () {
  if (nameInput.value.trim().length < 2) {
    alert("Please enter a valid name");
    return;
  }
  showStep(step2);
});
document.getElementById("back2").addEventListener("click", function () {
  showStep(step1);
});

document.getElementById("next2").addEventListener("click", function () {
  const email = emailInput.value.trim();

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email");
    return;
  }
  showStep(step3);
});
document.getElementById("back3").addEventListener("click", function () {
  showStep(step2);
});

document.getElementById("finish").addEventListener("click", function () {
  if (passInput.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }
  summaryBox.innerHTML = `
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Password:</strong> ${passInput.value}</p>
  `;

  showStep(summary);
});
