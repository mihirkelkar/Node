var Person = require('./Models/personModel.js');
var Dishes = require('./Models/dishesModel.js');
var Meal = require('./Models/mealModel.js');


var DinerOne = new Person('Leslie Knope');
var DinerTwo = new Person('Ron Swanson');


var waffle = new Dishes("JJ Diner's Waffles", 3);
var cream = new Dishes("Extra Whipped Cream", 1.2);
DinerOne.addDishes(waffle, 2);
DinerOne.addDishes(cream, 2);


var bacon = new Dishes("Bacon strips", 1.5);
var eggs = new Dishes("Eggs", 2);
DinerTwo.addDishes(bacon, 5);
DinerTwo.addDishes(eggs, 5);

lunch = new Meal();
lunch.addDiners(DinerOne, DinerTwo);
var mealtotal = lunch.cashOut();

console.log("Lunch total : ", mealtotal);
