function addRow(){
    const table = document.querySelector(".players table");
    const newRow = table.insertRow(-1);

    for(let i = 0; i < table.rows[0].cells.length; i++){
        const newCell = newRow.insertCell(-1);
    }
}

//setInterval(tableSize,16);