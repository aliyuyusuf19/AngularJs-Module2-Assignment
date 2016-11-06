(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var  showList=this;

showList.items = ShoppingListCheckOffService.getItem();

showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
     showList.message2="";
    if(showList.items.length==0){
      showList.message="Everything is bought!";

   }
  };
showList.message2="Nothing both yet!";
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
var showList2=this;
showList2.items = ShoppingListCheckOffService.getItem2();

}


function ShoppingListCheckOffService() {
  var service=this;
  var shoppingList = [{name:"shinkafa",package:"bag", qauntity:2 }, {name:"Taliya",package:"cotton", qauntity:5},
  {name:"Zobo",package:"bottle", qauntity:13},  {name:"Gyada",package:"tin", qauntity:500},
    {name:"Waina",package:"plate", qauntity:1000}

];
var shoppingList2=[];
service.removeItem = function (itemIdex) {
  var item=shoppingList[itemIdex];
  shoppingList2.push(item);
    shoppingList.splice(itemIdex, 1);

  };


  service.getItem=function () {
    return shoppingList;
  };
  service.getItem2=function () {

    return shoppingList2;
  };

}
}
)();
