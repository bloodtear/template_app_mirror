<?php
include_once(rtrim(APP_PATH, "/") . "/config.php");

class User_controller {
  function pretreat(){

  }

  function posttreat(){
    
  }

  function add() {
    //return 123;
    $db = Database::instance();

    //$ret = $db->get_all('app_user');
    //$ret = $db->get_one('app_user', "username = 'username'");

    $data = array(
      "username" => "xy",
      "password" => "xy",
      "token" => "1",
      "status" => "2",
      "create_time" => "3",
      "modify_time" => "4",
      "last_login" => "5"
    );
    //$ret = $db->insert("app_user", $data);

    $data = array(
      "status" => "335"
    );
    $ret = $db->delete("app_user", "username = 'aab'");
    var_dump($ret);
  }

  function login_ajax(){
    echo 123;

  }
}





?>
