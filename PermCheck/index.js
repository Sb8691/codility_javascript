// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const sortedFilterdArray = [...new Set(A.sort())]
    if(A[0] === 1 && sortedFilterdArray.length === A.length){
        for(i=1;i<Math.max(...sortedFilterdArray);i++){
            if(!sortedFilterdArray.includes(i)){
                return 0
            }
        }
        return 1
        
    }
    return 0
}


// https://app.codility.com/demo/results/trainingCDSBE9-EB8/