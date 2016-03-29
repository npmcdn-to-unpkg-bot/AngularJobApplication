<?php
    $var1 = $_POST['var1'];
    $var2 = $_POST['var2']; //do something interesting with these

    $to = "eingland@uwm.edu";
    $subject = "Wooo Email!";
    $message = "Sorry John, you're fired.";

    mail($to, $subject, $message, "From: system@yourdomain.com\r\n");
?>