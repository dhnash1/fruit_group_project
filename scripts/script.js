var playerMoney = 100;
var playerInv = [{fruit:'apple', amount:0} , {fruit:'orange', amount:0} , {fruit:'banana' , amount:0}, {fruit:'grape', amount:0}];
console.log(playerInv[0].fruit);
$(document).ready(function(){
  $("#buyApple").on("click", function(apple){
    console.log("The buy apple button was clicked.");
  var quantity = $("#quantityApple").val();
  console.log("This is quantity:", quantity);
  var price = $("#applePrice").html();
  console.log("This is the Apple Price:", price);
  var calcPrice = quantity * price;
  console.log("Total Price: ", calcPrice);
  $("#totalPriceApple").text(calcPrice); //[Displays only the price of what apples we buy when we click button, do we want a running total?]
  playerInv[0].amount = playerInv[0].amount + 1 * quantity; //the lazy mans parseint()
  console.log(playerInv[0].amount);
});//end apple click
$("#buyOrange").on("click", function(orange){
  console.log("The buy orange button was clicked.");
var quantity = $("#quantityOrange").val();
console.log("This is quantity:", quantity);
var price = $("#orangePrice").html();
console.log("This is the Orange Price:", price);
var calcPrice = quantity * price;
console.log("Total Price: ", calcPrice);
$("#totalPriceOrange").text(calcPrice);
playerInv[1].amount = playerInv[1].amount + 1 * quantity;
console.log(playerInv[1].amount);
});//end orange click
$("#buyBanana").on("click", function(apple){
  console.log("The buy banana button was clicked.");
var quantity = $("#quantityBanana").val();
console.log("This is quantity:", quantity);
var price = $("#bananaPrice").html();
console.log("This is the Banana Price:", price);
var calcPrice = quantity * price;
console.log("Total Price: ", calcPrice);
$("#totalPriceBanana").text(calcPrice);
playerInv[2].amount = playerInv[2].amount + 1 * quantity;
console.log(playerInv[2].amount);
});//end Banana click
$("#buyGrape").on("click", function(apple){
  console.log("The buy grape button was clicked.");
var quantity = $("#quantityGrape").val();
console.log("This is quantity:", quantity);
var price = $("#grapePrice").html();
console.log("This is the Grape Price:", price);
var calcPrice = quantity * price;
console.log("Total Price: ", calcPrice);
$("#totalPriceGrape").text(calcPrice);
playerInv[3].amount = playerInv[3].amount + 1 * quantity;
console.log(playerInv[3].amount);
});//end Grape click
//start elliot sanit BUG: Alert is displayed, but it doesnt stop anything
$("#buyApple").on("click", function (){
  console.log("in buy apple function");
  var qApple = $("#quantityApple").val();
  if(qApple.length === 0){
      alert("Please input a number!");
    } else if (qApple < 0) {
      alert("Please input a postive number!");
    } else {
      return qApple;
    }//end if condition
});//end buyApple test function

//begin buy apple on click
$("#buyOrange").on("click", function (){
  console.log("in buy orange function");
  var qOrange = $("#quantityOrange").val();
  if(qOrange.length === 0){
      alert("Please input a number!");
    } else if (qOrange < 0) {
      alert("Please input a postive number!");
    } else {
      return qOrange;
    }//end if condition
});//end buyApple test function
//begin buy banana on click
$("#buyBanana").on("click", function (){
  console.log("in buy grape function");
  var qBanana = $("#quantityBanana").val();
  if(qBanana.length === 0){
      alert("Please input a number!");
    } else if (qBanana < 0) {
      alert("Please input a postive number!");
    } else {
      return qBanana;
    }//end if condition
});//end buyBanana test function

//begin buy grape on click
$("#buyGrape").on("click", function (){
  console.log("in buy grape function");
  var qGrape = $("#quantityGrape").val();
  if(qGrape.length === 0){
      alert("Please input a number!");
    } else if (qGrape < 0) {
      alert("Please input a postive number!");
    } else {
      return qGrape;
    }//end if condition
});//end buy grape test function
//end elliot sanit
//player Inventory
$('.fruitButton').on('click', function(){
  $('#aInv').html("<p>Apples: " + playerInv[0].amount + "</p>");
  $('#oInv').html("<p>Oranges: " + playerInv[1].amount + "</p>");
  $('#bInv').html("<p>Bananas: " + playerInv[2].amount + "</p>");
  $('#gInv').html("<p>Grapes: " + playerInv[3].amount + "</p>");
});//end inventory
}); // a loop would probably really help here. also end ready.
//start joeys randomization
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#applePrice').html(number.toFixed(2) );
},
15000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#orangePrice').html(number.toFixed(2) );
},
15000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#bananaPrice').html(number.toFixed(2) );
},
15000);
setInterval(function() {
  var number = 0.50 + Math.floor(Math.random() * 9.99);
  $('#grapePrice').html(number.toFixed(2) );
},
15000);
var timer = 15;
setInterval(function(){
  if (timer !== 0) {
    timer=timer - 1;
    console.log(timer);
  }else{
    timer = 15;
  }

}, 1000);
setInterval(0);
//end joeys randomization | [ BUG ]: Numbers dont appear untill first randomization.
