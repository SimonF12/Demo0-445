<?php

$bookName = $_POST['book_name'] ?? NULL;

$conn = mysqli_connect("localhost", "root", "", "cs370 project");

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Search query
$sql = "SELECT * FROM book WHERE book_title = ?"; // Replace 'your_table_name' and 'column_name' with your actual table name and column name
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $bookName);

if($stmt->execute()){
    $result = $stmt->get_result();
}
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: ".$row["book_id"]."-Name:".$row["book_title"]."<br>";
    }
} else{
    echo "0 results";
}
$stmt->close();
// Close connection
$conn->close();
?>