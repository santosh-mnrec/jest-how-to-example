
const $ = require("jquery");
function showHide() {
    let element = $('#test');
    const top = element[0].getBoundingClientRect().top;
    if (top >= 100) {
        element[0].addClass("success");
    } else {
        element[0].removeClass("failed");
    }
}

module.exports = { showHide };