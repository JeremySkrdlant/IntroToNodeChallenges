const chai = require("chai")

const {factorial, simpsonsChalkboard} = require("../app");

const {expect} = chai; 

describe("Working with loops", ()=>{
    it("Testing Factorial", ()=>{
        let result = factorial(5); 
        expect(result, "5! should be 120").to.be.equal(120);

        let result2 = factorial(7); 
        expect(result2, "7! should be 5040").to.be.equal(5040);

        let result3 = factorial(3);
        expect(result3, "3! should be 6").to.be.equal(6);

        let result4 = factorial(0)
        expect(result4, "0! should be 1 \_o_/").to.be.equal(1);
    })

    it("Testing Simpson Chalboard", ()=>{
        let test1Answer = "test\ntest\ntest\n";
        let result1 = simpsonsChalkboard("test", 3);
        expect(result1, `we expect ${test1Answer}`).to.be.equal(test1Answer); 

        let test2Answer = "I like coffee\nI like coffee\n"
        let result2 = simpsonsChalkboard("I like coffee", 2)
        expect(result2, `We expect ${test2Answer}`).to.be.equal(test2Answer);
    })
})