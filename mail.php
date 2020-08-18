<?PHP
$sender = '@@@@';
$recipient = '@@@@';

$inn = $_POST['inn'];
$summ = $_POST['summ'];
$days = $_POST['days'];
$type = $_POST['type'];
$fz = $_POST['fz'];
$avans = $_POST['avans'];
$exitSumm = $_POST['exitSumm'];

$subject = "Калькулятор TenderFinance";
$message = "Посетитель рассчитал банковскую гарантию на сайте Tenderfinance.ru
{$type} 
ИНН: {$inn} 
Сумма: {$summ} 
Срок: {$days}

Закон: {$fz} 
Аванс: {$avans}
Стоимость гарантии {$exitSumm}";
$headers = 'From: ТендерФинанс';
$success = mail($recipient, $subject, $message, $headers);
echo $success;
?>
