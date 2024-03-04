<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../dbConnection.php';

if($_SERVER['REQUEST_METHOD']==='POST'){
    $data=json_decode(file_get_contents('php://input'));
    echo 'is data coming';
    print_r(($data));
    if($data){
         $conn=new DBConnection('userinfo');
         
        if($conn){
            $sql="INSERT INTO signindata  (Name,Email, Password) VALUES ('$data->name','$data->email','$data->password') ";
            //Getting the data from the request
            $connection=$conn->getConnection();
            if($connection->query($sql))
            $_SESSION["username"]=$data->name;
            $_SESSION["email"]=$data->email;
              echo "succesfully created account";
            }  
            else{
                echo 'sorry there is an error on creating account try again after some time';
            }
            header('Content-Type: application/json');

    }
   
}
?>