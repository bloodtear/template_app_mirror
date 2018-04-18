<?php

namespace template_app_mirror\database;

class Db_user extends \framework\Database\Database_table {

  public static $instance;

  public static function inst (){
    if (empty(self::$instance)) {
      self::$instance = new Db_user();
    }
    return self::$instance;
  }
  
    protected function __construct() {
        parent::__construct("app_user");
    }



  public function one_by_name_pwd($username, $password){
    return $this->get_one("username = '$username' and password = '$password'");
  }

  public function add($username, $password){
    return $this->insert(array(
    'username' => $username, 
    'password' => $password, 
    "status" => 1, 
    'create_time' => time(), 
    'modify_time' => time(), 
    'last_login' => 0));
  }


  public function one_by_username($username){
    return $this->get_one("username = '$username'");
  }


  











}











?>
