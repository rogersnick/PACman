import { Vec2 } from './math.js'

export class Trait {
    constructor(name) {
        this.NAME = name;
    }

    update() {
        console.warn('Unhandled update call in Trait');
    }
}

export default class Entity {
    constructor() {
        this.pos = new Vec2(0,0);
        this.traits = [];
    }

    addTrait(trait) {
        this.traits.push(trait);
    }

    update(deltaTime) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime);
        })
    }

    getFrame(deltaTime) {
        this.frames.routeFrame()
    }

}