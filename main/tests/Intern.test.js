const {Intern} = require("../lib/Intern");

describe("Intern", ()=> {
  describe("Construct", ()=> {
    it("this should return the intern object intern additionaly has school", ()=> {
      const obj_Intern = new Intern("TestName",1,"TestEmail","TestSchool");

      expect(typeof obj_Intern.get_School()).toMatch("string") && expect(typeof obj_Intern.get_School()).not.toMatch("undefined")
    })
  })
})