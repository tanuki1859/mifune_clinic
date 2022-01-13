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
        dots: true,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase: 'ease-out',
        speed: 1800,
        fade: true,
        asNavFor: '.slickThum',
      responsive:[
       {
        breakpoint: 851, 
        settings: {
            dots: false
        }
       }
     ]
    });
    $('.slickThum').slick({
        slidesToShow:4,
        asNavFor: ".slick", // メイン画像と同期
        focusOnSelect: true, // サムネイルクリックを有効化
          });
    });


/*トップページ
------------------------------------------------------------------------------*/
(function (){
    document.getElementById('loading').classList.add('view');
    setTimeout(loading, 2500);
    function loading(){
        document.getElementById('loading').classList.add('none');
    }
}());