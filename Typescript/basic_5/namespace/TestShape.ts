// <reference path = "IShape.ts" />   
         /// <reference path = "Circle.ts" /> 
         /// <reference path = "Triangle.ts" />  
import {IShape} from "./MyInterface"
import {Circle}from './Circle';
import {Triangle}from './Triangle';

function drawAllShapes(shape: IShape) { 
    shape.draw(); 
} 

let circle = new Circle();
let triangle = new Triangle();


drawAllShapes(circle);
drawAllShapes(triangle);
      