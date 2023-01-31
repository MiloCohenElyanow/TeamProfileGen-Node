const FS = require("fs"); // FS for file system
const INQ = require("inquirer"); // INQ for inquirer
const Employee = require("./Employee");

class Intern extends Employee {
  constructor (name, id, email, school){
    super(name, id, email);

    this.school = school;
  }

  get_School(){
    return this.school;
  }

  get_Job(){
    return'Intern'
  }
}

const inquireAttributes = [
  {
    type:'input',
    message:"Enter Intern's name: ",
    name:'name'
  },
  {
    type:'input',
    message:"Enter Intern's  new ID number: ",
    name:'id'
  },
  {
    type:'input',
    message:"Enter Intern's email: ",
    name:'email'
  },
  {
    type:'input',
    message:"Enter Intern's school name: ",
    name:'school'
  }
];

function createEmployee(data){
  const intern = new Intern(data.name, data.id, data.email, data.school)
  return intern;
}

module.exports = {Intern, createEmployee, inquireAttributes};