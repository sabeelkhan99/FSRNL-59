const colors = require('colors'); //local installation of a package
const figlet = require('figlet');


console.log('NodeJS Demo'.rainbow); 

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
});
