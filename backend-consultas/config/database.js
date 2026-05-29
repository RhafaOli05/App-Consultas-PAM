const mysql = require('mysql2');

const db = mysql.createConnection ({
    host: 'localhost',
    user:'root',
    password: '1234', 
    database:'dbdados',
    port: 3306
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySql!');
});

module.exports = db;