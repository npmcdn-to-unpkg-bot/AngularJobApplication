<?php
$servername = "localhost";
$username = "rhine_Careers";
$password = "ZOnprN1uBP87BWMYUUp4!";

function tableExists(PDO $pdo, $tableName) {
    $mrSql = "SHOW TABLES LIKE :table_name";
    $mrStmt = $pdo->prepare($mrSql);
    $mrStmt->bindParam(":table_name", $tableName, PDO::PARAM_STR);

    $sqlResult = $mrStmt->execute();
    if ($sqlResult) {
        $row = $mrStmt->fetch(PDO::FETCH_NUM);
        if ($row[0]) {
            showTable($pdo);
            return true;
        } else {
            createTable($pdo);
            return false;
        }
    } else {
        //some PDO error occurred
        echo("Could not check if table exists, Error: ".var_export($pdo->errorInfo(), true));
        return false;
    }
}

function showTable(PDO $pdo) {
    $stmt = $pdo->query('SELECT * FROM Applicants');
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    print_r($result);
}

function createTable(PDO $pdo) {
    // sql to create table
    $sql = "CREATE TABLE Applicants (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(80),
    telephone VARCHAR(30),
    comments VARCHAR(1000),
    reg_date TIMESTAMP
    )";

    // use exec() because no results are returned
    $pdo->exec($sql);
    showTable($pdo);
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=rhine_Careers", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    tableExists($conn, "Applicants");
    $conn = null;
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


?>