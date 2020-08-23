// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //select all the classes that have btn something


btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){        //e is the object of the event. if i do e.currentTarget it shows me what button I pushed.
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget.classList);
    if (styles.contains("decrease")){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else{
        count = 0;
    }
    if(count > 0){
        value.style.color = "green";
    }
    if(count < 0){
        value.style.color = "red";
    }
    if(count === 0){
        value.style.color = "black";
    }
    value.textContent = count;
  });
});
