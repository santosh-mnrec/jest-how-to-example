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
        let sticky = header.offsetTop;
        if (dataHeaderPos.top > headerPos.height) {
            sticky=false;
            return sticky;
        } else if (window.pageYOffset > sticky) {
          sticky=true;
            return sticky;
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
