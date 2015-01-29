// Javascript Beginnings
// Go to http://repl.it and try the following
// http://github.com/tewk/e4tech/wiki has example free online curriculum
//
//
//
// a // at the beginning of a line is a comment, javascript doesn't interpret
// anything following a double slash // is a comment
//
// There are some basic datatype in javascript
// Datatype - Examples Values
// booleans   true false
// integers   -2Billion ... -10, -9, -8, -7, -6 -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ..., 2billion
// floating-point numbers   10.34, 8.66
// strings    "Kevin"  "Hello"  "bye"
// a string is a list of characters between quotation marks

console.log( "Basis data types:" );
console.log( "Boolean values:");
console.log( true );
console.log( false );
console.log( "Integer values:");
console.log( 1 );
console.log( 2 );
console.log( 10 );
console.log( 10 + 10 );
console.log( 10 + 10 * 20 ); // console.log( 10 + ( 10 * 20 ) );
console.log( "String values:");
// print out a string
console.log( "Kevin" );

//Mathematical Expressions
console.log( "Basis arithmetic expressions:" );
console.log( 7 % 4 ); // 3
console.log( 8 / 2 ); // 4
console.log( 2 * 3 + 4 * 5 ); // 6 + 20 == 26
console.log( "( ( ( 3 + 3 ) * 5 ) / 2 ) % 7: ", ( ( ( 3 + 3 ) * 5 ) / 2 ) % 7 );

console.log("String concatenation using the + operator on strings");
var firstname = "Kevin";
var lastname = "Tew";
console.log( "My firstname is " + firstname + ", my lastname is " + lastname );

// Boolean algebra
// And truth table
// A      B        A && B
// ----------------------
// true   true   |  true
// true   false  |  false
// false  true   |  false
// true   true   |  true
//
// Boolean algebra
// Or truth table
// A      B        A || B
// ----------------------
// true   true   |  true
// true   false  |  true 
// false  true   |  true 
// true   true   |  false

// the if statement is a conditional. If the expression inside the parenthesis evaluates to true the first clause is executed.  If the expression inside the parenthsis evaluates to false thesecond clause is executed
// the expression inside the parenthesis is called the conditional
var number_of_kids = 2;
console.log( "number_of kids >= 2" );
console.log( number_of_kids >= 2 );
if( number_of_kids >= 2 )
{
	// first clause
	console.log( "Kevin has at least two kids" );
}
else
{
	// second clause
	console.log( "Kevin has less than two kids" );
}

var grades = [ 10, 8, 9, 3, 4 ];
console.log( "grades: ", grades );
console.log( "grades.length: ", grades.length );

console.log( "grades[0]: ", grades[0] );
console.log( "grades[1]: ", grades[1] );
console.log( "grades[3]: ", grades[3] );
console.log( "grades[4]: ", grades[4] );


var sum = 0;
for( x in grades)
{
	console.log( "x: ", x, " grades[x]: ", grades[x] ); 
	sum = sum + grades[x];
}
console.log( "sum: ", sum );
console.log( "average: ", sum / grades.length );
