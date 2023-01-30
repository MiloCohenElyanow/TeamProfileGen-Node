const FS = require("fs"); // FS for file system
const INQ = require("inquirer"); // INQ for inquirer
const JST = require("jest");//JST for jest

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { default: inquirer } = require("inquirer");

const employees = [];
let complete = false;

//imediatly as app starts we need a manager to this will be completed first, response from inquire will be send to the array
async function init(){
  const data = await inquirer.prompt(Manager.inquireAttributes)
  employees.push(Manager.inquireAttributes(data));
  loopMain();
}
// as long as complete is not true and we are not already in another prompt this prompt will be active.
async function loopMain(){
  if (complete !== true){
    const response = await inquirer.prompt([
      {
        type:"list",
        message:"select an eomployee to add or complete your additions: ",
        choices:["Engineer","Intern","Complete"],
        name:"selectType"
      }
    ])
    switch(response.selectType){
      case "Engineer":
        //when engineer is selected we await the prompt response then push the response data into an array
        const engineerData = await inquirer.prompt(Engineer.questions) 
        employees.push(Engineer.createEmployee(engineerData));
        break;
      case "Intern":
        const internData = await inquirer.prompt(Intern.inquireAttributes)
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

}