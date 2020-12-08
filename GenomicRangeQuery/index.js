function solution(S, P, Q) {
    const res=[];
    for(i=0;i<P.length;i++){
        if(S.substring(P[i],Q[i]+1).includes("A")){
            res.push(1)
        } else if(S.substring(P[i],Q[i]+1).includes("C")){
            res.push(2)
        } else if(S.substring(P[i],Q[i]+1).includes("G")){
            res.push(3)
        } else {
            res.push(4)
        }
    }

    return res;
}


// result: https://app.codility.com/demo/results/trainingAPYVK7-SS8/