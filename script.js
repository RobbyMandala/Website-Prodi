const thumbs = document.querySelectorAll(".thumb");
const heroRight = document.querySelector(".hero-right");

$(document).ready(function () {
  // setInterval(function () {
  // heroRight.classList.add("active-rotate");
  //   // setTimeout(() => {
  //   //   thumbs[0].classList.toggle("active");
  //   // }, 2000);
  //   if (thumbs[0].classList.contains("active")) {
  //     thumbs[0].classList.remove("active");
  //     thumbs[2].classList.add("active");
  //   } else {
  //     thumbs[0].classList.add("active");
  //     thumbs[2].classList.remove("active");
  //   }
  // }, 2000);
  // if (thumbs[0].classList.contains("active")) {
  //   heroRight.classList.add("active-rotate");
  // } else {
  //   heroRight.classList.remove("active-rotate");
  // }
  // function rotate() {
  //   $(heroRight).toggle("firstSlide");
  //   // $(heroRight).addClass("firstSlide");
  // }
  // window.setInterval(() => {
  //   rotate();
  // }, 4000);
});

// setInterval(function () {
//   let active = "active";
//   let rotate1 = "rotate1";
//   let rotate2 = "rotate2";
//   let rotate3 = "rotate3";
//   let rotate4 = "rotate4";

//   setTimeout(function () {
//     if (heroRight.classList.contains(rotate4)) {
//       heroRight.classList.replace(rotate4, rotate1);
//       thumbs[0].classList.remove(active);
//       thumbs[2].classList.add(active);
//     } else {
//       heroRight.classList.add(rotate1);
//       thumbs[0].classList.remove(active);
//       thumbs[2].classList.add(active);
//     }
//   }, 2000);
//   setTimeout(function () {
//     if (heroRight.classList.contains(rotate1)) {
//       heroRight.classList.replace(rotate1, rotate2);
//       thumbs[2].classList.remove(active);
//       thumbs[3].classList.add(active);
//     }
//   }, 4000);
//   setTimeout(function () {
//     if (heroRight.classList.contains(rotate2)) {
//       heroRight.classList.replace(rotate2, rotate3);
//       thumbs[3].classList.remove(active);
//       thumbs[1].classList.add(active);
//     }
//   }, 6000);
//   setTimeout(function () {
//     if (heroRight.classList.contains(rotate3)) {
//       heroRight.classList.replace(rotate3, rotate4);
//       thumbs[1].classList.remove(active);
//       thumbs[0].classList.add(active);
//     } else {
//       thumbs[0].classList.remove(active);
//     }
//   }, 8000);
// }, 10000);

// setTimeout(function () {
//   if (heroRight.classList.contains("rotate4")) {
//     heroRight.classList.replace();
//   }
// }, 14000);

setInterval(function () {
  start();
}, 10000);

const start = function () {
  setTimeout(function () {
    if (thumbs[0].classList.contains("active")) {
      // heroRight.classList.add("rotate");
      heroRight.style.transform = "rotate(45deg)";
      thumbs[0].classList.remove("active");
      thumbs[2].classList.add("active");
      thumbs[0].style.transform = "scale(1) rotate(-45deg)";
      thumbs[1].style.transform = "scale(1) rotate(-45deg)";
      thumbs[2].style.transform = "scale(1.5) rotate(-45deg)";
      thumbs[3].style.transform = "scale(1) rotate(-45deg)";
    }
  }, 2000);
  setTimeout(function () {
    if (thumbs[2].classList.contains("active")) {
      // heroRight.classList.add("rotate");
      heroRight.style.transform = "rotate(135deg)";
      thumbs[2].classList.remove("active");
      thumbs[3].classList.add("active");
      thumbs[0].style.transform = "scale(1) rotate(-135deg)";
      thumbs[1].style.transform = "scale(1) rotate(-135deg)";
      thumbs[2].style.transform = "scale(1) rotate(-135deg)";
      thumbs[3].style.transform = "scale(1.5) rotate(-135deg)";
    }
  }, 4000);
  setTimeout(function () {
    if (thumbs[3].classList.contains("active")) {
      // heroRight.classList.add("rotate");
      heroRight.style.transform = "rotate(225deg)";
      thumbs[3].classList.remove("active");
      thumbs[1].classList.add("active");
      thumbs[0].style.transform = "scale(1) rotate(-225deg)";
      thumbs[1].style.transform = "scale(1.5) rotate(-225deg)";
      thumbs[2].style.transform = "scale(1) rotate(-225deg)";
      thumbs[3].style.transform = "scale(1) rotate(-225deg)";
    }
  }, 6000);
  setTimeout(function () {
    if (thumbs[1].classList.contains("active")) {
      // heroRight.classList.add("rotate");
      heroRight.style.transform = "rotate(315deg)";
      thumbs[1].classList.remove("active");
      thumbs[0].classList.add("active");
      thumbs[0].style.transform = "scale(1.5) rotate(-315deg)";
      thumbs[1].style.transform = "scale(1) rotate(-315deg)";
      thumbs[2].style.transform = "scale(1) rotate(-315deg)";
      thumbs[3].style.transform = "scale(1) rotate(-315deg)";
    }
  }, 8000);
};

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
