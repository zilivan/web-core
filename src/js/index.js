
import '../scss/main.scss';
import '../scss/proect.scss';
import '../scss/mobilMenu.scss';
import '../scss/block2.scss';
import '../scss/block3.scss';
import '../scss/modals.scss';

const brends = ["hp","aplle","aser","bosh","samsung","hp","aser","bosh","aser","bosh","samsung","hp"];
const remmonts = ["Ремонт ноутбуков","Ремонт планшетов","Ремонт ПК","Ремонт мониторов","Ремонт зонтов","Ремонт часов","Ремонт холдильников","Ремонт телефонов"];
var nombersRemont = 4;
var nombersBrand = 8;
var cats = document.querySelector('.cats');
var remonts = document.querySelector('.remonts');

var allCheckPicter = document.querySelector('.line_input');
var remontsAllCheckPicter = document.querySelector('.remonts-line_input');

var lineText = document.querySelector('.line_text');
var remontsLineText = document.querySelector('.remonts-line_text');

var remontsLineExpand = document.querySelector('.remonts-line__expand');
var lineExpand = document.querySelector('.line__expand');

var catSlidTemplate = document.querySelector('#cat-slid').content;
var newCatSlidTemplate = catSlidTemplate.querySelector('.swiper-slide');
var catTemplate = document.querySelector('#cat-copy').content;
var newCatTemplate = catTemplate.querySelector('.cat');

var remontSlidTemplate = document.querySelector('#remont-slid').content;
var newRemontSlidTemplate = remontSlidTemplate.querySelector('.swiper-slide');
var remontTemplate = document.querySelector('#remont-copy').content;
var newRemontTemplate = remontTemplate.querySelector('.remont');

var swiperWrapperBrand = document.querySelector('.brand');
var swiperWrapperRemont = document.querySelector('.rem');


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

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  
var addPicterCat = function (item,brend,type) {
 
  if (type == "brand" || type == "slidBrand") { 
     var bitmap = item.querySelector('.bitmap');
    var picter= bitmap.querySelector('img');
    var text="img/"+ brend +".png";
    picter.src = text;

    if (type == "brand") { 
             cats.appendChild(item);
       };
    if (type == "slidBrand") { 
      
      swiperWrapperBrand.appendChild(item);
       };   
    };

 if (type == "remont" || type == "slidRemont") { 
     var bitmap = item.querySelector('.bitmap');
      bitmap.textContent = brend;

       if (type == "remont") { 
       
        remonts.appendChild(item);
        };
       if (type == "slidRemont") { 

        swiperWrapperRemont.appendChild(item);
             };
               };   

                         };

var clearPicter = function (type) {
  if (type == "brand") {
    var cat = document.querySelectorAll('.cat');
    for (var i = 0; i < cat.length; i++) {
        cat[i].remove();
    };
  };
  if (type == "slidBrand") {
    var swiperSlad = document.querySelectorAll('.swiper-slide');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
    };
  };

    if (type == "remont") {
    var remm = document.querySelectorAll('.remont');
    for (var i = 0; i < remm.length; i++) {
        remm[i].remove();
    };
  };
  if (type == "slidRemont") {
    var swiperSlad = document.querySelectorAll('.swiper-slide');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
    };
  };  
};

 var viewPicter = function (type) {
     if (type == "slidBrand") {
     for (let i = 0; i <= brends.length-1; i++) {
    var slidNewCat = newCatSlidTemplate.cloneNode(true);
    addPicterCat(slidNewCat,brends[i],type); 
         };
         };
    if (type == "brand") {
     for (let i = 0; i <= nombersBrand -1; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i],type);
     };
     };
     if (type == "remont") {
      for (let i = 0; i <= nombersRemont-1; i++) {
     var newRemont = newRemontTemplate.cloneNode(true);
     addPicterCat(newRemont,remmonts[i],type); 
          };
          };
     if (type == "slidRemont") {
      for (let i = 0; i <= remmonts.length-1; i++) {
     var newRemontSlid = newRemontSlidTemplate.cloneNode(true);
    
     addPicterCat(newRemontSlid,remmonts[i],type);
      };
      };  
     };

 var viewAllPicter = function (type) {
          for (var i = 0; i < brends.length; i++) {
         var newCat = newCatTemplate.cloneNode(true);
        addPicterCat(newCat,brends[i],type);           
                   };
                  };
var remontViewAllPicter = function (type) {
          for (var j = 0; j < remmonts.length; j++) {
          var newRemont = newRemontTemplate.cloneNode(true);
          addPicterCat(newRemont,remmonts[j],type); 
                          };
                     };


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
            madalCallOpen(event);

          });
               };
                  };


  lineBurgerOn.addEventListener('click', function (event) { 
                          event.preventDefault();
                          main.classList.add('disable');
                          backMenuOn.classList.add('onBurger');
                               });              


lineBurgerOff.addEventListener('click', function (event) { 
                    event.preventDefault();
                    main.classList.remove('disable');
                    backMenuOn.classList.remove('onBurger');
            });              


lineRepair.addEventListener('click', function (event) { 
                      madalFeedBackOpen(event);
                                 });
mainLineRepair.addEventListener('click', function (event) { 
                    madalFeedBackOpen(event);
                                    });       
              


allCheckPicter.addEventListener('change', function () {
    clearPicter("brand");
    if (lineText.textContent === "Показать все") {  
      viewAllPicter("brand");
    lineText.textContent = "Скрыть все";
    lineExpand.style.transform = "rotate(180deg)"; 
    } else {viewPicter ("brand");
    lineText.textContent = "Показать все";
    lineExpand.style.transform = "rotate(0deg)";
    };
    clearPicter("slidBrand");
    viewPicter ("slidBrand");
        });


 remontsAllCheckPicter.addEventListener('change', function (){
          clearPicter("remont");
          if (remontsLineText.textContent === "Показать все") {
            remontViewAllPicter("remont");
            remontsLineText.textContent = "Скрыть все";
            remontsLineExpand.style.transform = "rotate(180deg)"; 
            } else {viewPicter ("remont");
            remontsLineText.textContent = "Показать все";
            remontsLineExpand.style.transform = "rotate(0deg)";
             };
          clearPicter("slidRemont");
          viewPicter ("slidRemont");
             });
        
    viewPicter ("brand");
    viewPicter ("slidBrand"); 
    viewPicter ("remont");
    viewPicter ("slidRemont"); 
    callClicks();






