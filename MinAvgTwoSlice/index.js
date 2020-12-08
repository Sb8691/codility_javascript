// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const prefixSum = []
    A.reduce((a,b,i) => prefixSum[i] =  a+b, 0)
    let min = 100001;
    let startIndex =0 
    for (let i = 0; i < prefixSum.length-2; i++) {
        
        let avg2 = (prefixSum[i+2] - prefixSum[i])/2;
        
        if (min > avg2) {
            min = avg2;
            startIndex = i;
            // console.log(min+", "+startIndex);
        }
    }
    
    // for slices with length 3
    for (let i = 0; i < prefixSum.length-3; i++) {
        
        let avg3 = (prefixSum[i+3] - prefixSum[i])/3;    
        
        if (min > avg3) {
            min = avg3;
            startIndex = i;
            // console.log(min+", "+startIndex);
        }
        
    }
    
    return startIndex;
}

//result https://app.codility.com/demo/results/trainingRP2GKZ-YYG/
