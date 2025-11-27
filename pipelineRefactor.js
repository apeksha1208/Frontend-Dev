function wait(msg) {
    return new Promise(resolve =>
        setTimeout(() => { console.log(msg); resolve(); }, 1000)
    );
}

async function runPipeline() {
    try {
        await wait("Design complete");
        await wait("Build complete");
        await wait("Testing complete");
        await wait("Deploy complete");
        await wait("Celebrate! 🎉");

        console.log("Pipeline finished!");
    } catch (err) {
        console.log("Error:", err);
    }
}

runPipeline();
