const pool = require('../services/database').pool;

module.exports.getBoardLists = (first, view, callback) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            const query =
                'SELECT * FROM tbl_board ORDER BY regdate DESC LIMIT ?, ?;';
            const query2 = 'SELECT count(*) AS ctn FROM tbl_board;';
            connection.query(query + query2, [first, view], (e, result) => {
                connection.release();
                if (!e) {
                    callback(result);
                } else {
                    console.log(e);
                    callback(false);
                    return;
                }
            });
        } else {
            console.log(e);
            callback(false);
            return;
        }
    });
};
