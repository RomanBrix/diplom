<?php
$data = json_decode(file_get_contents("php://input"), true);
$type = $data['queryType'];
//print_r(json_encode("ok"));

if($type) {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    mysqli_query($link, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
    mysqli_set_charset($link, "utf8");

    if ($link) {
        switch ($type) {
            case 'ADD_NEW_WORK':
                $content = $data['content'];

                $city = $content['city'];
                $company = $content['company'];
                $description = $content['description'];
                $email = $content['email'];
                $meta = $content['meta'];
                $student = $content['student'];
                $tel = $content['tel'];
                $title = $content['title'];

                $sql = "INSERT INTO works ( title, description, city, company, email, tel, student, meta) 
                        VALUES (
                        '". $title ."',
                        '". $description ."',
                        '". $city ."',
                        '". $company ."',
                        '". $email ."',
                        '". $tel ."',
                        '". $student ."',
                        '". $meta ."'
                        );";

                if ($link->query($sql) === TRUE) {
                    print_r(json_encode(true));
                } else {
                    print_r(json_encode(false));
                }
                mysqli_close($link);
                break;
            case 'CHANGE_WORK':
                $content = $data['content'];

                $city = $content['city'];
                $company = $content['company'];
                $description = $content['description'];
                $email = $content['email'];
                $meta = $content['meta'];
                $student = $content['student'];
                $tel = $content['tel'];
                $title = $content['title'];
                $id = $content['id'];

                $sql = "UPDATE  works SET 
                            title = '". $title ."', 
                            description = '". $description ."', 
                            city = '". $city ."', 
                            company = '". $company ."',
                            email = '". $email ."', 
                            tel = '". $tel ."',
                            student = '". $student ."', 
                            meta = '". $meta ."' WHERE id = '". $id ."'";

                if ($link->query($sql) === TRUE) {
                    print_r(json_encode(true));
                } else {
                    print_r(json_encode(false));
                }
                mysqli_close($link);
                break;

            case 'ARCHIVE_WORK':
                $id = $data['id'];
                $sql = "UPDATE  works SET 
                            archived = '1' 
                            WHERE id = '". $id ."'";

                if ($link->query($sql) === TRUE) {
                    print_r(json_encode(true));
                } else {
                    print_r(json_encode(false));
                }
                mysqli_close($link);
                break;
        }
    }
}