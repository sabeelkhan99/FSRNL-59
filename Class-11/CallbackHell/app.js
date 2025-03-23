// function downloadImage(url, downloaded) {
//     const fileName = url.split('/').pop();
//     setTimeout(function () {
//         downloaded(fileName);
//     }, 2000);
// }

// function compressImage(fileName, compressed) {
//     const compressedFile = fileName.split('.')[0] + '.zip';
//     setTimeout(() => {
//         compressed(compressedFile);
//     }, 1000);
// }

// function uploadImage(compressedFile, uploaded) {
//     const uploadPath = `http://whatsapp.com/storage/${compressedFile}`;
//     setTimeout(() => {
//         uploaded(uploadPath);
//     }, 1000);
// }

// function sendToReciever(uploadedPath, fileSentCallback) {
//     setTimeout(() => {
//         fileSentCallback(uploadedPath);
//     }, 1000);
// }

// downloadImage('http://whatsapp.com/storage/profile.jpg', function (fileName) {
//     console.log(`File downloaded successfully, fileName ${fileName}`);
//     compressImage(fileName, function (compressedFile) {
//         console.log(`File compression is complete ${compressedFile}`);
//         uploadImage(compressedFile, function (uploadedPath) {
//             console.log(`File uploaded successfully ${uploadedPath}`);
//             sendToReciever(uploadedPath, function (uploadedPath) {
//                 console.log(`File sent successfully to reciver ${uploadedPath}`);
//             });
//         });
//     });
// });


// ---------------------------------- better way of writing above code ----------

function downloadImage(url) {
    const fileName = url.split('/').pop();
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (!fileName.endsWith('.jpg')) {
                reject(new Error('Invalid file extension'));
            }
            resolve(fileName);
        }, 2000);
    })
}

function compressImage(fileName) {
    const compressedFile = fileName.split('.')[0] + '.zip';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(compressedFile);
        }, 1000);
    })
}

function uploadImage(compressedFile) {
    const uploadPath = `http://whatsapp.com/storage/${compressedFile}`;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(uploadPath);
        }, 1000);
    })
}

function sendToReciever(uploadedPath) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(uploadedPath);
        }, 1000);
    })
}

downloadImage('http://whatsapp.com/storage/profile.jpeg')
    .then((fileName) => {
        console.log(`File downloaded successfully ${fileName}`);
        return compressImage(fileName)
    })
    .then((compressedFile) => {
        console.log(`File compressed successfully ${compressedFile}`);
        return uploadImage(compressedFile);
    })
    .then((uploadPath) => {
        console.log(`File uploaded successfully ${uploadPath}`);
        return sendToReciever(uploadPath);
    })
    .then((uploadedPath) => {
        console.log(`File is sent to reciver ${uploadedPath}`);
    })
    .catch((err) => {
        console.log(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
        console.log('Inside finally, process is completed');
    });
