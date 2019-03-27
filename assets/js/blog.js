$(document).ready(function(){
    var fdm = $("#form_blog")

    fdm.bind("submit",function(){
        var frmData = new formData
        frmData.append("imagen",$("input[name=imagen]")[0].files[0])
        $.ajax({
            url: fdm.attr("action"),
            type: fdm.attr("method"),
            data: frmData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(data){
                alert("Subido Correctamente")
                return false;
            }
        })
        return false;
    })
})