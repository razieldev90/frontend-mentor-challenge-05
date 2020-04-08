const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  toggle.classList.toggle('active');
});

// FAQ
const questions = document.querySelectorAll('.faq__question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    let show = document.querySelector('.show');
    let active = document.querySelector('.faq__question.active');
    console.log(show);
    console.log(active);
    if(show && show !== question.nextElementSibling){
      show.classList.toggle('show');
      active.classList.toggle('active');
    }
    question.nextElementSibling.classList.toggle('show');
    question.classList.toggle('active');
  });
})

// FEATURES
const tabsBtn = document.querySelectorAll('.tabs__btn');

tabsBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(`${btn.dataset['target']}`);
    const activeTab = document.querySelector('.tabs__content.active');
    const activeBtn = document.querySelector('.tabs__btn.active');
    if(!target.classList.contains('active')){
      activeBtn.classList.remove('active');
      activeTab.classList.remove('active');
      btn.classList.add('active');
      target.classList.add('active');
    }
  });
})

// FORM
const validateEmail = email => {
  let reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg_exp.test(String(email).toLowerCase());
}

const validateForm = (form) => {
  let msg = document.querySelector('.msg-error');
  let error_icon = document.querySelector('.icon-error');
  let input_email = form.querySelector('#email');

  if(input_email.value == ''){
    msg.innerHTML = 'Email address required';
    form.classList.add('error');
  } else if(!validateEmail(input_email.value)){
    msg.innerHTML = 'Whoops, make sure it\'s an email';
    form.classList.add('error');
  }else{
    form.classList.remove('error');
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  validateForm(form);
});