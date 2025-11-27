function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const failure = Math.random() < 0.3; // 30% failure
            if (failure) reject("Failed to fetch bugs from server!");

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(err => {
        console.log("Error:", err);
    });
