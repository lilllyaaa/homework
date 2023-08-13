let matrix = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
];
let reversedMatrix = function(anyMatrix){
    let newMatrix = anyMatrix[0].map((element, index) => anyMatrix.map((row) => row[index]))
    return newMatrix;
}
console.log(reversedMatrix(matrix));
