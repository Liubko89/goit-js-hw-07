const nameInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

const inputEvent = (event) => {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
};

nameInput.addEventListener("input", inputEvent);
