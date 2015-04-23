/*
* @ES6-script
*/
  import Hello from './components/hello';
  var hello = new Hello('Hello, Promise');

  hello.say();
  hello.later().then(() => hello.say());
