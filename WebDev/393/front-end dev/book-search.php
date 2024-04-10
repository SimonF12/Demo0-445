
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>book-search</title>
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    <script type="text/javascript">
        function validate(){
            var book_name = document.getElementById("book_name"); 
        }
    </script>
    <div class="container"></div>
    <form action="search.php" method="POST" onsubmit="return validate()">
        <p>Search for a Book</p>
        <label for="book_name">Search Book Name!</label>
        <input style="text-align: center;" id="book_name" type="text" name="book_name" placeholder="Book Name">
        <input type="submit" value="Submit">
    </form>
    </div>
</body>
</html>
