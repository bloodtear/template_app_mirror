$(document).ready(function (){


  var ws = websocket_init();

  $('#chat_send').click(function (){
    var input = $('.chat_input').val();

    if (input == '' || input == 'undefined') {
      console.log('input is empty.');
      return false;
    }

    var username = getCookie("username");
    var msg = new Object();
    msg.action = "chat.send_all";
    var d = new Object();
    d.data = input;
    d.from = username;
    msg.data =d;

    ws.send(JSON.stringify(msg));

  });




  ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    var ret = eval('(' + received_msg + ')');
    var op = ret.op;
    var data = ret.data;
    console.log(op + " : "+ data);
    
    switch (op) {
      case "receive":
        var add_item = "<div>" + data + "</div>";
        $('.chat_room_div').append(add_item);

        break;
    }
    //alert("数据已接收...");
  };

















});






