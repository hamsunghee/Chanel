$(document).ready(function(){

    $(".slick-slide div div").removeAttr('style');
  
    $(".trigger").click(function(){
      $(this).toggleClass("active");
      $(".gnb_list").stop(true,true).slideToggle("fast");
    });
  
  });

  /* 메뉴버튼 */
$(".trigger").click(function(){
  $(".gnb_list").stop(true,true).animate({left:0});
  $(".back").stop(true,true).fadeIn();//메누 뒤 검정배경 등장
});

/* close버튼 */
$(".gnb_list .close").click(function(){
  $(".gnb_list") .stop(true,true).animate({left:"-60%"})
  $(".back").stop(true,true).fadeOut();//메누 뒤 검정배경 실종
});


  //자동으로 슬라이드 함수생성
  function bannerAuto(){

    $(".ban ul").stop().animate({marginLeft:"-=260px"},1000,function(){			
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });	

  }
  bauto=setInterval(bannerAuto,4000);

  //다음보기
  $(".ban_btn .ban_right").click(function(){

    clearInterval(bauto);

    $(".ban ul").stop(true,true).animate({marginLeft:"-=260px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨뒤로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});	

    bauto=setInterval(bannerAuto,4000);

  });

  //이전보기
  $(".ban_btn .ban_left").click(function(){

    clearInterval(bauto);

    $(".ban ul").stop(true,true).animate({marginLeft:"+=260px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨앞로 이동
			$(this).css({marginLeft:"0px"}); //최종목적지
		});

    bauto=setInterval(bannerAuto,4000);

  });


  //마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
  $(".ban").hover(function(){ 
		clearInterval(bauto);  
	}, function(){
		bauto=setInterval(bannerAuto,4000);
	});


  $(window).scroll(function(){

    let pos = $(window).scrollTop();

    if(pos>50){
      $('header, .btn-top').addClass('active');
    }else{
      $('header, .btn-top').removeClass('active');
    }

  });

  let oimg=0; 
	let nimg=0;

  $(".thumbs a").click(function(){

    nimg=$(this).index();  //0,1,2,3....

    $(".thumbs a").eq(oimg).removeClass("on");  //썸네일클래스 사라짐
		$(".thumbs a").eq(nimg).addClass("on");  //썸네일 클래스 불러옴
		$("#largeImg>img").eq(oimg).stop().fadeOut(1000); //기존이미지 사라짐
		$("#largeImg>img").eq(nimg).stop().fadeIn(1000,function(){  //새이미지 나타남
			oimg = nimg; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...
		});
    return false;
    
  });

  $(document).ready(function () {
    slider();
})

function slider() {
    var winW = window.innerWidth; //화면 가로사이즈
    var swiper = undefined;
    var viewNum = ''; //슬라이드 개수 (옵션)
    var loopChk = ''; //무한반복 체크
    var slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    var slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    var winWChk = ''; 
    $(window).on('load resize', function () {
        winW = window.innerWidth;
        if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
            winWChk = 'mo'
            setTimeout(function() {
                sliderAct();
            }, 300);
        }

        if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
            winWChk = 'pc'
            setTimeout(function() {
                sliderAct();
            }, 300);
        }
    })

    function sliderAct(){
        //슬라이드 초기화 
        if (swiper != undefined){ 
            swiper.destroy();
            swiper = undefined;
        }

        //slidesPerView 옵션 설정
        if (winW > 768){ //PC 버전
            viewNum = 4;
        }else{ //mobile 버전
            viewNum = 2;
        }

        //loop 옵션 체크
        if (slideNum > viewNum){
            loopChk = true;
        }else{ 
            loopChk = false;
        }

        swiper = new Swiper(".slider .inner", {
            slidesPerView: "auto",
            initialSlide :slideInx,
            loop: loopChk,
            centeredSlides: true,
            navigation: {
                nextEl: $('.slider .swiper-next'),
                prevEl: $('.slider .swiper-prev'),
            },
            on: {
                activeIndexChange: function () {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
            },
        });
    }
}



/*  갤러리 */
$(document).ready(function () {
    slider();
})

function slider() {
    var winW = window.innerWidth; //화면 가로사이즈
    var swiper = undefined;
    var viewNum = ''; //슬라이드 개수 (옵션)
    var loopChk = ''; //무한반복 체크
    var slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    var slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    var winWChk = ''; 
    $(window).on('load resize', function () {
        winW = window.innerWidth;
        if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
            winWChk = 'mo'
            sliderAct();
        }

        if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
            winWChk = 'pc'
            sliderAct();
        }
    })

    function sliderAct(){
        //슬라이드 초기화 
        if (swiper != undefined){ 
            swiper.destroy();
            swiper = undefined;
        }

        //slidesPerView 옵션 설정
        if (winW > 768){ //PC 버전
            viewNum = 4;
        }else{ //mobile 버전
            viewNum = 2;
        }

        //loop 옵션 체크
        if (slideNum > viewNum){
            loopChk = true;
        }else{ 
            loopChk = false;
        }

        swiper = new Swiper(".slider .inner", {
            slidesPerView: "auto",
            initialSlide :slideInx,
            loop: loopChk,
            centeredSlides: true,
            navigation: {
                nextEl: $('.slider .swiper-next'),
                prevEl: $('.slider .swiper-prev'),
            },
            on: {
                activeIndexChange: function () {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
            },
        });
    }
}


// 갤러리
$(document).ready(function () {

  let imgp_w=$(".slidep ul li").width(); //이미지의 가로너비
  let simgp_n= $(".slidep ul li").length;  //이미지의 총개수  
  let soldidxp=0; //기존이미지
  let sindexp=0; //선택된 새이미지

  let g_pop=$(".slidep ul li").index();
  $(".page span:nth-child(1)").text(g_pop+1); //index는 0부터 시작하므로 페이지를 표시하기 위해 1을 더함


  //index번째 비주얼이미지 이동하는 함수생성
  function slidepImg(sindexp){

    targetpX=-(sindexp*imgp_w); //움직이는 거리(너비)
    $(".slidep ul").stop(true,true).animate({left:targetpX},600);
    soldidxp=sindexp;

  };

  //다음보기.....
  $(".sidep_btn .nexp").click(function(){

    sindexp++;
    if(sindexp>=simgp_n-1){ //마지막 이미지까지 가면 마지막 이미지에서 멈춤
      sindexp=4; //0,1,2,3,4 로 마지막이미지          
    };
		slidepImg(sindexp);

    if(g_pop<4){
			g_pop++;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		};

  });

  //이전보기.....
  $(".sidep_btn .prep").click(function(){

    sindexp--;	
		if(sindexp<0){ //첫번째 이미지까지 가면 첫번째 이미지에서 멈춤
      sindexp=0; //4,3,2,1,0 으로 첫번째이미지          
    }
		slidepImg(sindexp);

    if(g_pop>0){
			g_pop--;
			$(".page span:nth-child(1)").text(g_pop+1); //바뀌는 페이지 표시
		}

  });

});


// 전화번호
site=true;

$(".sitemap_btn").click(function(){

  if(site){
    $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
    $(".footer_sitemap").stop().css({"height":"240px"}); 
    $(".footer_sitemap").css({"border-bottom":"1px solid #e5e5e5"});   
    $(".sitemap").fadeIn(); 
    site=false;
  }else{
    $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
    $(".footer_sitemap").stop().css({"height":"0px"}); 
    $(".footer_sitemap").css({"border-bottom":"none"});  
    $(".sitemap").fadeOut(); 
    site=true;
  }

});
//두개이미지
$(".box5 ul li").hover(function(){
  $(this).find(".text1").stop().animate({bottom:"0px"});
},function(){
  $(this).find(".text1").stop().animate({bottom:"-120px"});
});

// 부티크
$(document).ready(function(){

  $(".slick-slide div div").removeAttr('style');

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb_list").stop(true,true).slideToggle("fast");
  });

});