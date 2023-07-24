console.log("a");
setTimeout(() => {
  console.log("b");
}, 0);

console.log("c");
const thePromis = new Promise((response) => {
  console.log("d");
  setTimeout(() => {
    response(1);
  }, 1000);
});

console.log("e");
thePromis.then(() => {
  console.log("f");
});

console.log("k");
setTimeout(() => {
  console.log("l");
}, 1500);
