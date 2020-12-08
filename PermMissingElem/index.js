function solution(A) {
    let size = A.length
    let sum = (size + 1) * (size +2) / 2;
    for(i=0;i<A.length;i++){
        sum -= A[i]
    }
    return sum
}