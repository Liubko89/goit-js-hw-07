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

const addContainers = (event) => {
  const inputValue = event.target.value;
  if (inputValue >= input.min && inputValue <= input.max) {
    const create = () => {
      boxes.innerHTML = "";
      let size = 24;
      for (let i = 0; i < inputValue; i += 1) {
        boxes.insertAdjacentHTML(
          "beforeend",
          `<div style="background-color:${getRandomHexColor()};width:${size}px;height:${size}px;display:flex;flex-direction:row;"></div>`
        );
        size += 24;
      }

      input.value = "";
      btnCreate.removeEventListener("click", create);
    };

    btnCreate.addEventListener("click", create);
    btnDestroy.addEventListener("click", () => (boxes.innerHTML = ""));
  }
};

input.addEventListener("input", addContainers);
