const m = require("../index");
describe( 'Hide show on click of button', () => {
	const addClass = jest.fn();
	const removeClass = jest.fn();
	const hasClass = jest.fn(className => {return true;});

	const jQuery = jest.fn(() => ({
		addClass,
		removeClass,
		hasClass
	}));


	it( 'removes class when has class', () => {
		m.save(jQuery);
		expect(addClass.mock.calls.length).toBe(0);
		expect(removeClass.mock.calls.length).toBe(1);
	});
});