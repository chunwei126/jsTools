const faqQuestion = document.querySelectorAll('.faq-question');
const faqAnswer = document.querySelectorAll('.faq-answer');
let faqAnswerHeightAry = [];

window.onload = function(){
  faqAnswer.forEach(function(item){
    faqAnswerHeightAry.push(item.offsetHeight);
    item.style.height = 0;
  })
}

document.querySelector('.faq-list').addEventListener('click',function(e){

  if(e.target.classList.contains('faq-question')){
    
    if(faqAnswer[e.target.dataset.questionindex].classList.contains('faqAnswerOpen_forJS')){
      //重複點擊問題則關閉答案
      faqAnswer[e.target.dataset.questionindex].style.height = 0;
      faqAnswer[e.target.dataset.questionindex].classList.remove('faqAnswerOpen_forJS');

    }else{
    
      faqAnswer.forEach(function(item){
        item.style.height = 0;
        item.classList.remove('faqAnswerOpen_forJS');
      })
      
      faqAnswer[e.target.dataset.questionindex].style.height = faqAnswerHeightAry[e.target.dataset.questionindex] + 'px';
      faqAnswer[e.target.dataset.questionindex].classList.add('faqAnswerOpen_forJS');
    }
  }


})