/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/
'use strict';
/*
Más a feladat. Nem értettem meg, hogy ez egy txt kell legyen, és nem egy lista a html felületen, ami tartalmazza a tömb elemeit
const generateList = (array)=>{
    array.forEach((child) => {
        if (typeof child === "string") {
            let listElement = document.createElement('li')
            listElement.appendChild(document.createTextNode(child));
            document.querySelector('#ul').appendChild(listElement);
            }
            else{
                console.log('this is not string!');
            }
    });
}
*/

const generateList = (array)=>{
    let out = '<ul>';

    array
        .map((child) => `<li>${child}</li>`)
        .forEach(element => {out += element});

    let output = out + '</ul>';
    console.log('output=', typeof output);
    return output
}
console.log('function call from the code, see html interface:', "generateList(['lista 1', 'lista 2', 'lista 3', 'lista 4', 'lista 54', 'lista 33'])");
generateList(['lista 1', 'lista 2', 'lista 3', 'lista 4', 'lista 54', 'lista 33'])