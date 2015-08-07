var Meal = function(){
  this.diners = [];
  this.total = 0;
}

Meal.prototype.addDiners = function(){
  for(i=0; i < arguments.length; i++){
    this.diners.push(arguments[i]);
  }
}

Meal.prototype.cashOut = function(){
  for(i = 0; i < this.diners.length; i++){
    this.total += this.diners[i].getTotal();
  }
  return this.total;
}

module.exports = Meal;
