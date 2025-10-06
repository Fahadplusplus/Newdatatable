function getIds(columnIndex) {
    const tbody = dataTable.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));
    
    const ids = rows.map(row => row.cells[columnIndex].textContent.trim());

    return ids;
}

const ids = getIds(0);
console.log(ids);
