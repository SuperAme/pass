$(function() {
    $.post("../php/php/video_stats.php", {"get_views": true})
    .done(function(data) {
        console.log(data);
        var views = $.parseJSON(data);
        if (views != "0 results") {
            for(var i in views) {
                $("#lastView-"+views[i]["view_type"]).text(views[i]["last_view"]);
                $("#numViews-"+views[i]["view_type"]).text(views[i]["num_views"]);
            }
        }
    });
});