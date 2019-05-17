//Config object
let config = {
    url: 'http://api.icndb.com/jokes/random',
    method: 'GET',
    responseType: 'json'
}

//Reusable function to perform AJAX calls
function _ajax(config){
    return new Promise((resolve, reject) => {
        let http_request = new XMLHttpRequest();
        http_request.open(config.method, config.url, true); 
        http_request.responseType = config.responseType;
        
        http_request.onload = function () {
            if  (http_request.status == 200) {
                resolve(http_request.response);
            } else {
                    reject(Error(http_request.statusText));
                    }            
        };

        http_request.send(null);
    });
}

_ajax(config).then(function(xmlDoc){
    document.getElementById("hide").innerHTML = xmlDoc.value.joke;
}).catch(() => {
    document.getElementById("hide").innerHTML = "We are sorry. We are having problems with the server";
    document.getElementById("hide").style.backgroundColor = 'red';
});

//Function that gets a response from a url and shows it in a section of the page
function show() {
     var http_request = new XMLHttpRequest();
     http_request.open('GET', 'http://api.icndb.com/jokes/random', true); 
     http_request.onreadystatechange = function () {
         if (http_request.readyState == 4)
             if  (http_request.status == 200) {
                 var xmlDoc = JSON.parse(http_request.responseText);
                 xmlDoc = xmlDoc.value;
                 document.getElementById("hide").innerHTML = xmlDoc.joke;
             } else {
                 html.innerHTML+="<p>error "+http_request.status;
                     }
         }
         http_request.send(null);
 }

