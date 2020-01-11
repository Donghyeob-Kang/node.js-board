const router = require('express').Router();
const db = require('../db/boardDB');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/getBoardLists', (req, res) => {
    db.getBoardLists(result => {
        res.send(result);
    });
});

module.exports = router;
