function solution(X, A) {
    const seconds = new Set()
    for(i=0;i<A.length;i++){
        seconds.add(A[i])
        if(seconds.size === X){
            return i
        }
    }

    return -1

}

// result: https://app.codility.com/demo/results/trainingZQ9HWX-XY5/