const SomeClass=require('../service');


describe('Test',()=>{

    afterEach(()=>{
        jest.restoreAllMocks();
        jest.restoreAllMocks();
    })

    it('should pass',()=>{
        jest.spyOn(SomeClass.prototype,'skipLinkFocusHandler');
        const mSkipNav={
            addEventListener:jest.fn((event,handler)=>{
                handler();
            })
        };

        document.querySelector=jest.fn().mockReturnValueOnce(mSkipNav);
        const instance=new SomeClass();
        instance.skipToBotHandler();
        expect(document.querySelector).toBeCalledWith('.skipnav');
        expect(mSkipNav.addEventListener).toBeCalledWith('click', expect.any(Function));
        expect(instance.skipLinkFocusHandler).toBeCalledTimes(1);

    })
})