function calcWordFrequencies() {
    // 1. Prompt for input
    const sentence = prompt("Enter a list of words (separated by spaces):");
  
    // 2. Split the sentence into words
    const words = sentence.split(" ");
  
    // 3. Create a map to store word frequencies
    const wordFrequencies = new Map();
  
    // 4. Iterate through the words and count their frequencies
    for (const word of words) {
      if (wordFrequencies.has(word)) {
        // Increase the count for existing words
        wordFrequencies.set(word, wordFrequencies.get(word) + 1);
      } else {
        // Add new words with a count of 1
        wordFrequencies.set(word, 1);
      }
    }
  
    for (const [word, frequency] of wordFrequencies.entries()) {
      console.log(word + " " + frequency);
    }
  }