//Menu shrink
const topMenu = document.querySelectorAll('.scrollcatch');
let topMenuArray = Array.from(topMenu);

topMenuArray.forEach((element) => {
  document.addEventListener('scroll', () => {
    if (
      document.body.scrollTop >= 200.99 ||
      document.documentElement.scrollTop >= 200.99
    ) {
      element.style.height = '55px';
    } else {
      element.style.height = '70px';
    }
  });
});

// Carousel
$('.carousel').carousel({
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
});

// Swiper
var swiper = new Swiper('.swiper-container', {
  resistanceRatio: 0,
  updateOnWindowResize: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 0,
      direction: 'vertical',
      touchRatio: 1,
      resistanceRatio: 1,
      simulateTouch: false,
      updateOnWindowResize: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      direction: 'horizontal',
      touchRatio: 1,
      updateOnWindowResize: true,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      direction: 'horizontal',
      touchRatio: 1,
      updateOnWindowResize: true,
    },
  },
});

// Swiper button opacity on hover/click
const swiperContainer = document.querySelector('.swiper-container');
const nextBtn = swiperContainer.firstElementChild;
const prevBtn = swiperContainer.children[1];
prevBtn.style.opacity = 0;
nextBtn.style.opacity = 0;

document.addEventListener('DOMContentLoaded', arrowChange);

function arrowChange() {
  swiper.on('slideChange', () => {
    var realIndex = swiper.realIndex;
    if (realIndex == 0) {
      prevBtn.style.opacity = 0;
      nextBtn.style.opacity = 1;
    } else {
      prevBtn.style.opacity = 1;
      nextBtn.style.opacity = 0;
    }
  });
}

swiperContainer.addEventListener('mouseenter', () => {
  var realIndex = swiper.realIndex;
  if (realIndex == 0) {
    prevBtn.style.opacity = 0;
    nextBtn.style.opacity = 1;
  } else if (realIndex == 1) {
    prevBtn.style.opacity = 1;
    nextBtn.style.opacity = 0;
  }
});

swiperContainer.addEventListener('mouseleave', () => {
  prevBtn.style.opacity = 0;
  nextBtn.style.opacity = 0;
});

// Get a quote button to display
const swiperSlide = document.querySelectorAll('.box-picker');
let swiperArray = Array.from(swiperSlide);

swiperArray.forEach((element) => {
  const getQuoteBtn =
    element.firstElementChild.firstElementChild.firstElementChild
      .nextElementSibling;
  element.addEventListener('mouseenter', () => {
    getQuoteBtn.classList.add('display-item');
  });
  element.addEventListener('mouseleave', () => {
    getQuoteBtn.classList.remove('display-item');
  });
});

// Submit news letter
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  if ((currentAlert = document.querySelector('.subAlert'))) {
    currentAlert.remove();
  }
  e.preventDefault();
  const name = document.getElementById('submitName');
  const email = document.getElementById('submitEmail');
  const submitBtn = document.getElementById('submitButton');
  const loader = document.querySelector('.loader');
  if (name.value === '' || email.value === '') {
    name.disabled = true;
    email.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = '#979797';
    loader.style.display = 'block';
    setTimeout(() => {
      form.reset();
      showAlert('Please fill in all fields', 'subAlert alertFail');
      name.disabled = false;
      email.disabled = false;
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '#2d3142';
      loader.style.display = 'none';
      submitBtn.addEventListener('mouseenter', () => {
        submitBtn.style.backgroundColor = '#979797';
      });
      submitBtn.addEventListener('mouseleave', () => {
        submitBtn.style.backgroundColor = '#2d3142';
      });
    }, 2000);
  } else {
    name.disabled = true;
    email.disabled = true;
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = '#979797';
    loader.style.display = 'block';
    setTimeout(() => {
      form.reset();
      showAlert('Thank you for your subscription', 'subAlert alertSuccess');
      name.disabled = false;
      email.disabled = false;
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '#2d3142';
      loader.style.display = 'none';
      submitBtn.addEventListener('mouseenter', () => {
        submitBtn.style.backgroundColor = '#979797';
      });
      submitBtn.addEventListener('mouseleave', () => {
        submitBtn.style.backgroundColor = '#2d3142';
      });
    }, 2000);
  }
});

// Show alert on submission
function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.bar2');
  const alertPlace = document.querySelector('.alert-place');
  container.insertBefore(div, alertPlace);

  setTimeout(() => {
    this.clearAlert();
  }, 2000);
}

// Clear alert
function clearAlert() {
  const currentAlert = document.querySelector('.subAlert');
  if (currentAlert) {
    currentAlert.style.opacity = '0';
    setTimeout(() => {
      currentAlert.remove();
    }, 300);
  } else {
  }
}

// Disable jump on windows resize
const imgBox = document.querySelectorAll('.box-picker');
let imgBoxArray = Array.from(imgBox);

imgBoxArray.forEach((element) => {
  window.addEventListener('resize', () => {
    element.classList.add('resize-animation-stopper');
    setTimeout(() => {
      element.classList.remove('resize-animation-stopper');
    }, 100);
  });
});

// Check Navbar status
const hamburgerBtn = document.querySelector('.navbar-toggler');
hamburgerBtn.addEventListener('click', () => {
  navbarMobile = document.getElementById('navbarNav-mobile');
  navbarMain = document.querySelector('.navbar');
  navAccIcon = document.querySelector('.key-icon');
  navPhoneIcon = document.querySelector('.phone-icon-text');

  if (!navbarMobile.classList.contains('show')) {
    navAccIcon.style.opacity = 0;
    navPhoneIcon.style.opacity = 0;
    setTimeout(() => {
      navAccIcon.style.display = 'none';
      navPhoneIcon.style.display = 'none';
    }, 300);
  } else {
    navAccIcon.style.display = 'block';
    navPhoneIcon.style.display = 'block';
    setTimeout(() => {
      navAccIcon.style.opacity = 1;
      navPhoneIcon.style.opacity = 1;
    }, 100);
  }
});

// Arrow rotation in mobile menu
const collapseMenu = document.querySelectorAll('.nav-mobile-link');
let collMenArray = Array.from(collapseMenu);

collMenArray.forEach((element) => {
  const currentOpenMenu = element.parentElement.children[1];
  const currentArrow =
    element.parentElement.children[0].children[0].children[0];
  element.addEventListener('click', () => {
    const allArrows = document.querySelectorAll('.arrow-mobile');
    let arrowArray = Array.from(allArrows);
    arrowArray.forEach((arrowElement) => {
      arrowElement.style.transform = 'rotate(0deg)';
      if (!currentOpenMenu.classList.contains('show')) {
        currentArrow.style.transform = 'rotate(90deg)';
      }
    });
  });
});

// Lock scroll on mobile
const lockScreenBtn = document
  .querySelector('.navbar-toggler')
  .addEventListener('click', () => {
    document.body.classList.toggle('lock-scroll');
  });
