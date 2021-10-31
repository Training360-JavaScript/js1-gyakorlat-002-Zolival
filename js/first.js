/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

'use strict'

/*const brutto = array => {
    let vatArray = 0;
    array.forEach( value => { 
        let number = parseFloat(value) * 1.27;
        vatArray += number;
    });
    let roundedNumberSum = vatArray.toFixed(0)
    console.log(parseFloat(roundedNumberSum), typeof parseFloat(roundedNumberSum));
    return parseFloat(roundedNumberSum)
}
*/
const brutto = (array) => {
    let vatArraySum =  array.map((x) => { return parseFloat(x) * 1.27} )
    .reduce((a, b) => a+b)
    console.log('vatArray =', parseFloat(vatArraySum.toFixed(0)));
    return parseFloat(vatArraySum.toFixed(0))
}

    console.log('function call from the code:', "brutto(['22', '10', '44', '55'])");
    brutto([22, 10, 44, 55])
