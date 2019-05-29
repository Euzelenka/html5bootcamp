					
window.addEventListener("load", onLoad, false);

function onLoad() {
    socket = new WebSocket("ws://echo.websocket.org");  

    socket.onopen = function(evt) { 
                            onOpen(evt) 
                        };
    socket.onmessage = function(evt) { 
                            onMessage(evt) 
                        };
    socket.onerror = function(evt) { 
                            onError(evt) 
                        };
 }
      
 function onOpen(evt) {

    document.getElementById("status").innerHTML = "Connected to server";
    document.getElementById("status").style.backgroundColor = '#0c0';
    const message = "Hello World";
    socket.send(message);
    document.getElementById("send").innerHTML = "SENT: " + message ;
}

 function onMessage(evt) {
    
    document.getElementById("received").innerHTML = "RECEIVED: " + evt.data;
    document.getElementById("status").style.backgroundColor = '#0c0';

 }
      
 function onError(evt) {

    document.getElementById("status").style.backgroundColor = 'red';
    document.getElementById("status").innerHTML = "Communication error";
 }
  

