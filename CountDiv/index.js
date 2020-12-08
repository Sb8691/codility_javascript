// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    const offset = A%K === 0 ? 1 : 0;
    return parseInt(B/K) - parseInt(A/K) + offset
}

// result: https://app.codility.com/demo/results/training2VXWQA-KEM/