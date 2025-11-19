const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const clientCoords = document.getElementById("clientCoords");
const boxCoords = document.getElementById("boxCoords");
const logEl = document.getElementById("log");

const clearPathBtn = document.getElementById("clearPath");
const clearDotsBtn = document.getElementById("clearDots");
const clearAllBtn = document.getElementById("clearAll");

let lastPos = null;
let dots = [];

ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.strokeStyle = "#2b74de";

// Get mouse position relative to canvas
function getRelativePos(evt) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
    clientX: evt.clientX,
    clientY: evt.clientY,
  };
}

// Mouse movement → draw path
canvas.addEventListener("mousemove", (e) => {
  const { x, y, clientX, clientY } = getRelativePos(e);

  clientCoords.textContent = `clientX: ${clientX}, clientY: ${clientY}`;
  boxCoords.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;

  if (lastPos) {
    ctx.beginPath();
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  lastPos = { x, y };
});

// Stop drawing when leaving canvas
canvas.addEventListener("mouseleave", () => {
  lastPos = null;
});

// Double-click → drop red dot
canvas.addEventListener("dblclick", (e) => {
  const { x, y, clientX, clientY } = getRelativePos(e);

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();

  dots.push({
    x: Math.round(x),
    y: Math.round(y),
    clientX,
    clientY,
    time: new Date().toLocaleTimeString(),
  });

  updateLog();
});

// Update dots log
function updateLog() {
  if (dots.length === 0) {
    logEl.innerHTML = "<div style='color:#666'>No dots dropped yet.</div>";
    return;
  }

  logEl.innerHTML = dots
    .slice()
    .reverse()
    .map(
      (d) =>
        `• [${d.time}] box(x:${d.x}, y:${d.y}) — client(${d.clientX}, ${d.clientY})`
    )
    .join("<br>");
}

// Clear only path
function clearPath() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  redrawDots();
}

// Clear only dots
function clearDots() {
  dots = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateLog();
}

// Clear everything
function clearAll() {
  dots = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateLog();
}

// Redraw dots
function redrawDots() {
  ctx.fillStyle = "red";
  dots.forEach((d) => {
    ctx.beginPath();
    ctx.arc(d.x, d.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Buttons
clearPathBtn.addEventListener("click", clearPath);
clearDotsBtn.addEventListener("click", clearDots);
clearAllBtn.addEventListener("click", clearAll);

// Start log
updateLog();
