<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$to = "enoskyeza@gmail.com";
	$subject = "New message from contact form";
	$body = "Name: $name\nEmail: $email\nMessage: $message";
	$headers = "From: $email";
	if (mail($to, $subject, $body, $headers)) {
		header("Location: thank-you.html");
		exit;
	}
	else {
		echo "Error sending email.";
	}
}
?>
