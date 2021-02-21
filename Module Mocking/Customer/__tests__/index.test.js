const main = require("../index");
const { saveDetails, loadDetails } = require("../customer");

jest.mock("../customer", () => {
    return {
        saveDetails: jest.fn(),
        loadDetails: jest.fn()
    };

});


describe("main", () => {
    it("should mock correctly", () => {
        main();
        expect(saveDetails).toBeCalledTimes(1);
        expect(loadDetails).toBeCalledTimes(1);
    });
});
