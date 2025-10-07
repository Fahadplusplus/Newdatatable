const Emain = document.getElementById("editMain");
const Ebtn = document.getElementById("Ebtn");
const EfullName = document.getElementById("EName");
const Eposition = document.getElementById("EPosition");
const Eoffice = document.getElementById("EOffice");
const Eage = document.getElementById("EAge");
const ESdate = document.getElementById("EstartDate");
const Esalary = document.getElementById("ESalary");
const Eid = document.getElementById("EId");
const Esubmit = document.getElementById("ESubmit");
const deleteBtn = document.querySelector(".deleteBtn")

let currentEditIndex = "";

Emain.classList.add("hidden");



table.addEventListener("click", (e) => {
  if (e.target.classList.contains("editButton")) {
    e.preventDefault();
    e.stopPropagation();

    const index = parseInt(e.target.getAttribute("data-index"));
    const data = jsonObj[index];

    currentEditIndex = index;
    
    Eid.value = data.Id;
    EfullName.value = data.fullname; 
    Eposition.value = data.position;
    Eoffice.value = data.office;
    Eage.value = data.age;
  

    Emain.classList.remove("hidden");
    Emain.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    body.classList.add("overflow-hidden");
  }
});





Ebtn.addEventListener("click", () => {
  
  Emain.classList.add("hidden");

  tableCon.classList.remove("hidden");
  body.classList.remove("overflow-hidden");

  clearform()
  clearErrors()
});



Esubmit.addEventListener("click", (e) => {
  e.preventDefault();
   if (currentEditIndex === "") return;
   const isValid = EvalidateForm();
   if(isValid){
    jsonObj[currentEditIndex].Id = Eid.value.trim();
 jsonObj[currentEditIndex].fullname = EfullName.value.trim();
  jsonObj[currentEditIndex].position = Eposition.value.trim();
  jsonObj[currentEditIndex].office = Eoffice.value.trim();
  jsonObj[currentEditIndex].age = Eage.value.trim();
  

  
  Emain.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  clearform();
  clearErrors();
tb.innerHTML = "";
addRows(jsonObj)

total_pages = Math.ceil(total_record / records_per_page ); 

displayRecords(currentPage);
genPage();
  

  currentEditIndex = "";
   }

 
 
});






