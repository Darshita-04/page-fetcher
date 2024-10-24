const userInput = process.argv.splice(2);
const host = userInput[0];
const filePath = userInput[1];
const fs = require('fs');
const needle = require('needle');


needle.get(host, (error, response, body) => {
  console.log(error);
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    } else {
      // Read file stats
      fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(`File doesn't exist.`);
        } else {
            console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
        }
      });
    }
  });
});
