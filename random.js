function whosPaying(names) {
    
    
    
    var randomIndex = Math.floor(Math.random() * names.length);
    var person = names[randomIndex];
    
    return person + " is going to buy lunch today!";
    
    
}

var everyone = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(everyone));
