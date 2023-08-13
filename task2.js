let matrixNXM = [
    [1,2,3,4,5],
    [0,11,17,20],
    [11,20,101,7],
    [1,1,1,1]
]
let getMinimumArray = function(matrix){
    let newArray = [];
    newArray = matrix.map(array => Math.min(...array))
    return newArray;
}
console.log(getMinimumArray(matrixNXM));
