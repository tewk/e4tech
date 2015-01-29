// Given two lists:
// one of first names 
var first_names = [ "John", "Joe", "Bill", "Bob", "Mary", "Sue" ];
// one of last names:
var last_names  = [ "Smith", "Jones", "Pepper", "Jackson", "Williams", "Smart" ];

// Day 1 Challenge 1:
// write a for loop that prints out a line wiht the first first name followed by a dash "-" followed by the first last name.
// the second iteration of the loop should print out the seoncond first name followed by a dash "-" folled by the second last name etc.

// hit of a for loop that uses numbers
var nums = [ 12, 21, 7, 55, 3, 1 ];
for( var i = 0 ; i < nums.length ; i++ )
{
	console.log( "i: ", i, " nums[i]: ", nums[i] );
}

// Day 1 Challenge 2:
// write a for loop that prints out a line for each possible combination of first and last names. i.e. "FIRSTNAME-LASTNAME" 


//hint of a two nested for loops
for( var i = 0 ; i < nums.length ; i++ )
{
	for( var j = 0 ; j < nums.length ; j++ )
	{
		console.log( "i: ", i, " j: ", j, " nums[i]: ", nums[i], " nums[j]: ", nums[j]   );
	}
}
