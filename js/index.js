// Index.html - JS
// Header
$(function(){
    let $body = $('body'), // 변수선언
        $windowTop, // cnt01
        count = 0;

    // Header
    $hdrWrap = $body.find('.hdrWrap'), //헤더 변수
    $hdrTop = 0; //header.offsetTop() 값 = 0;
    // header 맨위에서 스크롤했을때 css변경
    $(document).on("scroll",function(){
        $windowTop = $(window).scrollTop();//스크롤 할수록 top offset 값 +
        $hdrScrollTop();
    })
    function $hdrScrollTop(){
        if($windowTop > $hdrTop){ //hdrtop 0값보다 높으면 css변경
            $hdrWrap.css({"background-color":"#fff","border-bottom":"1px solid #eee"}),
            $hdrWrap.find("h1.logo a").css("background-image","url('img/header_logo2.png')"),
            $hdrWrap.find("button, ul.gnb a").css("color","#000");
            $hdrWrap.find('ul.gnb li').hover(function(){ //마우스 hover했을때 스타일 적용
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
    }
    // -lang 선택시 드랍메뉴 toggle
    $hdrWrap.find('.lang button.langSel').click(function(){ //클릭시 드랍/닫기
        $(this).siblings('.langBox').stop().slideToggle(300);
        if (count == 0){
            $(this).children('ion-icon').attr("name","chevron-up-outline");
            count = 1;
        }else{
            $(this).children('ion-icon').attr("name","chevron-down-outline");
            count = 0;
        }
    });
    // End of header

    // MAIN
    $main = $body.find('main'),
    $mainLeft = $main.find('ul.btn li.left'),
    $mainRight = $main.find('ul.btn li.right'),
    $mainGallery = $main.find('ul.mainGallery'),
    $mainSelect = $mainGallery.find('li');

    // Main click left
    // $mainLeft.click(function(){
    //     let lastImg = $('main .mainGallery li').last();
    //     if(prevImg.length){
    //         currentImg.removeClass('mainSelect').fadeOut();
    //         prevImg.addClass('mainSelect').fadeIn();
    //     }else{
    //         currentImg.removeClass('mainSelect').fadeOut();
    //         lastImg.addClass('mainSelect').fadeIn();
    //     }
    // });
    // Main click right
    // $mainRight.click(function(){
    //     let currentImg = $('main .mainGallery .mainSelect');
    //     let nextImg = currentImg.next();
    //     let firstImg = $('main .mainGallery li').first();
    //     if(nextImg.length){
    //         currentImg.removeClass('mainSelect').fadeOut();
    //         nextImg.addClass('mainSelect').fadeIn();
    //     }else{
    //         currentImg.fadeOut(1000).removeClass('mainSelect');
    //         firstImg.fadeIn(1000).addClass('mainSelect');
    //     }
    // });

    // Main click left/Right arrow - 클릭시 왼쪽/오른쪽 이미지 보여주기
    let $mainLast = $main.find('ul.mainGallery li:last-child').index();
        $mainFirst = $main.find('ul.mainGallery li:first-child').index();

    $mainLeft.click(function(){
        let $mainIndex = $main.find('ul.mainGallery li.mainSelect').index();
        console.log($mainIndex + '!!!' +$mainLast);
        $mainSelect.removeClass('mainSelect');
        if($mainIndex == 0){
            $mainSelect.eq($mainLast).addClass('mainSelect');
            console.log('hellllo');
        }else{
            $mainSelect.eq($mainIndex).prev().addClass('mainSelect');
        }
    })
    $mainRight.click(function(){
        let $mainIndex = $main.find('ul.mainGallery li.mainSelect').index();
        console.log($mainIndex + '!!!' +$mainLast);
        $mainSelect.removeClass('mainSelect');
        if($mainIndex == 7){
            $mainSelect.eq($mainFirst).addClass('mainSelect');
            console.log('hellllo');
        }else{
            $mainSelect.eq($mainIndex).next().addClass('mainSelect');
        }
    })

    // Main click pageOn - 선택한 page가 현재 page 랑 다르면 실행
    $main.find('ul.mainPage li').click(function(){
        let $pageOn = $main.find('.pageOn').index(); //li.pageOn index값
        let $pageNew = $(this).index(); //클릭한 li index값

        function $mainGalSelect($pageNew){ //main pageOn 클릭 메서드 함수 
            $main.find('ul.mainGallery li').stop().fadeOut(500,function(){
                $(this).removeClass('mainSelect');
            })
            $main.find('ul.mainGallery li').eq($pageNew).stop().fadeIn(500,function(){
                $(this).addClass('mainSelect');
            });
        }
        if($pageNew != $pageOn){
            $main.find('ul.mainPage li.pageOn').removeClass('pageOn'); //
            $(this).addClass('pageOn');
            $mainGalSelect($pageNew); 
        }
    })
    //End of Main

    // Content 01 변수선언
    let $thumbnail = $body.find('.cnt01 .media a'),
        $popup = $body.find('.cnt01Popup'),
        $close = $body.find('.cnt01Popup .close');
    // Content 01 modal 창
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