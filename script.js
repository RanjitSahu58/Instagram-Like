const con = document.querySelector('.container');
const i = document.querySelector('i');


con.addEventListener("dblclick",()=>{
    i.style.transform = "translate(-50%,-50%) scale(1)";
    i.style.color = "red";
    i.style.opacity = 0.8

    setTimeout(function(){
        i.style.opacity = 0.2;
    },1000);

    setTimeout(function(){
        i.style.transform = "translate(-50%,-50%) scale(0)";
        i.style.opacity = 0;

    },2000);
})


