var madalFeedBack = document.querySelector('.madal-feedBack');
var madalFeedBackClose = document.querySelector('.madal-feedBack__close');

var madalCall = document.querySelector('.madal-call');
var madalCallClose = document.querySelector('.madal-call__close');

var main = document.querySelector('.main');
var backMenu = document.querySelector('.back_menu');

var mainLineRepair = document.querySelector('.main-line__repair');
var lineRepair = document.querySelector('.line__chat');
var lineRepair1 = document.querySelector('.endMenu__chat');

var callClick = document.querySelector('.line__call');
var callClick1= document.querySelector('.endMenu__call');

var lineBurgerOn = document.querySelector('.line__burger');
var lineBurgerOff = document.querySelector('.upperMenu__burger');
var backMenuOn = document.querySelector('.backMenu');

var line = document.querySelector('.line');
var clickArea = document.querySelector('.clickArea');


var callClikOn = ((event) =>{
     /*  window.scrollTo({
                 top:0
                      });*/
       event.preventDefault();
       madalCall.classList.add('activ');
       main.classList.add('activ');
       backMenu.classList.add('activ');
});



var madalFeedBackOpen = ((event) => {
         event.preventDefault();
         madalFeedBack.classList.add('activ');
         main.classList.add('activ');
         backMenu.classList.add('activ');
      });
madalFeedBackClose.addEventListener('click', function (event) { 
     event.preventDefault();
     madalFeedBack.classList.remove('activ');
     main.classList.remove('activ');
     backMenu.classList.remove('activ');

     });  


madalCallClose.addEventListener('click', function (event) { 
          event.preventDefault();
          madalCall.classList.remove('activ');
          main.classList.remove('activ');
          backMenu.classList.remove('activ');
  }); 
  
  
lineBurgerOn.addEventListener('click', function (event) { 
                          event.preventDefault();
                          main.classList.add('disable');
                          backMenuOn.classList.add('onBurger');
                          line.classList.add('disable');
                          clickArea.classList.add('view');
                          
                               });              


lineBurgerOff.addEventListener('click', function (event) { 
                    event.preventDefault();
                    main.classList.remove('disable');
                    backMenuOn.classList.remove('onBurger');
                    line.classList.remove('disable');
                    clickArea.classList.remove('view')
            });
            
            

clickArea.addEventListener('click', function (event) { 
                           event.preventDefault();
                           main.classList.remove('disable');
                           backMenuOn.classList.remove('onBurger');
                           line.classList.remove('disable');
                           clickArea.classList.remove('view')
                            });
                                   
callClick.addEventListener('click', function (event) { 
                 callClikOn(event);
                     }); 
callClick1.addEventListener('click', function (event) { 
            clickArea.classList.remove('view');
               callClikOn(event);
                     });                                 

lineRepair.addEventListener('click', function (event) { 
                      madalFeedBackOpen(event);
                                 });
lineRepair1.addEventListener('click', function (event) { 
                clickArea.classList.remove('view');
                     madalFeedBackOpen(event);
                               });

mainLineRepair.addEventListener('click', function (event) { 
                    madalFeedBackOpen(event);
                                    });       
              

