"use strict";
const MyClass =  (function () {
    function MyClass() {
        this.render();
    }
    MyClass.prototype.render = function () {
        var el = document.createElement('input');
        var link = document.createElement('a');
        var container = document.querySelector('body');
        link.innerHTML = 'Click Me!';
        link.setAttribute('href', '#');
        link.setAttribute('target', '_blank');
        el.setAttribute('type', 'file');
        container.appendChild(el);
        container.appendChild(link);
        el.addEventListener('change', function (event) {
            if ('files' in el) {
                var availFile = el.files[0];
                var blob = new Blob([availFile], { type: availFile.type });
                var objectURL = window.URL.createObjectURL(blob);
                link.setAttribute('href', objectURL);
            }
        });
    };
    return MyClass;
}());

module.exports=MyClass;