//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
//console.log(question);
const btn = question.querySelector(".question-btn"); //a diferencia de hacer document.queryselector hicimos question.querySelector, esto achica la búsqueda, está anidado.
//console.log(btn);

btn.addEventListener("click", function(){

    questions.forEach(function(item){
        if(item !== question){      //si la pregunta en la que me el programa està parada no es la misma que posee el botón que apreté, la oculta.
            item.classList.remove("show-text");
        }
    })
     question.classList.toggle("show-text");
})
})








// traversing the dom TECNICA 1
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement; //the first parent is the question title, the second one is the question inmself, thats the one into i want to put my show class
        question.classList.toggle("show-text");
    })
})

*/