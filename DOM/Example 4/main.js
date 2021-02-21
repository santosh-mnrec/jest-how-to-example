  function main() {
    const createAndAppendPTag = () => {
      const p = document.createElement('p');
      document.body.appendChild(p);
    };
  
    window.document.addEventListener('click', () => {
      createAndAppendPTag();
    });
  }
  function handleWindowScroll() {

    const header = document.querySelector('.productNavLinksContainer');
    const dataHeader = document.querySelector('.productNavDataContainer');
    if (header && dataHeader) {
        const headerPos = header.getBoundingClientRect();
        const dataHeaderPos = dataHeader.getBoundingClientRect();
        const sticky = header.offsetTop;
        if (dataHeaderPos.top > headerPos.height) {
            this.setState({
                sticky: false
            });
        } else if (window.pageYOffset > sticky) {
            this.setState({
                sticky: true
            });
        }
    } else {
        return;
    }
}
 function* authentication({ data }) {
  if (data.action === 'authentication') {
    localStorage.setItem('dualbits:access', data.access);
    localStorage.setItem('dualbits:refresh', data.refresh);
  }
  yield 'dispatch action';
}

 function main2() {
  window.addEventListener('message', authentication, false);
}
  module.exports={main,handleWindowScroll,authentication,main2};
