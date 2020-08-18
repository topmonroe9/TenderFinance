<?PHP
$sender = '@@@@';
$recipient = '@@@@';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


$subject = "Заявка TenderFinance";
$message = "Посетитель оставил заявку на сайте

Имя: {$name} 
Телефон: {$phone} 
Почта: {$email} 
Сообщение: {$message}";

$headers = 'From:' . $sender;
$success = mail($recipient, $subject, $message, $headers);
echo $success;
?>
