export default class SpriteSheet {
    constructor(image, width, height, offsetx = 0, offsety = 0) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
        this.offsetX  = 0;
        this.offsetY = 0;
        this.offsetX = offsetx;
        this.offsetY = offsety;
    }

    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x, y,
                width, height,
                0, 0, 
                width, height);
                this.tiles.set(name, buffer);
    }

    defineTile(name, x, y) {
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x + this.offsetX, y + this.offsetY);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }
    
}
