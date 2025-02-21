/* Deno.core.print("Hello runjs!\n");
console.log("Hello", "runjs!");
console.error("Boom!"); */

const path = "./log.txt";

async function main() {
/*     try {
        const contents = await runjs.readFile(path); //awaitをつけると無限時間かかる
        console.log("Read from a file", contents);
    } catch (err) {
        console.error("Unable to read file", path, err);
    }

    await runjs.writeFile(path, "I can write to a file");
    const contents = await runjs.readFile(path);
    console.log("Read from a file", path, "contents", contents);
    console.log("Removing file", path);
    runjs.removeFile(path);
    console.log("File removed"); */

    const content = await runjs.fetch(
        "https://deno.land/std@0.177.0/examples/welcome.ts"
    );

    console.log("Content from fetch", content);
}

main();
