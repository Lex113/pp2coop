$(document).ready(function(){
    $("#communitygallery div div img").hover(function(){
        $("#mainimage").attr('src', $(this).attr('src'));
    });
});

//this immage gallery is on the welcome page//