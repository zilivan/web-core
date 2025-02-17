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
var newCatSlidTemplate = catSlidTemplate.querySelector('.swiper-slide__cat');
var catTemplate = document.querySelector('#cat-copy').content;
var newCatTemplate = catTemplate.querySelector('.cat');

var remontSlidTemplate = document.querySelector('#remont-slid').content;
var newRemontSlidTemplate = remontSlidTemplate.querySelector('.swiper-slide__remont');
var remontTemplate = document.querySelector('#remont-copy').content;
var newRemontTemplate = remontTemplate.querySelector('.remont');

var swiperWrapperBrand = document.querySelector('.brand');
var swiperWrapperRemont = document.querySelector('.rem');




var swiperCat = new Swiper(".mySwiperCat", {
     slidesPerView:'auto',
     freeMode: true,
     enabled:true,
    pagination: {
      el: ".swiper-pagination-light",
      clickable: true,
     
    },
  });
  var swiperTable = new Swiper(".mySwiperTable", {
    slidesPerView:'auto',
    
    freeMode: true,
    enabled:true,
   pagination: {
    el: ".swiper-pagination-light",
    clickable: true,
    
   },
 });
 var swiperRemont = new Swiper(".mySwiperRemont", {
  slidesPerView:'auto',
  freeMode: true,
  enabled:true,
   pagination: {
   el: ".swiper-pagination-light",
   clickable: true,
  
 },
});
  
var addPicterCat = function (item,brend,type) {
 
  if (type === "brand" || type === "slidBrand") { 
     var bitmap = item.querySelector('.bitmap');
    var picter= bitmap.querySelector('img');
    var text="img/"+ brend +".png";
    picter.src = text;

    if (type === "brand") { 
             cats.appendChild(item);
       };
    if (type === "slidBrand") { 
      
      swiperWrapperBrand.appendChild(item);
       };   
    };

 if (type === "remont" || type === "slidRemont") { 
     var bitmap = item.querySelector('.bitmap');
      bitmap.textContent = brend;

       if (type === "remont") { 
       
        remonts.appendChild(item);
        };
       if (type === "slidRemont") { 

        swiperWrapperRemont.appendChild(item);
             };
               };   

                         };

var clearPicter = function (type) {
  if (type === "brand") {
    var cat = document.querySelectorAll('.cat');
    for (var i = 0; i < cat.length; i++) {
        cat[i].remove();
    };
  };
  if (type === "slidBrand") {
    var swiperSlad = document.querySelectorAll('.swiper-slide__cat');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
    };
  };

    if (type === "remont") {
    var remm = document.querySelectorAll('.remont');
    for (var i = 0; i < remm.length; i++) {
        remm[i].remove();
    };
  };
  if (type === "slidRemont") {
    var swiperSlad = document.querySelectorAll('.swiper-slide__remont');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
    };
  };  
};

 var viewPicter = function (type) {
     if (type === "slidBrand") {
     for (let i = 0; i <= brends.length-1; i++) {
    var slidNewCat = newCatSlidTemplate.cloneNode(true);
    addPicterCat(slidNewCat,brends[i],type); 
         };
         };
    if (type === "brand") {
     for (let i = 0; i <= nombersBrand -1; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i],type);
     };
     };
     if (type === "remont") {
      for (let i = 0; i <= nombersRemont-1; i++) {
     var newRemont = newRemontTemplate.cloneNode(true);
     addPicterCat(newRemont,remmonts[i],type); 
          };
          };
     if (type === "slidRemont") {
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
                     
  allCheckPicter.addEventListener('change', function () {
                        clearPicter("brand");
                        if (lineText.textContent === "Показать все") {  
                                        viewAllPicter("brand");
                                        lineText.textContent = "Скрыть все";
                                        lineExpand.style.transform = "rotate(180deg)"; 
                        } else {  viewPicter ("brand");
                                   lineText.textContent = "Показать все";
                                  lineExpand.style.transform = "rotate(0deg)";
                             };
                        clearPicter("slidBrand");
                        viewPicter ("slidBrand");
                            });
                    
                    
 remontsAllCheckPicter.addEventListener('change', function () {
                              clearPicter("remont");
                              if (remontsLineText.textContent === "Показать все") {
                                       remontViewAllPicter("remont");
                                       remontsLineText.textContent = "Скрыть все";
                                      remontsLineExpand.style.transform = "rotate(180deg)"; 
                                } else { viewPicter ("remont");
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
                                         
