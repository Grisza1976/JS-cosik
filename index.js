const express = require("express");
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

function dodaj(dane, tab) {
    let query = 'INSERT INTO ${tab} SET ?';
  
    connection.query(query, dane, function(err, results) {
      if (err) {
        console.error(err)
        console.log(results);
        return;
      }
    });
  }

  function aktualizuj(dane, warunek, tab) {
    let query = 'UPDATE ${tab} SET ?';
  
    if (warunek) {
      query += 'WHERE ${warunek}';
    }
  
    connection.query(query, dane, function(err, results) {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

function usun(parametr, tab) {
    let query = 'DELETE FROM ${tab}';  
    if (parametr) {
      query += '${parametr}';
    }
    connection.query(query, function(err, results) {
      if (err) {
        console.error(err);
        console.log(results)
        return;
      }
    });
  }


function pobierz(parametr, tab) {
    let query = 'SELECT * FROM ${tab}';
  
    if (parametr) {
      query += '${parametr}';
    }
  
    connection.query(query, function(err, results, fields) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(results);
      console.log(fields);
    });
  }

app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
