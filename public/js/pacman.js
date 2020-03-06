import { loadBackgroundSprites, loadCharacterSprites } from "./sprites.js";
import { loadLevel } from "./loaders.js";
import Timer from "./Timer.js";
import Pacman from './entities/Pacman.js';

const canvas = document.getElementById('pacman');
const context = canvas.getContext('2d');

Promise.all([
loadBackgroundSprites(), 
loadCharacterSprites(),
loadLevel('1'),
]).then(([backgroundSprites, characterSprites, level]) => {

    const pacman = new Pacman(characterSprites);

    const drawGame = function drawGame(myGame, canvas) {
        context.fillStyle = '#000';
        context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
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
        
        pacman.draw(context);
    }


    const update = function update(deltaTime)  {
        pacman.update(deltaTime);
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



function writeWord(word, x, y, backgroundSprites, context) {

    let letterCount = 0;
    [...word].forEach(c =>{
        backgroundSprites.drawTile(c, context, x + letterCount, y);
        letterCount ++;
    });
}