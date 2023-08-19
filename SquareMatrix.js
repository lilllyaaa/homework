let matrix =[
    [0,1,1,0,1,1],
    [1,0,1,1,0,1],
    [0,0,1,1,1,1],
    [0,1,0,1,1,1],
    [0,1,0,1,1,1]
];

let matrixWith1 = function(anymatrix){
    let num = 0;
    let i = 0;
    let sum = anymatrix.map((element, index) => {
        if(element === 1){
            i++;
        }
    });
    return num;
}
console.log(matrixWith1(matrix));  
