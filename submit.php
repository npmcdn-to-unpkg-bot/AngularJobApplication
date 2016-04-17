<?php

header('Content-type: application/json');
 
// Create and send Email

// grab recaptcha library
require_once "recaptchalib.php";

// your secret key
$secret = "6LelRR0TAAAAAOncS55Sjy526EgLzASHqLfIfZ18";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

if($response != null && $response->success)
{

    $email = $_POST['email'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $telephone = $_POST['telephone'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $zipcode = $_POST['zipcode'];
    $citizen = $_POST['citizen'];
    $felon = $_POST['felon'];
    $feloncomment = $_POST['feloncomment'];
    $desiredposition = $_POST['desiredposition'];
    $desiredwage = $_POST['desiredwage'];
    $employername1 = $_POST['employername1'];
    $employerposition1 = $_POST['employerposition1'];
    $employerwage1 = $_POST['employerwage1'];
    $employerpermission1 = $_POST['employerpermission2'];
    $employername2 = $_POST['employername2'];
    $employerposition2 = $_POST['employerposition2'];
    $employerwage2 = $_POST['employerwage2'];
    $employerpermission2 = $_POST['employerpermission2'];
    $employername3 = $_POST['employername3'];
    $employerposition3 = $_POST['employerposition3'];
    $employerwage3 = $_POST['employerwage3'];
    $employerpermission3 = $_POST['employerpermission3'];

    $to = "bcc-hr@outlook.com";
    $subject = "New Job Applicant";
    $message = "Email: ".$email."\n";
    $message.= "First Name: ".$firstname."\n";
    $message.= "Last Name: ".$lastname."\n";
    $message.= "Telephone: ".$telephone."\n";
    $message.= "Address: ".$address."\n";
    $message.= "City: ".$city."\n";
    $message.= "Zip Code: ".$zipcode."\n";
    $message.= "US Citizen: ".$citizen."\n";
    $message.= "Felon: ".$felon."\n";
    $message.= "Felony Explanation: ".$feloncomment."\n";
    $message.= "Desired Position: ".$desiredposition."\n";
    $message.= "Desired Wage: ".$desiredwage."\n";
    $message.= "Previous Employer 1 Name: ".$employername1."\n";
    $message.= "Previous Employer 1 Position: ".$employerposition1."\n";
    $message.= "Previous Employer 1 Wage: ".$employerwage1."\n";
    $message.= "Previous Employer 1 Permission to contact: ".$employerpermission1."\n";
    $message.= "Previous Employer 2 Name: ".$employername2."\n";
    $message.= "Previous Employer 2 Position: ".$employerposition2."\n";
    $message.= "Previous Employer 2 Wage: ".$employerwage2."\n";
    $message.= "Previous Employer 2 Permission to contact: ".$employerpermission2."\n";
    $message.= "Previous Employer 3 Name: ".$employername3."\n";
    $message.= "Previous Employer 3 Position: ".$employerposition3."\n";
    $message.= "Previous Employer 3 Wage: ".$employerwage3."\n";
    $message.= "Previous Employer 3 Permission to contact: ".$employerpermission3."\n";

    mail($to, $subject, $message, "From: system@barroncountycheese.com\r\n");

	$response_array['status'] = 'success';
	echo json_encode($response_array);
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}

?>