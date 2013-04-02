$(document).ready(function(){
    $('ul#tabsNavi a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


