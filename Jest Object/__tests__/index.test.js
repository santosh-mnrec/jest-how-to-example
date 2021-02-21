
const globalMockFn = jest.fn();
globalMockFn();
globalMockFn();

describe('jest', () => {
  const commonMockFn = jest.fn();
  commonMockFn();
  commonMockFn();

  describe('mock', () => {
    
    it('Mocks a module with an auto-mocked version when it is being required. ', () => {
      
      jest.mock('../banana');
      const banana = require('../banana');

          expect(banana()).toBeUndefined();
    });

       it('测试jest.mock的影响范围', () => {
      const banana = require('../banana');
      expect(banana()).toBeUndefined();
    });

    it("The second argument can be used to specify an explicit module factory that is being run instead of using Jest's automocking feature:", () => {
       jest.mock('../apple', () => jest.fn(() => 'apple is good'));
      const apple = require('../apple');

      expect(apple()).toBe('apple is good');
    });

    it("The third argument can be used to create virtual mocks – mocks of modules that don't exist anywhere in the system", () => {
     
      jest
        .mock('../zxm', () => jest.fn(() => 'fxxk zxm'), { virtual: true })
        .mock('../yk', () => jest.fn(() => 'fxxk yk'), { virtual: true });

      const zxm = require('../zxm');
      const yk = require('../yk');

      expect(zxm()).toBe('fxxk zxm');
      expect(yk()).toBe('fxxk yk');
    });
  });

  describe('isMockFunction', () => {
    it('globalMockFn should be a mock function', () => {
      expect(jest.isMockFunction(globalMockFn)).toBeTruthy();
    });

    it('apple module should be a mock function', () => {
      const apple = require('../apple');
      expect(jest.isMockFunction(apple)).toBeTruthy();
    });

    it('virtual module zxm should be a mock function', () => {
      const zxm = require('../zxm');
      expect(jest.isMockFunction(zxm)).toBeTruthy();
    });

    it('virtual module yk should be a mock function', () => {
      const yk = require('../yk');
      expect(jest.isMockFunction(yk)).toBeTruthy();
    });

    it('grape module should not be a mock function', () => {
      const grape = require('../grape');
      expect(jest.isMockFunction(grape)).toBeFalsy();
    });
  });

  describe('clearAllMocks', () => {
    
    const mockFn = jest.fn();
    mockFn();
    mockFn();

    it('Clears the mock.calls and mock.instances properties of all mocks. Equivalent to calling .mockClear() on every mocked function.', () => {
      const mockFnV1 = jest.fn();
      const mockFnV2 = jest.fn();
      mockFnV1();
      mockFnV1();
      mockFnV2();
      mockFnV2();

      expect(mockFnV1.mock.calls).toHaveLength(2);
      expect(mockFnV2.mock.calls).toHaveLength(2);
      expect(mockFnV1.mock.instances).toHaveLength(2);
      expect(mockFnV2.mock.instances).toHaveLength(2);

      expect(mockFn.mock.calls).toHaveLength(2);
      expect(commonMockFn.mock.calls).toHaveLength(2);
      expect(globalMockFn.mock.calls).toHaveLength(2);
      expect(mockFn.mock.instances).toHaveLength(2);
      expect(commonMockFn.mock.instances).toHaveLength(2);
      expect(globalMockFn.mock.instances).toHaveLength(2);

      jest.clearAllMocks();

      expect(mockFnV1.mock.calls).toHaveLength(0);
      expect(mockFnV2.mock.calls).toHaveLength(0);
      expect(mockFnV1.mock.instances).toHaveLength(0);
      expect(mockFnV2.mock.instances).toHaveLength(0);

    
      expect(mockFn.mock.calls).toHaveLength(0);
      expect(commonMockFn.mock.calls).toHaveLength(0);
      expect(globalMockFn.mock.calls).toHaveLength(0);
      expect(mockFn.mock.instances).toHaveLength(0);
      expect(commonMockFn.mock.instances).toHaveLength(0);
      expect(globalMockFn.mock.instances).toHaveLength(0);
    });
  });

  describe('resetAllMocks', () => {
   
  });

  describe('unmock', () => {
    it('should be require the real grape module', () => {
      const grape = require('../grape');
      expect(grape()).toBe('grape');
    });

    it('should be get the real grape module', () => {
      jest.doMock('../grape', () => jest.fn(() => 'grape is good'));
      const grapeMocked = require('../grape');
      expect(grapeMocked()).toBe('grape is good');

      jest.dontMock('../grape');
      const grapeUnmocked = require('../grape');
      expect(grapeUnmocked()).toBe('grape');
    });
  });
});