"use strict";
import {ViewerContextItem}from "./ViewerContextItem.js"
// Event position in viewer

export class EventPosition {
    constructor() {
    
        this.x; //  Number // y coordinate of this image on the floor

        this.y; // Number // y coordinate of this image on the floor
    }

}


export class EventLayer {
    constructor() {
        this.viewer_contex; 
    }
    
    vwr_oncontext (xy, location){
        //Parameters: 
        //xy EventPosition:  Pointer position//图片的像素位置
        //location THREE.Vector3 : Local coordinates for pointer position+、、像素所代表的坐标位置
        viewer_contex = new ViewerContextItem();
        return viewer_contex;
    }

}