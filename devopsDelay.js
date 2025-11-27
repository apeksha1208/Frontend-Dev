function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Server A deployed") : reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Server B deployed") : reject("Server B failed");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(msgs => {
        console.log(msgs);
        console.log("Deployment completed for all servers");
    })
    .catch(err => console.log("Error:", err));

Promise.race([serverA(), serverB()])
    .then(msg => console.log("Fastest response:", msg))
    .catch(err => console.log("Error:", err));
