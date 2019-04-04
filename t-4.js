var rand = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sozdaniemas(n = 10) {
    var mas = [];
    for (var i = 0; i < n; i++) {
        mas.push(rand(0, 100));
    }
    return mas;
}
function perebor(arr) {
    var razmer = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 6) {
           arr.splice(i, 1);
        } else {
            var razmer = razmer+1;
        }
    }
    var procent = (razmer * 100) / arr.length;
    document.writeln(arr);
    document.writeln(arr.length);
    return Math.round(procent);
}

var a=sozdaniemas(10);


document.writeln(a + "<br>");

//document.writeln(sozdaniemas());


document.writeln(perebor(a)+ "%");

