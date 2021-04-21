const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('account', {
		"title": "Popular Menu",
		"dishes": [
			{name:'Sashimi', content: 'tuna varieties, salmon, mackerel, and sea bream'},
			{name:'Unagi - Grilled Eel', content: 'containing soy sauce, mirin, sugar, and sake'},
			{name:'Tempura', content: 'seafood, meat, and vegetables covered in batter and deep-fried in oil'}
		]
	});
});

router.get('/:accountid', (req, res, next) => {
	res.send("/account/accountid connected " + req.param('accountid'));
});


module.exports = router;