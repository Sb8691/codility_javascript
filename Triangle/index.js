function solution(A) {
    if(A.length < 3) return 0
    A.sort((a,b)=> a-b)
    for(P=0,Q=1,R=2;P<A.length;P++,Q++,R++){
        if(
            ((A[P] + A[Q]) > A[R]) &&
            ((A[Q] + A[R]) > A[P]) &&
            ((A[R] + A[P]) > A[Q])
        ){
            return 1
        }
    }
    return 0
}

//result: https://app.codility.com/demo/results/trainingPR2CDK-GWM/
