const chai = require("chai");
const { sum, magicNumber } = require("../app.js");

const { expect } = chai;

describe("Working with numbers", ()=>{

    it("Testing The Sum Function", ()=>{
        let value = sum(5, 6);
        expect(value,"5 + 6 should be 11").to.be.equal(11);
        let value2 = sum(1, 3);
        expect(value2, "1 + 3 should be 4").to.be.equal(4);
    })

    it("Testing Magic Number", ()=>{
        let result1 = magicNumber(55); 
        expect(result1, "We always get 2").to.be.equal(2);
        let result2 = magicNumber(2); 
        expect(result2, "We always get 2").to.be.equal(2); 
    })

})