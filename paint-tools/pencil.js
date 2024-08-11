import { setPixel } from "./utils.js";

function pencil(pixels, x, y, color, weight) {
    let currentPixels = pixels

    if (weight == 1) {
        currentPixels = setPixel(
            pixels,
            x,
            y,
            color
        );

        return currentPixels
    }

    // creates the square from top to bottom
    for (let targetY = 0; targetY < weight; targetY++) {
        
        // creates a line
        for (let currentX = (x - Math.floor(weight/2)); currentX < (x + Math.floor(weight/2)); currentX++) {
            

            currentPixels = setPixel(
                currentPixels,
                currentX,
                (targetY + y),
                color
            );
        }
    }

    return currentPixels;
}

export default pencil;