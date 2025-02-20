

const menuList = document.querySelector(".menu__bar-list");
const sections = Array.from(document.querySelectorAll(".section__container"));
const menuBarContainer = document.querySelector('.menu__bar-container')
const menuBurguer = document.querySelector('.menu__bar-burguer');
const menuToggleImages = document.querySelector('.menu__Burguer-image')
const open = document.getElementById('open');
const close = document.getElementById('close');
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
  if(window.innerWidth <= 455) {
    menuBurguer.addEventListener('click', () => {
      menuBurguer.classList.toggle('menu__Burguer-image');
      if(menuBurguer.classList.contains('menu__Burguer-image')) {
        open.style.display = 'none';
        close.style.display = 'flex';
        menuList.classList.add('menu__bar-list_active');
        menuBarContainer.classList.add('height__menu-container');
      } else {
        open.style.display = 'flex';
        close.style.display = 'none';
        menuList.classList.remove('menu__bar-list_active');
        menuBarContainer.classList.remove('height__menu-container');
      }
    })
  } else {
    menuBarContainer.classList.remove('height__menu-container');
  }
}

burguerMenu();
























// const burguerMenu = () => {
//   const menuBurguer = document.querySelector('.menu__bar-burguer');
//   const menuContainer = document.querySelector('.menu__bar-container');
//   const menuOpen = document.querySelector('.open');
//   const menuClose = document.querySelector('.close');

//   const toggleMenu = () => {
//     if(window.innerWidth <= 450) {
//       menuList.classList.toggle('menu__burguer-active');
//       menuContainer.style.height = menuList.classList.contains('menu__burguer-active')
//       ? 'auto'
//       : '80px';
//       menuOpen.style.display = menuList.classList.contains('menu__burguer-active')
//       ? 'none'
//       : 'flex';
//       menuClose.style.display = menuList.classList.contains('menu__burguer-active')
//       ? 'flex'
//       : 'none';
//     }

//   };

//   menuBurguer.addEventListener('click', toggleMenu);

//   window.addEventListener('resize', () => {
//     if(window.innerWidth > 450) {
//       menuList.classList.remove('menu__burguer-active');
//       menuOpen.style.display = 'none';
//       menuClose.style.display = 'none';
//     }
//   })
// }

// burguerMenu();