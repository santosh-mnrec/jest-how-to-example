const $=require("jquery");



 class swipe {
  constructor() {
    this.init();
  }

  init() {
    this.postRender();
  }

  postRender() {
    $(document).ready(() => {
      $('#buttonID').on('click', () => {
        $('#navigation').addClass('blue');
      });
    });
  }
}
module.exports=swipe;