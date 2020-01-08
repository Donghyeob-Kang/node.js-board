const router = require('express').Router();
const db = require('../db/boardDB');

router.get('/', (req, res) => {
    res.render('main');
});

module.exports = router;
