let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(bt){
    bt.addEventListener("click", function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains("decrease")){
           count--;
       }
       else if(styles.contains("increase")){
           count++;
       }
       else{
           count =0;
       }
       if(count>0){
           value.style.color = "green";
       }
       else if(count<0){
           value.style.color = "red";
       }
       else{
           value.style.color = "black"
       }
       value.textContent = count;
    });
})