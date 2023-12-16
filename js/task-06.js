function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

boxes.style.display = "flex";
boxes.style.gap = "16px";
boxes.style.flexWrap = "wrap";

btnCreate.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Введіть будь ласка число від 1 до 100.");
    return;
  }
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.appendChild(box);
    size += 10;
  }
  input.value = "";
}
