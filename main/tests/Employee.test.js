const Employee = require("../lib/Employee");


describe('Employee', ()=> {
  describe("Construct", ()=> {
    
    it("on construction should return an employee object with aspects name, id, and email", () => {
      const compareEmployee = {name: 'testName', id:1, email:"testEmail"};
      const runEmployee = new Employee("testName",1,"testEmail");
      //when jest runs the above test it will compare the two above lines, runEmployee is run through the object,and compareEmployee is compared against. expected output === output gotten when tested
      expect(runEmployee).toMatchObject(compareEmployee);
    });
  });
  // The bellow will test if the actual aspects of the object match the type we want here. otherwise we can set them to test as or for anything at all. :)
  describe("get_Name", ()=> {
    it("this should return the name of the Employee", ()=> {
      const obj_Employee = new Employee('TestName', 1, 'TestEmail');
      expect(typeof obj_Employee.get_Name()).toMatch('string');
    });
  });

  describe('get_ID', ()=> {
    it("this should return the ID of the Employee", ()=> {
      const obj_ID = new Employee("TestName", 1, "TestEmail");

      expect(typeof obj_ID.get_Id()).toMatch('number');
    });
  });
  describe("get_Email", ()=> {
    it("this should return the email of the employee", ()=> {
      const obj_Email = new Employee("TestName", 1,"TESTINGEMAIL@EMAIL.COM");

      expect(typeof obj_Email.get_Email()).toMatch("string");
    });
  });
  describe("get_Job", ()=> {
    it("this should return the Job of the Employee", ()=> {
      const obj_Job = new Employee("TestName", 1, "email");

      expect(obj_Job.get_Job()).toBe("employee")
    })
  })
})