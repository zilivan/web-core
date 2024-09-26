
import '../scss/main.scss';
import '../scss/proect.scss';
import '../scss/proect2.scss';


var brends = ["hp","aplle","aser","bosh","samsung","hp","aser","bosh","aser","bosh","samsung","hp"];
var remmonts = ["Ремонт ноутбуков","Ремонт планшетов","Ремонт ПК","Ремонт мониторов","Ремонт зонтов","Ремонт часов","Ремонт холдильников","Ремонт телефонов"];

var cats = document.querySelector('.cats');
var allCheckPicter = document.querySelector('.line_input');
var lineText = document.querySelector('.line_text');
var lineExpand = document.querySelector('.line__expand');

var catSlidTemplate = document.querySelector('#cat-slid').content;
var newCatSlidTemplate = catSlidTemplate.querySelector('.swiper-slide');
var catTemplate = document.querySelector('#cat-copy').content;
var newCatTemplate = catTemplate.querySelector('.cat');

var remonts = document.querySelector('.remonts');

var remontSlidTemplate = document.querySelector('#remont-slid').content;
var newRemontSlidTemplate = remontSlidTemplate.querySelector('.swiper-slide');
var remontTemplate = document.querySelector('#remont-copy').content;
var newRemontTemplate = remontTemplate.querySelector('.remont');

var swiperWrapperBrand = document.querySelector('.brand');
var swiperWrapperRemont = document.querySelector('.rem');

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
    var cat = document.querySelectorAll('.cat');
    for (var i = 0; i < cat.length; i++) {
        cat[i].remove();
    };
  };
  if (type == "sslidRemont") {
    var swiperSlad = document.querySelectorAll('.swiper-slide');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
    };
  };  
};

 var viewPicter = function (type) {
     if (type == "slidBrand") {
     for (var i = 0; i <= brends.length-1; i++) {
    var slidNewCat = newCatSlidTemplate.cloneNode(true);
    addPicterCat(slidNewCat,brends[i],type); 
         };
         };
    if (type == "brand") {
     for (var i = 0; i <= 5; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i],type);
     };
     };
     if (type == "remont") {
      for (var i = 0; i <= 2; i++) {
     var newRemont = newRemontTemplate.cloneNode(true);
     addPicterCat(newRemont,remmonts[i],type); 
          };
          };
     if (type == "slidRemont") {
      for (var i = 0; i <= remonts.length-1; i++) {
     var newRemontSlid = newRemontSlidTemplate.cloneNode(true);
     addPicterCat(newRemontSlid,remonts[i],type);
      };
      };  
     };

 var viewAllPicter = function (type) {
  if (type == "brand" )  {
  for (var i = 0; i < brends.length; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i],type); 
       };
      };
      };



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
        
    
      viewPicter ("brand");
     viewPicter ("slidBrand"); 
        viewPicter ("remont");
      viewPicter ("slidRemont"); 
        