const $ = require("jquery");
var Dell = (() => {
    const loadData = () => {
        $.ajax({
            url: `url`,
            type: "GET",
            success: exports.handleSuccess,
            error: exports.handleError

        });
    }

    const handleError = () => {
        console.error('ERROR');
    }

    const handleSuccess = (data) => {
        userData = data;
        $("#result").addClass("done");
        $("#result").addClass("done");
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