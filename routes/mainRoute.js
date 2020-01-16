const router = require('express').Router();
const db = require('../db/boardDB');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/getBoardLists', (req, res) => {
    let firstList = parseInt(req.query.firstList);
    let viewList = parseInt(req.query.viewList);

    db.getBoardLists(firstList, viewList, result => {
        res.send(result);
        console.log(result);
    });
});

module.exports = router;
