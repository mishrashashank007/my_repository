const char = "helllooo";
//array method practice approach (flex)
function allOccurChars1() {
  let obj = {};

  for (let i = 0; i < char.length; i++) {
    if (obj[char[i]]) {
      continue;
    }

    let count = 1;
    let occur = char.indexOf(char[i], i + 1);

    if (occur !== -1) {
      count++;

      let index = occur;
      let x = char.indexOf(char[i], index + 1);

      while (x !== -1) {
        count++;
        index = x;
        x = char.indexOf(char[i], index + 1);
      }
    }

    obj[char[i]] = count;
  }

  return obj;
}

console.log(allOccurChars1());
// Output: { h: 1, e: 1, l: 3, o: 3 }

// better approach
function allOccurChars2() {
  let obj = {};
  let count1 = 1;
  let count2 = 1;
  for (i = 0; i < char.length; i++) {
    if (obj[char[i]]) {
      obj[char[i]] = count1++;
    } else {
      obj[char[i]] = count2;
    }
  }
  return obj;
}
console.log(allOccurChars2());
