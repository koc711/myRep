/* ���� ��������!*/
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
/* ���� ��������!*/



/* ������ ���������� �����!*/
$('#circle li a').click(function(eventObject) {
        if($("bigFoto img").attr('href') == $(this).attr('href')){
            return false;
        }
});
/* ������ ���������� �����!*/
/* ������������� ��������!*/
$('#circle a img ').click(function() {
    $('#circle a img ').fadeTo(400,1)
    $(this).fadeTo(400,0.6);  
  });      
/* ������������� ��������!*/
/* ������ ��� ������� ����!*/        

$('#cr5').load(function() {
    $('#cr5').fadeTo(100,0.6);
});
/* ������ ��� ������� ����!*/     


































});//����� ready