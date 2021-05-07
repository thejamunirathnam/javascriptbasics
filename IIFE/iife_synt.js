function fun () {
    console.log("hello iife");
}

var fun =function (i) {
    console.log("hello iife",i);
}
fun(i);

/// iife functions or annouymous functioons or self fuctions 
(function (i) {
    console.log("hello iife",i);
})(i);

// or
(function (i) {
    console.log("hello iife",i);
}(i));

