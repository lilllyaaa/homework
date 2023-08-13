arr =[[1,2,3], [1,5,8,11,20], [11,10], [1,19,15,2], [1,100,2]]
let largeArray = function(array){
    let indexOfLargeArray = 0;
    let sumArray = arr.map(value => {
        let sum = value.reduce((accumulator, element) => {
        accumulator += element;
        return accumulator;
    }, 0)
    return sum;
})
    let max = Math.max(...sumArray);
    return sumArray.indexOf(max);
}
console.log(largeArray(arr));