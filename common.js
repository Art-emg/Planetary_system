$(document).ready(function() {
    // document.ready -------------

    // ------- галерея magnificPopup---------

    $(".imgPicture").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    // ------ КОНЕЦ -галерея magnificPopup---------

    // --------------  увелечение изображений в истории magnificPopup ----------
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }

    });
    // ---------------КОНЕЦ увелечение изображений в истории magnificPopup

    // ----------- плавный переход по главам в истории
    $("#rounded").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });


    //------------------------------------- 



}); // END ------------ document.ready

// ----------- Событие при скорле колесика (для фиксироваия меню сверху)
$(document).scroll(function() {
    // $('.fixedNormal').height( $('.fixed').height() + 5 );
    if ($(document).scrollTop() > $('.header_top').height()) {
        // $('.fixedNormal').height( $('.fixed').height() + 5);
        $('.menu').addClass('fixed');

    } else {
        $('.menu').removeClass('fixed');
    }

    if ($(document).scrollTop() > $('.header_top').height() + 25) {
        $(".menu_item").css("font-size", "1.3em");
        $(".menu_item").css("padding", "3px 2.5%");
    } else {
        $(".menu_item").css("font-size", "1.7em");
        $(".menu_item").css("padding", "7px 2.5%");
    }
});
// ---------------  КОНЕЦ скрола


// ------- кнопка вверх, для бысторрого и плавного перехода вверх страницы
$(document).ready(function() {
    //$('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
    $('body').append('<img id="go-top" src="images/up_btn.png"/>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});
// ------------- конец кнопки вверх



// ---------------- галерея, разворачивание галереи
$(document).on('click', '.spoiler-trigger-foto', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().find('.spoiler-block-foto').first().slideToggle(300);
})
$(document).on('click', '.spoiler-trigger-video', function(e) {
    e.preventDefault();
    $(this).toggleClass('active-video');
    $(this).parent().find('.spoiler-block-video').first().slideToggle(300);
})

// ----------------