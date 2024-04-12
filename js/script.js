
document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav_link a");
  let bottomNavLinks = document.querySelectorAll(".bottom.bb");

  navLinks.forEach(function (link, index) {
    if (link.href === window.location.href) {
      link.closest("li.nav_link").classList.add("li_active");
    }

    link.addEventListener("click", function () {
      navLinks.forEach(function (link) {
        link.closest("li.nav_link").style.color = "";
      });
      if (index < navLinks.length - 1 && link.href === navLinks[index + 1].href) {
        navLinks[index + 1].closest("li.nav_link").style.color = "";
      }
      this.closest("li.nav_link").classList.add("li_active");
    });
  });

  bottomNavLinks.forEach(function (link) {
    if (link.href === window.location.href) {
      link.closest(".menu-top li a").classList.add("li_active");
    }

    link.addEventListener("click", function () {
      bottomNavLinks.forEach(function (link) {
        link.closest(".menu-top li a").classList.add("");
      });

      link.closest(".menu-top li a").classList.add("li_active");
    });
  });
});


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: { delay: 5000, disableOnInteraction: false },
  loop: true
});


let tabs = document.querySelectorAll('.tabs .tab');
let tabContents = document.querySelectorAll('.contents .tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContents.forEach(content => {
      content.classList.remove('show');
    });
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tabContents[index].classList.add('show');
    tab.classList.add('active');
  });
});


class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
        }
      }
      elHeader.parentElement.classList.toggle('accordion__item_show');
    });
  }
}

new ItcAccordion('#accordion_footer');






var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoHeight: true,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  navigation: { nextEl: ".arrows-next5", prevEl: ".arrows-prew5" },
  breakpoints: { 0: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1000: { slidesPerView: 4 } },
});

var swiper = new Swiper(".slide-content2", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoHeight: true,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  navigation: { nextEl: ".swiper-button-next2", prevEl: ".swiper-button-prev2" },
  autoplay: { delay: 3000, disableOnInteraction: false },
  breakpoints: { 0: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1000: { slidesPerView: 4 }, 1200: { slidesPerView: 5 } },
});

var swiper = new Swiper(".slide-content3", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
  navigation: { nextEl: ".swiper-button-next3", prevEl: ".swiper-button-prev3" },
  breakpoints: { 0: { slidesPerView: 1 }, 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 } },
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: false,
});


const animItems = document.querySelectorAll('._anime-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_animal-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);

}



const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', function () {
  if (mainMenu.style.display === 'flex') {
    mainMenu.style.display = 'none';
  } else {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
  }
});





document.addEventListener("DOMContentLoaded", function () {
  let anchors = document.querySelectorAll(".anchor_link");

  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      let targetId = this.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        let allCollapseElements = document.querySelectorAll(".collapse.table-responsive");
        for (let i = 0; i < allCollapseElements.length; i++) {
          allCollapseElements[i].classList.remove("in");
          allCollapseElements[i].style.height = 'auto';
        }

        targetElement.classList.add("in");
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});






