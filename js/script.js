const toggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  toggle.classList.toggle('active');
});

const questions = document.querySelectorAll('.faq__question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const show = document.querySelector('.show');
    const active = document.querySelector('.active');
    if(show && show !== question.nextElementSibling){
      show.classList.toggle('show');
      active.classList.toggle('active');
    }
    question.nextElementSibling.classList.toggle('show');
    question.classList.toggle('active');
  });
})