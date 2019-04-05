function arrOfStudents(str) {
    let names = ['Настя', 'Ира', 'Катя', 'Сергей', 'Стас', 'Ваня', 'Миша', 'Женя', 'Саша', 'Денис', 'Дима', 'Коля', 'Паша', 'Надежда', 'Таня', 'Валера'];
    
    let newArr = [];
    for (let i = 0; i < names.length; i++) {
        if (str.indexOf(names[i])!=-1)
            newArr.push(names[i]);
    }

    return newArr;
}
let str = 'Настя пропустила пару. Валера и Сергей вообще не ходят. А Таня всегда опаздывает.';

 let a = arrOfStudents(str);
document.writeln(a); // + "<br>");