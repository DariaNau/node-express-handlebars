let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    // delete: function(condition, cb) {
    //   orm.delete("burgers", condition, function(res) {
    //     cb(res);
    //   });
    // }
  };

module.exports = burger;