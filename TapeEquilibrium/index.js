function solution(A) {

    let left = A[0];
    let right = A.reduce((a,b)=> a+b) - A[0];    
    
    let min = Math.abs(left - right);
    for (let i = 1; i < A.length-1; i++){
        left += A[i];
        right -= A[i];
        if (min > (Math.abs(left - right))) {
            min = Math.abs(left - right);
        }
    }
    return min;

}


// result: https://app.codility.com/demo/results/trainingMBN4RZ-GKE/