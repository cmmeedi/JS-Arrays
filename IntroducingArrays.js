//An array can have any data type within it and it can even have several different data types
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Each element in an array has an index starting at 0

//Sunday would be 0 and Saturday is 6

//Arrays will always add an additional number to the length of the array.  Days has 6 elements but days.length will output 7

days[1] = 'Manday';

//Although you cannot change the index of a variable, you can change the indexed variable within an array.

let months = ['January'];

months[2] = 'February';

//Since i added a month to the index of 2, the index of one is left empty and the array will output that.

//it can be fixed though

months [1] = 'February';

//now theres two februarys.  

months[2] = null;
//the array will not remove that node.  Let's go on and find out how

//We can use pop() to remove the last element.  This will only remove the last element


//by declaring this variable we can see what was popped out from the months array
let month = months.pop();

months.pop();

//If i want to add march and am too lazy for some reason to add the indices of 2 then i can use the push() method

months.push('March');

//Now march is added to months

months.push('April');
months.push('May');
months.push('June');
months.push('July');
months.push('August');
months.push('September');
months.push('October');
months.push('November');
months.push('December');


//The pop() and push() methods are of a "Queue".  Think of a line at a starbucks.  The first person in line is the first person out.  F.I.F.O.  First in, First out.

//Now this will extract the current month
let currentMonth = months.shift()

//Let's add February and January back in using Unshift().  We need to add them in backwards so February can be after January

months.unshift('February');
months.unshift('January');

//Now the whole year is there

//Lets create 4  arrays that represent each quarter in the year
let q1 = ['January', 'February', 'March'];
let q2 = ['April', 'May', 'June'];
let q3 = ['July', 'August', 'September'];
let q4 = ['October', 'November', 'December'];

//Using concat() we can merge each of these arrays and create an array called firstHalf

let firstHalf = q1.concat(q2);

//Do the same for the secondHalf

let secondHalf = q3.concat(q4);

//Now add both halves to a variable called year

let year = firstHalf.concat(secondHalf);

//Now there is a variable called year with all the months in it

//All the q1, q2, q3, and q4 variables are left unchanged along with the firstHalf and secondHalf arrays

//If i want to know if q1 has february in it i can use the includes() method

//Output is true;
q1.includes('February');

//Remember it is Case sensitive

//To find out what the indices of february is 

//Output is 1
q1.indexOf('February');

//February is actually the second month but keep in mind how arrays number things starting with 0

//Output is -1
q1.indexOf('Monday');

//Which indicates that it is not in the array

//The array can be reversed using the reverse() method

// --- !!! WARNING !!! --- //

//Keep in mind when using this method it will save the variable

//To take the first third of the year we can use a method called splice()

//Output is 'January', 'February', 'March', 'April'
let firstThird = year.slice(0, 4);

//Now these have been added to the firstThird variable

//Take the lastThird by using negative numbers
let lastThird = year.slice(-4);

//The splice() method does the same thing but it will omit it from what ever array your are applying it to.

// --- !!! WARNING !!! --- //

//Keep in mind when using this method it will save the variable so any additions or subtractions from the variable will be permanent to the variable

