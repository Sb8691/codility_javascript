function solution(S) {
    if(S.length === 0) return 1
    if(S.length === 1) return 0
    const brackets = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    const closedBrackets = ["}", ")", "]"]
    const stack = []
    for(i=0;i<S.length;i++){
        if(brackets.hasOwnProperty(S[i])){
            stack.push(S[i])
        } else if(brackets[stack[stack.length-1]] == S[i]){
            stack.pop();
        } else if(closedBrackets.indexOf(S[i]) !== -1){
            return 0
        }
    }

    return stack.length === 0 ? 1 : 0

}


//result: https://app.codility.com/demo/results/trainingKSP2KG-R84/