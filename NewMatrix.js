let matrix = [
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ],
    [ 1, 2, 3, 4, 5 ]
]
let k = 20;
let getNewMatrix = function(anyMatrix, anyK){
    let newMatrix;
    let check =  anyMatrix.map((row) => {
        let rowSum = row.reduce((accumulator, element) => {
            accumulator += element;
            return accumulator;
        })
        if(accumulator > anyK){
            matrix.splice(row);
        }
    })
    return newMatrix;
}
console.log(getNewMatrix(matrix, k));