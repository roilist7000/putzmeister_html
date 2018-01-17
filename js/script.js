/**
 * Created by user848 on 16.01.2018.
 */
/*Стрелка на главной странице*/
$('.arrow').click(function(){

    $('.products').toggle('slow')
    $( this ).toggleClass( "highlight" );

})




/*Кнопка наверх*/

$("#back-top").hide();

$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
});
$('#back-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});