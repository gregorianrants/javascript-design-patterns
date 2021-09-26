import {Colleague} from "./Colleague.js";

document.getElementById('chatForm')
    .addEventListener('submit',function(e){
        e.preventDefault();

        var text = document.getElementById( "chatBox" ).value,
            from = document.getElementById( "fromBox" ).value,
            to = document.getElementById( "toBox" ).value;

        // Publish data from the chat to the newMessage topic
        new Colleague().publish( "newMessage" , { message: text, from: from, to: to } );
    })


class DisplayChat extends Colleague{
    constructor() {
        super()
        this.checkContext = 'context good'
    }
    displayChat=(data)=>{
        var date = new Date(),
            msg = data.from + " said \"" + data.message + "\" to " + data.to;
        document.getElementById( "chatResult" )
            .innerText = "" + msg + " (" + date.toLocaleTimeString() + ")";
        console.log(this.checkContext)
    }
}

let c = new DisplayChat()
c.subscribe( "newMessage", c.displayChat );
/*mediator.subscribe( "newMessage", logChat );*/
