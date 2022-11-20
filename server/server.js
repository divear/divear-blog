const ffmpeg = require("fluent-ffmpeg");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
var gtts = require("node-gtts")("cs");
var path = require("path");

// maybe just host the file on firebase

app.get("/", function (req, res) {
	filename = "output.wav";
	let filePath = path.join(__dirname, filename);
	let stat = fs.statSync(filePath);
	res.writeHead(200, {
		"Content-Type": "audio/mpeg",
		"Content-Length": stat.size,
	});
	res.send({ hello: "test" });
	const input = req.query.input;

	const filepath = path.join(__dirname, "first.wav");
	gtts.save(filepath, input, function () {
		console.log("save done");
		ffmpeg("./first.wav") // x
			.input("./input/volati1.wav") // je prave na drate..
			.input("./first.wav") // x
			.input("./input/volati2.wav") // vola, zvedni to
			.mergeToFile("./output.wav");

		fs.watch(__dirname, (eventType, filename) => {
			console.log(`filename provided: ${filename}`);

			console.log("merge done");
			console.log("getting the output");
			const output = path.join(__dirname, "output.wav");
			console.log(output);

			var readStream = fs.createReadStream(filePath);
			console.log(readstream);
			// We replaced all the event handlers with a simple call to readStream.pipe()
			readStream.pipe(res);

			return;
		});
	});
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
