const $ = require("jquery");



class swipe {
    constructor() {
        this.init();
    }

    init() {
        this.preRender();
        this.postRender();

    }
    maximize(){
      const h=document.documentElement.scrollHeight;
      return h;
    }
    preRender() {
        const ele = $("#result");
        console.log("Init");
    }

    postRender() {
        $(document).ready(() => {
            $('#buttonID').on('click', () => {
                $('#navigation').addClass('blue');
            });
        });
    }
}
module.exports = swipe;