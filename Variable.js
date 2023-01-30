var myVar = "out of function";      // Declare a global variable
function do_something_else( ) {
	var myVar = "in of function";    // Declare a local variable
    console.log(myVar);
}
do_something_else( ); // Output: "in of function"

// or

var myVar = "out of function";      // Declare a global variable
function do_something( ) {
        console.log(myVar);
}
do_something( ); 