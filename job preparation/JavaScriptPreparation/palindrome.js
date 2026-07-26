function isPalindrome1(word) {
    const cleanWord = word.replace(/\s/g, '').toLowerCase();
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

// Test cases to check your code:
console.log(isPalindrome1("racecar")); // Should print: true
console.log(isPalindrome1("javascript")); // Should print: false


function isPalindrome2(word) {
    let length = word.length -1;
    let half = Math.floor(word.length/2);
    
    for(let i=0; i<=(half); i++){
        if(word[i] !== word[length - i]){
            return false;
        }
    }
    return true;
}

// Test cases to check your code:
console.log(isPalindrome2("racecar")); // Should print: true
console.log(isPalindrome2("javascript")); // Should print: false


function isPalindrome3(word) {
    const reversedWord = [...word].reverse().join('');
    return word == reversedWord;
}

// Test cases to check your code:
console.log(isPalindrome3("racecar")); // Should print: true
console.log(isPalindrome3("javascript")); // Should print: false


function isPalindrome4(word) {
    const reversedWord = JSON.stringify([...word].reverse());
    return JSON.stringify([...word]) == reversedWord;
}

// Test cases to check your code:
console.log(isPalindrome4("racecar")); // Should print: true
console.log(isPalindrome4("javascript")); // Should print: false


function isPalindrome5(word) {
    // 1. Pehle original word ko clean kar lo (spaces hatao aur lowercase karo)
    const cleanWord = word.replace(/\s/g, '').toLowerCase();
    
    // 2. Ab Array.from() ka use karke usko reverse karo
    // Hum `cleanWord` bhej rahe hain, aur callback mein piche se characters utha rahe hain.
    const reversedWord = Array.from(cleanWord, (_, index) => {
        return cleanWord[cleanWord.length - 1 - index];
    }).join('');
    
    // 3. Clean kiye hue dono words ko compare karo
    return cleanWord === reversedWord;
}

// Test cases to check your code:
console.log(isPalindrome5("racecar"));      // Should print: true
console.log(isPalindrome5("javascript"));   // Should print: false
console.log(isPalindrome5("A man a plan a canal Panama")); // Should print: true