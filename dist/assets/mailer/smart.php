<?php 

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$country = $_POST['country'];
$message = $_POST['message'];
$check = $_POST['check'];



require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'scream.yv@gmail.com';                 // Наш логин
$mail->Password = 'ipdocfjjrlgfmbri';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                               // TCP port to connect to
 
$mail->setFrom('scream.yv@gmail.com', 'Wortex Outsourcing Website');   // От кого письмо 
$mail->addAddress('scream.yv@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
// $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');   
$mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);

$mail->isHTML(true);  
                             // Set email format to HTML

$mail->Subject = 'Request';
$mail->Body    = '<br><br>Name: ' . $name . '<br><br>
	phone: ' . $tel . '<br><br>
	email: ' . $email . '<br><br>
	country: ' . $country . '<br><br>
	message: ' . $message . '<br>';


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>