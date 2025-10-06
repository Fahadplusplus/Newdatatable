function validateForm() {
  let returnVal = true;


  
function getIds(columnIndex) {
    const tbody = dataTable.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));
    
    return rows.map(row => row.cells[columnIndex].textContent.trim());
}


const enteredId = Id.value.trim();

if (enteredId.length !== 3) {
    setError("input0", "Enter a valid ID");
    returnVal = false;
} else {
    const existingIds = getIds(0);

    if (existingIds.includes(enteredId)) {
        setError("input0", "ID already exists");
        returnVal = false;
    }
}

  if (fullName.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(fullName.value.trim()) || fullName.value.trim().length > 15) {
    setError("input1", "Enter a valid name");
    returnVal = false;
  }


  if (position.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(position.value.trim()) || position.value.trim().length > 15) {
    setError("input2", "Enter a valid position");
    returnVal = false;
  }


  if (office.value.trim().length < 3) {
    setError("input3", "Enter a valid office name");
    returnVal = false;
  }


  if (!age.value || parseInt(age.value) < 18) {
    setError("input4", "Age must be 18 or older");
    returnVal = false;
  }
 

  return returnVal;
}


function setError(id, msg) {
  const Element = document.getElementById(id);
  const errorMsg = Element.querySelector(".errorMsg")

  errorMsg.textContent = msg

}
function clearErrors() {
  const errors = document.querySelectorAll(".errorMsg");
  errors.forEach(el => el.textContent = "");
}

function EvalidateForm() {
  let returnVal = true;
     if (EId.value.trim().length !== 3) {
    setError("Einput0", "Enter a valid ID");
    returnVal = false;
  }
  function getIds(columnIndex) {
    const tbody = dataTable.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));
    
    return rows.map(row => row.cells[columnIndex].textContent.trim());
}


const enteredId = EId.value.trim();

if (enteredId.length !== 3) {
    setError("Einput0", "Enter a valid ID");
    returnVal = false;
} else {
    const existingIds = getIds(0);

    if (existingIds.includes(enteredId)) {
        setError("Einput0", "ID already exists");
        returnVal = false;
    }
}


  if (EfullName.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(EfullName.value.trim()) || EfullName.value.trim().length > 15) {
    setError("Einput1", "Enter a valid name");
    returnVal = false;
  }


  if (Eposition.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(Eposition.value.trim()) || Eposition.value.trim().length > 15) {
    setError("Einput2", "Enter a valid position");
    returnVal = false;
  }


  if (Eoffice.value.trim().length < 3) {
    setError("Einput3", "Enter a valid office name");
    returnVal = false;
  }


  if (!Eage.value || parseInt(Eage.value) < 18) {
    setError("Einput4", "Age must be 18 or older");
    returnVal = false;
  }


  return returnVal;
}