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

serviceTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    serviceContent.forEach((content) => {
      content.classList.remove("active");
    });
    serviceTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    serviceContent[index].classList.add("active");
    serviceTabs[index].classList.add("active");
  });
});
