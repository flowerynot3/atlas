// script.js
$(function(){

  // 2단계 메뉴 닫기
  $('.depth2').hide();

  // 2단계 메뉴 hover
  $('.depth1 > li').hover(
    // 마우스 올라갔을때
    function(){
      // 현재 선택한 목록만 열리는 거
      // $(this).find('.depth2').stop().slideDown();
      
      // 다 열리게
      $('.depth2').stop().slideDown();
    },
    // 마우스 나갔을때
    function(){
      $('.depth2').stop().slideUp();
    }
  );

});
