"use strict";

// Panorama Image
export class ViewerImage {

    constructor([panoLon, panoLat, panoZ, w, x, y, z, floorZ], imageIdx) {
        // floor and mapOffset calculated and set in ViewerFloorAPI

        this.floor; // : String // Name of floor which contains this image 

        this.floorZ = floorZ; // : Number // Z coordinate of this image on the floor

        this.hidden; // : Boolean // Flag if this image is hidden

        this.id = imageIdx; // : Number // Image number
    
        this.pos = [panoLon, panoLat, panoZ]; // : [Number] // WGS 84 coordinates [longitude, latitude, z] of this image

        // The quaternion data available in the json is not quite compatible with the translation we need in our scene
        const threeX = y;
        const threeY = z;
        const threeZ = x;

        this.orientation = new THREE.Quaternion(threeX, threeY, threeZ, w);

        this.mapOffset; // : [offsetX, offsetY] // in pixels, offset from map png
        
    }

}