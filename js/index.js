// Index.html - JS

// Header
$(function(){
    let count = 0;
    // lang 선택시 드랍메뉴 toggle
    $('.hdrWrap header .lang a.langSel').click(function(){
        if (count == 0){
            $(this).children('ion-icon').attr("name","chevron-up-outline");
            $(this).siblings('.langBox').stop().slideDown(300);
            count = 1;
        }else{
            $(this).children('ion-icon').attr("name","chevron-down-outline");
            $(this).siblings('.langBox').stop().slideUp(300);
            count = 0;
        }
    });

    // main click left
    $('main ul.btn li.left').click(function(){
        let currentImg = $('main .mainGallery .mainSelect');
        let prevImg = currentImg.prev();
        let lastImg = $('main .mainGallery li').last();
        if(prevImg.length){
            currentImg.removeClass('mainSelect').fadeOut();
            prevImg.addClass('mainSelect').fadeIn();
        }else{
            currentImg.removeClass('mainSelect').fadeOut();
            lastImg.addClass('mainSelect').fadeIn();
        }
    });
    //main click right
    $('main ul.btn li.right').click(function(){
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
    //main click page
    $('main ul.mainPage li').click(function(){
        // console.log('hello');
        $('main ul.mainPage li.pageOn').removeClass('pageOn');
        $(this).addClass('pageOn');
    })
})