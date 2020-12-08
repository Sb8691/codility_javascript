function solution(A) {
    let min = 1;
    A.sort((a,b) => a-b);

    for(var i of A){
        if(i>-1 && i ==min){
            ++min
        }
    }

    return min
}


//result: https://app.codility.com/demo/results/trainingGRVPZ4-MCC/