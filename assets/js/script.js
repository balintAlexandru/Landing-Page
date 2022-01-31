let button = document.querySelector('.end');
let seconds= document.querySelector('.seconds')
let minutes= document.querySelector('.minutes')
let hours= document.querySelector('.hours')
let days= document.querySelector('.days')

button.addEventListener('click', (e)=>{
    e.preventDefault();    
})

function Timer(){
    Seconds();
    function Seconds(){
       if(+(days.innerHTML) != 0){
          if(+(seconds.innerHTML) != 0){
              setTimeout(function() {
                seconds.innerHTML -= 1;
                Seconds();
              }, 1000);
          }else{
              seconds.innerHTML = 60;
              Minutes();
            }
        }
    }
    function Minutes(){
        if(+(minutes.innerHTML) !=0 ){
            minutes.innerHTML -= 1;
            if(+(minutes.innerHTML) == 0){
                minutes.innerHTML = 60;
                Hours();
            }
            Seconds();
        }
    }
    function Hours(){
        if(+(hours.innerHTML) !=0 ){
            hours.innerHTML -= 1;
            if(+(hours.innerHTML) == 0){
                hours.innerHTML = 24;
                Days();
            }
        }
    }
    function Days(){
        days.innerHTML -= 1;
    }
}
Timer();