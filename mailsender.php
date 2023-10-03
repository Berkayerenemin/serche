<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST"){

        if (isset($_POST['abone'])){
            $email = $_POST["mail"];

            $to = "info@serche.com.tr";
            $subject = "Bülten aboneneliği!";
            $message = "Bültene yeni biri katıldı.\nE-posta: $email";

            $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

            if (mail($to, $subject, $message, $headers)) {
                echo '<script>window.location.href = "./mailsend.html"</script>';
            }
            else{
                echo '<script>window.location.href = "./index.html"</script>';
            }
        }
    }
    
?>