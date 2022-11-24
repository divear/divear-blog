const ffmpeg = require("fluent-ffmpeg");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;
var gtts = require("node-gtts")("cs");
var path = require("path");

app.use((req, res, next) => {
	const render = res.render;
	const send = res.send;
	res.render = function renderWrapper(...args) {
		Error.captureStackTrace(this);
		return render.apply(this, args);
	};
	res.send = function sendWrapper(...args) {
		try {
			send.apply(this, args);
		} catch (err) {
			console.error(
				`Error in res.send | ${err.code} | ${err.message} | ${res.stack}`
			);
		}
	};
	next();
});

app.get("/", function (req, res) {
	out = "output.wav";
	let outPath = path.join(__dirname, out);
	let stat = fs.statSync(outPath);
	const input = req.query.input;

	const firstPath = path.join(__dirname, "first.wav");
	gtts.save(firstPath, input, function () {
		console.log("save done");
		ffmpeg("./first.wav") // x
			.input("./input/volati1.wav") // je prave na drate..
			.input("./first.wav") // x
			.input("./input/volati2.wav") // vola, zvedni to
			.mergeToFile("./output.wav");

		fs.watch(__dirname, (eventType, outPath) => {
			console.log(`filename provided: ${out}`);

			console.log("merge done");
			console.log("getting the output");
			const output = path.join(__dirname, "output.wav");
			console.log(output);

			const f = fs.readFileSync(output);
			contents = f.toString("base64");
			res.send({ contents });

			return;
		});
	});
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});
