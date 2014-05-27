/* сама карусель!*/
$(document).ready(function() {
$('#circle li a').click(function(eventObject) {
    if($('#bigFoto img').attr('src') != $(this).attr('href')){
        $('#bigFoto img').hide().attr('src',$(this).attr('href'));
        $('#bigFoto img').load(function() {
            $(this).fadeIn(800);
        });
    }
    eventObject.preventDefault();
});
/* сама карусель!*/



/* отмена повторного клика!*/
$('#circle li a').click(function(eventObject) {
        if($("bigFoto img").attr('href') == $(this).attr('href')){
            return false;
        }
});
/* отмена повторного клика!*/
/* Переключатель контента!*/
$('#circle a img ').click(function() {
    $('#circle a img ').fadeTo(400,1)
    $(this).fadeTo(400,0.6);  
  });      
/* Переключатель контента!*/
/* маркер для текущей фото!*/        

$('#cr5').load(function() {
    $('#cr5').fadeTo(100,0.6);
});
/* маркер для текущей фото!*/     


































});//конец ready