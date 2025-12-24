$(window).on("load scroll", function () {
    var top = $(document).scrollTop(),
        wHeight = $(window).height();
    if (top > wHeight) {
        $(".side6").fadeIn("fast");
        $(".wyz-top").fadeIn("fast");
        $(".wyz").css({
            "height": 50
        });
    } else {
        $(".side6").hide();
        $(".wyz-top").hide();
        $(".wyz").removeAttr("style");
    }
});
$(".side6").on("click", function () {
    $("html,body").stop().animate({
        scrollTop: 0
    }, 500);
});
$(".wyz-top").on("click", function () {
    $("html,body").stop().animate({
        scrollTop: 0
    }, 500);
});

$(function () {
    $('#ScrollToTop').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 'slow');
    });
});