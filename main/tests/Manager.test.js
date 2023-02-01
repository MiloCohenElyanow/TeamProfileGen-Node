const {Manager} = require("../lib/Manager");

describe("Manager", ()=> {
  describe("Construct", ()=> {
    it("this should return the manager object which additionaly has an office number", ()=> {

    const obj_Manager = new Manager("TestName", 1, "TestEmail", 1);
    // office number should always be a number and should never be undefined
    expect(typeof obj_Manager.officeNumber).toMatch("number") && expect(typeof obj_Manager.officeNumber).not.toMatch("undefined")
    });
  });

  describe("get_Job", ()=> {
    it("this should always return manager", ()=> {
      const obj_Job = new Manager("TestName", 1, "TestEmail", 1);

      expect(obj_Job.get_Job()).toMatch("Manager");// any manager job should always be manager
    });
  });
})