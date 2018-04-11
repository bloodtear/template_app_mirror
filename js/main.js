

function __ajax(action, data, callback) {
  if (data.action !== 'undefined') {
    console.log("[ Warning ] Ajax data 'action' is not empty. Please make sure 'action' is not used or some para will lost.");
  }
  data.action = action;
  $.ajax({
    type: "post",
    url: '',
    data: data,
    dataType: "json",
    success: function(data){
      console.log(data);
      callback(data);
    },
    error: function (object, info) {
      console.log('errorinfo:' + info);
      console.log(object.responseText);
    }
  });


}

function go(url) {
  console.log(url);instance_url = window.location.protocol + "//" +window.location.host + '/xiaoyu/index.php';
  console.log(instance_url);
  window.location.href = instance_url + "?" + url; 
  //window.location.href = window.location.protocol + "//" +window.location.host + "/" + url; 
}



function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}
 
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
 
function checkCookie()
{
  var user=getCookie("username");
  if (user!="")
  {
    alert("Welcome again " + user);
  }
  else 
  {
    user = prompt("Please enter your name:","");
    if (user!="" && user!=null)
    {
      setCookie("username",user,365);
    }
  }
}

