<?php
$jwtDecode=require('/node_modules/jwt-decode');

class VerifyIdToken{
    private $idToken="";

    function __construct($idToken){
          $this->idToken= $idToken;
    }

    function  verify(){
     $decodedToken=jwtDecode($idToken);
     $expirationTime =($decodedToken->exp || 1) * 1000;
     $formatter = new DateTime($expirationTime);
     $formattedTime = $formatter->format('h:i A'); // Adjust the format as needed
     echo $formattedTime;
     $currentDateTime = date('H:i:s'); // Format: YYYY-MM-DD HH:MM:SS
     echo $currentDateTime;
    }

}
?>