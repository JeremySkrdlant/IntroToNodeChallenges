const chai = require("chai");
const {fullNameWithComma, fillInTheBlank} = require("../app");
const {expect} = chai; 

describe("Working with Strings", ()=>{
    it("Testing Full Name with Comma",()=>{ 
        expect(fullNameWithComma("Bob", "Ross")).to.be.equal("Ross, Bob")
        expect(fullNameWithComma("joe", "dirt"), "Capital Letters matter").to.be.equal("Dirt, Joe")
        expect(fullNameWithComma("GORDON", "RAMSAY"), "Don't yell please.").to.be.equal("Ramsay, Gordon")
    })

    it("Testing fill in the blank", ()=>{
        expect(fillInTheBlank("coffee", "snacks", "naps")).to.be.equal("I like coffee, snacks and naps."); 
        expect(fillInTheBlank("Pizza", "Motorcycles", "The Open Road")).to.be.equal("I like pizza, motorcycles and the open road.")
    })
})
