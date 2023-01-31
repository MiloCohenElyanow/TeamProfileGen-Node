const {Intern} = require("../lib/Intern");

describe("Intern", ()=> {
  describe("Construct", ()=> {
    it("this should return the intern object intern additionaly has school", ()=> {
      const obj_Intern = new Intern("TestName",0001,"TestEmail","TestSchool");

      expect(typeof obj_Intern.get_School).toMatch("string") && (typeof obj_Intern.get_School).not.toMatch("undefined")
    })
  })
})