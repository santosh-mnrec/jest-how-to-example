const { main, handleWindowScroll, authentication, main2 } = require("../main");
const mLocalStorage = {
    _storage: {},
    getItem: jest.fn((key) => {
        return mLocalStorage._storage[key];
    }),
    setItem: jest.fn((key, value) => {
        mLocalStorage._storage[key] = value;
    }),
};
Object.defineProperty(window, 'localStorage', {
    value: mLocalStorage,
});
describe('65451115', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });
    it('should pass', () => {
        const createElementSpy = jest.spyOn(document, 'createElement').mockReturnValue('fake p');
        const appendChildSpy = jest.spyOn(document.body, 'appendChild').mockReturnValue();
        const addEventListenerSpy = jest
            .spyOn(window.document, 'addEventListener')
            .mockImplementationOnce((event, handler) => {
                handler();
            });
        main();
        expect(addEventListenerSpy).toBeCalledWith('click', expect.any(Function));
        expect(createElementSpy).toBeCalledWith('p');
        expect(appendChildSpy).toBeCalledWith('fake p');
    });

    it('should not sticky', () => {
        Object.defineProperty(window, 'pageYOffset', { value: 200 });
        mDataHeaderPos = { top: 50 };
        mheaderProp = { height: 100 };
        const mHeader = {
            offsetTop: 100,
            getBoundingClientRect: jest.fn().mockReturnValueOnce(mheaderProp)

        }
        const mDataHeader = {
            getBoundingClientRect: jest.fn().mockReturnValueOnce(mDataHeaderPos)
        };
        jest.spyOn(document, 'querySelector').mockImplementation((selector) => {

            switch (selector) {
                case '.productNavLinksContainer':
                    return mHeader;
                case '.productNavDataContainer':
                    return mDataHeader;
            }
        });
        handleWindowScroll();
        expect(document.querySelector).toBeCalledTimes(2);
        expect(mHeader.getBoundingClientRect).toBeCalledTimes(1);
        expect(mDataHeader.getBoundingClientRect).toBeCalledTimes(1);
        // expect(instance.state).toEqual({ sticky: false });
    });
});
describe('61142462', () => {
    it('should save data into local storage', () => {
        let rval;
        jest.spyOn(window, 'addEventListener')
            .mockImplementationOnce((event, handler, option) => {
                const gen = handler({ data: { action: 'authentication', access: '123', refresh: 'abc' } });
                rval = gen.next().value;
            });

        main2();
        expect(rval).toBe('dispatch action');
        expect(window.addEventListener).toBeCalledWith('message', expect.any(Function), false);
        expect(mLocalStorage.setItem).toBeCalledWith('dualbits:access', '123');
        expect(mLocalStorage.setItem).toBeCalledWith('dualbits:refresh', 'abc');
    });
    it('should not save data into local storage', () => {
        let rval;
        jest.spyOn(window, 'addEventListener').mockImplementationOnce((event, handler, options) => {
          const gen = handler({ data: undefined });
          rval = gen.next().value;
        });
        // You can do the rest of part of this test case
      });
      main2();
    //   expect(rval).toBe('dispatch action')
    //   expect(window.addEventListener).toBeCalledWith('message', expect.any(Function), false);
    //   expect(mLocalStorage.setItem).toBeCalledWith('dualbits:access', '123');
    //   expect(mLocalStorage.getItem).toBeCalledWith('dualbits:access').toBe(123);
});
