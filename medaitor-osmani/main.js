import {mediator} from './mediator.js'

document.getElementById('chatForm')
    .addEventListener('submit',function(e){
        e.preventDefault();

        var text = document.getElementById( "chatBox" ).value,
            from = document.getElementById( "fromBox" ).value,
            to = document.getElementById( "toBox" ).value;

        // Publish data from the chat to the newMessage topic
        mediator.publish( "newMessage" , { message: text, from: from, to: to } );
    })

// Append new messages as they come through
function displayChat( data ) {
    var date = new Date(),
        msg = data.from + " said \"" + data.message + "\" to " + data.to;


    document.getElementById( "chatResult" )
        .innerText = "" + msg + " (" + date.toLocaleTimeString() + ")";
}

// Log messages
function logChat( data ) {
    if ( window.console ) {
        console.log( data );
    }
}


// Subscribe to new chat messages being submitted
// via the mediator
mediator.subscribe( "newMessage", displayChat );
mediator.subscribe( "newMessage", logChat );
