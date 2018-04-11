<?php

  function ret_success($op, $data = null) {
    return array("ret" => $op, "data" => $data);
  }

  function ret_fail($reason) {
    return array("ret" => "fail", "reason" => $reason);
  }









?>
