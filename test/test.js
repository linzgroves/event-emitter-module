'use strict';
var EventEmitter = require('../index');

describe("Event Emitter", function() {
  //instantiate a new Event Emitter from my class
  var myEventEmitter = new EventEmitter();

  //setup tests for each method
  describe('addListener', function() {
    it('should check if the events object has the eventName passed in', function() {
      /*expect that if the 'eventName' exists in the object, push the 'callbackFn' into the array containing the 'eventName' */
    });
    it('should add the eventName and callbackFn to the events object if the eventName does not exist yet', function(){
      /*expect that if the 'eventName' didn't exist, it should handle it as described */
    });
    it('should add a listener to the events object', function(){
      /*expect that when passed a test 'eventName' and 'callbackFn', the events object should reflect those were indeed passed in*/
    });
  });
  describe('removeListener', function() {
    it('should check if the events object has the eventName passed in', function() {
      /*expect that if the 'eventName' doesn't exist in the object, false will be returned' */
    });
    it('should set an index value equal to the eventName and callbackFn passed in', function() {
      /*expect that 'index' will equal the position of the 'eventName' and corresponding 'callbackFn' within the events object */
    });
    it('should remove a listener from the events object', function(){
      /*expect that when passed an eventName that exists in the events object, the 'eventName' should be removed*/
    });
    it('should modify the array but maintain the other listeners', function(){
      /*expect that the removed listener is taken out of its location in the array but doesn't remove other listeners and leaves a modified array*/
    });
  });
  describe('removeAllListeners', function() {
    it('should remove all listeners that were added to the events object', function(){
      /*expect that when called, it should delete all listeners that were added to the events object */
    });
    it('should remove all listeners that correspond to an eventName', function(){
      /*expect that when called with an 'eventName' passed in, the listeners associated with that name would only be removed from the object */
    });
  });
  describe('emit', function(){
    it('should check if the events object has the eventName passed in', function() {
      /*expect that if the 'eventName' doesn't exist in the object, false will be returned' */
    });
    it('should fire an event and pass any arguments to the listeners', function() {
      /*expect that when called, the arguments passed in will be passed on to the 'callbackFn' associated with the 'eventName' passed in previously */
    });
    it('should emit a "once" method called', function(){
      /*expect that when called for a listener that was added with 'once' method, the removeListener method will be called and then passed in 'callbackFn' can be called */
    });
  });
  describe('once', function(){
    it('should add a listener and pass in a new function', function() {
      /*expect that when called, a listener will be added to the events object with a function passed in for 'empty' */
    });
    it('should remove the listener once the event emits', function() {
      /*expect that when event emits, the listener is removed from the events object */
    });
    it('should do nothing if called a second time', function() {
      /*expect that after this method has been used for a listener that has been removed, further emit calls will not return anything */
    });
  });
});
