const aboutPos = document.querySelector(".introduction").offsetTop;

document.querySelector("#about-me").addEventListener("click", () => {
  window.scrollTo(0, aboutPos);
});
