<?php
$genre = isset($_POST['genre']) ? $_POST['genre'] : '';
$page = isset($_POST['page']) ? $_POST['page'] : 1;

$books = [];

if ($genre == 'Management') {
    $books = [

        ["title" => "Peopleware", "author" => "Tom Demarco"],
        ["title" => "The Mythical Man-Month", "author" => "Frederick Phillips Brooks, Jr"]
    ];
}

$response = ["books" => $books];
echo json_encode($response);