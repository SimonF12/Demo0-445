var express = require('express');
var app = express();
var mysql = require('mysql'); 
var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'cs project'
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
    app.set("view engine", "ejs"); 
    
    app.get("/library", function(req, res){
        var q = 'SELECT COUNT(*) as count FROM book';
        con.query(q, function (error, results) {
        if (error) throw error;
        var count = results[0].count;
        res.render("home",{data:count});
                });
       });  
       app.get("/book-list", function(req, res) {
        var q = "select * from book";
        con.query(q, function(error, results) {
        if (error) throw error;
          res.render("book-list", { data: 	results });
            });
        });
        app.get("/book-search", function(req, res) {
          res.render("book-search");
          });          
        app.post("/search", function(req, res) {
          var bk_id = req.body.bk_id;
          console.log("Searched book ID:" + bk_id);
          
          var q = "select * from book where book_id = ?";
          con.query(q, [bk_id], function(error, results) {
          if (error) throw error;
          else
          res.render("search_result", { data: results[0], count: results.length });
          });
          });
app.get("/checkout",function(req, res){
  res.render("checkout");
});
app.post("/checkout", function(req, res){
  const bookId = req.body.book_id;

  const q = "Delete FROM book WHERE book_id = ?";
  con.query(q, [bookId], function(error, result) {
      if (error) {
          console.error("Error checking out book:", error);
      } else {
          res.render("checkout-success", { bookId: bookId });
      }
  });
});
app.get("/return",function(req, res){
  res.render("return");
});
app.post('/return', function(req, res){
  const { book_id, book_name } = req.body;

  
  const q = "INSERT INTO book (book_id,book_title) values(?, ?) ";
  con.query(q, [book_id, book_name], (error, result) => {
      if (error) {
          console.error('Error returning book:', error);
      } else {
          res.render('return_success', { bookId: book_id, bookName: book_name });
      }
  });
});
app.get("/update", (req, res) => {
  res.render("update-book");
});
app.post("/update", (req, res) => {
  const { book_id, title} = req.body;
  const q = "UPDATE book SET book_id = ?, book_title = ?";
  con.query(q, [book_id, book_title], (error, result) => {
      if (error) {
          console.error("Error updating book:", error);
      } else {
          res.render("update_success", { bookId: book_id });
      }
  });
});
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
        