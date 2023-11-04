var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual)
{
    slides.forEach((slides)=> {
        slides.classList.remove('active');
    })

    btns.forEach((btns) => {
        btns.classList.remove('active');
    })


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btns,i) => {
    btns.addEventListener("click", () =>{
        manualNav(i);
        currentSlide = i;
    });
}); 

var repeat = function(activeClass)
{
   let i=1;
   let active = document.getElementsByClassName('active');
  var repeater = () => {
    setTimeout(function(){
        [...active].forEach((activeSlide)=>{
            activeSlide.classList.remove('active');
        });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length ==i)
        {
            i=0;
        }
        if(i>= slides.length)
        {
            return;
        }
        repeater();
    },5000)
  }
  repeater();
}
repeat();