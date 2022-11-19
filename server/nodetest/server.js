const ffmpeg = require("fluent-ffmpeg");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
var gtts = require("node-gtts")("cs");
var path = require("path");

// maybe just host the file on firebase

app.get("/", function (req, res) {
	const input = req.query.input;

	const filepath = path.join(__dirname, "first.wav");
	gtts.save(filepath, input, function () {
		console.log("save done");
		ffmpeg("./first.wav") // x
			.input("./input/volati1.wav") // je prave na drate..
			.input("./first.wav") // x
			.input("./input/volati2.wav") // vola, zvedni to
			.mergeToFile("./output.wav");

		const eventType = "change";
		filename = "output.wav";
		fs.watch(__dirname, (eventType, filename) => {
			console.log(`event type is: ${eventType}`);
			if (filename) {
				console.log(`filename provided: ${filename}`);

				console.log("merge done");
				console.log("getting the output");
				const output = path.join(__dirname, "output.wav");
				console.log(output);

				const bitmap = fs.readFileSync(filename, {
					encoding: "base64",
				});
				console.log({ bitmap });
				fs.writeFileSync("bs64.txt", bitmap);

				res.status({ bitmap });
				return;
			} else {
				console.log("filename not provided");
			}
		});
	});
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
