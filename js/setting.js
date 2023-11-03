//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});



$(function () {
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top ;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-scroll').click(function(e) {
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top }, 700);
        return false;
        e.preventDefault();
    });
});




$('.news-show__item dt').on('click', function(){
    $(this).toggleClass("active").next(".news-show__ct").slideToggle();;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("fixed");
    }
    else {
        $("#header").removeClass("fixed");
    }
});

