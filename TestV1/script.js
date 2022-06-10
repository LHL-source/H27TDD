console.log('hello 6-6-2022') //w? y

//H27 exercise nr 3: testing with TDD exc nr 3 findNeedle w? yes

const findNeedle = (wordArray, toFindWord) => {
    const findIndex = wordArray.indexOf(toFindWord);
    return findIndex
}
const rij = ["house", "train", "slide", "needle", "book"];
const test = findNeedle(rij, 'needle');
//einde nr3 findneedle-------------------------------------





//H27 exercise: testing with TDD excercise nr 2 getWordLenghths
//function array eachItem length Works? yes awesome job----------------------
// const stringLength = (param) => {
//     //  console.log('entering function stringLength'); //w?y
//     //  console.log('param', param); //W ? y
//     /* add:*/
//     const myArrayEachItemLength = param.map((eachItem) => {
//         //   console.log('eachItem:  ', eachItem) //W?y
//         const eachIteamLength = eachItem.length;

//         // console.log('eachItem.length:    ', eachItem.length); // W ? y
//         // console.log('eachIteamLength:    ', eachIteamLength); //w?y

//         return eachIteamLength;
//     });
//     //console.log('myArrayAddOne', myArrayAddOne);
//     return myArrayEachItemLength;
// };
// const num = ['soep', 'kat', 'tv'];
// const printEachItemLength = stringLength(num);
// console.log('PrintEachItemLength: ', printEachItemLength); //W ? y

//end opdr 2 function array getWordLength ------------------------------------------------------------------

//test word length in array (small array) ,W? y
// const word = 'noten';
// console.log('word.lenght:', word.length); //w? y

// const word_1 = ['soep', 'kat', 'tv'];
// console.log(word_1.length);
//end test word length in array (small array)--------------------------------------------------


//hieronder kladblok mag tzt weg 6-6-2022
// test("Get word lengths", function() {
//     const words = ["sun", "potato", "roundabout", "pizza"];
//     const outPut = getWordLenghths(words.length);
//     //const output = getWordLengths(words);
//     const willBe = [3, 6, 10, 5];

//     //const output = getWordLengths(words);
//     expect(output).toEqual(willBe);
// });*/