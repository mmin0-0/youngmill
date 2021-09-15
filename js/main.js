var currentPosition = parseInt($("#slidemenu").css("top"));
$(window).scroll(function () {
  var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
  $("#slidemenu").stop().animate({ "top": position + currentPosition + "px" }, 800);
});

$('.form-tit').on('click', function () {
  $('.form-wrap').toggleClass('active');
});

$('.checkbox-link').on('click', function () {
  $('.personalCont-modal').addClass('active');
});
$('.personalCont-modal-bg, .personalCont-modalCont-btn').on('click', function () {
  $('.personalCont-modal').removeClass('active');
});

$('.btt').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 400);
});

$('.btb').on('click', function () {
  $('html, body').scrollTop($(document).height());
});

$('.slide-btn').on('click', function(){
  $('.slide-btn').toggleClass('active');
  $('.midea-menu').toggleClass('active');
});

$('.hamberger-menu').click(function(){
  $('.sideMenu').addClass('active');
  $('.sideMenu-bg').addClass('active');
  $('.sideMenu-inner').addClass('active');
});

$('.closed-btn, .sideMenu-bg').click(function(){
  $('.sideMenu').removeClass('active');
});