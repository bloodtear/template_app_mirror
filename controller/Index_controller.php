<?php

namespace template_app_mirror\controller;

use \template_app_mirror\app;
include_once(rtrim(APP_PATH, "/") . "/config.php");

class Index_controller {

  function pretreat(){
    app\User::login_check() ? 1 : go("login/login");
    //echo "pretreat";
  }

  function posttreat(){
    //echo "posttreat";
  }

  function index() {

      $tpl = \framework\Tpl::instance('index/header', 'index/footer');

      $cache = \framework\Cache::instance();
      $chat_list_history = $cache->list_all("chat_list");
      
      

      $ar = array(
        "a" => 2,
        "b" => array(
          "c" => "d",
          "e" => array(
            "jh" => 123,
            "gj" => 223
          )
        )
      );
      $xy = new \stdClass();
      $xy->name = 'xiaoyu';
      $xy->year = 30;
      $tpl->set("id", 123);
      $tpl->set("name", "xiaoyu");
      $tpl->set("chat_list_history", $chat_list_history);
      $tpl->set("xy", $xy);
      $tpl->set("ar", $ar);
      $tpl->view('index/index');
  }


}





?>
