function solution(S) {
    let counter = 0;
    
    for (var i = 0; i < S.length; i++) {
        switch(S[i]) {
            case "(":
                counter++;
                break;
                
            case ")":
                counter--;
                break;
        }
        
        if (counter < 0) return 0
    }
    
    return counter === 0 ? 1 : 0 
}

//https://app.codility.com/demo/results/trainingQZ3VRE-8YH/