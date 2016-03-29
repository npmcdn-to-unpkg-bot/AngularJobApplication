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
    $stmt = $pdo->query('SELECT * FROM Users');
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($result);
}

function createTable(PDO $pdo) {
    // sql to create table
    $sql = "CREATE TABLE Users (
        user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        email VARCHAR(80) NOT NULL,
        password CHAR(41) NOT NULL,
        firstname VARCHAR(25) NOT NULL,
        lastname VARCHAR(25) NOT NULL,
        telephone VARCHAR(30) NOT NULL,
        address VARCHAR(80) NOT NULL,
        city VARCHAR(30) NOT NULL,
        postcode VARCHAR(7) NOT NULL
    );";
    $sql.= "CREATE TABLE PreviousEmployers (
        previousemployer_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(30),
        position VARCHAR(80),
        wage DECIMAL(13, 2)
    );";
    $sql.= "CREATE TABLE Listings (
        listing_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        fk_application int,
        FOREIGN KEY (fk_application) REFERENCES Applications(application_id),
        title VARCHAR(80),
        description VARCHAR(1000),
        date DATE,
        expiry DATETIME
    );";
    $sql.= "CREATE TABLE Applications (
        application_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
        fk_user int,
        FOREIGN KEY (fk_user) REFERENCES Users(user_id),
        fk_previousepmloyer int,
        FOREIGN KEY (fk_previousepmloyer) REFERENCES PreviousEmployers(previousemployer_id),
        comments VARCHAR(1000) NOT NULL,
        time DATETIME,
        iscitizen BOOLEAN,
        isfelon BOOLEAN,
        feloncomment VARCHAR(500),
        desiredwage DECIMAL(13, 2)
    );";

    // use exec() because no results are returned
    $pdo->exec($sql);
    showTable($pdo);
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=rhine_Careers", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    tableExists($conn, "Users");
    $conn = null;
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


?>