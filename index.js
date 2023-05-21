let bgImage = document.querySelector(".bg-image");
let bird = document.querySelector(".birds");
let sun = document.querySelector(".sun");
let treeOne = document.querySelector(".tree");
let treeTwo = document.querySelector(".secondTree");
let text = document.querySelector(".text");
let textSpan = document.querySelector(".text span");
let clouds = document.querySelector(".clouds");

// GSAP CODE
let timeline = gsap.timeline();

timeline.from(
  clouds,
  {
    top: `${bgImage.offsetHeight / 2 + +bgImage.dataset.distance}px`,
    duration: 1,
  },
  "2"
);

timeline.from(
  bgImage,
  {
    top: `${bgImage.offsetHeight / 2 + +bgImage.dataset.distance}px`,
    duration: 1,
  },
  "2"
);

timeline.from(
  bird,
  {
    x: "50%",
    y: "500%",
    duration: 4,
  },
  "3.5"
);

timeline.from(
  sun,
  {
    top: "160%",
    duration: 2,
  },
  "2"
);

timeline.from(
  treeOne,
  {
    top: `${treeOne.offsetHeight / 2 + 4500}px`,
    duration: 1.5,
  },
  "1.5"
);

timeline.from(
  treeTwo,
  {
    top: `${treeTwo.offsetHeight / 2 + 4000}px`,
    duration: 1.7,
  },
  "1.5"
);

timeline.from(
  text,
  {
    top: `${text.offsetHeight / 2 + -8000}px`,
    duration: 2,
  },
  "1"
);

timeline.from(
  textSpan,
  {
    top: `${textSpan.offsetHeight / 2 + 4000}px`,
    duration: 2,
  },
  "1"
);
