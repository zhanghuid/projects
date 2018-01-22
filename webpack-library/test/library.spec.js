
import chai from 'chai';
import MyDate from '../src/MyDate';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new MyDate();
  });
  describe('when I need the date of day', () => {
    it('should return the 22', () => {
      expect(lib.getTest()).to.be.equal((new Date()).getDay());
    });
  });
});

// describe('Given an instance of my Dog library', () => {
//   before(() => {
//     lib = new Dog();
//   });
//   describe('when I need the name', () => {
//     it('should return the name', () => {
//       expect(lib.name).to.be.equal('Dog');
//     });
//   });
// });