const tubahwarna = document.getElementById("tomboleubahwarna");
tubahwarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "yellow";
  document.body.classList.toggle("biru");
});

const trandom = document.createElement("button");
const tesksrandom = document.createTextNode("Warna Random");
trandom.appendChild(tesksrandom);
trandom.setAttribute("type", "button");
tubahwarna.after(trandom);

trandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sliderR = document.querySelector("input[name=sliderR]");
sliderR.addEventListener("input", function () {
  const r = sliderR.value;

  document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
});
const sliderG = document.querySelector("input[name=sliderG]");
sliderG.addEventListener("input", function () {
  const r = sliderR.value;
  const g = sliderG.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});
const sliderB = document.querySelector("input[name=sliderB]");
sliderB.addEventListener("input", function () {
  const r = sliderR.value;
  const g = sliderB.value;
  const b = sliderB.value;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
