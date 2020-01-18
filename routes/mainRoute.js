const router = require('express').Router();
const db = require('../db/boardDB');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/getBoardLists', (req, res) => {
    let first = parseInt(req.query.first);
    let view = parseInt(req.query.view);

    db.getBoardLists(first, view, result => {
        res.send(result);
        console.log(result);
    });
});

module.exports = router;
