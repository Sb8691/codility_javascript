function solution(N) {
    let numberInBinary = (N>>>0).toString(2);
    let longestGap = 0
    let acc = 0
    for(i=0;i<numberInBinary.length;i++){
        if(numberInBinary[i]==="0"){
            acc++
            if(numberInBinary[i+1]==="1"){
                if(acc>longestGap){
                    longestGap=acc;
                }
                acc=0
            }
        }
        
    }
    return longestGap;
}
