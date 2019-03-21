(function($) {
    
    $(".openVideo").click(function() {
        var videoId = $(this).attr("data_videoId").split("-");
        /* Get iframe src attribute value i.e. YouTube video url
        and store it in a variable */
        var video = $("#cartoonVideo");
        var url = "../videos/"+videoId[0]+"/"+videoId[1]+"/"+videoId[2]".mp4";
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
    
    //$('body').bind('contextmenu',function() { return false; });

})(jQuery); // End of use strict