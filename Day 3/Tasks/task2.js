// create a shopping cart EventEmmitter and itemAdded
// 4 times and log the item added

const EventEmitter = require('events');

const shoppingCrt = new EventEmitter();

shoppingCrt.on('itemAdded', (item) => {
    console.log(`Item added to cart: ${item}`);
})

shoppingCrt.emit('itemAdded', 'Apple');
shoppingCrt.emit('itemAdded', 'Banana');
shoppingCrt.emit('itemAdded', 'Orange');
shoppingCrt.emit('itemAdded', 'Grapes');

console.log("-----------------------");


class ShoppingCart extends EventEmitter {
    addItem(item) {
        this.emit('itemAdded', item);
    }
}

const cart = new ShoppingCart();

cart.on('itemAdded', (item) => {
    console.log(`Item added: ${item}`);
});

cart.addItem('Apple');
cart.addItem('Banana');
cart.addItem('Mango');
cart.addItem('Orange');
