$(document).ready(function (){


$('#do_register').click(function (){

  var username = $('#username').val();
  var password = $('#password').val();
  var password_2nd = $('#password_2nd').val();

  if (username == '' || password == '' || password_2nd == '') {
    alert('内容请填写完整');
    return false;    
  }

  if (password != password_2nd) {
    alert('密码不一致');
    return false;
  }

  console.log(username);
  console.log(password);

  __ajax('login.do_register',{username: username, password: password},function (data){
    var ret = data.ret;
    if (ret == 'register') {
      go("index/index");
    }else if (ret == 'fail') {
      alert(data.reason);
    }
  });

});

$('#go_login').click(function(){
    go("login/login");


});







});
