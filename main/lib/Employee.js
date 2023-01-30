const FS = require("fs"); // FS for file system
const INQ = require("inquirer"); // INQ for inquirer

class Employee {
// all employees should have attributes of name id and email, they should all also be returnable from anywhere...
  constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  get_Name(){
    return (this.name)
  }
  get_Id(){
    return (this.id)
  }
  get_Email(){
    return (this.email)
  }

  get_Job(){
    return ('employee')
  }
}

module.exports = Employee;