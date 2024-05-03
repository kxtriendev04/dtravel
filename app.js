// Navigation
const aLinkItems = document.querySelectorAll(".nav__item");
aLinkItems.forEach((a) => {
  a.onclick = function (e) {
    e.preventDefault();
    const aLinkItemSelected = document.querySelector(
      ".nav__item.nav__selected"
    );
    aLinkItemSelected.classList.remove("nav__selected");
    a.classList.add("nav__selected");
  };
});

// SearchBy Navbar
const searchNavItems = document.querySelectorAll(".search__nav__item");
searchNavItems.forEach((a) => {
  a.onclick = function (e) {
    e.preventDefault();
    const aNavSearchSelected = document.querySelector(
      ".search__nav__item.search__nav__selected"
    );
    aNavSearchSelected.classList.remove("search__nav__selected");
    a.classList.add("search__nav__selected");
  };
});

const overlay = document.querySelector(".overlay");


// HOME - HeaderBarsHandler

const headerBar = document.querySelector(".header-bars");
const navMobileTable = document.querySelector(".nav-tablet-mobile");
headerBar.addEventListener("click", () => {
  navMobileTable.classList.add("active");
  overlay.style.display = "block";
  overlay.onclick = () => {
    navMobileTable.classList.remove("active");
    overlay.style.display = "none";
  };
});

const navMobileTableClose = document.querySelector(".nav-mobile-tablet-close");
navMobileTableClose.addEventListener("click", () => {
  navMobileTable.classList.remove("active");
  overlay.style.display = "none";
});



// HOME SECTION BTNS
const initSLide = () => {
    const itemContainers = document.querySelectorAll('.content__selection');

    itemContainers.forEach((container) => {
        const slideBtns = container.querySelectorAll('.section__btn')
        const itemList = container.querySelector('.content__selection__wrap')
        const maxScrollLeft = itemList.scrollWidth - itemList.clientWidth
    
        slideBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const direction = btn.id === 'prev' ? -1 : 1
                const scrollAmount = 266 * direction;
                itemList.scrollBy({left: scrollAmount, behavior: 'smooth'})
            })
        });
    
        const handerSideBtns = () => {
            slideBtns[0].style.display = itemList.scrollLeft <= 0 ? 'none': 'block'
            slideBtns[1].style.display = itemList.scrollLeft >= maxScrollLeft ? 'none': 'block'
        }
    
        itemList.addEventListener('scroll', () => {
            handerSideBtns()
        })
    })
}
if (window.innerWidth > 1023)
    window.addEventListener('load', initSLide)


// LIEN HE DICH VU - ListHandler
const optionListBtns = document.querySelectorAll(
  ".content__question__option__wrap"
);
optionListBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const ulListItem = btn.querySelector(".content__question__option__item");
    const listDownIcon = btn.querySelector(".list-down-icon");
    const listRightIcon = btn.querySelector(".list-right-icon");

    if (ulListItem.classList.contains("active")) {
      ulListItem.classList.remove("active");
      listRightIcon.style.display = "block";
      listDownIcon.style.display = "none";
      return;
    }
    ulListItem.classList.add("active");
    listRightIcon.style.display = "none";
    listDownIcon.style.display = "block";
  });
});
