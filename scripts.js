const item = {};

// Prompt is a BLOCKING operation.
item.name = prompt("What the item's name?");
item.price = prompt("What is the item's value?");
alert(`${item.name} is worth ${item.price}`);
