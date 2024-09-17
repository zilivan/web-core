import '../scss/proect.scss';
import '../scss/proect2.scss';
import '../scss/main.scss';

  var nomerBrand = 6;
  var nomerTehniki = 3;
  var brends = ["hp","aplle","aser","bosh","samsung","hp","aser","bosh","aser","bosh","samsung","hp"];
  var tehniks =["Ремонт ноутбуков","Ремонт планшетов","Ремонт ПК","Ремонт мониторов","Ремонт телефонов","Ремонт смартфонов","Ремонт будильников"];
  var catTemplate = document.querySelector('#cat-copy').content;
  var tehniksTemplate = document.querySelector('#tehniks-copy').content;
  var newCatTemplate = catTemplate.querySelector('.cat');
  var newTehniksTemplate = tehniksTemplate.querySelector('.tehniks-cat');
  var cats = document.querySelector('.cats');
  var tehs = document.querySelector('.tehniks');
  var allCheckPicter = document.querySelector('.line_input');
  var allTehCheckPicter = document.querySelector('.tehnik-line_input');
  var lineText = document.querySelector('.line_text');
  var lineTehText = document.querySelector('.tehnik-line_text');
  var lineExpand = document.querySelector('.line__expand');
  var lineTehExpand = document.querySelector('.tehnik-line__expand');

  var catSlidTemplate = document.querySelector('#cat-slid').content;
  var newCatSlidTemplate = catSlidTemplate.querySelector('.swiper-slide');
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  

  var addPicterCat = function (item,brend,type) {
    if (type =="br") {
      var bitmap = item.querySelector('.bitmap');
      var picter= bitmap.querySelector('img');
      var text="./img/"+ brend +".png";
      picter.src = text;
      cats.appendChild(item);
    };
    if (type =="teh") {
      var bitmap = item.querySelector('.tehniks-bitmap');
      var text=brend;
      bitmap.textContent = text;
      tehs.appendChild(item);
    };
  };
  var clearPicter = function (type) {
    if (type =="br") {
      var cat = document.querySelectorAll('.cat');
      for (var i = 0; i < cat.length; i++) {
          cat[i].remove();
      };
  };
  if (type =="teh") {
    var tehCat = document.querySelectorAll('.tehniks-cat');
    for (var i = 0; i < tehCat.length; i++) {
        tehCat[i].remove();
    };
   };
  };
   var viewNomerPicter = function (type) {
    if (type =="br") {
    for (var i = 0; i <= nomerBrand-1; i++) {
      var newCat = newCatTemplate.cloneNode(true);
      addPicterCat(newCat,brends[i],type);
  };
   };
    if (type =="teh") {
    for (var i = 0; i <= nomerTehniki-1; i++) {
      var newTehniks = newTehniksTemplate.cloneNode(true);
  addPicterCat(newTehniks,tehniks[i],type);
  };

   };
   };
   var viewAllPicter = function (type) {
    if (type =="br") {
    for (var i = 0; i < brends.length; i++) {
      var newCat = newCatTemplate.cloneNode(true);
      addPicterCat(newCat,brends[i],type); 
    };
  };
  if (type =="teh") {
    for (var i = 0; i < tehniks.length; i++) {
      var newTehniks = newTehniksTemplate.cloneNode(true);
  addPicterCat(newTehniks,tehniks[i],type);
    };
  };

   };


   var clearSladPicter = function (type) {
    if (type =="br") {
    var swiperSlad = document.querySelectorAll('.swiper-slide');
    for (var i = 0; i < swiperSlad.length; i++) {
      swiperSlad[i].remove();
  };
  };
   };

   var viewSlidPicter = function (type) {
    if (type =="br") {
    for (var i = 0; i < brends.length; i++) {
      var slidNewCat = newCatSlidTemplate.cloneNode(true);
      addPicterSlidCat(slidNewCat,brends[i],type); 
  };
   };



  };

  var addPicterSlidCat = function (item,brend,type) {

    if (type =="br") {
    var bitmap = item.querySelector('.bitmap');
    var picter= bitmap.querySelector('img');
    var text="./img/"+ brend +".png";
    picter.src = text;
    swiperWrapper.appendChild(item);
};




  };

  allCheckPicter.addEventListener('change', function () {
      clearPicter("br");
      if (lineText.textContent === "Показать все") {
        viewAllPicter("br");
      lineText.textContent = "Скрыть все";
      lineExpand.style.transform = "rotate(180deg)"; 
      } else {viewNomerPicter ("br");
      lineText.textContent = "Показать все";
      lineExpand.style.transform = "rotate(0deg)";
      };
      clearSladPicter("br");
      viewSlidPicter ("br"); 
          });

          allTehCheckPicter.addEventListener('change', function () {
            clearPicter("teh");
            if (lineTehText.textContent === "Показать все") {
              viewAllPicter("teh");
              lineTehText.textContent = "Скрыть все";
              lineTehExpand.style.transform = "rotate(180deg)"; 
            } else {viewNomerPicter ("teh");
            lineTehText.textContent = "Показать все";
            lineTehExpand.style.transform = "rotate(0deg)";
            };
            clearSladPicter();
            viewSlidPicter (); 
                });


          
  
  viewNomerPicter ("br");
  viewNomerPicter ("teh");
  viewSlidPicter ("br"); 