function waitTwoSec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi Shashank");
    }, 2000);
  });
}

waitTwoSec().then((message) => {
  console.log(message);
});
// Output after 2 seconds: Hi Shashank

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function greet() {
  await wait(3000);      // 3 seconds wait
  console.log("Hi Shashank");
}

greet();
