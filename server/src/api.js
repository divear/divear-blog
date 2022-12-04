const ffmpeg = require("fluent-ffmpeg");
const express = require("express");
const serverless = require("serverless-http");
const gtts = require("node-gtts");
const fs = require("fs");
const path = require("path");

const app = express();
const router = express.Router();

router.get("/", function (req, res) {
	const input = req.query.input;
	console.log(`input: ${input}`);
	fs.readdir(".", (err, files) => {
		console.log(files);
	});

	console.log(`DIRNAME: ${__dirname}`);
	const firstPath = path.join(__dirname, "src/first.mp3");
	const savedFile = gtts("cs");
	console.log("defed");
	savedFile.save(firstPath, input, function () {
		ffmpeg(firstPath) // x
			.input("./input/volati0.wav") // je prave na drate..
			.mergeToFile("./sec.wav");
		ffmpeg("sec.wav").audioFilter("atempo=5").output("output.wav").run();
		// .input("./first.wav") // x
		// .input("./input/volati2.wav") // vola, zvedni to

		const secPath = path.join(__dirname, "sec.wav");
		const output = path.join(__dirname, "output.wav");
		fs.watch("./output", () => {
			console.log("getting the output");

			const f = fs.readFileSync(secPath);
			const contents = f.toString("base64");
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

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
