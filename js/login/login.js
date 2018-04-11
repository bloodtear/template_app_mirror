$(document).ready(function (){


$('#sub_btn').click(function (){

  var username = $('#username').val();
  var password = $('#password').val();

  console.log(username);
  console.log(password);

  __ajax('login.do_login',{username: username, password: password},function (data){
    var ret = data.ret;
    if (ret == 'login') {
      setCookie("username", username, 10);
      go("index/index");
    }else if (ret == 'fail') {
      alert(data.reason);
    }
  });

});

$('#go_register').click(function(){
    go("login/register");


});







});
