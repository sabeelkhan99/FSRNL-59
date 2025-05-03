const { readFile, writeFile } = require('node:fs/promises');
const path = require('node:path');


// console.log(__dirname + "/files" + "/abc.txt");
// console.log(path.join(__dirname, 'files','abc.txt'))
// process.cwd() -> It will give you the current working dir.
// console.log(process.cwd());

const filePath = path.join(__dirname, 'files', 'abc.txt');
const filesDirPath = path.join(__dirname, 'files');


async function readFromFile(filePath) {
    try {
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    }
    catch (err) {
        console.log(err);
    }
}

async function writeIntoTheFile(filesDirPath) {
    const fileName = "new.txt";
    const fileLocation = path.join(filesDirPath, fileName);
    const data = `This is just a random data.Nothing important here.`

    await writeFile(fileLocation, data);
    
    console.log('file written successfully');
}

async function main() {
    await readFromFile(filePath);
    await writeIntoTheFile(filesDirPath);
}

main();

