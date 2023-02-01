const FS = require("fs"); // FS for file system
const inq = require("inquirer"); // INQ for inquirer
const JST = require("jest");//JST for jest
// import * as inq from "inquirer"
//iNQ
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employees = [];
let complete = false;

//imediatly as app starts we need a manager to this will be completed first, response from inquire will be send to the array
async function init(){
  const data = await inq.prompt(Manager.inquireAttributes)
  employees.push(Manager.createEmployee(data));
  loopMain();
}
// as long as complete is not true and we are not already in another prompt this prompt will be active.
async function loopMain(){
  if (!complete){
    const response = await inq.prompt([
      {
        type:"list",
        message:"select an eomployee to add or complete your additions: ",
        choices:["Engineer","Intern","Complete"],
        name:"advance"
      }
    ])
    switch(response.advance){
      case "Engineer":
        //when engineer is selected we await the prompt response then push the response data into an array
        const engineerData = await inq.prompt(Engineer.inquireAttributes) 
        employees.push(Engineer.createEmployee(engineerData));
        break;
      case "Intern":
        const internData = await inq.prompt(Intern.inquireAttributes)
        employees.push(Intern.createEmployee(internData));
        break;
        //once complete is selected switch complete bool to true and that will break the loop of selectors
      case "Complete":
        complete = true;
    }
    loopMain();
  } else {
    pushPage();
  }
}

function pushPage(){
  let htmlPage = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <title>bruh Team</title>
  </head>
  <body>
      <header class="container-fluid text-center text-light bg-danger py-5">
          <h1>My Team</h1>
      </header>

      <main class="container-fluid pt-5 d-flex justify-content-center">
      `;
  employees.forEach(obj => {
    htmlPage += `
    <div class="card" style="width: 18rem;">
    <img src="../assets/employeSilhouette.png" class="card-img-top" alt="employeSilhouette" style="width:8rem height:8rem;">
    <div class="card-body">
      <h5 class="card-title">${obj.get_Name()}</h5>
      <h4 class="card-subtitle">${obj.get_Job()}</h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${obj.get_Id()}</li>
      <li class="list-group-item">Email: <a href="mailto:${obj.get_Email()}">${obj.get_Email()}</a></li>
      <li class="list-group-item">
    `;
    switch(obj.get_Job()){
      case 'Manager':
        htmlPage += `Office: ${obj.officeNumber}</li>`;
        break;
      case 'Engineer':
        htmlPage += `Github:<a href="https://github.com/${obj.githubURL}" target="_blank">${obj.githubURL}</a></li>`;
        break;
      case 'Intern':
        htmlPage += `school: ${obj.school}</li>`;
        break;
    };
    htmlPage+=`
        </ul>
      </div>
    </div>`;
  });
  htmlPage+=`
    </main>
  </body>
  </html>
  `
  FS.writeFile(`./dist/index.html`, htmlPage, err => err ? console.log("Error: ",err): console.log('succes'));
}

init();