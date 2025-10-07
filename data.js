let jsonObj = [];

const savedData = localStorage.getItem("tableData");

if (savedData == false) {
  jsonObj = JSON.parse(savedData);
} else {
  jsonObj = [
    {
      Id: "001",
      fullname: "aJohn Doe",
      position: "Manager",
      office: "NYc",
      age: 31,
    },
    {
      Id: "002",
      fullname: "bJohn Doe",
      position: "CEO",
      office: "NYa",
      age: 32,
    },
    {
      Id: "003",
      fullname: "cJohn Doe",
      position: "intern",
      office: "NYb",
      age: 33,
    },

    {
      Id: "004",
      fullname: "dJohn Doe",
      position: "cto",
      office: "NYc",
      age: 34,
    },
    {
      Id: "005",
      fullname: "eJohn Doe",
      position: "intern",
      office: "NYd",
      age: 34,
    },
    {
      Id: "006",
      fullname: "fJohn Doe",
      position: "designer",
      office: "NYe",
      age: 35,
    },
    {
      Id: "007",
      fullname: "gJohn Doe",
      position: "programmer",
      office: "NYf",
      age: 36,
    },

    {
      Id: "008",
      fullname: "hJohn Doe",
      position: "ui",
      office: "NYg",
      age: 37,
    },
    {
      Id: "009",
      fullname: "fJohn Doe",
      position: "designer",
      office: "NYe",
      age: 35,
    },
    {
      Id: "010",
      fullname: "gJohn Doe",
      position: "programmer",
      office: "NYf",
      age: 36,
    },

    {
      Id: "011",
      fullname: "hJohn Doe",
      position: "ui",
      office: "NYg",
      age: 37,
    },
     {
      Id: "012",
      fullname: "hJohn Doe",
      position: "ui",
      office: "NYg",
      age: 37,
    },
    {
      Id: "013",
      fullname: "fJohn Doe",
      position: "designer",
      office: "NYe",
      age: 35,
    },
    {
      Id: "014",
      fullname: "gJohn Doe",
      position: "programmer",
      office: "NYf",
      age: 36,
    },

    {
      Id: "015",
      fullname: "hJohn Doe",
      position: "ui",
      office: "NYg",
      age: 37,
    },
   
   
     
  ];

  localStorage.setItem("tableData", JSON.stringify(jsonObj));
}
