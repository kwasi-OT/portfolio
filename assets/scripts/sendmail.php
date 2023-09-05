<?php
    
    // Redirect the user back to the same page
    header("Location: .../index.html", true, 301);
    exit();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if(!empty($_POST['name']) && !empty($_POST['email'])&& !empty($_POST['message'])
        ){
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];


            $to = "contact@iamkwasi.dev";
            $subject = "New Contact Form Submission";
            $body = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";
            $headers = "From: {$email}";


            if(mail($to, $subject, $body, $headers)) {
                function_success("Your message has been sent successfully. Thank you!");
                function function_success($msg) {
                echo "<script type='text/javascript'>alert('$msg');</script>";
            }
            } else {
                function_failed("Sorry, message submission failed. Please try again");
                function function_failed($msg) {
                echo "<script type='text/javascript'>alert('$msg');</script>";
            }
            }

            
        }
    } 
    

    // "<script type='text/javascript'>
    //     setTimeout(function () {
    //         window.location.href = 'https://iamkwasi.dev';         
    //     },5000); // 5 seconds
    // </script>"
?>