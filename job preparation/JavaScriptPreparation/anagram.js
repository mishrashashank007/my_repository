// code 1
function isAnagramBuiltIn(s, t) {
  // Agar length alag hai, toh anagram ho hi nahi sakte
  if (s.length !== t.length) return false;

  // Split, sort, and join
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

console.log(isAnagramBuiltIn("listen", "silent")); // Output: true
console.log(isAnagramBuiltIn("rat", "car")); // Output: false



// code 2
function isAnagramMap(s, t) {
  // Agar length alag hai, toh check karne ka koi fayda nahi
  if (s.length !== t.length) return false;

  // Ek naya Hash Map create karein
  let charMap = new Map();

  // String 's' ke characters ko Map mein add karein
  for (let char of s) {
    // Agar character pehle se hai, toh uski value get karke +1 karein, warna 0 + 1 set karein
    let currentCount = charMap.get(char) || 0;
    charMap.set(char, currentCount + 1);
  }

  // String 't' ke characters ko Map se subtract karein
  for (let char of t) {
    // Agar character map mein nahi hai, ya uska bacha hua count 0 ho gaya hai
    if (!charMap.has(char) || charMap.get(char) === 0) {
      return false; // Matlab extra ya alag character mil gaya
    }

    // Agar valid hai, toh count 1 se minus kar dein
    charMap.set(char, charMap.get(char) - 1);
  }

  // Agar loop successfully khatam ho gaya, toh dono strings anagram hain
  return true;
}

console.log(isAnagramMap("anagram", "nagaram")); // Output: true
console.log(isAnagramMap("cat", "rat")); // Output: false



// code 3
function isAnagramArray(s, t) {
  if (s.length !== t.length) return false; // 26 letters ke liye ek array banao aur 0 se fill kardo

  const counts = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // 'a' ka charCode 97 hota hai. Isliye kisi bhi letter se 97 minus karne par 0-25 index mil jayega
    counts[s.charCodeAt(i) - 97]++; // s ke liye count badhao
    counts[t.charCodeAt(i) - 97]--; // t ke liye count ghatao
  } // Agar sab 0 hain, toh matlab perfect anagram hai

  for (let count of counts) {
    if (count !== 0) return false;
  }

  return true;
}

console.log(isAnagramArray("triangle", "integral")); // Output: true
console.log(isAnagramArray("apple", "papel")); // Output: true
console.log(isAnagramArray("foo", "bar")); // Output: false
