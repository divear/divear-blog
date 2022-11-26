const ffmpeg = require("fluent-ffmpeg");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
const gtts = require("node-gtts")("cs");
const path = require("path");

app.get("/", function (req, res) {
	const input = req.query.input;

	const firstPath = path.join(__dirname, "first.wav");
	gtts.save(firstPath, input, function () {
		console.log("save done");
		ffmpeg("./first.wav") // x
			.input("./input/volati0.wav") // je prave na drate..
			.mergeToFile("./sec.wav");
		ffmpeg("sec.wav").audioFilter("atempo=5").output("output.wav").run();
		// .input("./first.wav") // x
		// .input("./input/volati2.wav") // vola, zvedni to

		const secPath = path.join(__dirname, "sec.wav");
		const output = path.join(__dirname, "output.wav");
		const outfile = fs.readFile("sec.wav", (r) => {
			console.log(r);
		});
		fs.watch(output, () => {
			console.log("getting the output");

			const f = fs.readFileSync(secPath);
			contents = f.toString("base64");
			try {
				res.write(contents);
				console.log("sent contents");
			} catch (error) {
				console.log(error);
			}
			return;
		});
	});
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
