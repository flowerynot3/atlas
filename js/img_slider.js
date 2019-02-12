// img_slider(이미지번호:0,1,2)
function img_slider(img_num){
    // image slider
    $('.slider .sliders')
    .animate({
      marginLeft: -img_num*100 +'%'
    });
   
}

$(function(){

  var duration = 3000; // 재생시간 5초
  var slider_num = 0; //이미지 번호

  // 자동재생
  setInterval(function(){
    //다음 이미지로
    slider_num++;

    // 마지막 이미지에서 처음으로 돌아가기
    // 만약 슬라이드 넘버가 2보다 크면 0으로 다시 돌아간다.
    if(slider_num > 2){
      slider_num = 0;
    }

    // 이미지 슬라이더 함수 실행
    img_slider(slider_num);

    // 인디케이터 선택 효과
    $('.slider_indicator li a').removeClass('active');
    $('.slider_indicator li')
    .eq(slider_num)
    .find('a')
    .addClass('active');

  },duration);

    


});