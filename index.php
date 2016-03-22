<?php
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
        echo "Submitted successfully";  

        $conn = null;
        }
    catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }
}

?>
<!doctype html>
<html>
  <head>
    <title>Job Application Submission</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <link rel="stylesheet" href="styles.css">

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>   

    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/main')
            .then(null, console.error.bind(console));
    </script>
  </head>

  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>

<b>User Registration</b>
  
<form name="contactform" method="post" action="index.php">
<table width="450px">
<tr>
 <td valign="top">
  <label for="email">Email *</label>
 </td>
 <td valign="top">
  <input  type="text" name="email" maxlength="80" size="30">
 </td>
</tr>
<tr>
 <td valign="top"">
  <label for="password">Password *</label>
 </td>
 <td valign="top">
  <input  type="text" name="password" maxlength="41" size="30">
 </td>
</tr>
<tr>
<tr>
 <td valign="top">
  <label for="firstname">First Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="firstname" maxlength="25" size="30">
 </td>
</tr>
<tr>
 <td valign="top"">
  <label for="lastname">Last Name *</label>
 </td>
 <td valign="top">
  <input  type="text" name="lastname" maxlength="25" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="telephone">Telephone *</label>
 </td>
 <td valign="top">
  <input  type="text" name="telephone" maxlength="30" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="address">Address *</label>
 </td>
 <td valign="top">
  <input  type="text" name="address" maxlength="80" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="city">City *</label>
 </td>
 <td valign="top">
  <input  type="text" name="city" maxlength="30" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="postcode">Zip Code *</label>
 </td>
 <td valign="top">
  <input  type="text" name="postcode" maxlength="7" size="30">
 </td>
</tr>
<tr>
 <td colspan="2" style="text-align:center">
  <input type="submit" value="Submit">
 </td>
</tr>
</table>
</form>
<a href="admin.php">Admin page</a>

  </body>
</html>