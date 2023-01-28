class Employee {
// all employees should have attributes of name id and email, they should all also be returnable from anywhere...
  constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  getname(){
    return this.name
  }
  getid(){
    return this.id
  }
  getemail(){
    return this.email
  }

  getjob(){
    return 'employee'
  }
}

module.exports = Employee;