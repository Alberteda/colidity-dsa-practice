// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Cyclic Rotation

function solution1(A: number[], K: number): number[] {
  const N = A.length;
  if (N === 0) return A;

  /*
        Check for 
        - K is Zero, 
        - K is the length or a multiple of the length of the array. 
        - K is greater than the length N, use the modulus to get a remainder 
    */

  if (K === 0 && K === A.length) return A;

  if (K > N) K = K % N;

  /* 
        We divide the array into two seperate parts, 
        - Parts moving to the front and 
        - Parts moving to the end 

        
    */

  const part1 = A.slice(N - K);
  const part2 = A.slice(0, N - K);

  return part1.concat(part2);
}

// OddOccurrencesInArray

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2(A: number[]): number {
  // Implement your solution here

  let result = 0;

  A.forEach((element) => {
    result = result ^ element;
  });

  return result;
}
