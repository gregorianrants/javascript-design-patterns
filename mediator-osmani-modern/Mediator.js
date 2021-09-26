class Mediator {
    constructor() {
        this.topics = new Map();
    }

    subscribe(topic,fn){
        if(!this.topics.has(topic)) this.topics.set(topic,[])
        this.topics.get(topic).push(fn)
        console.log(this.topics)
    }

    publish(topic,...args){
        if(!this.topics.has(topic)) return;
        let callbacks = this.topics.get(topic)
        for(let callback of callbacks){
            callback(...args)
        }
    }
}

export const mediator = new Mediator()
