const faqAnswer = document.querySelectorAll('.faq_answer');
let faqAnswerHeightAry = [];

window.onload = function(){
  faqAnswer.forEach(function(item){
    faqAnswerHeightAry.push(item.offsetHeight);
    item.style.height = 0;
  })
}

console.log(faqAnswerHeightAry);

document.querySelector('.faq_list').addEventListener('click',function(e){

  if(e.target.classList.contains('faq_questionPicture_forJS')){
    
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


},false)