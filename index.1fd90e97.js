var correctAnswers=["B","B","B","B"],form=document.querySelector(".quiz-form");form.addEventListener("submit",(function(e){e.preventDefault();var r=[form.q1.value,form.q2.value,form.q3.value,form.q4.value].reduce((function(e,r,o){return r===correctAnswers[o]?e+25:e}),0);console.log(r)}));
//# sourceMappingURL=index.1fd90e97.js.map
