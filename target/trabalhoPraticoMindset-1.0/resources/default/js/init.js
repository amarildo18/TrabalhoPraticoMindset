$(document).ready(function () {
    // the body of this function is in assets/js/now-ui-kit.js
    nowuiKit.initSliders();
    
    setTimeout(function(){
        $('#lermais').click();
    },2000);
    
});

function scrollToDownload() {

    if ($('.section-download').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-download').offset().top
        }, 1000);
    }
}


