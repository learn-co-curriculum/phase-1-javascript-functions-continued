require ( './helpers.js' );

describe("index.js", () => {
  describe("defines saturdayFun function declaration as specified", function() {
    it("function exists", function() {
      expect(saturdayFun).to.exist
    })

    it("uses the default activity 'roller-skate' when no arguments are passed", function() {
      expect(saturdayFun()).to.equal("This Saturday, I want to roller-skate!")
    })

    it("permits the default activity to be overriden", function() {
      expect(saturdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")
    })
  })

  describe("defines mondayWork function expression as specified", function() {
    it("function exists", function() {
      expect(mondayWork).to.exist
    })

    it("uses the default activity 'go to the office' when no arguments are passed", function() {
      expect(mondayWork()).to.equal("This Monday, I will go to the office.")
    })

    it("permits the default activity to be overriden", function() {
      expect(mondayWork("work from home")).to.equal("This Monday, I will work from home.")
    })
  })

  describe("defines wrapAdjective function according to the specification", function() {
    it("function exists", function() {
      expect(wrapAdjective).to.exist
    })
    
    it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective('*')
      let emphatic = result("a hard worker")
      expect(emphatic).to.equal("You are *a hard worker*!")
    });

    it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective("||")
      let emphatic = result("a dedicated programmer")
      expect(emphatic).to.equal("You are ||a dedicated programmer||!")
    });
  })
})
