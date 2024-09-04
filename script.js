$(document).keypress(function(event){
    $("h1").text(event.key);
    $("h2").fadeOut();
    $("h2").fadeIn();
});
$("h1").before("<button>buttonBeforeH1<button>");
$("h1").after("<button>buttonAfterH1<button>");
