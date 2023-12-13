const loginForm = document.querySelector(".login-form");

function formEvent(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  form.reset();
}

loginForm.addEventListener("submit", formEvent);
