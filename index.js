const firsName = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    firsName.value === "" ||
    surname.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("Do not leave any field empty");
  } else {
    alert("This form has been successfully submitted!");
    console.log(
      `This form has an email of ${firsName.value} ${surname.value} ${email.value} ${password.value}`
    );

    firsName.value = "";
    surname.value = "";
    email.value = "";
    password.value = "";
  }
});

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("blur", (ev) => {
    if (el.value === "") {
      const parent = el.parentElement;
      const icon = parent.querySelector("i");
      icon.classList.add("show");

      const gparent = parent.parentElement;
      const small = gparent.querySelector("small");
      small.classList.add("show");
    }
  });
  el.addEventListener("keyup", (ev) => {
    if (el.value === "") {
      const parent = el.parentElement;
      const icon = parent.querySelector("i");
      icon.classList.add("show");

      const gparent = parent.parentElement;
      const small = gparent.querySelector("small");
      small.classList.add("show");
    } else if (el.value !== "") {
      const parent = el.parentElement;
      const icon = parent.querySelector("i");
      icon.classList.remove("show");

      const gparent = parent.parentElement;
      const small = gparent.querySelector("small");
      small.classList.remove("show");
    }
  });
});
