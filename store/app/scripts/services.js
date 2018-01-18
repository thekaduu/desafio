"use strict";
angular.module("moblyServices", [])
    .service('cartService', function () {
        var itemCarts = {
            orderItem: [],
            totalAmount: 0
        };
        if (localStorage.ic) {
            itemCarts = JSON.parse(localStorage.ic);
        }

        return {
            all: function () {
                return itemCarts;
            },
            add: function(item, amount) {
                var index = itemCarts.orderItem.findIndex(function(itemInCart){
                    return itemInCart.id == item.id;
                });
                if (index < 0) {
                    item.amount = amount;
                    itemCarts.orderItem.push(item);
                } else {
                    itemCarts.orderItem[index].amount +=  amount
                }
                itemCarts.totalAmount += amount;
                localStorage.ic = JSON.stringify(itemCarts);
                alert("Adicionado ao carrinho");
            },
            remove: function(item) {
                var index = itemCarts.orderItem.findIndex(function(itemInCart){
                    return itemInCart.id == item.id;
                });
                if (index < 0 ) {
                    return;
                }
                var product = itemCarts.orderItem[index];
                itemCarts.orderItem.splice(index,1);
                itemCarts.orderItem.filter(function(i){i != undefined || i != null   });
                itemCarts.totalAmount = itemCarts.totalAmount - product.amount;
                localStorage.ic = JSON.stringify(itemCarts);
            },
            totalPrice: function(){
                var total = 0;
                itemCarts.orderItem.forEach(function(item) {
                    total += (item.price * item.amount);
                });

                return total;
            }
        };
    });