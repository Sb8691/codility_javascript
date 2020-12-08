function solution(A, B) {
    
    var downStream = []
    var upStream = []
    
    
    for (var i = 0; i < A.length; i++) {
        
        if (B[i] === 0) {
            while (downStream.length > 0) {
                var d = downStream.pop()
                
                if (d > A[i]) {
                    downStream.push(d)
                    break
                }
            }
        
            if (downStream.length === 0) {
                upStream.push(A[i])
            }
        } else {
            downStream.push(A[i])
        }
    }
    
    return downStream.length + upStream.length    
}

// https://app.codility.com/demo/results/training9CYHUA-8B4/