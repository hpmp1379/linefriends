// Index.html - JS
// Header
$(function(){
    let $body = $('body'), // 변수선언

        count = 0;

    // Header 이벤트
    $hdrWrap = $body.find('.hdrWrap'), //헤더 변수
    $hdrTop = $hdrWrap.offset().top; //header top offset 값 = 0;
    $hdrWrap.find('.lang button.langSel').click(function(){  // -lang 선택시 드랍메뉴 toggle
        $(this).siblings('.langBox').stop().slideToggle(300);  //클릭시 드랍/닫기
        if (count == 0){
            $(this).children('ion-icon').attr("name","chevron-up-outline");
            count = 1;
        }else{
            $(this).children('ion-icon').attr("name","chevron-down-outline");
            count = 0;
        }
    });

    $(document).on("scroll",function(){  // Header -scroll 효과
        let $windowTop = $(window).scrollTop();  //스크롤 할수록 top offset 값 +
        if($windowTop > $hdrTop){
            $hdrWrap.css({"background-color":"#fff","border-bottom":"1px solid #eee"}),
            $hdrWrap.find("h1.logo a").css("background-image","url('img/header_logo2.png')"),
            $hdrWrap.find("button, ul.gnb a").css("color","#000");
            $hdrWrap.find('ul.gnb li').hover(function(){
                $(this).css("border-bottom","1px solid #000");
            },
                function(){
                    $(this).css("border-bottom","none");
                }
            );
        }else{
            $hdrWrap.css({"background-color":"transparent","border-bottom":"none"}),
            $hdrWrap.find("h1.logo a").css("background-image","url('img/header_logo1.png')"),
            $hdrWrap.find("button, ul.gnb a").css("color","#fff");
            $hdrWrap.find('ul.gnb li').hover(function(){
                $(this).css("border-bottom","1px solid #fff");
            },
                function(){
                    $(this).css("border-bottom","none");
                }
            );
        }
    })


    $main = $('main'),
    $mainLeft = $main.find('ul.btn li.left'),
    $mainRight = $main.find('ul.btn li.right'),
    $mainSelect = $main.find('.mainGallery .mainSelect'),
    $prevSelect = $mainSelect.prev(),
    $nextSelect = $mainSelect.next();

    // Main click left
    $mainLeft.click(function(){
        let lastImg = $('main .mainGallery li').last();
        if(prevImg.length){
            currentImg.removeClass('mainSelect').fadeOut();
            prevImg.addClass('mainSelect').fadeIn();
        }else{
            currentImg.removeClass('mainSelect').fadeOut();
            lastImg.addClass('mainSelect').fadeIn();
        }
    });
    // Main click right
    $mainRight.click(function(){
        let currentImg = $('main .mainGallery .mainSelect');
        let nextImg = currentImg.next();
        let firstImg = $('main .mainGallery li').first();
        if(nextImg.length){
            currentImg.removeClass('mainSelect').fadeOut();
            nextImg.addClass('mainSelect').fadeIn();
        }else{
            currentImg.fadeOut(1000).removeClass('mainSelect');
            firstImg.fadeIn(1000).addClass('mainSelect');
        }
    });
    // Main click pageList
    $('main ul.mainPage li').click(function(){
        // console.log('hello');
        $('main ul.mainPage li.pageOn').removeClass('pageOn');
        $(this).addClass('pageOn');
    })

    // Content 01
    // 모달 창
    let $thumbnail = $body.find('.cnt01 .media a'),
        $popup = $body.find('.cnt01Popup'),
        $close = $body.find('.cnt01Popup .close');

    $thumbnail.click(function(){
        $popup.fadeIn(300, function(){
            $popup.find('section').fadeIn(200);
        });
    })
    $close.click(function(){
        $popup.fadeOut(300, function(){
            $popup.find('section').hide(500);
        });
    })
})