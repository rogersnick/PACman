import Entity from '../Entity.js';
import Move from '../traits/Move.js';
import Keyboard from '../Keyboard.js';

import { Vec2 } from '../math.js';
import { createAnim } from "../anim.js";

export default class Pacman extends Entity {
constructor(characterSprites) {
    super();
    this.pos = new Vec2(0,2);
    this.addTrait(new Move());
    this.characterSprites = characterSprites;
    this.heading = 'RIGHT';

    this.input = new Keyboard();
    this.input.addMapping('ArrowRight', keyState => {
        this.heading = "RIGHT"
    });

    this.input.addMapping('ArrowLeft', keyState => {
        this.heading = "LEFT";
    });

    this.input.addMapping('ArrowUp', keyState => {
        this.heading = "UP";
    });

    this.input.addMapping('ArrowDown', keyState => {
        this.heading = "DOWN";
    });

    this.input.listenTo(window);
}

draw = function drawPacman(context) {
    this.characterSprites.drawTile(this.frame(), context, this.pos.x, this.pos.y);
}

rightAnim = createAnim(['right-1', 'right-2'], 0.6);
rightFrame = function pacRight(deltaTime) {
    return this.rightAnim(deltaTime);
}
upAnim = createAnim(['up-1', 'up-2'], 0.6);
upFrame = function pacUp(deltaTime) {
    return this.upAnim(deltaTime);
}
leftAnim = createAnim(['left-1', 'left-2'], 0.6);
leftFrame = function pacLeft(deltaTime) {
    return this.leftAnim(deltaTime);
}
downAnim = createAnim(['down-1', 'down-2'], 0.6);
downFrame = function pacDown(deltaTime) {
    return this.downAnim(deltaTime);
}

frame = function getFrame() {
    if (this.heading === 'RIGHT') {
        return this.rightFrame(this.pos.x);
    }
    if (this.heading === 'LEFT') {
        return this.leftFrame(this.pos.x);
    }
    if (this.heading === 'UP') {
        return this.upFrame(this.pos.y)
    }
    if (this.heading === 'DOWN') {
        return this.downFrame(this.pos.y)
    }
}

}