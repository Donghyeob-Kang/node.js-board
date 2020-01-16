const pool = require('../services/database').pool;

module.exports.getBoardLists = (firstList, viewList, callback) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            const query =
                'SELECT * FROM tbl_board ORDER BY regdate DESC LIMIT ?, ?;';
            const query2 = 'SELECT count(*) AS ctn FROM tbl_board;';
            connection.query(
                query + query2,
                [firstList, viewList],
                (e, result) => {
                    connection.release();
                    if (!e) {
                        callback(result);
                    } else {
                        console.log(e);
                        callback(false);
                        return;
                    }
                }
            );
        } else {
            console.log(e);
            callback(false);
            return;
        }
    });
};
