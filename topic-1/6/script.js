//Receives the matrix by parameter and creates the table in the html   
function create_table(matrix) {

    let clear = document.getElementById('show_table');
    if(clear !== null)
        clear.innerHTML = '';

    let container = document.getElementById('show_table');
    let table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '5');
    let tbdy = document.createElement('tbody');
    
    matrix.forEach(element => {  
        let fila = document.createElement('tr');
        table.appendChild(fila);
        for (let index = 0; index < element.length; index++) {
            let col = document.createElement('td');
            let text = document.createTextNode(element[index]);
            col.appendChild(text);
            fila.appendChild(col);
        }
        tbdy.appendChild(fila);
    });
    table.appendChild(tbdy);
    if (container !== null)
        container.appendChild(table);   
}

//Create the matrix
function create_mat() {
    let matrix =[['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY'],
            ['Math','Literature','Math','English','Biology'],
            ['Chemistry','English','Literature','Geography','Biology'],
            ['Geography','Accounting','Law','Chemistry','History'],
            ['Physics','Accounting','Physics','Law','History']
        ];
    return matrix;
}  


window.onload = function() {
    create_table(create_mat());
};

