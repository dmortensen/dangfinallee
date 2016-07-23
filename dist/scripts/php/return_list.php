<?php

if(isset($_REQUEST['key'])){
	$key = trim($_REQUEST['key']);
	$guest_list = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/dist/data/guest_list.json');
	if($guest_list !== FALSE){
		$guest_array = json_decode($guest_list, true);

		for($i = 0;$i < count($guest_array);$i++){
			foreach($guest_array[$i] as $guest){
				if(trim(strtolower($key)) == trim(strtolower($guest))){
					echo json_encode(array('status' => 'success', 'result' => $guest_array[$i]));
					exit;
				}
			}
		}
		echo json_encode(array('status' => 'Guest '.$key.' cannot be found.', 'result' => array()));
		$guest_list = NULL;
		$guest_array = NULL;
		unset($guest_list);
		unset($guest_array);
	}else{
		echo json_encode(array('status' => 'Can\'t find list.', 'result' => array()));
	}
}else{
	echo json_encode(array('status' => 'Please enter the main guest name.', 'result' => array()));
}


?>
