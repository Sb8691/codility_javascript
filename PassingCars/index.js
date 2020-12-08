function solution(A) {
    let zerosCount = 0;
    let pairs = 0;
    for(let i=0; i<A.length; i++){
        A[i]===0 ? zerosCount++ : pairs += zerosCount;
        if(pairs > 1000000000) return -1
    }
    return pairs;
}

// result: https://app.codility.com/demo/results/trainingYM9FC8-NM2/