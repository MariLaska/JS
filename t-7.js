    var arr = [" Царь", " Укроп", " Кенгуру", " Ель", " Небоскреб", " Гусар"];

    function sortRandom(a, b) {
        return Math.random() - 0.5;
    }
    arr.sort(sortRandom);
    document.writeln(arr);

    //Вар 2
    function mySort(mas, callback) {

        for (let i = 0; i < mas.length; ++i) {
            for (let j = i + 1; j < mas.length; ++j) {

                let result = callback(mas[i], mas[j]);
                if (result == true) {

                    let temp = mas[i];
                    mas[i] = mas[j];
                    mas[j] = temp;

                }
            }
        }
    }

    let testArr = [4, 23, 5, 8, 1];

    function ubiv(a, b) {
        if (a < b) {
            return true;
        } else {
            return false;
        }
    }

    function vozr(a, b) {
        return a > b;
    }

    function random(a, b) {
        let n = Math.random();
        if (n < 0.5) {
            return true;
        } else {
            return false;
        }
    }
    mySort(testArr, vozr);
    console.log(testArr);

    mySort(testArr, ubiv);
    console.log(testArr);

    mySort(testArr, random);
    console.log(testArr);