// 要インプット
// forEach
// nextElementSibling
// classList
// contains

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach((question)=>{
  question.addEventListener('click',()=>{
    const answer = question.nextElementSibling;
    const isHidden = answer.classList.contains('hidden');
answers.forEach((answer)=>{
  answer.classList.add('hidden');
});
if(isHidden){
  answer.classList.remove('hidden');
}
  });
});