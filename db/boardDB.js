const pool = require('../services/database').pool;

module.exports.getBoardLists = callback => {
    pool.getConnection((e, connection) => {
        if (!e) {
            const query = 'SELECT * FROM tbl_board ORDER BY regdate DESC';
            connection.query(query, [], (e, result) => {
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
