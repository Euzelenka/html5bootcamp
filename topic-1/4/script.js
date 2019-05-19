//Config object
function object_for_ajax (url,method) {
    
    let config = {
        url: url,
        method: method,
        responseType: 'json'
    }
    return config;    
}

//Reusable function to perform AJAX calls
function _ajax(config){
    
    return new Promise((resolve, reject) => {
        let http_request = new XMLHttpRequest();
        http_request.open(config.method, config.url, true); 
        http_request.responseType = config.responseType;
        
        http_request.onload = function () {

            if  ((http_request.status == 200) && (http_request.readyState == 4)) {

                resolve(http_request.response);
            } else {

                    reject(Error(http_request.statusText));
                    }            
        };

        http_request.send(null);
    });
}

function fixedEncodeURIComponent(uri) {
    
    return encodeURIComponent(uri).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

//Shows the list of repositories in the html
function show_list_repositories(data) {

    let ul = document.createElement('ul');
    for (let index = 0; index < data.length; index++) {
        
        let li = document.createElement('li');
        let a = document.createElement('a');
        let linkText = document.createTextNode(data[index].html_url);
        a.appendChild(linkText);
        a.title = data[index].html_url;
        a.href = data[index].html_url;
        li.appendChild(a);
        ul.appendChild(li);

    }
    document.getElementById('show_list').appendChild(ul);
}

//Get the repositories from the api
function repositories_from_api(param) {
    
    let url_parameter = param;
    url_parameter = 'q=' + url_parameter;
    let url_origin = 'https://api.github.com/search/repositories';
    let final_url = url_origin + '?' + url_parameter;
   
    _ajax(object_for_ajax(final_url,'GET')).then(function(data){

        show_list_repositories(data.items);

    }).catch(() => {

        document.getElementById("show_list").innerHTML = "We are sorry. We are having problems with the server";

    });
     
 }


//Clear the container and get input value 
function new_search() {

    let clear = document.getElementById('show_list');
    clear.innerHTML = '';
    
    let param = document.getElementById('input_search').value;
    repositories_from_api(param);

}