<!DOCTYPE html>
<html>
<head>
	<meta content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0;">	<!-- чтобы браузеры мобильных устройств (Android и iOS) не сжимали веб-страницу под размер экрана-->
	<title>Sergio</title>
	<link href="css/style.css" rel="stylesheet" type="text/css"/>

	<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>   <!-- звук -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"  type="text/javascript"></script>

	<script src="js/myscripts.js"  type="text/javascript"></script> 
</head>

<body>						<!-- фон темный и фон фото-космос-->
	
	<div id="header">Nginx + PHP-FPM</div> 
	<div class="universe">	
		<p></p>
	<?php  
        echo "<p>Here is testing of my snippets! Текущая версия PHP: ". phpversion(); echo '</p><br>';
        echo '<hr><br>';

    // inset code
    $d = date('d');

    function day15($d) {
        if ($d === 15) {
            return true;
        } else {
            return false;
        }    
    }

    if (day15($d)) {
       echo 'Today is 15th';
    } else {
        echo 'Today is not 15th, but ' .$d. 'th';
    }
    echo "<br>";
    
    
	?>
	</div>
				
	<div class="footer"><p>	&copy; Sergio</p>	</div>
			
</body>
