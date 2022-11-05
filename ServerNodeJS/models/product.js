var db=require('./db'); 
exports.list = function( callback) { 
    let sql = `SELECT *  FROM san_pham`;
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.cateList = function( callback) { 
    let sql = `SELECT *  FROM phan_loai`;
    db.query(sql, function(err, d) { callback(d); }  );
}
// exports.create = function(data, callback ) { //hàm chèn user mới vào table 
//     let sql = 'INSERT INTO nhanvien SET ?';
//     db.query(sql, data, function(err, d) { callback(d) }  );    
// } 
// exports.update = function(id, data, callback) { 
//     let sql = 'UPDATE nhanvien  SET ? WHERE idUser = ?';
//     db.query(sql, [data, id], (err, d) => {
//         if (err) throw err;
//         callback();
//     });    
// } 
// exports.read= function(id, callback) {
//     let sql = 'SELECT * FROM nhanvien WHERE idUser = ?'    
//     db.query(sql, id, (err, d) => {
//         data = d[0]; 
//         callback(data);
//     });
// } 