let word = "hello";
let textArray = [
    [ "fox", "lion", "tiger"],
    [ "king", "queen", "princess"],
    [ "hi", "hello", "goodbye"],
    [ "hello", "picture", "pencil"]
];

let ifWordExist = function(textArr, anyWord){
    let res =false;
    textArr.forEach(textarr1 => {
        if(textarr1.includes(anyWord)) res = true;
    });
    return res;
}
console.log(ifWordExist(textArray, word));

