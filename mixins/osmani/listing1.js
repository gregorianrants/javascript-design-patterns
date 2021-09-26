var myMixins = {
    moveUp: function(){
        console.log( "move up" );
    },
    moveDown: function(){
        console.log( "move down" );
    },
    stop: function(){
        console.log( "stop! in the name of love!" );
    }
};

function carAnimator(){
    this.moveLeft = function(){
        console.log( "move left" );
    };
}
// A skeleton personAnimator constructor
function personAnimator(){
    this.moveRandomly = function(){ /*..*/ };
}
// Extend both constructors with our Mixin
_.extend( carAnimator.prototype, myMixins );
_.extend( personAnimator.prototype, myMixins );

// Create a new instance of carAnimator
var myAnimator = new carAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!
