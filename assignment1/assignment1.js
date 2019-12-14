var w = ["Ravens", "stadium", "is", "Orioles", "stadium"];
var x = ["Baltimore", "Downtown", "located", "near"];
var y = ["located", "Downtown", "near", "Fells Point", "Fed Hill", "Canton"];
var z = ["Towson", "Stevenson", "UMBC", "University", "Loyola", "University", "Morgan State", "Frostburg"];
var arr = [];

// Start implementation below:


console.log("Value pop for x");
console.log(x.pop());
console.log(x.pop());
console.log(x.pop());

console.log("Value pop for w");
console.log(w.pop());
console.log(w.pop());

console.log("x concats w");
arr = x.concat(w);
console.log(arr);

console.log("Value pop for y");
console.log(y.pop());
console.log(y.pop());
console.log(y.pop());

console.log("arr concats y");
arr = arr.concat(y);
console.log(arr);

console.log("Value pop for z");
console.log(z.pop());

arr.push(z.pop());

// Should contain: ['Baltimore', 'Ravens', 'stadium', 'is', 'located', 'Downtown', 'near', 'Morgan State']
console.log("Final Value");
console.log(arr);
