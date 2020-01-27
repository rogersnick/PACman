import { loadBackgroundSprites, loadCharacterSprites } from "./sprites.js";
import { loadLevel } from "./loaders.js";
import Timer from "./Timer.js";
import { createAnim } from "./anim.js";

const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

Promise.all([
loadBackgroundSprites(), 
loadCharacterSprites(),
loadLevel('1'),
]).then(([backgroundSprites, characterSprites, level]) => {


    // Drawing Sprites
    const drawGame = function drawGame(myGame, canvas) {
        context.fillStyle = '#000';
        context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
        
        characterSprites.drawTile('fruit-1', context, 11, 1);
        characterSprites.drawTile('clyde-2', context, 6, 9);

        writeWord('high score', 9 , 1, backgroundSprites, context);
        backgroundSprites.drawTile('pt', context, 24, 1);
        backgroundSprites.drawTile('ts', context, 25, 1);

        level.pills.forEach(pill => {
            backgroundSprites.drawTile(pill.type, context, pill.posX, pill.posY);
        });
        level.walls.forEach(wall => {
            backgroundSprites.drawTile(`wall-${wall.type}`, context, wall.posX, wall.posY);
        })

        characterSprites.draw(routeFrame(position.x), context, position.x, 0);
        
        if (position.x > 370) {
            characterSprites.drawTile('explode', context, 11, 1);
        }

    }

    // Basic Animation

    const position = { x: 0, y: 0 };
    const rightAnim = createAnim(['right-1', 'right-2'], 5);
    function routeFrame(deltaTime) {
        return rightAnim(deltaTime);
    }

    const update = function update(deltaTime)  {
        position.x = position.x + deltaTime * (30);
    }


    const timer = new Timer({
        update: (deltaTime) => {
            update(deltaTime);
        },
        render: () => {
            drawGame(this, canvas);
        }
    });
    timer.start(); 
    }
    
    );




function writeWord(word, x, y, backGroundSprites, context) {

    let letterCount = 0;
    [...word].forEach(c =>{
        backGroundSprites.drawTile(c, context, x + letterCount, y);
        letterCount ++;
    });
}