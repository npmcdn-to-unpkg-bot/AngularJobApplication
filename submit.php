<?php

header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{

$email = $_POST['email'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$telephone = $_POST['telephone'];
$address = $_POST['address'];
$city = $_POST['city'];
$zipcode = $_POST['zipcode'];

$to = "eingland@uwm.edu";
$subject = "Wooo Email!";
$message = "Email: ".$email."\n";
$message.= "First Name: ".$firstname."\n";
$message.= "Last Name: ".$lastname."\n";
$message.= "Telephone: ".$telephone."\n";
$message.= "Address: ".$address."\n";
$message.= "City: ".$city."\n";
$message.= "Zip Code: ".$zipcode."\n";

mail($to, $subject, $message, "From: system@barroncountycheese.com\r\n");

	$response_array['status'] = 'success';
	echo json_encode($response_array);
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}

/*
$servername = "localhost";
$username = "rhine_Careers";
$password = "ZOnprN1uBP87BWMYUUp4!";



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
}*/

?>