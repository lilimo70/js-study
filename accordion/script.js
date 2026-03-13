
// 要インプット
// forEach  nextElementSibling classList


const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click',() => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});