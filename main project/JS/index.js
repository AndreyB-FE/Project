let navButtons = document.querySelectorAll('.nav-links');
let navBurgerButtons = document.querySelectorAll('.adding-burger-page')

const contactsNavButton = navButtons[0];
const contactBurgerNavButton = navBurgerButtons[0];

const introReadMoreButton = document.getElementById('read-more-button');
const spreadingText = document.getElementById('spreading-text');

const subscribeForm = document.querySelector('#subscribe-form');



function addContactMenu(){
    let addingDiv = document.getElementById('adding-div');
    addingDiv.style.display = 'block';
    addingDiv.style.opacity = '1';
    addingDiv.style.height = '100vh';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    let closeButton = document.getElementById('close-button');
    closeButton.onclick = function(){
        addingDiv.style.display = 'none';
        document.body.style.height = 'auto';
        document.body.style.overflow = 'visible';
        document.body.style.position = 'static';
    }
};
contactsNavButton.onclick= function(){
    addContactMenu();
}
contactBurgerNavButton.onclick = function(){
    addContactMenu();
}
introReadMoreButton.onclick = function(){
    if(!introReadMoreButton.classList.contains('clicked')){
        spreadingText.style.height = 'auto';
        introReadMoreButton.innerHTML = 'Hide';
    }else{
        spreadingText.style.height = '335px';
        introReadMoreButton.innerHTML = 'Read More';
    }
    introReadMoreButton.classList.toggle('clicked');
}
const buttonUp = document.getElementById('button-up');
let intervalId;


window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    buttonUp.style.opacity = '1';
  } else {
    buttonUp.style.opacity = '0';
  }
});

buttonUp.addEventListener('click', () => {
  let topScroll = window.scrollY;
  let iteration = Math.round(topScroll / 60);
  intervalId = setInterval(() => {
      window.scrollTo(0, topScroll);
      topScroll -= iteration;
      if (topScroll < iteration) {
        window.scrollTo(0, 0);
        clearInterval(intervalId);
      }
  }, 400 / 60)
});
const form = document.getElementById('subscribe-form');
const userInput = {};
form.addEventListener('submit', (event)=>{
  
  userInput.firstName = form[0].value;
  userInput.lastName = form[1].value;
  userInput.email = form[2].value;
  form.reset();
  console.log(userInput);
  addSuccessMsg(userInput);
  event.preventDefault();
});

let interval;
function addSuccessMsg(userInput) {
  let el = document.createElement('div');
  if(userInput.firstName == ''){
    el.innerHTML = `We sent email here ${userInput.email}, confirm it to get news`;
  }
  else{
    el.innerHTML = `${userInput.firstName}, we sent email here ${userInput.email}, confirm it to get news`;
  }
  el.className = 'alert alert-success sub-alert';
  document.body.before(el);
  interval = setInterval(() => {
    removeElement(el);
    },5000)
}

function removeElement(el) {
    el.remove();
}

const callBackForm = document.getElementById('callBackForm')

const userInputCallBack = {};

callBackForm.addEventListener('submit', (event)=>{

  userInputCallBack.firstName = callBackForm[0].value;
  userInputCallBack.phone = callBackForm[1].value;
  console.log(userInputCallBack);
  addSuccessMsgCallBack(userInputCallBack);
  callBackForm.reset();
  event.preventDefault();
});
let intervalCall;
function addSuccessMsgCallBack(userInput){
  let el = document.createElement('div');
  el.innerHTML = `${userInput.firstName}, we'll call on this number soon ${userInput.phone}`;
  el.className = 'alert alert-success sub-alert';
  document.body.before(el);
  intervalCall = setInterval(() => {
    removeElement(el);
    },5000)
}


const heplCallBack = document.getElementById('help-call-back');
const menuToggle = document.getElementById('menu-toggle');

heplCallBack.onclick = function(){
  menuToggle.checked = false;
}
// var previousScroll = 0;
// $(window).scroll(function(event){
//    var scroll = $(this).scrollTop();
//    if (scroll > previousScroll){

//    } else {
//       
//    }
//    previousScroll = scroll;
// });
