const { loadData, handleError, handleSuccess } = require('../ajax');
const $ = require("jquery");


describe('ts', () => {

  test('Data should load', () => {
    const ajaxSpy = jest.spyOn($, 'ajax');
    const logSpy = jest.spyOn(console, 'log');
    const addClass=jest.spyOn($.fn,'addClass');

    loadData();
    expect(ajaxSpy).toBeCalledWith({
      type: 'GET',
      url: 'url',
      success: expect.any(Function),
      error: expect.any(Function)
    });
    handleSuccess(expect.any(Object));
    expect(logSpy).toBeCalled();
    expect(addClass).toBeCalledTimes(2);
  });
  test('Data should fail', () => {
    const ajaxSpy = jest.spyOn($, 'ajax');
    const logSpy = jest.spyOn(console, 'error');
    loadData();
    expect(ajaxSpy).toBeCalledWith({
      type: 'GET',
      url: 'url',
      success: expect.any(Function),
      error: expect.any(Function)
    });
    handleError(expect.any(Object));
    expect(logSpy).toBeCalled();
  });
})

