// Index.html - JS/JQuery
$(function(){
    let $body = $('body'), // 변수선언
        $windowTop, // 사용범위 cnt01
        count = 0;

    // Header JQuery
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
    // End of header -----

    // MAIN JQuery 
    $main = $body.find('main'),
    $mainLeft = $main.find('ul.btn li.left'),
    $mainRight = $main.find('ul.btn li.right'),
    $mainGallery = $main.find('ul.mainGallery'),
    $mainImage = $mainGallery.find('li');
    // Main click left/Right arrow - 클릭시 왼쪽/오른쪽 이미지 보여주기
    let $mainLast = 7;
        $mainFirst = 0;
    // $mainLeft.click(function(){ //왼쪽 화살표를 클릭했을때
    //     let $mainIndex = $main.find('ul.mainGallery li.mainSelect').index() /*현재 .mainSelect 위치 0~7 */;
    //     console.log($mainIndex);
    //     $mainSelect.removeClass('mainSelect');
    //     if($mainIndex == 0){ //첫번째 사진/pageOn 이면 마지막 사진으로 변경
    //         $(this).removeClass('mainSelect');
    //         $mainSelect.eq($mainLast).addClass('mainSelect');
    //         $main.find('ul.mainPage li').removeClass('pageOn').last().addClass('pageOn');
    //     }else{ //첫번째가 아닐 경우 이전 사진과 pageOn
    //         $mainSelect.eq($mainIndex).prev().addClass('mainSelect');
    //         $main.find('ul.mainPage li.pageOn').removeClass('pageOn').prev().addClass('pageOn');
    //     }
    // })

    // $mainRight.click(function(){ //오른쪽 화살표를 클릭했을때
    //     let $mainIndex = $main.find('ul.mainGallery li.mainSelect').index();
    //     console.log($mainIndex + '!!!' +$mainFirst);
    //     $mainSelect.removeClass('mainSelect');
    //     if($mainIndex == 7){ //마지막 사진과 pageOn 이면 첫번째로 변경
    //         $(this).removeClass('mainSelect');
    //         $mainSelect.eq($mainFirst).addClass('mainSelect');
    //         $main.find('ul.mainPage li').removeClass('pageOn').first().addClass('pageOn');
    //     }else{ //마지막 아닐 경우 다음 사진과 pageOn
    //         $mainSelect.eq($mainIndex).next().addClass('mainSelect');
    //         $main.find('ul.mainPage li.pageOn').removeClass('pageOn').next().addClass('pageOn');
    //     }
    // })
    // ***Main click pageOn - 선택한 page가 현재 page 랑 다르면 실행
    
    $mainLeft.click(function(){
        let $pageOn = $main.find('.pageOn').index(); //li.pageOn index값
        let $pageNew = $(this).index(); //클릭한 li index값
        console.log($pageOn + 'MAINLEFT' +$pageNew);
        if($mainImage.index()==0){
            $mainImage.fadeOut(1000,function(){

            })
        }
    })
    
    // ***main 현재 갤러리 페이지
    // add/remove class대신 css배경만 바꾸기
    $main.find('ul.mainPage li').click(function(){
        let $pageOn = $main.find('.pageOn').index(); //현재 페이지 index값
        let $pageNew = $(this).index(); //클릭한 페이지 index값
        // 코드 실행
        if($pageNew != $pageOn){ // 현재 페이지 != 새로운 페이지
            $main.find('ul.mainPage li').removeClass('pageOn');
            $(this).addClass('pageOn');
            $mainImage.fadeOut(500,function(){
                // fadein(function(){}) 안에 css를 넣으면 delay현상
                $mainImage.fadeIn(500);
                $mainImage.css('background-image','url("img/main0'+$pageNew+'.jpg")');
            })
        }
    })
    //End of Main -----

    // (완료) cnt01 - About Line Friends JQuery 
    let $cnt01_video = $body.find('.cnt01 .media a'),
        $popup = $body.find('.cnt01Popup'),
        $close = $body.find('.cnt01Popup .close');
    // Content 01 modal 창 열기 -callback
    $cnt01_video.click(function(){
        openModal();
    })
    $close, $popup.click(function(){
        closeModal();
    })
    //callback function to open/close modal upon clicking certain area
    function openModal(){
        $popup.fadeIn(300, function(){
            $popup.find('section').fadeIn(200);
        });
    }
    function closeModal(){
        $popup.fadeOut(300, function(){
            $popup.find('section').hide(500);
        });
    }
    // End of cnt01 (완료)-----

    // cnt 03 Gallery
    // let $cnt03Gallery = $body.find('.cnt03'),
    //     $cnt03galSelect = $cnt03Gallery.find('.galSelect'),
    //     $galbutton = $cnt03Gallery.find('ul.galList li button');
    // $galbutton.click(function(){
    //     let $galListOld = $galbutton.parent().find('.galOn').index();
    //         $galListNew = $(this).index();
    //     console.log($galListOld +'CNT03'+$galListNew);
    //     $cnt03galSelect.css("background-image","url('img/gallery_img"+$+".jpg')");
    //     $(this).addClass('galOn');
    //     $(this).siblings().removeClass('galOn');
    // })

    // cnt 04 MEDIA
    let $cnt04pgNum = $body.find('.cnt04 ul.pageNum li');
    $cnt04pgNum.click(function(){ //클릭시 현재 페이지 표시, 나머지 번호는 흐려짐
        $(this).addClass('select').siblings().removeClass('select');
    })
    //END OF CNT 04 -----
    // cnt 05 NOTICE
    let $cnt05pgNum = $body.find('.cnt05 ul.pageNum li');
    $cnt05pgNum.click(function(){ //클릭시 현재 페이지 표시, 나머지 번호는 흐려짐
        $(this).addClass('select').siblings().removeClass('select');
    })
    // END OF CNT 05 -----
})