let word = "hello";
let textArray = [
    [ "f", "l", "t", "h", "e", "l", "l", "o"],
    [ "k", "q", "p", "l", "i", "l", "y", "a"],
    [ "h", "h", "g", "d", "b", "c", "a", "s"],
    [ "s", "a", "t", "t", "t", "s", "l", "s"]
];

let ifWordExist = function(textArr, anyWord){
    let res = false;
    textArr.forEach(arr => {
        arr.forEach((letter, index) => {
            let k=0;
            for(i=0; i<anyWord.length; i++){
            if(letter === anyWord[i] ){
                k++;
                if(k === anyWord.length) res = true;
            }else{
                break;
            }
        }
        return res;
        })
    })
    return res;
}
console.log(ifWordExist(textArray, word));

