const formSmallFooter = document.getElementById('footer-form');
const userInputSmallFooter = {};

const formBigFooter = document.getElementById('big-hooter-form');
const userInputBigFooter = {};

formBigFooter.addEventListener('submit', (event)=>{
  userInputBigFooter.email = formBigFooter[0].value;
  formBigFooter.reset();
  console.log(userInputBigFooter);
  addSuccessMsgFooter(userInputBigFooter);
  event.preventDefault();
});


formSmallFooter.addEventListener('submit', (event)=>{
  userInputSmallFooter.email = formSmallFooter[0].value;
  formSmallFooter.reset();
  console.log(userInputSmallFooter);
  addSuccessMsgFooter(userInputSmallFooter);
  event.preventDefault();
});

function addSuccessMsgFooter(userInput) {
  let el = document.createElement('div');
  el.innerHTML = `We sent email here ${userInput.email}, confirm it to get news`;
  el.className = 'alert alert-success sub-alert';
  document.body.before(el);
  removeElement(el, 10000);
}
function removeElement(el, timeout = 3000) {
  setTimeout(() => {
    el.remove();
  }, timeout)
}


