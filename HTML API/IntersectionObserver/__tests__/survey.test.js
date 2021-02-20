//const jest=require("jest");
/* istanbul ignore file */
const survey = require('../survey');
var $ = require("jquery");
survey;
let spy;

const JSDOM = require("jsdom").JSDOM;
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
describe("Micro Survey Component tests", () => {
  beforeAll(() => {
    const spyFunc = jest.fn();
    var spy = jest.spyOn(survey, 'injectSurveyScript');
    Object.defineProperty(global.document, 'hasAttribute', { value: spyFunc });
    Object.defineProperty(global.document, 'removeAttribute', { value: spyFunc });

  })
  beforeEach(() => {


  })

  it("should invoke IntersectionObserver", () => {

    const mockedEntries = [{
      length: 1,
      target: {
        hasAttribute: jest.fn().mockReturnValueOnce(true),
        removeAttribute: jest.fn().mockReturnValueOnce(true)
      },
      isIntersecting: true,
      boundingClientRect: { x: 10, y: 20, width: 30, height: 40 },
      removeAttribute: jest.fn()

    }];
    var spy = jest.spyOn(survey, 'injectSurveyScript');


    jest.spyOn($.fn, "init").mockReturnValueOnce(mockedEntries);
    survey.surveyIntersection($("#microsurvey"));
    expect(spy).toHaveBeenCalledTimes(1);

  });
  it("should not call injectSurveyScript", () => {

    jest.clearAllMocks();

    const mockedEntries = [{
      target: {
        hasAttribute: jest.fn().mockReturnValueOnce(true),
        removeAttribute: jest.fn().mockReturnValueOnce(true)
      },
      isIntersecting: true,
      boundingClientRect: { x: 10, y: 20, width: 30, height: 40 },
      removeAttribute: jest.fn(),
      innerHTML: "<div></div>",

    }, { length: jest.fn().mockReturnValueOnce(1) }];
    
    const observe = jest.fn();
    const unobserve = jest.fn();

    // you can also pass the mock implementation
    // to jest.fn as an argument
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }))
   
    var spy = jest.spyOn(survey, 'injectSurveyScript');
  
    jest.spyOn(survey, 'elementExists').mockReturnValueOnce(true);

    survey.init();

    expect(observe).toHaveBeenCalledTimes(1);
    let [callback] = window.IntersectionObserver.mock.calls[0]
    console.log(callback);

  });
});
