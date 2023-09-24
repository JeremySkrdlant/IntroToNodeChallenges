const chai = require("chai");
const { getMyOS, hashThisString} = require("../app");
const {expect} = chai; 
const os = require("os");

describe("Working with Node", ()=>{
    it("Testing getMyOS", ()=>{
        expect(getMyOS()).to.be.equal(os.type())
    })

    it("Testing Hash this String", ()=>{
        expect(hashThisString("Hello")).to.be.equal("185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969")
        expect(hashThisString("Doge")).to.be.equal("e2d8f65a2229d7d2d0353e5fd6f8e9bc41bc95ad9d2a878fe4273a5d0795a900")
    })
})
