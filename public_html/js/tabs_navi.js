$(document).ready(function(){
//    $('ul#tabsNavi a').click(function (e) {
//        e.preventDefault();
//        $(this).tab('show');
//    });
    
    $('ul#mainMenuNav li').click(function(){
        var activeLinkMainMenu = $('ul#mainMenuNav li.active');
        $(activeLinkMainMenu).removeClass('active');
        $(this).addClass('active');
    });
});


