const $ = require("jquery");
jest.mock('fs')
const fs = require('fs') // Mocked module
//const fs = jest.requireActual('fs') // Original module
const { showHide, showTooltip } = require("../playground");

describe("FileSystem module",()=>{

    it('should mock the fs',()=>{

        fs.readFileSync.mockImplementation(()=>{
            return "some data1";
        })

        const data=fs.readFileSync('a.txt');
        expect(data).toBeDefined();
        expect(data).toBe("some data1");
    })

})
describe('Jquery DOM ', () => {

    it('should call document.getElementById', () => {

        const getBoundingClientRectSpy = jest.fn(() => ({ top: 100 }));
        var myObj = [{
            name: 'test',
            getBoundingClientRect: getBoundingClientRectSpy,
            addClass: jest.fn(),
        }];
        jest.spyOn($.fn, 'init').mockReturnValue(myObj);
        showHide();
        expect(getBoundingClientRectSpy).toBeCalled();


    })
    it('should call document.getElementById2', () => {

        const getBoundingClientRectSpy = jest.fn(() => ({ top: 10 }));
        const removeClass = jest.fn();
        var myObj = [{
            name: 'test',
            getBoundingClientRect: getBoundingClientRectSpy,
            addClass: jest.fn(),
            removeClass
        }];
        jest.spyOn($.fn, 'init').mockReturnValue(myObj);
        showHide();
        expect(getBoundingClientRectSpy).toBeCalled();
        expect(removeClass).toBeCalledTimes(1);


    })
    it('Should be mocked through fn.find()',function(){
        var mockElement = {
            parentNode:true,
            expression:"#myId .myClass"
        };
        var fn_find = $.fn.find;
        var spy = jest.spyOn($.fn, "find").mockImplementation((expression)=>{
            if(expression===mockElement.expression){
                return mockElement;
            }
            return fn_find(expression);
        });
        var foundElement = $(mockElement.expression);
        expect(foundElement).toBe(mockElement);
        $.fn.find = fn_find;
    });
    it('Should be mocked through document.getElementById',function(){
        var mockElement = {
            id:"someId", 
            parentNode:true
        };
        var document_getElementById = document.getElementById;
        var spy = jest.spyOn(document, "getElementById").mockImplementation((id)=>{
            if(id===mockElement.id){
                return mockElement;
            }
            return document_getElementById(id);
        });
        var foundElement = $("#"+mockElement.id);
        expect(foundElement[0]).toBe(mockElement);
        document.getElementById = document_getElementById;
    });

})
