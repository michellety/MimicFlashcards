// var fs = require("fs");
// fs.writeFile(process.env.GOOGLE_APPLICATION_CREDENTIALS, process.env.GCP_CRED, (err) => {});
// fs.writeFile('secrete.json', process.env.GCP_CRED, (err) => {});
var fs = require("fs");
fs.writeFile(process.env.GCP_KEY_FILE, process.env.GCP_CRED, (err) => {});
