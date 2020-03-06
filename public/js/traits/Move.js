import {Trait} from '../Entity.js';

export default class Move extends Trait {
    constructor() {
        super('move');
        this.speed = 2;
    }

    update(entity, deltaTime) {
        entity.pos.x = entity.pos.x + deltaTime * this.speed *  (entity.heading === 'RIGHT' ? 1 : entity.heading === 'LEFT' ? -1 : 0));
        entity.pos.y = entity.pos.y + deltaTime * this.speed * (entity.heading === 'DOWN' ? 1 : entity.heading === 'UP' ? -1 : 0);
    }
}
