<?php
/**
 * Copyright (c) 2018.  r.b.Corp
 */
$type = $_GET['queryType'];

if($type) {
    require_once 'connection.php';
    $link = mysqli_connect($host, $user, $password, $database)
    or die("Ошибка " . mysqli_error($link));
    mysqli_query($link, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
    mysqli_set_charset($link, "utf8");

    if ($link) {
        switch ($type) {
            case 'GetWorks':
                $result = mysqli_query($link, "SELECT * FROM works WHERE archived = '0' ORDER BY id DESC");
//                $data = mysqli_fetch_assoc($result);
                $works_arr = [];

                while($row = $result->fetch_assoc()) {
                    $obj = (object) $row;
                    array_push($works_arr,$obj);
                }
                print_r(json_encode($works_arr));
                mysqli_close($link);
                break;
            case 'GetArchWorks':
                $result = mysqli_query($link, "SELECT * FROM works WHERE archived = '1'");
//                $data = mysqli_fetch_assoc($result);
                $arch_works_arr = [];

                while($row = $result->fetch_assoc()) {
                    $obj = (object) $row;
                    array_push($arch_works_arr,$obj);
                }
                print_r(json_encode($arch_works_arr));
                mysqli_close($link);
                break;
            case 2:
                echo "i равно 2";
                break;
        }

//        print_r(json_encode('OK'));
    }
}