// business logic:
function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.calculateCost = function(toppingsLength, pizzaSize) {
  var toppingsCost = (toppingsLength * .5)

  if (pizzaSize === "small") {
    var sizeCost = 6;
  } else if (pizzaSize === "medium") {
    var sizeCost = 9;
  } else {
    var sizeCost = 12;
  }
  var totalCost = (sizeCost + toppingsCost);
  return totalCost
}


// user interface logic:
$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    var toppingsArray = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var addTopping = $(this).val();
      toppingsArray.push(addTopping);
    });
    var yourToppingsLength = toppingsArray.length;

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var myOrder = new Pizza(toppingsArray, pizzaSize);
    var printTotal = myOrder.calculateCost(yourToppingsLength, pizzaSize);
    console.log(printTotal);
    $("#display").append("<p>" + printTotal + "</p>");
    $('.form-group').hide();
    $("#pizza-result").show();
  });
});
