jest.dontMock('jquery');
const $ = require('jquery');
var fs = require('fs');
const matchers = require('jest-jquery-matchers');

describe('should header', () => {
    beforeAll(() => {
        var f = fs.readFileSync("DOM//Exmpale 2//Index.html", 'utf-8');
        document.documentElement.innerHTML = f;
     
    });

    beforeEach(function () {
        jest.addMatchers(matchers);
    });

    test('exists in body', () => {
        expect( $('body').find('header') ).toExist();
    });

    test('have text', () => {
        expect( $('header') ).toHaveText('header');
    });

    test('should have class', ()=>{
        expect( $('header') ).toHaveClass('header_main--font');
    });
});