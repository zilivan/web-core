var madalFeedBack = document.querySelector('.madal-feedBack');
var madalFeedBackClose = document.querySelector('.madal-feedBack__close');

var madalCall = document.querySelector('.madal-call');
var madalCallClose = document.querySelector('.madal-call__close');

var main = document.querySelector('.main');
var backMenu = document.querySelector('.back_menu');

var mainLineRepair = document.querySelector('.main-line__repair');
var lineRepair = document.querySelector('.line__repair');

var callClick = document.querySelectorAll('.call__click');

var lineBurgerOn = document.querySelector('.line__burger');
var lineBurgerOff = document.querySelector('.upperMenu__burger');
var backMenuOn = document.querySelector('.backMenu');

var line = document.querySelector('.line');
var clickArea = document.querySelector('.clickArea');



var madalFeedBackOpen = ((event) => {
         event.preventDefault();
         madalFeedBack.classList.add('activ');
         main.classList.add('activ');
         backMenu.classList.add('activ');
});
var madalCallOpen = ((event) => {
                  event.preventDefault();
                  madalCall.classList.add('activ');
                  main.classList.add('activ');
                  backMenu.classList.add('activ');
});

madalCallClose.addEventListener('click', function (event) { 
          event.preventDefault();
          madalCall.classList.remove('activ');
          main.classList.remove('activ');
          backMenu.classList.remove('activ');
  });              

madalFeedBackClose.addEventListener('click', function (event) { 
            event.preventDefault();
            madalFeedBack.classList.remove('activ');
            main.classList.remove('activ');
            backMenu.classList.remove('activ');

            });  

var callClicks = () => {
               for ( let i = 0;i < callClick.length; i++) {
          callClick[i].addEventListener('click', function (event) {
             window.scrollTo({
              top:0
             });
            madalCallOpen(event);

          });
               };
                  };


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
                               


lineRepair.addEventListener('click', function (event) { 
                      madalFeedBackOpen(event);
                                 });
mainLineRepair.addEventListener('click', function (event) { 
                    madalFeedBackOpen(event);
                                    });       
              
callClicks();
