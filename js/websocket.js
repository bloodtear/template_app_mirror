function websocket_init () {
  if ("WebSocket" in window){
    // 打开一个 web socket
    var ws = new WebSocket("wss://www.bloodtear.cn:9501");
    //var ws = new WebSocket("ws://127.0.0.1:9501");
      
    ws.onopen = function(){
      console.log("ws connected.");
    };

    ws.onclose = function(){ 
      console.log("ws disconnected.");
      alert("连接已关闭..."); 
    };

    ws.onerror = function(e){
      console.log("ws errored.");
      // 关闭 websocket
      alert("error..."); 
    };
  }else{
    // 浏览器不支持 WebSocket
    alert("您的浏览器不支持 WebSocket!");
  }
  return ws;
}

function websocket_message(ws,callback) {
  ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    var action = evt.data.action;
    var data = evt.data.datal
    console.log(action);
    console.log(data);
    callback(action, data)
    //alert("数据已接收...");
  };

}
