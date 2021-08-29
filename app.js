const nameField = document.querySelector(".name-field");
const emailField = document.querySelector(".email-field");
const passwordField = document.querySelector(".password-field");
const submitField = document.querySelector(".submit-field");

const animateForm = () => {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const div = arrow.parentElement;
      const input = arrow.previousElementSibling;
      const nextField = div.nextElementSibling;
      if (input.type === "text" && validateUsername(input.value)) {
        nextSlide(div, nextField);
      } else if (input.type === "email" && validateEmail(input.value)) {
        nextSlide(div, nextField);
      } else if (input.type === "password" && validatePassword(input.value)) {
        nextSlide(div, nextField);
      } else {
        div.style.animation = "shake .5s ease";
      }
      div.addEventListener("animationend", () => {
        div.style.animation = "";
      });
    });
  });
};
animateForm();

const validateUsername = (username) => {
  if (username.length < 6) {
    console.log("Username is too short!");
    error("rgb(189, 87, 87)");
  } else {
    error("rgb(87, 189, 130)");
    return true;
  }
};

const validateEmail = (email) => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    error("rgb(189, 87, 87)");
  }
};

const validatePassword = (password) => {
  const validate = (password) => {
    if (password.indexOf("@") > -1) {
      return true;
    } else {
      return false;
    }
  };
  if (password.length > 6 && validate(password)) {
    error("rgb(87, 189, 130)");
    return true;
  } else {
    console.log("Password is too short!");
    error("rgb(189, 87, 87)");
  }
};

const error = (color) => {
  document.body.style.backgroundColor = color;
};

const nextSlide = (parent, nextForm) => {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
};
