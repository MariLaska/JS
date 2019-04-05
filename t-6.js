function numberDay(date) {
    date = new Date(date);//преобразование строки к дате
    let now = new Date(); //текущая дата
    if (date > now) {
        alert("Уточните дату!");
    } else {


        let day = now.getTime() - date.getTime(); //в милесекундах
        let millisecondsPerDay = 1000 * 60 * 60 * 24;//формула для милесекунд
        let days = day / millisecondsPerDay;//преобразование к дням
        return Math.round(days);//округление дней
    }
}
let date = '2010.10.28';

let a = numberDay(date);
document.writeln(a); // + "<br>");