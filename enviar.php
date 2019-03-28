<?php  

// Llamando a los campos
$nombre = $_POST['nombre'];
$apellido = $_POST['apellidos'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "becerra18alee@gmail.com";
$asunto = "Contactro restaurante-pizzeria";
$carta = "De: $nombre.$apellido \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');
?>