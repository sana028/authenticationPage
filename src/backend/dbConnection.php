<?php

class DBConnection{
    private $DB_LOCALHOST="localhost";
    private $DB_USERNAME="root";
    private $DB_PASSWORD="Sa021998@";
    private $DB_NAME="";

    function __construct($dbName){
        $this->DB_NAME=$dbName;
    }

    public function getConnection(){
        $mysql=new mysqli($this->DB_LOCALHOST,$this->DB_USERNAME,$this->DB_PASSWORD,$this->DB_NAME); 
        if($mysql->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        }
       return $mysql;
    }
}

?>