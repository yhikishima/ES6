/*
* @ES6-script
*/

(function() {
  var Hello = require('./components/hello');
  var hello = new Hello();
  hello.say();

  document.write(hello.message);

})();