var express = require("express");
var router = express.Router();
const path = require("path");
const fs = require("fs");

/* GET random image */
router.get("/", function (req, res) {
	const options = {
		root: path.join(__dirname, "../", "backgrounds"),
	};

	fs.readdir("./backgrounds/", (err, files) => {
		if (!err) {
			var file = files[Math.floor(Math.random() * files.length)];
			// console.log(file)
			res.type(file.includes(".png") ? "image/png" : "image/jpeg");
			res.sendFile(file, options, function (err) {
				if (err) {
					res.status(500);
					// console.log("Error: ", err);
				} else {
					// console.log("Image sent.");
				}
			});
		} else {
			res.status(500);
		}
	});
});

module.exports = router;
