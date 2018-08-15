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
  
