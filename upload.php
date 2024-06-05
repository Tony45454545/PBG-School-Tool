<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $targetDirectory = "TB-Cloud-Hochgeladen/";
    if (!file_exists($targetDirectory)) {
        mkdir($targetDirectory, 0777, true);
    }

    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]);
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo "Datei <a href='$targetFile'>" . htmlspecialchars(basename($_FILES["file"]["name"])) . "</a> wurde erfolgreich hochgeladen.";
    } else {
        echo "Entschuldigung, beim Hochladen Ihrer Datei ist ein Fehler aufgetreten.";
        // Fehlerdetails ausgeben
        print_r($_FILES);
        echo "<br>";
        echo "Temp Dateipfad: " . $_FILES["file"]["tmp_name"] . "<br>";
        echo "Zielpfad: " . $targetFile;
    }
}
?>
