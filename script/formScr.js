$(document).ready(function() {
                        /* Скрипты для пля Name*/
var regV = /([A-z0-9][-A-z0-9])/;
var locVar = $('#name :text');
var sear = locVar.val().search(regV);

$('#name :text').focus(function() {
        if($('#name :text').val() == 'Name') {
        $(this).val('');
        }  
    });
$('#name :text').blur(function() {
            if($(this).val() == ''){
               $(this).val('Name');
               }
            else if(locVar.val().search(regV) == -1) {
        $('#name').addClass('nameRed');
        $('#pseName').addClass('pseName').append('<p> Invalid input! </p>').fadeIn('slow');
        }
            else {
        $('#name').addClass('nameGreen');
        $('#pseName').css({'display' : 'none'});
        } 
           
 });             
        
                        /* Скрипты для пля Name*/
                        
                        
                        
                        
                        
                        /* Скрипты для пля Mail*/
var regVM = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
var locVarM = $('#mail :text');
        
$('#mail :text').focus(function() {
            if($('#mail :text').val() == 'Mail') {
               $(this).val('');
        }
        });
        
$('#mail :text').blur(function() {
        if($(this).val() == ''){
            $(this).val('Mail');}
        else if($('#mail :text').val().search(regVM) == -1) {
            $('#mail').addClass('nameRed');
            $('#pseMail').addClass('pseMail').append('<p> Invalid input! </p>').fadeIn(1000);
        
        }  
        else {
            $('#mail').addClass('nameGreen');
            $('#pseMail').css({'display' : 'none'});
        } 
});               
                        /* Скрипты для пля Mail*/
                        /* Скрипты для пля message*/
                        
$('#tex').focus(function() {
    if($('#tex').text() == 'Message') {
        $(this).text('');
        }
        });                  
                        /* Скрипты для пля message*/
                        
                        /* Скрипты для пля Ссылок*/
                        
$('#links li a').hover(function () {
    $(this).animate({'font-size' : '16px'},50); 
  
}, function () {
    $(this).animate({'font-size' : '12px'},50);
});                        
                        
                        /* Скрипты для  Сcылок end*/



$(function() {
    $('#dat').datepicker();
});


                          /* Навигация*/
$('#navi a').hover(function () {
    
});                          
                          /* Навигация*/






















});//конец readys 