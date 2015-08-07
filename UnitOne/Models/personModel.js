var Person = function(name){
  this.name = name;
  this.orders = [];
  this.total = 0;
  //The individual tip gets defined from the mealModel;
  this.tip = null;
}

Person.prototype.addDishes = function(dish, quantity){
  this.orders.push(dish);
  this.total += dish.price * quantity;
}

Person.prototype.getTotal = function(){
  //Assuming that there is a fixed 10% tax on each meal
  //And assuming flat 8% gratuity on pre tax
  var total = 0
  this.tip = this.total * 0.08;
  this.total += this.total * 0.1;
  total = this.tip + this.total;
  return total;
}

module.exports = Person;
