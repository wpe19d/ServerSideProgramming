let expect = require('chai').expect;

let Lot = require("../lib/lot");

// Tests for the lot object
describe('Lot', function () {

  it("Has a self-generated id", function () {
    var lot = new Lot(5, 'stuff');
    expect(lot).to.have.property('id').to.not.be.undefined;
  });

  it("Only allows a positive number for amount", function () {

  });

  it("Will have an empty string if no notes are passed in", function () {

  });

  it("Allows inventory to be shipped out", function () {

  });

  it("Requires a positive inventory number to be shipped out", function () {

  });

  it("Will not allow excess inventory to be shipped out", function () {

  });

  it("Returns a new Lot object when inventory is shipped", function () {

  });

});