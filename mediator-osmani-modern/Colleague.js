import {mediator} from "./Mediator.js";

export class Colleague {
    constructor() {
        this.mediator = mediator
    }

    subscribe(topic, fn) {
        this.mediator.subscribe(topic, fn)
    }

    publish(topic, ...args) {
        this.mediator.publish(topic, ...args)
    }
}

