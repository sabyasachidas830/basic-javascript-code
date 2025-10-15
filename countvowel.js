function countVowels(word) {
  const vowels = 'aeiou';
  let count = 0;
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('sabya'));