"use script";

shoppingCart=[];
itemList=[
{name:"Pants",price: 10},
{name:"Hat",price: 5},
{name:"Shoes", price:50,},
{name:"Purse",price:100},
{name:"Gloves",price:5}
];


function addItem(itemName,itemPrice){
    shoppingCart=[...itemList,{name:itemName,price:itemPrice}];
}
function removeItem(itemName){
    let index =shoppingCart.findIndex(name => name === itemName)
    shoppingCart=[...shoppingCart.slice(0, index),...shoppingCart.slice(index, + 1)];
}
function editItem(oldItemPrice, newItemPrice){
    index = shoppingCart.findIndex(price => oldItemPrice.price === price)
    shoppingCart=[...shoppingCart.slice(0, index),{price:newItemPrice}, ...shoppingCart.slice(index, + 1)];
}
function printTotal(){
    let totalPrice = 0;
    for( {price} of shoppingCart){
        totalPrice +=(price *1.06);
    }
    console.log(totalPrice);
}


console.log(itemList);
addItem("J", 0);
console.log(shoppingCart);
removeItem("J");
console.log(shoppingCart);
printTotal();

