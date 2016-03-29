<?php
$servername = "localhost";
$username = "rhine_Careers";
$password = "ZOnprN1uBP87BWMYUUp4!";

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
$_POST = json_decode(file_get_contents('php://input'), true);

if (!empty($_POST)) {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=rhine_Careers", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
        $stmt = $conn->prepare("INSERT INTO Users (email, password, firstname, lastname, telephone, address, city, postcode) VALUES (:email, :password, :firstname, :lastname, :telephone, :address, :city, :postcode)");
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':password', $_POST['email']);
        $stmt->bindParam(':firstname', $_POST['firstname']);
        $stmt->bindParam(':lastname', $_POST['lastname']);
        $stmt->bindParam(':telephone', $_POST['telephone']);
        $stmt->bindParam(':address', $_POST['address']);
        $stmt->bindParam(':city', $_POST['city']);
        $stmt->bindParam(':postcode', $_POST['postcode']);
        $stmt->execute();
        $conn = null;
        
        header('Content-Type: application/json');
        echo json_encode("Submitted successfully");  
        
        }
    catch(PDOException $e)
        {
        header('Content-Type: application/json');
        echo json_encode("Connection failed: " . $e->getMessage());
        }
} else {
    header('Content-Type: application/json');
    echo json_encode("Error: No POST data");
}

?>