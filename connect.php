<?php
 $emailid = $_POST['emailid'];
 $fullname = $_POST['fullname'];
 $mobno = $_POST['mobno'];
 $plan = $_POST['plan'];
 
 //database connection
 $conn = new mysqli("localhost", "login","", "test");
if($conn->connect_error){
    echo "$conn->connect_error";

    die('connection failed : '. $conn->connect_error);
}else {
    $stmt = $conn->prepare("insert into login(emailid, fullname, mobno, plan) values(?, ?, ?, ?)");
    $stmt->bind_param("ssis", $emailid, $fullname, $mobno, $plan);
    $execval = $stmt->execute();
    echo $execval;
    echo "login sucessfull.."
    $stmt->close();
    $conn->close();
}

?>