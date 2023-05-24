// const naam = document.getElementById('peoplelist')
// fetch('generated.json')
// .then (response => response.json())
// .then (data => jasonopscherm(data));

// function javaopscherm(data){
//     data.forEach(element => {
//         console.log(element.name)
//         naam.innerHTML += "<li>"+ element.name +"</li>"
//     });
// }

async function logJSONData() {
    const response = await fetch("generated.json");
    const jsonData = await response.json();

    const jsonDataDiv = document.getElementById("json-data");
    jsonData.forEach(element => {
                jsonDataDiv.innerHTML += "<li>"+ element.name +"</li>"
            });
}
logJSONData();

// fetch('path/to/file.json')
//   .then(response => response.json())
//   .then(data => {                             <-- De manier die ik zelf gevonden had
//     console.log(data);
//   })
//   .catch(error => console.error(error));