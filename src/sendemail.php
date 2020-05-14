<?
$mail_to = '394999325@mail.ru';

if (!empty($_POST['name']) && !empty($_POST['phone'])) {
    $subject = 'Обратный звонок с сайта кореновская-усадьба.рф';

    $specs = '';
    if (!empty($_POST['specs'])) {
        $specs = '<h3>Данные об участке</h3><ul>' . $_POST['specs'] . '</ul>';
    }

    $message = "<html>
                    <head>
                        <title>{$subject}</title>
                    </head>
                    <body>
                        <h3>Заполнена форма \"Заказать звонок\": </h3>
                        <p>Имя: {$_POST['name']}</p>
                        <p>Телефон: {$_POST['phone']}</p>
                        
                        {$specs}
                                                
                        <h3>Дополнительные сведения:</h3>
                        <p>Страница отправки: {$_SERVER["HTTP_REFERER"]}</p>
                        <p>IP адрес: {$_SERVER["REMOTE_ADDR"]}</p>
                        <p>Дата/время: " . date("Y-m-d H:i:s") . "</p>

                    </body>
                </html>"; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    mail($mail_to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}