# event-emitter-module

A simple Javascript event emitter

## Installation

  `npm install event-emitter-module`

## Usage

    Since the testing is not functional, it can be partially tested with the following. 
    First instantiate a new Event Emitter from the class:
      const emitTest = new EventEmitter();
## Methods

    addListener(eventName, callbackFn){}
    	-Adds a listener to an events object with the eventName as the key and callbackFn as the value
    
    removeListener(eventName, callbackFn){}
    	-Removes a listener to an events object based on the eventName and callbackFn passed in
    
    removeAllListeners(){}
    	-Remove all listeners from the events object (Should be able to pass in a specific eventName to target a specific listener)
    
    once(eventName, callbackFn){}
    	-Adds a listener that can be used up to one time and then removes that listener

    emit(eventName, ...args){}
    	-Emits the event and passes any arguments to the listeners that are looking for that event
    
## Tests 

    The following are examples with expected output:
    emitTest.addListener('change', (a, b) => {
      console.log(a, b);
    });
    emitTest.emit('change', 'a', 'b');
    //expected output is: a b  

    let m = 0;
    emitTest.addListener('event', () => {
	    console.log(++m);
    });
    emitTest.emit('event');
    emitTest.emit('event');
    //expected output is: 0
                          1
                          2
    
    let n = 0;
    emitTest.once('changeOnce', () => {
	    console.log(++n);
    });
    emitTest.emit('changeOnce');
    emitTest.emit('changeOnce');
    //expected output is: 0
                          1                       

    const callbackA = () => {
	    console.log('A');
      emitTest.removeListener('newEvent', callbackB);
    }
    const callbackB = () => {
	    console.log('B');
    };

    emitTest.addListener('newEvent', callbackA);
    emitTest.addListener('newEvent', callbackB);
    emitTest.emit('newEvent');
    emitTest.emit('newEvent');
    //expected output is: A
                          B
                          A
    
    emitTest.emit('event');
     //since earlier 'event' was called expected output is: 3
    
    emitTest.removeAllListeners('event');
    emitTest.emit('event');
     //expected output is nothing since the listener was removed
  
## Tests 

To enhance this module:

-I'd want to get testing up and running and learn how to structure unit tests with Jasmine. I first tried the Mocha, Chai route but realized it could be nice to have all that under one roof with Jasmine. I'd want to flesh out the tests to even more isolated cases since I think I currently was focusing on larger groups of actions that I wanted to test. Along with this, I'd want to make sure I included:
	- Defined functions and variables that could be used for writing the tests
	- Failure tests along with success to make sure I know what would happen if I intentionally passed in something that should break the method or the class as a whole
	- Stress testing that would check what would happen if a large number of listeners were added to see if there was a breaking point for the events object
	- Passing in something other than a string for an eventName or a function for the callbackFn
	- Passing in a large number of parameters to see how it'd handle it

-I'd make sure that my code was all consistent with ES2015/ES6 conventions and standards. Also, I'd check if there was a better option than using 'hasOwnProperty' to check if the passed in 'eventName' key existed or not.

-Clean up the comments so they're a bit more concise
    
