function solution(A, K) {
    if(A.length < 2){
        return A
    }
    for(i=0;i<K;i++){
        A.unshift(A.pop())
    }
    return A
}