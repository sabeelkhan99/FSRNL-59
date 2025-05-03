const fsp = require('node:fs/promises');
const path = require('node:path');

const FILE_1_PATH = path.join(__dirname, 'files', 'file1.txt');
const FILE_2_PATH = path.join(__dirname, 'files', 'file2.txt');

const FILE_3_PATH = path.join(__dirname, 'files', 'output.txt');

const readFromFile = (filePath)=>{
    return fsp.readFile(filePath, { encoding: 'utf-8' });
}

const writeIntoFile = (filePath, data) => {
    return fsp.writeFile(filePath, data);
}

async function main() {

    // Reading from the file
    const promise1 = readFromFile(FILE_1_PATH);
    const promise2 = readFromFile(FILE_2_PATH);

    // Grabbing the content
    const [content1, content2] = await Promise.all([promise1, promise2]);

    const arr1 = content1.split('\n');
    const arr2 = content2.split('\n');

    // Merge the arrays
    const res = arr1.concat(arr2);

    // Performing sort
    res.sort((a, b) => a - b);

    const data = res.join('\n');

    await writeIntoFile(FILE_3_PATH, data);

    console.log('Everything done');
}

main();