$(document).ready(function (){

  $('#logout_btn').click(function (){
    __ajax("login.do_logout", {action: '123'} ,function (data){
      if (data.ret == 'logout'){
        go("index/index");
      }
    });

  });
});
