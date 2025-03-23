function downloadImage(url, downloaded) {
    const fileName = url.split('/').pop();
    setTimeout(function () {
        downloaded(fileName);
    }, 2000);
}

function compressImage(fileName, compressed) {
    const compressedFile = fileName.split('.')[0] + '.zip';
    setTimeout(() => {
        compressed(compressedFile);
    }, 1000);
}

function uploadImage(compressedFile, uploaded) {
    const uploadPath = `http://whatsapp.com/storage/${compressedFile}`;
    setTimeout(() => {
        uploaded(uploadPath);
    }, 1000);
}

function sendToReciever(uploadedPath, fileSentCallback) {
    setTimeout(() => {
        fileSentCallback(uploadedPath);
    }, 1000);
}

downloadImage('http://whatsapp.com/storage/profile.jpg', function (fileName) {
    console.log(`File downloaded successfully, fileName ${fileName}`);
    compressImage(fileName, function (compressedFile) {
        console.log(`File compression is complete ${compressedFile}`);
        uploadImage(compressedFile, function (uploadedPath) {
            console.log(`File uploaded successfully ${uploadedPath}`);
            sendToReciever(uploadedPath, function (uploadedPath) {
                console.log(`File sent successfully to reciver ${uploadedPath}`);
            });
        });
    });
});