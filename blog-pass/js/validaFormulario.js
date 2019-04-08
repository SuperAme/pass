$(document).ready(function(){
    $("#opciones").on("change",function(){
        var valor = $(this).val()
        if (valor == "valor_5" || valor == "valor_6" || valor == "valor_7" || valor == "valor_8"){
            $("#resumenLabel").hide()
            $("#resumenInput").hide()
            $("#imagenLabel").hide()
            $("#imagen").hide()
        }else{
            $("#resumenLabel").show()
            $("#resumenInput").show()
            $("#imagenLabel").show()
            $("#imagen").show()
        }
//        console.log($(this).val())
    })
})