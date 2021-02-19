'use strict';

const htmlContent = fs.readFileSync('index.html', 'utf-8'); //load the HTML content



describe('Dom Test', () => {
    it('should click the button', () => {
        //for example
        let h1 = document.querySelector('h1');
        expert(h1.textContent).toEqual('Hello world!');
    })
})