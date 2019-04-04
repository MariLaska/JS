var rand = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sozdaniemas(n=10) {
    var mas = [];
    for (var i = 0; i < n; i++) {
        mas.push(rand(0, 100));
    }
    return mas ;
}
//mas.length
//alert(sozdaniemas(15));
//alert(sozdaniemas());
//alert(sozdaniemas('df'));


document.writeln(sozdaniemas(15)+"<br>");

document.writeln(sozdaniemas());
document.writeln(sozdaniemas('fcgc'));
