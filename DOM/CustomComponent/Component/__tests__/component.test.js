const removeSlot =require("../component");

describe('should remove each el',()=>{

    it('should remove each el', () => {

        const nodeList=[{remove:jest.fn()}];
        const myComponent={querySelectorAll:jest.fn().mockReturnValue(nodeList)};
        const myselector='ol';
        removeSlot(myComponent,myselector);
        expect(myComponent.querySelectorAll).toBeCalledTimes(2);
        expect(myComponent.querySelectorAll).toBeCalledWith(myselector);
        nodeList.forEach((el) => {
          expect(el.remove).toBeCalled();
        });
    });
    it('should print error if no node found', () => {
        jest.spyOn(console, 'error');
        const mNodeList = [];
        const mComponent = { tagName: 'DIV', querySelectorAll: jest.fn().mockReturnValue(mNodeList) };
        const mSelector = 'ol';
        removeSlot(mComponent, mSelector);
        expect(mComponent.querySelectorAll).toBeCalledTimes(1);
        expect(mComponent.querySelectorAll).toBeCalledWith(mSelector);
        expect(console.error).toBeCalledWith(`'ol' not found in component 'div'`);
      });
})