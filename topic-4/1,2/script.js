const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase = null;
const db_name = 'DB_text';

window.addEventListener('load', startDB, false);


function startDB() {
    dataBase = indexedDB.open(db_name, 3);
    dataBase.onupgradeneeded = function () {
        const active = dataBase.result;
        const object = active.createObjectStore("text_area", {keyPath: "id", autoIncrement:true});
        object.createIndex('text', 'text', {unique: false});
    };

    dataBase.onsuccess = function () {
        console.log('Database loaded');
        
    };
    dataBase.onerror = function () {
        console.log('Error loading database');
    };
}

function save_data(info) {

    //Save the elements in localStorage.
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('text_area', info);

    } else {
        console.log("LocalStorage no soportado en este navegador");
    }


    //Save the elements in IndexedDB.
    let active = dataBase.result;
    const data = active.transaction(['text_area'], 'readwrite');
    const object = data.objectStore('text_area');
    object.add({text:info});
  
    data.oncomplete = function () {
      console.log('The data has been written successfully');
    };
  
    data.onerror = function () {
      console.log('The data has been written failed');
    }
}


function get_data(){

    const text_area = document.getElementById('myTxtArea').value;
    save_data(text_area);
}


function read() {

    let active = dataBase.result;
    const transaction = active.transaction(["text_area"]);
    const objectStore = transaction.objectStore("text_area");
    const request = objectStore.getAll();
    
    request.onerror = function() {
       console.log("Unable to retrieve daa from database!");
    };
    
    
    request.onsuccess = function() {
       
       if(request.result) {
        request.result.forEach(elem => {
            console.log("Dato: " + elem.text);   
           });
            
       } else {
          alert("error");
       }
    };
 }


function delete_data() {

    //Remove the elements of localStoage.
    localStorage.removeItem('text_area');

    //Remove the elements of IndexedDB.
    let active = dataBase.result;
    const transaction = active.transaction(["text_area"], "readwrite");
    const objectStore = transaction.objectStore("text_area");
    const request = objectStore.clear();
    
    request.onsuccess = function() {
	        console.log("¡Registro borrado con éxito!");
    };
}

const dropZone = document.querySelector('#drop_zone');
 

    dropZone.addEventListener('dragover', function(evt) { 
        evt.stopPropagation(); 
        evt.preventDefault(); 
           
    }
    , false);

    dropZone.addEventListener('drop', function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer.files; 
        
        const reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onloadend = function() {
            
            dropZone.value = reader.result;
            save_data(dropZone.value);
            document.getElementById('list').innerHTML = '<ul>' + dropZone.value + '</ul>';
          }
    
        
    }
    , false);

    dropZone.addEventListener('dragleave', function(evt) {
        if (evt.target.className == "dropzone") {
            evt.target.style.background = "";
        }
      
      }, false);

      dropZone.addEventListener('dragstart', function(evt) {
        evt.target.style.opacity = .5;
      }, false);
      
      dropZone.addEventListener('dragend', function(evt) {
        evt.target.style.opacity = "";
      }, false);
        






