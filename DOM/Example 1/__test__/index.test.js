const {save,parsePostResponse} = require("../index");
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
		save(jQuery);
		expect(addClass.mock.calls.length).toBe(0);
		expect(removeClass.mock.calls.length).toBe(1);
	});
});

describe( 'AJAX callbacks', () => {
	const html = jest.fn();
	const addClass = jest.fn();
	const mockCompiled = jest.fn( () => { return '<div>HTMLs</div>' });

	const compile = jest.fn( () => { return mockCompiled });

	const jQuery = jest.fn(() => ({
		addClass,
		html
	}));

	const Handlebars = {
		compile
	};

	it( 'compiles the template in parsePostResponse' , () => {
		parsePostResponse([{ID:2}],jQuery, Handlebars);
		expect( compile.mock.calls.length ).toBe(1); //compiles template
		expect( html.mock.calls.length ).toBe(2); //1 would indicate that the no posts message was used.
	});


	it( 'Shows error message if no posts' , () => {
		const error = 'Fail boats';
		parsePostResponse([],jQuery, Handlebars,error);
		expect( compile.mock.calls.length ).toBe(1); //doesn't compile template
		//expect( html.mock.calls.length ).toBeCalledWith(error); //Passes the right argument
	});
});