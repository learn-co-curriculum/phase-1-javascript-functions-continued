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
      let result = wrapAdjective()
      let emphatic = result("a hard worker")
      expect(emphatic).to.equal("You are *a hard worker*!")
    });

    it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective("||")
      let emphatic = result("a dedicated programmer")
      expect(emphatic).to.equal("You are ||a dedicated programmer||!")
    });
  })

  describe("defines an object called Calculator", function() {
    it("has a JavaScript Object called Calculator as a local variable", function() {
      expect(Calculator).to.be.a('object')
    })

    describe("that has a function called add", function() {
      it("Calculator.add exists", function() {
        expect(Calculator.add).to.exist
      })

      it("calculates 1 + 3", function() {
        expect(Calculator.add(1,3)).to.equal(4)
      })
    })

    describe("that has a function called subtract", function() {
      it("Calculator.subtract exists", function() {
        expect(Calculator.subtract).to.exist
      })

      it("calculates 1 - 3", function() {
        expect(Calculator.subtract(1,3)).to.equal(-2)
      })
    })

    describe("that has a function called multiply", function() {
      it("Calculator.multiply exists", function() {
        expect(Calculator.multiply).to.exist
      })

      it("calculates 1 * 3", function() {
        expect(Calculator.multiply(1,3)).to.equal(3)
      })
    })

    describe("that has a function called divide", function() {
      it("Calculator.divide exists", function() {
        expect(Calculator.divide).to.exist
      })

      it("calculates 10 / 5", function() {
        expect(Calculator.divide(10,5)).to.equal(2)
      })
    })
  })

  describe("Defines a function called actionApplyer", function() {
    it("exists", function() {
        expect(actionApplyer).to.exist
    })

    describe("receives two arguments: a starting integer and an array of functions", function() {
      it("returns the given starting point, unchanged, when the array is empty", function() {
        expect(actionApplyer(0, [])).to.equal(0)
      })

      it("Given 13, returns 4 after being acted on by several functions", function() {
        let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
        arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
        expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
      })
    })


  })
})
