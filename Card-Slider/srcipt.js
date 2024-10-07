document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".wrapper");
  const prev = document.querySelector("#prev-btn");
  const next = document.querySelector("#next-btn");
  const cardwidth = document.querySelector(".common").offsetWidth;

  let postion = 0;

  prev.addEventListener("click", () => {
    postion += cardwidth + 30;
    if (postion > 0) {
      position = -(sliderWrapper.scrollWidth - sliderWrapper.offsetWidth);
    }
    sliderWrapper.style.transform = `translateX(${postion}px)`;
  });
  next.addEventListener("click", () => {
    postion -= cardwidth + 30;
    if (postion < -(sliderWrapper.scrollWidth - sliderWrapper.offsetWidth)) {
      position = 0;
    }
    sliderWrapper.style.transform = `translateX(${postion}px)`;
  });
});
