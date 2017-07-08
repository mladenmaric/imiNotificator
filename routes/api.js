var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		success: true,
		message: "Best api in the world!"
	})
});

router.get('/rss', (req, res) => {
	request.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fimi.pmf.kg.ac.rs%2Frss.php',
		(err, res1) => {
			if (!err && res1.statusCode == 200) {
				var body = JSON.parse(res1.body);
				res.json(body);
			}
		});
});

module.exports = router;