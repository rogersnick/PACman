import { loadImage } from './loaders.js';
import SpriteSheet from './Spritesheet.js';

export function loadBackgroundSprites() {
    return loadImage('/img/sprites.png')
    .then(image => {
        const backgroundSprites = new SpriteSheet(image, 12,12);
        backgroundSprites.defineTile('pill', 17, 0);
        backgroundSprites.defineTile('superpill', 18, 0);
        backgroundSprites.defineTile('supersuperpill', 18, 0);
        backgroundSprites.defineTile('supersupersuperpill', 18, 0);

        backgroundSprites.defineTile(' ', 15, 1);
        for (let i = 0;i <= 9; i++) {
            backgroundSprites.defineTile(i.toString(), i, 0 )
        }

        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 26; i++) {
            backgroundSprites.defineTile((i+10).toString(36), i+1, 2);
        }
        backgroundSprites.defineTile('!', 27, 2);
        backgroundSprites.defineTile('@', 28, 2);
        backgroundSprites.defineTile('pt', 29, 2);
        backgroundSprites.defineTile('ts', 30, 2);


        for (let i = 17; i < 32; i++) {
            backgroundSprites.defineTile(`wall-${(i-16).toString()}`, i, 4);
            backgroundSprites.defineTile(`wall-${(i-16 + 15).toString()}`, i, 5);
            backgroundSprites.defineTile(`wall-${(i-16 + 15).toString()}`, i, 3);

            backgroundSprites.defineTile(`wall-${(i-16 + 30).toString()}`, i - 20, 8);
            backgroundSprites.defineTile(`wall-${(i-16 + 30).toString()}`, i - 20   , 8);

        }
        return backgroundSprites;
});
};

export function loadCharacterSprites() {
    
    return loadImage('/img/sprites.png')
    .then(image => {
        // context.drawImage(image, 0, 0);
        const sprites = new SpriteSheet(image, 24, 24, 6, 6);
        sprites.defineTile('left-1', 0, 3, 12);
        sprites.defineTile('left-2', 2, 3, 12);
        sprites.defineTile('right-1', 4, 3, 12);
        sprites.defineTile('right-2', 6, 3, 12);
        sprites.defineTile('up-1', 1, 3, 12);
        sprites.defineTile('up-2', 3, 3, 12);
        sprites.defineTile('down-1', 5, 3, 12);
        sprites.defineTile('down-2', 7, 3, 12);
        sprites.defineTile('slug-1', 8, 3, 12);
        sprites.defineTile('slug-2', 9, 3, 12);
        sprites.defineTile('fruit-1', 0, 5, 12);
        sprites.defineTile('fruit-2', 1, 5, 12);
        sprites.defineTile('fruit-3', 2, 5, 12);
        sprites.defineTile('fruit-4', 3, 5, 12);
        sprites.defineTile('fruit-5', 4, 5, 12);
        sprites.defineTile('fruit-6', 5, 5, 12);
        sprites.defineTile('fruit-7', 6, 5, 12);
        sprites.defineTile('fruit-8', 7, 5, 12);

        sprites.defineTile('blinky-1', 0, 6);
        sprites.defineTile('blinky-2', 1, 6);
        sprites.defineTile('blinky-3', 2, 6);
        sprites.defineTile('blinky-4', 3, 6);
        sprites.defineTile('blinky-5', 4, 6);
        sprites.defineTile('blinky-6', 5, 6);
        sprites.defineTile('blinky-7', 6, 6);
        sprites.defineTile('blinky-8', 7, 6);

        sprites.defineTile('closed', 0, 7);
        sprites.defineTile('explode', 1, 7);

        sprites.defineTile('dying-1', 4, 7);
        sprites.defineTile('dying-2', 5, 7);
        sprites.defineTile('dying-3', 6, 7);
        sprites.defineTile('dying-4', 7, 7);
        sprites.defineTile('dying-5', 8, 7);
        sprites.defineTile('dying-6', 9, 7);
        sprites.defineTile('dying-7', 10, 7);
        sprites.defineTile('dying-8', 11, 7);
        sprites.defineTile('dying-9', 12, 7);
        sprites.defineTile('dying-10', 13, 7);
        sprites.defineTile('dying-11', 14, 7);
        sprites.defineTile('dying-12', 15, 7);


        sprites.defineTile('pinky-1', 0, 8);
        sprites.defineTile('pinky-2', 1, 8);
        sprites.defineTile('pinky-3', 2, 8);
        sprites.defineTile('pinky-4', 3, 8);
        sprites.defineTile('pinky-5', 4, 8);
        sprites.defineTile('pinky-6', 5, 8);
        sprites.defineTile('pinky-7', 6, 8);
        sprites.defineTile('pinky-8', 7, 8);
      
        sprites.defineTile('inky-1', 8, 8);
        sprites.defineTile('inky-2', 9, 8);
        sprites.defineTile('inky-3', 10, 8);
        sprites.defineTile('inky-4', 11, 8);
        sprites.defineTile('inky-5', 12, 8);
        sprites.defineTile('inky-6', 13, 8);
        sprites.defineTile('inky-7', 14, 8);
        sprites.defineTile('inky-8', 15, 8);

        sprites.defineTile('spooky-1', 8, 9);
        sprites.defineTile('spooky-2', 9, 9);
        sprites.defineTile('spooky-3', 10, 9);
        sprites.defineTile('spooky-4', 11, 9);
        sprites.defineTile('spooky-5', 12, 9);
        sprites.defineTile('spooky-6', 13, 9);
        sprites.defineTile('spooky-7', 14, 9);
        sprites.defineTile('spooky-8', 15, 9);

        sprites.defineTile('clyde-1', 0, 9);
        sprites.defineTile('clyde-2', 1, 9);
        sprites.defineTile('clyde-3', 2, 9);
        sprites.defineTile('clyde-4', 3, 9);
        sprites.defineTile('clyde-5', 4, 9);
        sprites.defineTile('clyde-6', 5, 9);
        sprites.defineTile('clyde-7', 6, 9);
        sprites.defineTile('clyde-8', 7, 9);

        sprites.defineTile('800', 10, 6);
        sprites.defineTile('q', 8, 8);
        sprites.defineTile('closed', 0, 5);
        sprites.defineTile('wall-horizontal',0, 4);
        sprites.defineTile('wall-vertical', 1, 4);
        sprites.defineTile('wall-bottomleft', 2, 4);
        sprites.defineTile('wall-bottomright', 3, 4);
        sprites.defineTile('wall-topleft', 4, 4);
        sprites.defineTile('wall-topright', 5, 4);
        return sprites;
    });
}
