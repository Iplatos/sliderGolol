var slider1={
    imagesUrls: [],
     currentImageIndex : 0,
     showPrevBtn:  null,
     showNextBtn : null,
     slideImage : null,
    

start:function (elId) {
var that = this;
var elSelector = '#' + elId;
var el = document.querySelector(elSelector );

this.showPrevBtn = el.querySelector(".show-prev-btn");
this.showNextBtn = el.querySelector(".show-next-btn");
this.slideImage = el.querySelector(".slide-img" );

     this.showPrevBtn.addEventListener("click", function (e) {
         that.onShowPrevBtnClick(e);
     }),
      
     this.showNextBtn.addEventListener("click", function(e) {
         that.onShowNextBtnClick(e);
     }),
     
     this.imagesUrls.push("https://avatars.mds.yandex.net/get-zen_doc/62191/pub_5d1c4f2ecc20a700ae50f24c_5d1c5fac042b2200ad9cd627/scale_1200"),
     this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLw91u0387pKxqE-SYisnuOkT1VsJNtf4fEMmMlpVIUMrXHzVYQSE2rJEXXQkF7g31nQ&usqp=CAU"),
     this.imagesUrls.push("https://bnmusic.com.ua/wp-content/uploads/2018/11/gogol_bordello-e1542024440697-706x471.jpg"),
     this.imagesUrls.push("https://icdn.lenta.ru/images/0000/0260/000002606698/pic_1358850929.jpg"),
     
     
     this.slideImage.src = this.imagesUrls[this.currentImageIndex];
     this.showPrevBtn.disabled = true;

},




     onShowPrevBtnClick: function(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled= false;
       if (this.currentImageIndex ===0){
        this.showPrevBtn.disabled = true
      
     
       }
     },
     onShowNextBtnClick: function (e){
        this.currentImageIndex++;
         
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
         if (this.currentImageIndex === (this.imagesUrls.length-1)){
            this.showNextBtn.disabled = true;
         }
},
}
