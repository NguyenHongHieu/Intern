"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Triangle_1 = require("./Triangle");
function drawAllShapes(shape) {
    console.log("Chao");
    shape.draw();
}
var circle = new Circle_1.Circle();
var triangle = new Triangle_1.Triangle();
console.log("LOG");
drawAllShapes(circle);
drawAllShapes(triangle);
