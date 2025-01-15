const button = document.querySelector(".button__slider");
const personarInfo = document.querySelector(".personal__info-container");
const professionalInfo = document.querySelector(".professional__info-container");


const buttonSlide = () => {
  if (button) {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      toggleButtonText();
      showDisplayInfo();
    });
  }
}
buttonSlide();

const toggleButtonText = () => {
  
  if (button.classList.contains("active")) {
    button.innerHTML = "Profissional";
  } else {
    button.innerHTML = "Pessoal";
  }
}

const showDisplayInfo = () => {
  if (button.classList.contains("active")) {
    personarInfo.style.display = "none";
    professionalInfo.style.display = "flex";
  } else {
    personarInfo.style.display = "flex";
    professionalInfo.style.display = "none";
  }
}
