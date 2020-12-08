function solution(A) {
    A.sort((a,b)=> a-b);
    const negatives = [A[0], A[1], A[A.length-1]].reduce((a, b) => a * b);
    const lasts = A.slice(-3).reduce((a, b) => a * b)
    return Math.max(negatives, lasts)
}
// result: https://app.codility.com/demo/results/trainingBJCGXC-KP7/