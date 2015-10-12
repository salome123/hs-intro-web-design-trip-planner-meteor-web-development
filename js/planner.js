// Code Your Solution Here

// name
// age
// trip_destination
// number_of_travelers
// type_of_trip (relaxing, adventure, etc)
var name = prompt('Please enter your name:');

var age = prompt('Thank you ' + name + '. Please enter your age: ');

var trip_desitination = prompt("Great " + name +  "! Please enter the destination you'd like to visit:");

var number_of_travelers = prompt("How many people will be traveling with you?");

var type_of_trip = prompt("What type of vacation would you like to have (relaxing, rural, city, adventure, etc");

alert(name + ", age " + age + " would like to go to " + trip_desitination + " with " + number_of_travelers + "people. They would like to have a " +  type_of_trip + "vacation." );

//Bonus:

// if (type_of_trip === "relaxing") {
//   alert(name + ", age " + age + " would like to go to " + trip_desitination + " with " + number_of_travelers + "people. They would like to have a " +  type_of_trip + "vacation, and should go to Sandals Resort.");
// } else if (type_of_trip == "adventure"){
//     alert(name + ", age " + age + " would like to go to " + trip_desitination + " with " + number_of_travelers + "people. They would like to have a " +  type_of_trip + "vacation, and should go hike Machu Pichu");
// } else if (type_of_trip == "rural"){
//       alert(name + ", age " + age + " would like to go to " + trip_desitination + " with " + number_of_travelers + "people. They would like to have a " +  type_of_trip + "vacation, and should go to the middle of the desert.");
// } else if (type_of_trip == "city"){
//   alert(name + ", age " + age + " would like to go to " + trip_desitination + " with " + number_of_travelers + "people. They would like to have a " +  type_of_trip + "vacation, and should go to Paris.");
// } 
