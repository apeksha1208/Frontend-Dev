console.log("Start");
setTimeout(() => {
    console.log("Timeout callback (Macrotask)");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise.then callback (Microtask)");
});
console.log("End");

