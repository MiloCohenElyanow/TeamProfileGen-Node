const FS = require("fs"); // FS for file system
const INQ = require("inquirer"); // INQ for inquirer
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  get_Job(){
    return 'Manager';
  }
  get_OfficeNumber(){
    return this.officeNumber;
  }
}

const inquireAttributes = [
  {
    type: 'input',
    message: "Enter Manager's name: ",
    name: 'name'
  },
  {
    type: 'input',
    message: "Enter Manager's ID: ",
    name: 'id'
  },
  {
    type: 'input',
    message: "Enter Manager's email: ",
    name: 'email'
  },
  {
    type: 'number',
    message: "Enter Manager's office number: ",
    name: 'office'
  }
];

function createEmployee(data){
  const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
  return manager;
}

module.exports = {Manager, createEmployee, inquireAttributes}