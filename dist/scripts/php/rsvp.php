<?php

  // echo $_SERVER['DOCUMENT_ROOT'];exit;

  if(isset($_REQUEST['yes']) && !empty(trim($_REQUEST['yes']))){
    $yes_list = rtrim($_REQUEST['yes'], ',');
    $guests = explode(',', $yes_list);

    foreach($guests as $guest){
      file_put_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/yes.txt', $guest."\n", FILE_APPEND);
      file_put_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/replied.txt', $guest."\n", FILE_APPEND);
    }
  }

  if(isset($_REQUEST['no']) && !empty(trim($_REQUEST['no']))){
    $no_list = rtrim($_REQUEST['no'], ',');
    $guests = explode(',', $no_list);

    foreach($guests as $guest){
      file_put_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/no.txt', $guest."\n", FILE_APPEND);
      file_put_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/replied.txt', $guest."\n", FILE_APPEND);
    }
  }

  if(isset($_REQUEST['song']) && !empty(trim($_REQUEST['song']))){
    $song = rtrim($_REQUEST['song']);

    file_put_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/song.txt', $song."\n", FILE_APPEND);
  }

  echo json_encode(array('status' => 'success'));

?>
