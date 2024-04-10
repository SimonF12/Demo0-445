<?php
$conn = mysqli_connect("localhost", "root", "", "cs370 project");

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>homepage</title>
    <link rel="stylesheet" href="stylesheet.css">
</head>
<body>
    
    <header><h1 style="text-align: center;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Welcome to the public library homepage</h1></header>
    <img src="library.jpg" style="height: 200px;width: 300PX;"  alt="library">
    <hr style="width:  500px;">
    
    <a href="Location-About.php">
        <button>location/About</button>
    </a>
    <a href="Book-list.php">
        <button>Book list</button>
    </a>
    <a href="book-search.php">
        <button>Search for book</button>
    </a>

    <p>New books in the library</p>
    <ol>
    <li>Weyward:A novel-by Emilia Hart</li>
    <li>When the Moon Hatched-by Sarah Parker</li>
    <li>The Prisoner's Throne-by Holly Black </li>

    </ol>

    <footer>
        <p>&copy; 2024 Library Madeup. All Rights Reserved.</p>
    </footer>
</body>
</html>