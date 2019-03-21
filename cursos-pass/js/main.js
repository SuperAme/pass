(function($) {
    /*
    $.post("../php/check.php").done(function(data) {
        if (data == "false" && window.location.href != "index.html") {
            window.location.href = "../index.html";
        } else {
            $("#userName").text(data);
        }
    });
    
    $("#logout").click(function() {
        $.post("../php/login.php", {"logout": true}).done(function(data) {
            window.location.href = "../index.html";
        });
    });
    
    $("#btn-login").click(function() {
        var userName = $("input[name='userName']").val();
        var password = $("input[name='password']").val();
        $.post("../php/login.php", {"login": true, "x": userName, "a": password}).done(function(data) {
            if (data != "true") alert(data);
            else window.location.href = "../cursos/cursos.html";
        });
    });
    */
    
    $(".portfolio-box").click(function(e) {
        e.preventDefault();
        var url = $(this).attr("data_url");
        $.post("../php/cursos.php", {c: url.substr(0,1)}).done(function(data) {
            if (data == true) {
                window.location.href = url;
            } else {
                alert(data);
            }
        });
        
    });
    
    $(".openVideo").click(function() {
        var videoId = $(this).attr("data_videoId").split("-");
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var video = $("#cartoonVideo");
        var url = "../cursos/videos/"+videoId[0]+"/"+videoId[1]+".mp4";
        /* Assign empty url value to the iframe src attribute when
        modal hide, which stop the video playing */
        $("#modalVideo").on('hide.bs.modal', function(){
            //$("#cartoonVideo source").attr('src', '');
            $("#cartoonVideo").attr('src', '');
        });
        /* Assign the initially stored url back to the iframe src
        attribute when modal is displayed again */
        $("#modalVideo").on('show.bs.modal', function(){
            //$("#cartoonVideo source").attr('src', url);
            $("#cartoonVideo").attr('src', url);
        });
        
        $("#videoNum").text(videoId[1].substr(-1));
        $("#modalVideo").modal();
    });
    
    $(".modalFull .close").click(function() {
        $(".modalFull").modal("hide");
    });
    
    $('body').bind('contextmenu',function() { return false; });

})(jQuery); // End of use strict
