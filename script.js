import { Shape } from "./shape.js";

const shapeSelectorElement = document.querySelector(".shape-selector button");
const shapeSelectElement = document.querySelector("#shape");
const colorSelectElement = document.querySelector("#color");
const shapeContainerElement =
  document.getElementsByClassName("shape-container");

console.log(shapeContainerElement);

let shapesCount = 0;

const addShape = (shapeInfo) => {
  console.log(shapeInfo);

  const shape = document.createElement("div");
  shape.classList.add(shapeInfo.name);
  shape.classList.add("shape");
  console.log(shapeInfo.color);
  shape.style.backgroundColor = shapeInfo.color;

  shapeContainerElement[shapesCount].append(shape);
  shapesCount++;
};

shapeSelectorElement.addEventListener("click", () => {
  const shapeSelected = shapeSelectElement.value;
  const colorSelected = colorSelectElement.value;

  const shape = new Shape(shapeSelected, colorSelected);

  addShape(shape.getInfo());
});
