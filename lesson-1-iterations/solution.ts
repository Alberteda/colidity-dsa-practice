// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
  // Implement your solution here

  // Convert the number to binary string
  const binaryString = N.toString(2);

  // Split the binary string by '1'
  const binaryGaps = binaryString.split("1");

  // Initialize max length of binary gap
  let maxLength = 0;

  // Iterate through the binary gaps
  for (let i = 1; i < binaryGaps.length - 1; i++) {
    if (binaryGaps[i].length > maxLength) {
      maxLength = binaryGaps[i].length;
    }
  }

  return maxLength;
}
