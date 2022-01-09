'use strict';
/*Common
------------------------------------------------------------------------------*/
$(function() {
    let $header = $('body');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $header.addClass('scroll');
        } else {
            $header.removeClass('scroll');
        }
    });
});    
    
$(function(){
   $('a[href^=#]').click(function() {
      var speed = 400; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;

      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});    
    
$(function(){
$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').fadeOut();
  } else {
    $(this).addClass('active');
    $('nav').fadeIn();
  }
  $('nav,#head').toggleClass('show');    
});    
});


window.onscroll = function () {
    let check = window.pageYOffset;
    let docHeight = $(document).height();
    let dispHeight = $(window).height();
    if (check > docHeight - dispHeight - 100) {
        $('body').addClass('bottom')
    } else {
        $('body').removeClass('bottom')
    }
};

let navList = document.querySelectorAll('nav ul li a');
navList.forEach(function(e){
    e.addEventListener('click', navClicked);
});
function navClicked(){
    document.querySelector('nav').classList.remove('show');
    document.querySelector('.menu-trigger.navToggle').classList.remove('active');   
}


//ループ処理
let elm = document.getElementsByName('hoge');
for(let viewItems of elm){
$(window).scroll(function(){
  var obj_t_pos = $(viewItems).offset().top;
  var scr_count = $(document).scrollTop() + (window.innerHeight/2.5); 
  if(scr_count > obj_t_pos){
     $(viewItems).addClass('view');
  }
});    
}


/*Slick
------------------------------------------------------------------------------*/
$(function() {
$('.slick').slick({
    slidesToShow:5,
    rows:2,
  responsive:[
   {
    breakpoint: 1021, //670px以下のサイズに適用
    settings: {
        dots: true,
    }
   },{
    breakpoint: 851, //400px以下のサイズに適用
    settings: {
    slidesToShow:3,
        dots: true,        
    }
   }
 ]
});
});


/*トップページ
------------------------------------------------------------------------------*/
