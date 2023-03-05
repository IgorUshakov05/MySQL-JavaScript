const mysql = require('mysql2')
const config = require('./config.js')
const connection = mysql.createConnection(config.config);
console.clear()
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
    connection.query(`Ваш запрос на SQL`,
        function(err, resultsd, fields) {
            console.log(results); // собственно данные
        });

    connection.end(function(err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
})
