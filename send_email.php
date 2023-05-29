<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up the email headers
  $to = 'minhkhoi.vu143@gmail.com';
  $subject = 'New Message from Website';
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "Content-type: text/html; charset=utf-8" . "\r\n";

  // Compose the email body
  $body = "<p>Name: $name</p>" .
          "<p>Email: $email</p>" .
          "<p>Message: $message</p>";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo 'Email sent successfully.';
  } else {
    echo 'Sorry, there was an error sending your email.';
  }
}
?>