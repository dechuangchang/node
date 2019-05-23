const events = require('events')
const util = require('util')

var Person = function(name) {
  this.name = name+'---'
}

util.inherits(Person, events.EventEmitter);

var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var lucy = new Person('lucy');

var person = [xiaoming, lili, lucy];

person.forEach(function(person) {
  person.on('speak', function(message) {
      console.log(person.name + " said: " + message);
  })
})

xiaoming.emit('speak', 'hi');
lucy.emit('speak', 'I want a curry');










// const myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',(msg)=> {
//   console.log(msg)
// })

// myEmitter.emit('someEvent','GG')