const express = require('express');
const https = require('https');
const cors = require("cors");
const exec = require("child_process").exec;
const fs = require("fs");

const config = require("./config.json");
  
let app = express().use(express.static(__dirname + "/public")).use(cors());

// Here we favicon.ico as root/favicon.ico so it displays in the browser as the icon
app.get('/favicon.ico', (req, res) => res.sendFile(__dirname + "/public/assets/favicon.ico"));

// Set the index page as /
app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));

// Set hte editor page as /editor
app.get('/editor', (req, res) => res.sendFile(__dirname + "/public/editor.html"));

// This is what "editor.js" fetches. Its like an API of sorts
app.get('/run', (req, res) => {
    if (req.url.includes("/run?code=")) {
        let code = Buffer.from(req.url.split("/run?code=")[1], 'base64').toString('utf-8');
        let filename = Date.now();
        fs.appendFile(`runners/${filename}`, code, function (err) {
            if (err != null) {
                res.send(`Error saving file: ${err}`);
            } else {
                console.log(`Saved file: runners/${filename}`);
                console.log(`Running file: runners/${filename}`);

                let output = "";
                let command = `"${config["sharicklang_path"]}" runners/${filename} ${config["sharicklang_debug"]}`;
                const Runner = exec(command)
                Runner.stdout.on('data', async(data) => output += `${data}`);
                Runner.stderr.on('data', async(data) => output += `${data}`);
                Runner.stdout.on('close', () => {
                    res.send(`${command}\n\n${output}`);
                    try {
                        fs.unlinkSync(`runners/${filename}`);
                        console.log(`Deleted file: runners/${filename}`);
                    } catch (err) {
                        console.log(`Failed to delete file: runners/${filename}`);
                        console.log(err);
                    }
                })
            }
          }); 
    } else {
        res.send("Request does not contain code");
    }
})

// Listen (http)
app.listen(config["http"]["port"], () => console.log(`Sharickpen is up: http://localhost:${config["http"]["port"]}\n\nListening on port ${config["http"]["port"]}`));

// Listen (https)
if (config["https"]["enabled"]) {
    https.createServer({
        key: fs.readFileSync(config["https"]["key_path"]),
        cert: fs.readFileSync(config["https"]["cert_path"]),
    }, app).listen(config["https"]["port"], () => console.log(`Listening on port ${config["https"]["port"]}`));
}