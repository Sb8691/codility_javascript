function solution(A) {
    let result = 0
    for (let number of A){
        result ^= number
    }

    return result;
}
