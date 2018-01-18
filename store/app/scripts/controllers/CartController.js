
'use strict';

angular.module('storeApp')
  .controller('CartController',["cartService", function (cartService) {

      this.itemsInCart = cartService.all();
      this.cartService = cartService;

      this.removeItem = function(itemId){
          var product = this.itemsInCart.orderItem[itemId];

        if (confirm("Deseja excluir  " + '"' + product.name + '" de seu carrinho de compra?')) {
            cartService.remove(product);
            this.itemsInCart = cartService.all();
        } else {
            alert("nao");
        }
      }

  }]);
