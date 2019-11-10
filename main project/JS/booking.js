// let userName = document.getElementById('userName');
// let commentMessage = document.getElementById('commentMessage');
// let submitCommentButton = document.getElementById('submitCommentButton');
// let commentSection = document.getElementById('commentSection');
// const form = document.getElementById('commentForm');
// const userInput = {};

// form.addEventListener('submit',(event)=>{
//     userInput.userName = form[0].value;
//     userInput.commentMessage = form[1].value;
//     console.log(userInput);
//     event.preventDefault();
//     addCommentElements(form,commentSection);
// });
// function addCommentElements(form,section){
//     let newElement = document.createElement('article');
//     newElement.style.marginTop = '30';
//     let newUserName = document.createElement('h5');
//     newUserName.innerHTML = 'name';
//     let newCommentMessage = document.createElement('p');
//     newCommentMessage.innerHTML = 'message';
//     newElement.prepend(newUserName);
//     newElement.append(newCommentMessage);
//     section.append(newElement);
//     return form.length-1;
// }
let navButtons = document.querySelectorAll('.nav-links');
let navBurgerButtons = document.querySelectorAll('.adding-burger-page')

const contactsNavButton = navButtons[0];
const contactBurgerNavButton = navBurgerButtons[0];

const introReadMoreButton = document.getElementById('read-more-button');
const spreadingText = document.getElementById('spreading-text');

const subscribeForm = document.querySelector('#subscribe-form');

const buttonUp = document.getElementById('button-up');
let intervalId;



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


// var previousScroll = 0;
// $(window).scroll(function(event){
//    var scroll = $(this).scrollTop();
//    if (scroll > previousScroll){

//    } else {
//       
//    }
//    previousScroll = scroll;
// });
