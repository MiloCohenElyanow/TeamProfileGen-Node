const {Engineer} = require("../lib/Engineer");

describe("Engineer", ()=> {
  describe("Construct", ()=> {

    it("this should create an instance of engineer, engineer should have a github username entry", ()=> {
      const obj_Engineer = new Engineer("TestName", 0001, "TestEmail", "TestGitHub");

      expect(typeof obj_Engineer.github).toMatch("string") && (typeof obj_Engineer.github).not.toMatch("undefined"); // should be a string and should never be undefined
      expect(typeof obj_Engineer.github).toMatch("string");
    });
  });

  describe ("get_GithubURL", ()=> {
    it("this should return the engineers github entry", ()=> {
      const obj_GitHub = new Engineer("TestName", 0001,"TestEmail","TestGitHub");

      expect(typeof obj_GitHub()).toMatch("string");
    });
  });

  describe("get_Job", ()=> {
    it("this should return the Job of the employee", ()=> {
      const obj_Job = new Engineer("TestName", 0001, "TestEmail", "TestGitHub");

      expect(obj_Job.get_Job()).toBe("Engineer");
    });
  });
})