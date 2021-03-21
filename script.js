$(function(){
    $(".menu li").hover(function(){
        $(this).find(".nmSub").toggleClass("show");
    });
});