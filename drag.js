  function getIds(columnIndex) {
    const tbody = dataTable.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));

    ids = rows.map(row => row.cells[columnIndex].textContent.trim());

    
  
    for(ele of ids){
        ele++
        console.log(ele);

        
    }

  
}
