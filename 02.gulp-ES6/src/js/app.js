/*
* @ES6-script
*/

(function() {
  var Hello = require('./components/hello');
  var hello = new Hello();

  document.write(hello.message);

})();