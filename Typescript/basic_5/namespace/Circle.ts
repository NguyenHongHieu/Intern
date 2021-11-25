// <reference path = "IShape.ts" /> 
import {IShape} from './MyInterface'

export class Circle implements IShape { 
    public draw() { 
        console.log("Circle is drawn"); 
    }  
}

         