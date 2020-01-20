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
    });
});

router.get('/printBoard', (req, res) => {
    let list = parseInt(req.query.list);

    db.printBoard(list, result => {
        res.render('board', { result: result[0] });
    });
});

module.exports = router;
