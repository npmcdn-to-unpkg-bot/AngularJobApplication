<?php
$servername = "localhost";
$username = "rhine_Careers";
$password = "ZOnprN1uBP87BWMYUUp4!";

if (!empty($_POST)) {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=rhine_Careers", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->prepare("INSERT INTO Applicants (firstname, lastname, email, telephone, comments) VALUES (:firstname, :lastname, :email, :telephone, :comments)");
        $stmt->bindParam(':firstname', $_POST['firstname']);
        $stmt->bindParam(':lastname', $_POST['lastname']);
        $stmt->bindParam(':email', $_POST['email']);
        $stmt->bindParam(':telephone', $_POST['telephone']);
        $stmt->bindParam(':comments', $_POST['comments']);
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


<form name="contactform" method="post" action="index.php">
 
<table width="450px">
 
<tr>
 
 <td valign="top">
 
  <label for="firstname">First Name *</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="firstname" maxlength="50" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top"">
 
  <label for="lastname">Last Name *</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="lastname" maxlength="50" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top">
 
  <label for="email">Email Address *</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="email" maxlength="80" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top">
 
  <label for="telephone">Telephone Number</label>
 
 </td>
 
 <td valign="top">
 
  <input  type="text" name="telephone" maxlength="30" size="30">
 
 </td>
 
</tr>
 
<tr>
 
 <td valign="top">
 
  <label for="comments">Comments *</label>
 
 </td>
 
 <td valign="top">
 
  <textarea  name="comments" maxlength="1000" cols="25" rows="6"></textarea>
 
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
