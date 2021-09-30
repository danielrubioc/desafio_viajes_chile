/* espero que compile el dom */ 
$( document ).ready(function() { 
    /*Si realizo scroll agrego color al navbar fixed*/
    $(window).scroll(function () {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("bg-info");
        } else {
            $("#navbar").removeClass("bg-info");
        }
    });


    $(".nav-link").click(function(event) {
        console.log(event);
    })
});