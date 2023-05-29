let modal = document.querySelector('#myModal');
let modal2 = document.querySelector('#myModal-2');

let expandIcon = document.querySelector('.fa-expand');
let compressIcon = document.querySelector('.fa-compress');
let faqAnswer = document.querySelector('.faq-answer-1');

let expandIcon2 = document.querySelector('.fa-expand-2');
let compressIcon2 = document.querySelector('.fa-compress-2');
let faqAnswer2 = document.querySelector('.faq-answer-2');

let expandIcon3 = document.querySelector('.fa-expand-3');
let compressIcon3 = document.querySelector('.fa-compress-3');
let faqAnswer3 = document.querySelector('.faq-answer-3');


let expandIcon4 = document.querySelector('.fa-expand-4');
let compressIcon4 = document.querySelector('.fa-compress-4');
let faqAnswer4 = document.querySelector('.faq-answer-4');



let openBtn = document.querySelector('.modalBtn');
let openBtn2 = document.querySelector('.modalBtn-2');

let closeBtn = document.querySelector('.closeBtn');
let closeBtn2 = document.querySelector('.closeBtn-2');



// listen for a click event
openBtn.addEventListener('click', openModal);
openBtn2.addEventListener('click', openModal);
document.addEventListener('DOMContentLoaded', openModal2);

expandIcon.addEventListener('click', displayAnswer);
compressIcon.addEventListener('click', closeAnswer);


expandIcon2.addEventListener('click', displayAnswer2);
compressIcon2.addEventListener('click', closeAnswer2);


expandIcon3.addEventListener('click', displayAnswer3);
compressIcon3.addEventListener('click', closeAnswer3);


expandIcon4.addEventListener('click', displayAnswer4);
compressIcon4.addEventListener('click', closeAnswer4);




function openModal(){
  modal.style.display = 'block';
}


function openModal2(){
  modal2.style.display = 'block';
}

function displayAnswer(){
  faqAnswer.style.display = 'block';
  if(faqAnswer.style.display = 'block'){
    expandIcon.style.display = 'none';
    compressIcon.style.display = 'block';
  }
}

function closeAnswer(){
  faqAnswer.style.display = 'none';
  compressIcon.style.display = 'none';
  expandIcon.style.display  = 'block';
}


function displayAnswer2(){
  faqAnswer2.style.display = 'block';
  if(faqAnswer2.style.display = 'block'){
    expandIcon2.style.display = 'none';
    compressIcon2.style.display = 'block';
  }
}

function closeAnswer2(){
  faqAnswer2.style.display = 'none';
  compressIcon2.style.display = 'none';
  expandIcon2.style.display  = 'block';
}


function displayAnswer3(){
  faqAnswer3.style.display = 'block';
  if(faqAnswer3.style.display = 'block'){
    expandIcon3.style.display = 'none';
    compressIcon3.style.display = 'block';
  }
}

function closeAnswer3(){
  faqAnswer3.style.display = 'none';
  compressIcon3.style.display = 'none';
  expandIcon3.style.display  = 'block';
}



function displayAnswer4(){
  faqAnswer4.style.display = 'block';
  if(faqAnswer4.style.display = 'block'){
    expandIcon4.style.display = 'none';
    compressIcon4.style.display = 'block';
  }
}

function closeAnswer4(){
  faqAnswer4.style.display = 'none';
  compressIcon4.style.display = 'none';
  expandIcon4.style.display  = 'block';
}




// listen for a click event
closeBtn.addEventListener('click', closeModal);

function closeModal(){
  modal.style.display = 'none';
}


// listen for a click event
closeBtn2.addEventListener('click', closeModal2);

function closeModal2(){
  modal2.style.display = 'none';
}