//declare a variable called person
var person;

//assign the person variable an object
person = {};


//console.log the person variable
console.log(person)




///ADDING PROPS TO OBJECTS
//will assign 5 properties to the person variable
//name
person['name'] = 'Bob Steve';

//age
person.age = 150;

//hobbies
person['hobbies'] = ['football', 'sleeping', 'reading', 'running', 'TikToking', 'dancing']

//school
person.school = 'UNI Tech';

//grade
person['grade'] = '10th 9th Grade';


//console.log the object again
console.log(person)



//DELETING PROPS FROM OBJECTS
//to delete a proprty use the keyword delete with the property name
delete person.grade
console.log(person)


//Looping through OBJECTS
// we will use a for in loop 
    //these loops will iterate over every property

for(var key in person){
  console.log(key) //print the keys of the object 
}

for(var key in person){
  console.log(person[key]) //prints values of all keys 
}











//Operators


//math 
//addition: +
3 + 5

//subtraction: - 
3 - 5

//multiplication: * 
3 * 5

//division: /
3 / 5

//modulous (remainder): %
5 % 3  





//Write a loop that will print all multiples of 17 up to 1000
var sum = 17;
for(var x = 17; 17 < 1000; x++){
  if (x === 17){
    sum += x;
  }
}
console.log(sum);