
var Counter = (function () {
   var i =0;
   return {
       get : function () {
            return i;
       },
       set : function (val) {
            i = val;
       },
       increment : function () {
           i++;
       }
   }
})();

console.log(Counter.get());
Counter.set(10);
Counter.increment();
console.log(Counter.get());


//this is how we can build library 
