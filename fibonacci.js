// Q - Do you know what the fibonacci sequence is?
// 0 1 1 2 3 5 8 ...
// What is the nth number in the fibonacci sequence?
// index will be up to them

// let fibSequence = [0, 1]
//
// const sequenceFor = (n) => {
//   let y
//   for (let x = fibSequence.length; x <= n; x++) {
//     y = fibSequence[x-1] + fibSequence[x-2]
//     fibSequence.push(y)
//     console.log(fibSequence)
// }
//   return fibSequence[n]
// }
//
// console.log(sequenceFor(6))
// console.log(sequenceFor(6))

// memory optimisation - downsides to optimisation where we store the array outside the function - what if ask for millionth sequence - you might run out of memory to store the whole of the sequence
// if you store only the last two then you wouldn't be able to cache but you would be saving on memory
// solution would be to set a threshold for n, for small n optimise, for large n don't
let fibSequence = [0, 1]
const sequenceRecursive = (n) => {
   let length = fibSequence.length
  console.log(length)
  if (length - 1  === n) {
    return fibSequence[n]
  } else {
    fibSequence.push(fibSequence[length-1] + fibSequence[length-2])
    return sequenceRecursive(n)
  }
}

console.log(sequenceRecursive(5))

// optimisation - memoization - how to do? / how to cache

// while loop

// anagram solver - 1 way to sort strings or iterate over string a and remove from string b, if b is empty then it's an anagram/ iterate over length of string and create dictionary of characters / or create all anagrams of string a and see if string b is in there - precursor to 8 queens problem