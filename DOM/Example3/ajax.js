const $ = require("jquery");
var Dell = (() => {
    const loadData = () => {
        $.ajax({
            url: `url`,
            type: "GET",
           success:exports.handleSuccess,
           error:exports.handleError

        });
    }

    const handleError = () => {
        console.log('ERROR');
    }

    const handleSuccess = (data) => {
        userData = data;
        console.log(userData);
    }
    const exports = {
        loadData,
        handleError,
        handleSuccess
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exports;
    }
})();