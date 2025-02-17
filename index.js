

const menuList = document.querySelector(".menu__bar-list");
const sections = Array.from(document.querySelectorAll(".section__container"));
let currentSection = document.querySelector(".menu__active");

const showSection = (id) => {
  const nextSection = document.getElementById(id);

  if (!nextSection || currentSection === nextSection) return;

  const currentIndex = sections.indexOf(currentSection);
  const nextIndex = sections.indexOf(nextSection);
  const direction = nextIndex > currentIndex ? "right" : "left";

  const exitAnimation =
    direction === "right"
      ? "section__slide-out_right"
      : "section__slide-out_left";
  const enterAnimation =
    direction === "right" ? "section__slide-in_left" : "section__slide-in_right";

    if(currentSection) {
      currentSection.classList.add(exitAnimation);
      currentSection.addEventListener(
        "animationend",
        () => {
          currentSection.classList.remove("menu__active", exitAnimation);
          nextSection.classList.add("menu__active", enterAnimation);

          nextSection.addEventListener("animationend", () => {
            nextSection.classList.remove(enterAnimation);
          }, { once: true });
          currentSection = nextSection;
        },
        { once: true }
      );
    } else {
      nextSection.classList.add('menu__active', enterAnimation);
      currentSection = nextSection;

      nextSection.addEventListener("animationend", () => {
        nextSection.classList.remove(enterAnimation);
      }, { once: true });
    }
}

const sectionId = () => {
  menuList.addEventListener("click", (event) => {
    const selectedId = event.target.dataset.section;
    if (selectedId) {
      showSection(selectedId);
    }
  });
};
sectionId();
showSection("about__me");

const burguerMenu = () => {
  const menuBurguer = document.querySelector('.menu__bar-burguer');
  const menuContainer = document.querySelector('.menu__bar-container');
  const menuOpen = document.querySelector('.open');
  const menuClose = document.querySelector('.close');

  menuBurguer.addEventListener('click', () => {
    if(window.innerWidth <= 450) {
      if(getComputedStyle(menuList).display === 'flex') {
        menuList.style.display = 'none'
        menuContainer.style.height = '80px';
        menuOpen.style.display = 'flex';
        menuClose.style.display = 'none';
      } else {
        menuList.style.display = 'flex'
        menuContainer.style.height = 'auto';
        menuOpen.style.display = 'none';
        menuClose.style.display = 'flex';
      }
    }
  });
}

burguerMenu();

// const transformBurguerMenu = () => {
//   const menuOpen = document.querySelector('.open');
//   const menuClose = document.querySelector('.close');

//   menuBurguer.addEventListener('click', () => {
    
//     if(menuOpen.style.display === 'flex') {
//       menuOpen.style.display = 'none';
//       menuClose.style.display = 'flex';
//     } else {
//       menuOpen.style.display = 'flex';
//       menuClose.style.display = 'none';
//     }

//   })
// }