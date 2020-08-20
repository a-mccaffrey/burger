const connection = require("./connection.js");
const { connect } = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

  insertOne: (cb => {
      const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, false)";
      connection.query(
          queryString,
          (err, result) => {
              if (err) throw err;
              cb(result);
          }
      );
  }),

  updateOne: (cb => {
      const queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
      connection.query(
          queryString,
          (err, result) => {
              if (err) throw err;
              console.log(result);
          }
      );
  }),
};

module.exports = orm;
