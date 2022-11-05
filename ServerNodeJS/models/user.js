var db = require('./db');
exports.list = function (callback) {
    let sql = `SELECT *  FROM nguoi_dung`;
    db.query(sql, function (err, d) { callback(d); });
}
exports.create = function (data, callback) { //hàm chèn user mới vào table 
    let sql = 'INSERT INTO nguoi_dung SET ?';
    db.query(sql, data, function (err, d) { });
}
exports.update = function (id, data, callback) {
    let sql = 'UPDATE nguoi_dung  SET ? WHERE id_nd = ?';
    db.query(sql, [data, id], (err, d) => {
    });
}
exports.read = function (id, callback) {
    let sql = 'SELECT * FROM nguoi_dung WHERE idUser = ?'
    db.query(sql, id, (err, d) => {
        data = d[0];
        callback(data);
    });
} 