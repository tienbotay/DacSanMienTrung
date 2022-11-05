var db=require('./db'); 
exports.list = function( callback) { 
    let sql = `SELECT *  FROM san_pham`;
    db.query(sql, function(err, d) { callback(d); }  );
}
exports.cateList = function( callback) { 
    let sql = `SELECT *  FROM phan_loai`;
    db.query(sql, function(err, d) { callback(d); }  );
}