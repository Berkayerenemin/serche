<?php
    $hostadresi        =	"localhost";
    $kullaniciadi      =	"ser57ecomtr_berkayerenemin";
    $sifre             =	"Berkayeren_75";
    $veritabani        =	"ser57ecomtr_data";
    
    $db = mysqli_connect($hostadresi,$kullaniciadi,$sifre,$veritabani);
    if (mysqli_connect_errno())
    {
        echo "MySQL baglantisi basarisiz: " . mysqli_connect_error();
    }
?>