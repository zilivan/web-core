var nomerBrand = 6;
var brends = ["hp","aplle","aser","bosh","samsung","hp","aser","bosh","aser","bosh","samsung","hp"];
var catTemplate = document.querySelector('#cat-copy').content;
var newCatTemplate = catTemplate.querySelector('.cat');
var cats = document.querySelector('.cats');
var allCheckPicter = document.querySelector('.line_input');
var lineText = document.querySelector('.line_text');
var lineExpand = document.querySelector('.line__expand');

var catSlidTemplate = document.querySelector('#cat-slid').content;
var newCatSlidTemplate = catSlidTemplate.querySelector('.swiper-slide');
var swiperWrapper = document.querySelector('.swiper-wrapper');


var addPicterCat = function (item,brend) {
    var bitmap = item.querySelector('.bitmap');
    var picter= bitmap.querySelector('img');
    var text="Picture/"+ brend +".png";
    picter.src = text;
    cats.appendChild(item);
};
var clearPicter = function () {
    var cat = document.querySelectorAll('.cat');
    for (var i = 0; i < cat.length; i++) {
        cat[i].remove();
};
};
 var viewNomerPicter = function () {
  for (var i = 0; i <= nomerBrand-1; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i]);
};
 };
 var viewAllPicter = function () {
  for (var i = 0; i < brends.length; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i]); 
};
 };
 var clearSladPicter = function () {
  var swiperSlad = document.querySelectorAll('.swiper-slide');
  for (var i = 0; i < swiperSlad.length; i++) {
    swiperSlad[i].remove();
};
};
 var viewSlidPicter = function () {
  for (var i = 0; i < brends.length; i++) {
    var slidNewCat = newCatSlidTemplate.cloneNode(true);
    addPicterSlidCat(slidNewCat,brends[i]); 
};
 };
allCheckPicter.addEventListener('change', function () {
    clearPicter();
    if (lineText.textContent === "Показать все") {
      viewAllPicter();
    lineText.textContent = "Скрыть все";
    lineExpand.style.transform = "rotate(180deg)"; 
    } else {viewNomerPicter ();
    lineText.textContent = "Показать все";
    lineExpand.style.transform = "rotate(0deg)";
    };
    clearSladPicter();
    viewSlidPicter (); 
        });
        var addPicterSlidCat = function (item,brend) {
          var bitmap = item.querySelector('.bitmap');
          var picter= bitmap.querySelector('img');
          var text="Picture/"+ brend +".png";
          picter.src = text;
          swiperWrapper.appendChild(item);
      };

      viewNomerPicter ();
      viewSlidPicter (); 
        
        