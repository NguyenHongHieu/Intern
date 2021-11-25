// <reference path = "IShape.ts" /> 
import {IShape} from './MyInterface'

export class Triangle implements IShape { 
   public draw() { 
      console.log("Triangle is drawn"); 
   } 
} 
