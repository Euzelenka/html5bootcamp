const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let dataBase = null;
const db_name = 'DB_text';

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


function save_data(){

    const text_area = document.getElementById('myTxtArea').value;
    
    //Save the elements in localStorage.
    if (typeof(Storage) !== 'undefined') {
        localStorage.setItem('text_area', text_area);

    } else {
        console.log("LocalStorage no soportado en este navegador");
    }


    //Save the elements in IndexedDB.
    let active = dataBase.result;
    const data = active.transaction(['text_area'], 'readwrite');
    const object = data.objectStore('text_area');
    object.add({text:text_area});
  
    data.oncomplete = function () {
      console.log('The data has been written successfully');
    };
  
    data.onerror = function () {
      console.log('The data has been written failed');
    }
    
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