//module.export = dubble;
//module.exports = double; //w ? not yet

//function double W? y
export function double(element) {
    return element * 2;
}


// const printDouble = double(2);
// console.log('printDouble: ', printDouble);
//H27 Exercise Tdd opdracht 1 addOne
//module.exports = addOne; //w? is goed zo

//function addOne Works? yes good job

// const addOne = (param) => {
//     //console.log('entering function addOne'); //w?y
//     // console.log('param', param); // W ? y

//     add: myArrayAddOne = param.map((eachItem) => {
//         // console.log('eachItem:  ', eachItem)//W?y
//         // const eachItemAddOne = eachItem + 1;//W?y
//         console.log(' eachItemAddOne ', eachItemAddOne);

//         return eachItemAddOne;
//     });
//     console.log('myArrayAddOne', myArrayAddOne);
//     return myArrayAddOne;
// };
// const num = [1, 2, 3, 4];
// const addOnePrint = addOne(num);
// console.log('addOnePrint:  ', addOnePrint);
//W ? y
//end H27 Exercise Tdd opdracht 1 addOne

//H27 Exercise Tddopdracht 2-------------------------------------------------------
//function array eachItem length Works? yes awesome job----------------------
// const getWordLengths = (someWords) => {
//     //  console.log('entering function stringLength'); //w?y
//     //  console.log('someWords', someWords); //W ? y
//     /* add:*/
//     const myArrayEachItemLength = someWords.map((eachItem) => {
//         //   console.log('eachItem:  ', eachItem) //W?y
//         const eachIteamLength = eachItem.length;

//         // console.log('eachItem.length:    ', eachItem.length); // W ? y
//         // console.log('eachIteamLength:    ', eachIteamLength); //w?y

//         return eachIteamLength;
//     });
//     //console.log('myArrayAddOne', myArrayAddOne);
//     return myArrayEachItemLength;
// };
//const num = ['soep', 'kat', 'tv'];
//const printEachItemLength = getWordLengths(num);
//console.log('PrintEachItemLength: ', printEachItemLength); //W ? y

//module.exports = getWordLengths;//w? not yet
//end function array eachItem length ------------------------------------------------------------------

//H27 exercise nr 3: testing with TDD exc nr 3 findNeedle w? yes----------------------------------------

// const findNeedle = (wordArray, toFindWord) => {
//     const findIndex = wordArray.indexOf(toFindWord);
//     return findIndex
// }

//module.exports = findNeedle;
// const rij = ["house", "train", "slide", "needle", "book"];
// const test = findNeedle(rij, 'needle');
//einde nr3 findneedle--------------------------------------------------------------------------