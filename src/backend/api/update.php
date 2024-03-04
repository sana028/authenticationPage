<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../dbConnection.php';

if($_SERVER['REQUEST_METHOD'] == "PUT"){
    $data=json_decode(file_get_contents('php://input'));
    if($data){
        $DB_Connection=new DBConnection('userinfo');
        if($DB_Connection){
            $conn=$DB_Connection->getConnection();
            $sql="UPDATE user SET Password=$data->password WHERE email=$data->email";
            if($conn){
                if($conn->query($sql)){
                    $_SESSION["username"]=$data->username;
                    $_SESSION["email"]=$data->email;
                    echo 'Password successfully updated';
                }
                else{
                    echo $conn->connection_Error;
                }
            }
        }
    }
}
?>