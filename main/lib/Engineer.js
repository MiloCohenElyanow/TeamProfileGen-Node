//importing employee js file this will be instantiated as its imported
const FS = require("fs"); // FS for file system
const INQ = require("inquirer"); // INQ for inquirer
const Employee = require("./Employee.js");

// creating new engineer subclass of emplyee
class Engineer extends Employee {
  constructor(name, id, email, githubURL) {
    //we can just declare the super class attributes to add employee attributes
    super(name, id, email);
    //adding githubURL to engineer
    this.githubURL = githubURL;
  }

  get_GithubURL(){
    //adding get_githubURL method to engineer,
    return (this.githubURL);
  }
  get_Job(){
    return ("Engineer");
  }
}
//declaring inquire questions that will be needed for engineer
const inquireAttributes = [
  {
    type:'input',
    message:"Enter Engineer's name: ",
    name:'name'
  },
  {
    type:'input',
    message:"Enter Engineer's new ID number: ",
    name:'id'
  },
  {
    type:'input',
    message:"Enter Engineer's email: ",
    name:'email'
  },
  {
    type:'input',
    message:"Enter Engineer's github username - CasE SenSiTivE: ",
    name:'github'
  }
];

//when calling createEmplyee later itll construct engineer, as we set it up before this in the code
function createEmployee(data){
  const engineer = new Engineer(data.name, data.id, data.email, data.github);
  return engineer;
}

//send back engineer to original call
module.exports = {Engineer,createEmployee,inquireAttributes} 
/* 
*/