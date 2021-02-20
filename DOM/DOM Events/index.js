const RecommendCards = require("./card").RecommendCards;

module.exports = function main() {
    const instance = new RecommendCards();
    document.addEventListener('DOMContentLoaded', () => {
        instance.init();
    });
}
