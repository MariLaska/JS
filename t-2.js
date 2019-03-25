
function typ( x) {
    document.writeln('undefined, number, boolean, string, object, null:');
  
return (x +"-"+ typeof(x)+"<br>");
}

// alert(typ(8));
// alert(typ("8"));
// alert(typ(null));
// alert(typ(NaN));
// alert(typ(true));
// alert(typ(undefined));
document.writeln(typ("Hello"));
document.writeln(typ(7));
document.writeln(typ(undefined));
document.writeln(typ(true));
document.writeln(typ(NaN));
document.writeln(typ(null));