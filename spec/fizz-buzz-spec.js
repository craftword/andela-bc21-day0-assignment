// JavaScript Document
var jasmine = require("jasmine")
var app = require("../fizz-buzz-lab/fizz-buzz-lab.js");



describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

});
describe("Return invalid argument when a non-integer argument is pass", function() {

      it("should return `Invalid Argument` for 'string'", function() {
        expect(app.fizzBuzz('string')).toEqual('Invalid Argument');
      });

      it("should return `Invalid Argument` for float 5.2", function() {
        expect(app.fizzBuzz(5.2)).toEqual('Invalid Argument');
      });

      
    });