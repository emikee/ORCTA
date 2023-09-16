let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content__wrap");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

let serviceTabs = document.querySelectorAll(".service-tab");
let serviceContent = document.querySelectorAll(".service-content");
let serviceImage = document.querySelectorAll(".img-content");

serviceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    serviceContent.forEach((content) => {
      content.classList.remove("active");
    });
    serviceTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    serviceImage.forEach((image) => {
      image.classList.remove("active");
    });
    serviceContent[index].classList.add("active");
    serviceTabs[index].classList.add("active");
    serviceImage[index].classList.add("active");
  });
});

// let hamburgerTab = document.querySelectorAll("hamburger");
// let hamburger = document.querySelectorAll("hamburger-menu");
// let closeMenu = document.querySelectorAll("close-menu");

let hamburgerTab = document.getElementById("hamburger");
let hamburger = document.getElementById("hamburger-menu");
let closeMenu = document.getElementById("close-menu");

hamburgerTab.addEventListener("click", () => {
  hamburger.classList.add("active");
  hamburgerTab.classList.add("active");
  closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  hamburger.classList.remove("active");
  hamburgerTab.classList.remove("active");
  closeMenu.classList.remove("active");
});

// hamburgerTab.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     hamburgerTab.forEach((icon) => {
//       icon.classList.remove("active");
//     });
//     hamburger.forEach((content) => {
//       content.classList.remove("active");
//     });
//     closeMenu.forEach((close) => {
//       close.classList.remove("active");
//     });
//     hamburgerTab[index].classList.add("active");
//     hamburger[index].classList.add("active");
//     closeMenu[index].classList.add("active");
//   });
// });