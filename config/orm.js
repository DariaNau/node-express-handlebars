let connection = require("./connection");

function printQs(arr) {
  let Qarr = []
  for (var i = 0; i < arr.length; i++) {
    Qarr.push("?")
  }
  return Qarr.toString()
};

let orm = {
  selectAll: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    const queryString = "INSERT INTO ?? (" + cols + ") VALUES (" + printQs(vals) + ");"
    console.log(queryString);
    connection.query(queryString, [table].concat(vals), cb)
  },

  updateOne: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table + " SET ? WHERE id = " + condition;
    // leaving SET set to ? and passing that as objColVals (ex edvoured:0) to the next function in burger.js
    console.log(queryString);
    connection.query(queryString, objColVals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table + " WHERE id = " + condition;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;