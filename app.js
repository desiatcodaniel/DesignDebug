M.AutoInit();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, { edge: "right" });
});

//IMAGE SLIDER
//Select all sections of sliders
const imgSlide = document.querySelectorAll(`.img-slide`);

//Select all buttons for each slider
const prevBtns = document.querySelectorAll(`.prevBtn`);
const nextBtns = document.querySelectorAll(`.nextBtn`);

console.log(imgSlide[0].clientWidth);
//Select width of each image including margin
const width = imgSlide[0].querySelector(`.image`).clientWidth;

//Create counters for each slider
//Image number counter
let counters = new Array(imgSlide.length).fill(0);
//Width counter
let currentWidths = new Array(imgSlide.length).fill(0);

//Create images array: index = slider of that section
let images = [];

//Push images and currentWidth into the array
imgSlide.forEach((item, index) => {
  images.push(item.querySelectorAll(".image"));
  // currentWidths.push(item.clientWidth);
});

//Listen to clicks for previous button
prevBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (currentWidths[index] >= width) {
      //Decrement total width counter
      currentWidths[index] -= width;
    }else{
      currentWidths[index] = 0;
    }
    imgSlide[index].style.transform = `translateX(${-currentWidths[index]}px)`;
    imgSlide[index].style.transition = `transform ease-in-out .3s`;
  });
});

//Listen to clicks for next button
nextBtns.forEach((button, index) => {
  //Select max width to compare currentWidth and stop the slider
  const maxWidth = width * images[index].length;
  //Select the width of the visible portion
  const displayWidth = imgSlide[index].clientWidth;

  button.addEventListener("click", () => {
    if (currentWidths[index] + width > maxWidth - displayWidth) {
      currentWidths[index] = maxWidth - displayWidth;
    } else {
      //Increment total width counter
      currentWidths[index] += width;
      console.log(currentWidths[index]);
    }
    imgSlide[index].style.transform = `translateX(${-currentWidths[index]}px)`;
    imgSlide[index].style.transition = `transform ease-in-out .3s`;
  });
});
