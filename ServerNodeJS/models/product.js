var db = require('./db');
exports.list = function (callback) {
    let sql = `SELECT *  FROM san_pham`;
    db.query(sql, function (err, d) { callback(d); });
}
exports.cateList = function (callback) {
    let sql = `SELECT *  FROM phan_loai`;
    db.query(sql, function (err, d) { callback(d); });
}
exports.cateAdd = function (data, callback) {
    let sql = 'INSERT INTO phan_loai SET ?';
    db.query(sql, data, function (err, d) { });
}
exports.cateUpdate = function (id, data, callback) {
    let sql = 'UPDATE phan_loai  SET ? WHERE ma_pl = ?';
    db.query(sql, [data, id], (err, d) => {
    });
}
exports.cateDelete = function (id, callback) {
    let sql = 'DELETE FROM phan_loai WHERE ma_pl = ?';
    db.query(sql, id, (err, d) => {
    });
}