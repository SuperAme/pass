(function ($) {
 "use strict";
    /*
    $("#cursos-menu").html(
        '<div class="menu-colum">'+
            '<h3><a href="../cursos/cursos-presenciales.html">Presenciales</a></h3>'+
            '<a href="../cursos/cursos-presenciales.html">SAE 7.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">ACTUALIZACIÓN SAE 7.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">COI 8.0</a>'+
            '<a href="../cursos/cursos-presenciales.html" class="nameB-menu">TALLER DE RECEPCIÓN DE PAGOS</a>'+
            '<a href="../cursos/cursos-presenciales.html">NOI 8.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">BANCO 4.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">CAJA 4.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">PROD 3.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">FACTURE 4.0</a>'+
            '<a href="../cursos/cursos-presenciales.html">INTERFACES</a>'+
        '</div>'+
        '<div class="menu-colum">'+
            '<h3><a href="../cursos/cursos-virtuales.html">Virtuales</a></h3>'+
            '<a href="../cursos/cursos-virtuales.html">SAE 7.0</a>'+
            '<a href="../cursos/cursos-virtuales.html">COI 8.0</a>'+
            '<a href="../cursos/cursos-virtuales.html">NOI 8.0</a>'+
            '<a href="../cursos/cursos-virtuales.html">BANCO 4.0</a>'+
            '<a href="../cursos/cursos-virtuales.html">FACTURE 4.0</a>'+
            '<a href="../cursos/cursos-virtuales.html">INTERFACES</a>'+
        '</div>'
    );
    */
/*========================= 
 Sidr
===========================*/ 
    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });
    $('#simple-menu').sidr();
/*========================= 
 Active flickr
===========================*/  
  $('#flickr_feed').jflickrfeed({
    limit: 12,
    qstrings: {
      id: '95572727@N00'
    },
    itemTemplate:
    '' +
      '<a data-gal="fancybox[flickrgallery]" href="{{image}}" title="{{title}}">' +
        '<img src="{{image_s}}" alt="{{title}}" />' +
      '</a>' +
    ''
  }, function(data) {
    $('.flickr_feed a').fancybox();
  });     
/*========================= 
 fancybox
===========================*/
  $('.fancybox').fancybox();     
/*========================= 
 screenshot-image-meddin
===========================*/ 
  $(".screenshot-image-meddin").owlCarousel({
    autoPlay: 6000,
    slideSpeed : 1000,
    paginationSpeed : 1000,
    navigation: false,
    pagination: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  }); 
/*========================= 
 testimonial carosel 
===========================*/ 
  $(".testimonial-carosel").owlCarousel({
    autoPlay: 6000,
    slideSpeed : 1000,
    paginationSpeed : 1000,
    navigation: false,
    pagination: true,
    singleItem : true,
    transitionStyle : "fadeUp",
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1]
  });
/*========================= 
 demane-slide 
===========================*/ 
  $(".demane-slide").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1000,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    itemsTablet: [767,2], 
    itemsMobile : [480,1],
  });
/*========================= 
 popular-slide6 
===========================*/ 
  $(".popular-slide6").owlCarousel({
    navigation : true,
    pagination : true,
    slideSpeed : 600,
    paginationSpeed : 400,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3], 
    itemsTablet: [767,2], 
    itemsMobile : [480,1],
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'] 
  }); 
/*========================= 
 recent-post-slide6 
===========================*/ 
  $(".recent-post-slide6").owlCarousel({
    navigation : true,
    pagination : true,
    slideSpeed : 600,
    paginationSpeed : 400,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1], 
    itemsTablet: [767,1], 
    itemsMobile : [480,1],
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'] 
  });   
/*========================= 
 testimonial4 
===========================*/ 
  $(".testimonial4").owlCarousel({
    autoPlay: 600000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  });
/*========================= 
 testimonial4 
===========================*/ 
  $(".work-freame9").owlCarousel({
    autoPlay: 6000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: true,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  });
/*========================= 
 emargency-carosel 
===========================*/ 
  $(".emargency-carosel").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
/*========================= 
 owl carosel for Our Office page
===========================*/
  $("#owl-demo-two").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: true,
    pagination: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  }); 
/*---------------------
 team-2-curosel
--------------------- */
  $(".team-2-curosel").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: true,
    pagination: false,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5]
  });
  $('.owl-prev').html('<span class="glyphicon glyphicon-chevron-left owl-prev-icon" aria-hidden="true"></span>');
  $('.owl-next').html('<span class="glyphicon glyphicon-chevron-right owl-next-icon" aria-hidden="true"></span>');
/*========================= 
 about2-slide-baner 
===========================*/ 
  $(".about2-slide-baner").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  });
/*========================= 
 testimonial-list 
===========================*/ 
  $(".testimonial-list").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: false,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [767,1], 
    itemsMobile : [480,1]
  });
/*========================= 
 owl carosel for Our Office page
===========================*/
  $(".showcase-slider").owlCarousel({
    autoPlay: 6000000,
    slideSpeed : 1000,
    paginationSpeed : 1500,
    navigation: false,
    pagination: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,4]
  });
  $('.owl-prev').html('<span class="glyphicon glyphicon-chevron-left owl-prev-icon" aria-hidden="true"></span>');
  $('.owl-next').html('<span class="glyphicon glyphicon-chevron-right owl-next-icon" aria-hidden="true"></span>');
/*========================= 
 tooltip 
===========================*/   
  $('[data-toggle="tooltip"]').tooltip(); 
/*========================= 
 countdown 
===========================*/ 
  $('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D :</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H :</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M :</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
    });
  });      
/*========================= 
 mixitup 
===========================*/ 
  $(".work-item7").mixitup({
    effects: ['fade','rotateZ'],
    easing: 'snap'
  });
/*========================= 
 counterUp
===========================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
/*========================= 
 scrollUp
===========================*/ 
  $.scrollUp({
      scrollText: '<i class="fa fa-chevron-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });
/*========================= 
 accordion
===========================*/ 
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon glyphicon-plus glyphicon glyphicon-minus');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
/*========================= 
 Circular Bars - Knob
===========================*/  
    if(typeof($.fn.knob) != 'undefined') {
    $('.knob').each(function () {
      var $this = $(this),
        knobVal = $this.attr('data-rel');
  
      $this.knob({
      'draw' : function () { 
        $(this.i).val(this.cv + '%')
      }
      });
      
      $this.appear(function() {
      $({
        value: 0
      }).animate({
        value: knobVal
      }, {
        duration : 2000,
        easing   : 'swing',
        step     : function () {
        $this.val(Math.ceil(this.value)).trigger('change');
        }
      });
      }, {accX: 0, accY: -150});
    });
    }
/* --------------------------------------------------------
   faq-accordion
* -------------------------------------------------------*/ 
  $(".faq-accordion").collapse({
    accordion:true,
    open: function() {
    this.slideDown(550);
    },
    close: function() {
    this.slideUp(550);
    }   
  });
/* --------------------------------------------------------
   contact-accordion
* -------------------------------------------------------*/ 
  $(".contact-accordion").collapse({
    accordion:true,
    open: function() {
    this.slideDown(550);
    },
    close: function() {
    this.slideUp(550);
    }   
  });       
/* --------------------------------------------------------
   qa-accordion
* -------------------------------------------------------*/ 
  $(".qa-accordion").collapse({
    accordion:true,
    open: function() {
    this.slideDown(550);
    },
    close: function() {
    this.slideUp(550);
    }   
  });

    /*========================= 
    Add Users - Precios SAE
    ===========================*/
    /*
    $(".drop-price").hover(
        function() {
            $(".dropdown-toggle").dropdown('toggle');
        }
    );
    */
    
    var title = $(document).find("title").text();
    //--Coloca los valores a cero cuando se carga la página
    $("#more-users").val(1);
    $("#price-add-user").text("$0.00");
    $("#prod_desc_users").text("");
    addUsers();
    
    //Pluguin para filtrar productos en la tienda
    $(".shop-categoti-sidebar ul li a").click(function() {
        $(".shop-categories").text($(this).text());
        var filter = "all";
        if ($(this).attr("id") != "all") {
            filter = $(this).attr("id");
        }
        $("#filter-btn").attr("data-filter",filter);
        $("#filter-btn").removeClass("active");
        $("#filter-btn").click();
        //console.log($("#filter-btn").prop("data-filter")," ",$(this).prop("id"));
    });
    
    $("#filter-btn").click(function() {
        $(this).blur();
    });
    
    //Pluguins para cambiar los tipos de precios en la pág de cada uno de los Sistemas Aspel
    $("#precios-compra").click(function(){
        //--Restaura los valores de los usuarios adicionales
        if ($("#precio-tipo").text() == "Renta") {
            $("#price-add-user").text("$0.00");
            $("#more-users").val(0);
            $("#prod_desc_users").text("");            
        }
        $("#price-b").css("text-decoration", "none");
                
        $("#precio-tipo").text("Compra");
        $("#precio-base-act").addClass("hide");
        $("#precio-base").removeClass("hide");
        $("#precio-base").css("text-decoration", "none");
        
        $("#price-add-user").parent().removeClass("hide");
        $("#more-users").parent().find("h4 strong").text("Más Usuarios");
        $("#more-users").attr("min", "0");
        
        $("#total-text").text("Total:");
        $("#total-price").text($("#price-b").text());
        
        $("#prod_desc_type").text("");
        addUsers();
        //$(".paypal-btn input[name='item_name']").val($("#prod_desc").text());
        //$(".paypal-btn input[name='amount']").val($("#total-price").text().replace("$",""));
        $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
        //$("#btn-comprar").attr("data_price", $("#total-price").text().replace("$",""));
    });
    //$("ul.color-s-menu li ul a").mouseleave();//TODO mouseleave effect
    
    $("#precios-renta").click(function(){
        $("#precio-tipo").text("Renta");
        $("#precio-base-act").addClass("hide");
        $("#precio-base").removeClass("hide");
        $("#precio-base").css("text-decoration", "line-through");
        $("#price-b").css("text-decoration", "none");
        $("#price-add-user").parent().addClass("hide");
        $("#more-users").parent().find("h4 strong").text("Usuarios");
        $("#more-users").attr("min", "1");
       
        $("#total-text").text("Renta mensual:");
        $("#total-price").text($("#precio-renta").text());
        
        if ($("#more-users").val() < 1) {
            $("#more-users").val(1);
            $("#price-add-user").text("$0.00");
            $("#prod_desc_users").text("");
        }
        
        $("#prod_desc_type").text(" (Renta)");
        addUsers();
        //$(".paypal-btn input[name='item_name']").val($("#prod_desc").text());
        //$(".paypal-btn input[name='amount']").val($("#total-price").text().replace("$",""));
        $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
        //$("#btn-comprar").attr("data_price", $("#total-price").text().replace("$",""));
    });
    
    $("#precios-act").click(function(){
        $("#precio-base").css("text-decoration","none");
        $("#precio-tipo").text("Actualización");
        $("#more-users").val("0");
        //--Restaura los valores de los usuarios adicionales
        if ($("#precio-tipo").text() == "Renta") {
            $("#price-add-user").text("$0.00");
            $("#more-users").val(0);
            $("#prod_desc_users").text("");
            $("#price-b").text-decoration("none");
        }
        $("#price-b").css("text-decoration", "none");
        $("#precio-tipo").text("Actualización");
        $("#precio-base").addClass("hide");
        $("#precio-base-act").removeClass("hide");
        $("#precio-base-act").css("text-decoration", "none");
        
        $("#price-add-user").parent().removeClass("hide");
        $("#more-users").parent().find("h4 strong").text("Más Usuarios");
        $("#more-users").attr("min", "0");
        
        $("#total-text").text("Total:");
        $("#total-price").text($("#price-b-act").text());
        
        $("#prod_desc_type").text(" (Actualización)");
        addUsers();
        //$(".paypal-btn input[name='item_name']").val($("#prod_desc").text());
        //$(".paypal-btn input[name='amount']").val($("#total-price").text().replace("$",""));
        $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
        //$("#btn-comprar").attr("data_price", $("#total-price").text().replace("$",""));
    });
    
    $("#precio-admB").click(function() {
        $("#precio-tipo").text("Versión Básica");
        $("#adm-price").text("$99.00");
        //$(".paypal-btn input[name='item_name']").val("ADM VERSION BASICA");
        //$(".paypal-btn input[name='amount']").val("99");
        $("#btn-comprar").attr("data_desc", "ADM Versión Básica");
        $("#btn-comprar").attr("data_price", "99");
    });
    $("#precio-admP").click(function() {
        $("#precio-tipo").text("Versión Premium");
        $("#adm-price").text("$159.00");
        //$(".paypal-btn input[name='item_name']").val("ADM VERSION PREMIUM");
        //$(".paypal-btn input[name='amount']").val("159");
        $("#btn-comprar").attr("data_desc", "ADM Versión Premium");
        $("#btn-comprar").attr("data_price", "159");
    });
    
    if (title == "Precios FACTURE - PASS Consultores") {
        $(".precios-aspel input[type='number']").prop("disabled", true);
    } else {
        $(".precios-aspel input[type='number']").prop("disabled", false);
    }
    
    //Pluguin para calcular el precio de los sistemas aspel
    $(".precios-aspel input[type='number']").bind('keyup mouseup', function () {
        addUsers();
    });
    
    function addUsers() {
        var title = $(document).find("title").text();
        var numUsers = parseInt($(".number-select input").val());
        var txtUsers = "usuario";
        if (numUsers > 0) {
            if (numUsers > 1) {
                txtUsers = "usuarios";
            }
            if ($("#precio-tipo").text() == "Renta") {
                $("#prod_desc_users").text(" " + numUsers + " " + txtUsers); //--Para añadir a la descripción el número de usuarios.
                $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
            } else {
                $("#prod_desc_users").text(" + " + numUsers + " " + txtUsers); //--Para añadir a la descripción el número de usuarios.
                $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
                //$(".paypal-btn input[name='item_name']").val($("#prod_desc").text());
            }
        } else {
            $("#prod_desc_users").text(""); //--Borra la descripción adicional del núm de usuarios
            //$(".paypal-btn input[name='item_name']").val($("#prod_desc").text());
            $("#btn-comprar").attr("data_desc", $("#prod_desc").text());
        }
        //--Precios por sistema: [[Precio de compra],[Precio de actualización],[Precio de renta]]
        var preciosSae = [[13680,3420,6156,13680,23256,39672],[7524,2257,3762,8276,14296,23324],[570,717,860,986,1109,1230,1354,1480,1601,1723,1781,1840,1897,1955,2012,2031,2127,2183,2241,2299,118]];
        //var preciosNoi = [[5550,1668,3112,7080,11227],[3330,1000,1867,4248,6736],[309,394,473,589,649,707,766,823,883,943,94]];
        var preciosNoi = [[8640,2160,3888,8640,14688],[4752,1426,2376,5227,9029],[360,459,550,685,755,822,892,957,1028,1098,109]];
        var preciosCoi = [[7608,1902,3424,7608,12934],[4184,1255,2092,4603,7950],[317,401,481,589,661,722,781,841,902,962,95]];
        var preciosBanco = [[6480,1620,2916,6480,11016],[3564,1069,1782,3920,6772],[270,338,404,507,559,609,658,710,759,810,80]];
        var preciosProd = [[9576,2394,4309,9576,16279],[5267,1580,2633,5793,10007],[400,502,599,750,826,903,975,1050,1123,1201,141]];
        var preciosCaja = [[3504,2102],[1927,1156],[146,292,438,584,730,876,1022,1168,1314,1461,146]];
        var preciosFacture = [[2616],[1439],[109]];        
        var precios = [];
        var defaultUsers = [];
        var precioFinal = 0;
        var precioTotal = 0;
        switch(title){
            case "Precios SAE - PASS Consultores":
                precios = preciosSae;
                defaultUsers = [[1,2,5,10,20],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];
                break;
            case "Precios NOI - PASS Consultores":
                precios = preciosNoi;
                defaultUsers = [[1,2,5,10],[1,2,3,4,5,6,7,8,9,10]];
                break;
            case "Precios COI - PASS Consultores":
                precios = preciosCoi;
                defaultUsers = [[1,2,5,10],[1,2,3,4,5,6,7,8,9,10]];
                break;
            case "Precios BANCO - PASS Consultores":
                precios = preciosBanco;
                defaultUsers = [[1,2,5,10],[1,2,3,4,5,6,7,8,9,10]];
                break;
            case "Precios PROD - PASS Consultores":
                precios = preciosProd;
                defaultUsers = [[1,2,5,10],[1,2,3,4,5,6,7,8,9,10]];
                break;
            case "Precios CAJA - PASS Consultores":
                precios = preciosCaja;
                defaultUsers = [[1],[1,2,3,4,5,6,7,8,9,10]];
                break;
            case "Precios FACTURE - PASS Consultores":
                precios = preciosFacture;
                defaultUsers = [[1],[1]];
                break;
        }
        switch($("#precio-tipo").text()) {
            case "Compra":
                while (numUsers > 0){ //--Calcula el precio de los usuarios adicionales para sumarselo al precio base
                    if(numUsers <= defaultUsers[0][defaultUsers[0].length-1]){
                        for(var x in defaultUsers[0]){
                            //console.log(defaultUsers[x]);
                            if(numUsers == defaultUsers[0][x]){
                                precioFinal += precios[0][parseInt(x)+1];
                                numUsers -= defaultUsers[0][x];
                                break;
                            }
                            else if(numUsers < defaultUsers[0][x]){
                                precioFinal += precios[0][x];
                                numUsers -= defaultUsers[0][parseInt(x)-1];
                                break;
                            }
                        }
                    } else {
                        precioFinal += precios[0][precios[0].length-1];
                        numUsers -= defaultUsers[0][defaultUsers[0].length-1];
                    }
                }
                //console.log(precioFinal);
                //--Suma el primer precio de la lista de precios seleccionada más lo calculado con los usuarios adicionales
                precioTotal = precios[0][0] + precioFinal;
                var precioTotalA = (precioTotal * .16) + precioTotal
                //console.log(precioTotalA)
                $("#btn-comprar").attr("data_price", precioTotalA);
                precioFinal = parseInt(precioFinal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                $("#price-add-user").text("$"+precioFinal);
                precioTotal = parseInt(precioTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                $("#total-price").text("$"+precioTotal);
                //$(".paypal-btn input[name='amount']").val(precioTotal);
                break;
            case "Actualización":
                while (numUsers > 0){ //--Calcula el precio de los usuarios adicionales para sumarselo al precio base
                    if(numUsers <= defaultUsers[0][defaultUsers[0].length-1]){
                        for(var x in defaultUsers[0]){
                            //console.log(defaultUsers[x]);
                            if(numUsers == defaultUsers[0][x]){
                                precioFinal += precios[1][parseInt(x)+1];
                                numUsers -= defaultUsers[0][x];
                                break;
                            }
                            else if(numUsers < defaultUsers[0][x]){
                                precioFinal += precios[1][x];
                                numUsers -= defaultUsers[0][parseInt(x)-1];
                                break;
                            }
                        }
                    } else {
                        precioFinal += precios[1][precios[1].length-1];
                        numUsers -= defaultUsers[0][defaultUsers[0].length-1];
                    }
                }
                //console.log(precioFinal);
                precioTotal = precios[1][0] + precioFinal;
                var precioTotalA = (precioTotal * .16) + precioTotal
                $("#btn-comprar").attr("data_price", precioTotalA);
                precioFinal = parseInt(precioFinal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                $("#price-add-user").text("$"+precioFinal);
                precioTotal = parseInt(precioTotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                $("#total-price").text("$"+precioTotal);
                //$(".paypal-btn input[name='amount']").val(precioTotal);
                break;
            case "Renta":
                if(numUsers <= defaultUsers[1][defaultUsers[1].length-1]){
                    precioFinal = precios[2][numUsers-1];
                    numUsers -= precios[2][numUsers-1];
                } else {
                    numUsers -= defaultUsers[1][defaultUsers[1].length-1];
                    precioFinal = precios[2][precios[2].length-2] + (precios[2][precios[2].length-1]*numUsers);
                }
                
                var precioFinalA = (precioFinal * .16) + precioFinal
                console.log(precioFinalA);
                $("#btn-comprar").attr("data_price", precioFinalA);
                precioFinal = parseInt(precioFinal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                $("#price-add-user").text("$"+precioFinal);
                $("#total-price").text("$"+precioFinal);
                //$(".paypal-btn input[name='amount']").val(precioFinal);
                break;
        }
    }

    //Pluguin para calcular el precio de los timbres
    $(".num-timbres a").click(function(){
        $("#show-timbres").text($(this).text());
        var numProducts = parseInt($(this).text().replace(",",""));
        var preciosTimbrado = [[50,200,400,1000,2000,5000,10000,20000,50000,70000,100000],[220,441,557,1044,1578,3306,5800,10440,24360,31668,37620]];
        var precioFinal = 0;
        for(var x in preciosTimbrado[0]){
            if(numProducts == preciosTimbrado[0][x]){
                precioFinal += preciosTimbrado[1][x];
                break;
            }
        }
        var precioFinalA = (precioFinal * .16) + precioFinal
        console.log(precioFinalA)
        //$(".paypal-btn input[name='item_name']").val("Timbrado "+$(this).text());
        //$(".paypal-btn input[name='amount']").val(precioFinal);
        $("#btn-comprar").attr("data_desc", $(this).text() + " Timbres");
        $("#btn-comprar").attr("data_price", precioFinalA);
        
        precioFinal = parseInt(precioFinal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        //Efecto al cambiar el precio
        $("#total-price").fadeOut(function(){
            $(this).text("$"+precioFinal).fadeIn();
        });
        //$("#total-price").text("$"+precioFinal).fadeIn();

        /*
        var realMarg = $(".tienda-select .caret").css("margin-left");
        var marg = $(this).text().length() - 2;
        marg *= 10;
        marg = realMarg - marg;
        $(".tienda-select .caret").css("margin-left",marg);
        */
    });

    //Pluguin para mostrar el texto sobre los iconos de los cursos
    $(".photo-glarry-box").hover(
        function(){
            $(this).find('h3').css('opacity','1');
            $(this).find('p').css('opacity','1');
        }, function(){
            $(this).find('h3').css('opacity','0');
            $(this).find('p').css('opacity','0');
        }
    );

    //Pluguin para colocar la función oneclick sobre el icono de los cursos
    //y activar y desplazar la página a la descripción del curso correspondiente
    if(title == "Cursos Presenciales - PASS Consultores") {
        clickEvent();
    }
    
    async function clickEvent() {
        var getEvents = new Promise(function(resolve) {
            jQuery.getJSON( "../assets/events/events1.json", function( data ) {
                var curso = "curso-";
                var fecha = "fecha-";
                for (var i = 0; i < data.items.length; i++) {
                    //var event_date = new Date(data.items[i].year, Number(data.items[i].month) - 1, data.items[i].day);
                    //data.items[i].date = event_date.getTime();
                    //console.log(event_date);
                    //console.log(data.items[i].month, moment().format("M"), data.items[i].year, moment().format("YYYY"));
                    if (data.items[i].month == moment().format("M") && data.items[i].year == moment().format("YYYY")) {
                        $("#"+curso.concat(data.items[i].id))
                            .attr("onclick","showEventDetail("+i+", 'full', "+data.items[i].day+", "+data.items[i].month+", "+data.items[i].year+")")
                            .attr("href","#calendar1")
                            .addClass("page-scroll")
                            .removeAttr("data-toggle");
                        $("#"+fecha.concat(data.items[i].id)).text(data.items[i].day+"/"+data.items[i].month+"/"+data.items[i].year);
                    }
                }
                resolve("done");
            });
        });
        var done = await getEvents;
    }
    
    //Pluguin para imprimir las entradas del blog
    if(title == "Admin Blog - PASS Consultores") {
        var entradas = [];
        $.get("/php-scripts/get-blog.php", {action:"get_entradas"}, function(data, status){
            if(data) {
                entradas = JSON.parse(data);
                var enTrs = "";
                for (var x in entradas) {
                    enTrs += 
                        '<tr class="table-row">'+
                            '<td>'+entradas[x]["titulo"]+'</td>'+
                            '<td>'+entradas[x]["fecha"]+'</td>'+
                            '<td>'+entradas[x]["categoria"]+'</td>'+
                            '<td>'+entradas[x]["archivo"]+'</td>'+
                            '<td><button id="blog-'+entradas[x]["id"]+'" type="button" class="btn btn-danger btn-sm">Eliminar</button></td>'+
                        '</tr>';
                }
                $(".entradas_trs").html(enTrs);
            }
        });
    }
    
    //Pluguin para imprimir las entradas EN el blog
    if(title == "Blog - PASS Consultores") {
        var entradas = [];
        var cats = [];
        $.get("/php-scripts/get-blog.php", {action:"get_entradas"}, function(data, status){
            entradas = JSON.parse(data);
            var enTrs = "";
            var tarBlnk = "";
            var upperCat = "";
            for (var x in entradas) {
                tarBlnk = "";
                upperCat = entradas[x]["categoria"].toLowerCase().replace(/\b[a-z]/g, function(letter) {
                    return letter.toUpperCase();
                });
                //Para sumar el número de entradas por categoria
                if (cats[entradas[x]["categoria"]] > 0) {
                    cats[entradas[x]["categoria"]]++;
                } else cats[entradas[x]["categoria"]] = 1;
                //console.log(entradas[x]["categoria"]);
                if(entradas[x]["archivo"].split('.').pop() == "pdf") {
                    tarBlnk = ' target="_blank"';
                }
                enTrs += 
                    '<!-- single-blog-column start -->'+
                    '<div class="col-xs-12 col-sm-6 col-md-6 mix '+entradas[x]["categoria"]+'">'+
                        '<div class="single-blog-column">'+
                            '<div class="blog-column-img">'+
                                '<a class="fancybox" data-fancybox-group="gallery" href="../assets/img/blog/'+entradas[x]["archivo"]+'"'+tarBlnk+'>'+
                                    '<div class="blog-column-photo">'+
                                        '<img src="../assets/img/blog/previews/prev_'+entradas[x]["preview"]+'" alt="" />'+
                                    '</div>'+
                                    '<div class="blog-column-view">'+
                                        '<span>VER ANUNCIO</span>'+
                                    '</div>'+
                                '</a>'+
                            '</div>'+
                            '<div class="clear"></div>'+
                            '<a class="blog-column-title fancybox" data-fancybox-group="gallery" href="../assets/img/blog/'+entradas[x]["archivo"]+'"'+tarBlnk+'>'+entradas[x]["titulo"]+'</a>'+
                            '<div class="column-date-meta">'+
                                '<span class="column-date">'+entradas[x]["fecha"]+'</span>'+
                                '<span class="column-cat-b">'+upperCat+'</span>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<!-- single-blog-column end -->';
            }
            $(".blog-column-content").html(enTrs);
            
            //Plugin para poner el número de entradas por categorias del blog
            $(".blog-column-menu ul li").each(function(){
                //console.log($(this).attr("data-filter"));
                //console.log(cats[$(this).attr("data-filter")]);
                //console.log(entradas.length);
                if($(this).attr("data-filter") == "all") {
                    $(this).attr("title", entradas.length);
                    $(this).attr('data-original-title', entradas.length).tooltip('fixTitle');
                    //$(this).addClass("active");
                }
                else if (cats[$(this).attr("data-filter")] != undefined) {
                    $(this).attr("title", cats[$(this).attr("data-filter")]);
                    $(this).attr('data-original-title', cats[$(this).attr("data-filter")]).tooltip('fixTitle');
                }
            });
            
            $('.blog-column-area .container').mixitup();
        });
        
    }
    
    //Pluguin para borrar una entrada del blog
    $(document).on("click", ".entradas_trs .btn-danger", function() {
        var blogID = parseInt($(this).attr("id").split("-").pop());
        $.get("upload-blog.php", {action: "remove", id: blogID})
            .done(function() {
            window.location.href = "/b-plugin/add_blog.html";
        });
    });
    
    /*
    $("input[name='blog_submit']").click(function() {
        $.post("../php/upload-blog.php").done(function() {
            window.location.href = "/b-plugin/add_blog.html";
        });
    });
    */

    //Pluguin para obtener los productos de la sesión actual del usuario
    var carProds = [];
    if($(document).find("body").hasClass("shop")) {
        $.get("cart_script.php", function(data, status){
            carProds = JSON.parse(data);
            //console.log(carProds[0]["desc"]);
            //Si la página es el carrito de compras
            if (title == "Carrito de Compra - PASS Consultores") {
                var prodTrs = "";
                var price = "";
                var index = 0;
                var totalPrice = 0;
                for (var x in carProds) {
                    totalPrice += parseInt(carProds[x]["totalPrice"]);
                    price = parseInt(carProds[x]["totalPrice"]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    index = parseInt(x)+1;
                    prodTrs += 
                        '<tr class="table-row">'+
                            '<td class="cart_product_no">'+index+'</td>'+
                            '<td class="cart_product_image_value">'+
                                '<div class="pro-photo-checkout"><img src="../assets/img/product/'+"h54c7e8790df8f.jpg"+'" alt="" /></div>'+
                            '</td>'+
                            '<td class="cart_product_name_value">'+
                                '<p class="cart_product_name"><a href="#">'+carProds[x]["desc"]+'</a></p>'+
                            '</td>'+
                            '<td class="cart_product_price_value">'+
                                '<span class="product_price">$'+price+'</span>'+
                            '</td>'+
                            '<td class="cart_product_quantity_value">'+
                                '<div class="product-quantity-t">'+
                                    '<input type="text" placeholder="'+carProds[x]["cant"]+'"/>'+
                                '</div>'+
                            '</td>'+
                            '<td class="cart_product_total_value"><span class="product_price">$'+price+'</span></td>'+
                            '<td class="cart_product_add_to">'+
                                '<div class="add-to-box"><input type="checkbox" /></div>'+
                            '</td>'+
                            '<td class="cart_product_add_delete">'+
                                '<div class="add-delete">'+
                                    '<a href="#"><i class="fa fa-times-circle"></i></a>'+
                                '</div>'+
                            '</td>'+
                        '</tr>';
                }
                totalPrice = parseInt(totalPrice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                prodTrs += 
                    '<tr class="table-row-t">'+
                        '<td class="cart_empty_total">Total</td>'+
                        '<td class="cart_empty_footer" colspan="4"></td>'+
                        '<td class="cart_total_value">$'+totalPrice+'</td>'+
                        '<td class="cart_empty_footer" colspan="1"></td>'+
                        '<td class="cart_total_value">'+
                            '<div class="add-wishlist">'+
                                '<input type="button" value="Agregar a lista de deseos" />'+
                            '</div>'+
                        '</td>'+
                    '</tr>';
                $(".shop_table").html(prodTrs);
            }
        });
    }

    //Pluguin para añadir productos a la sesión actual del usuario
    $("#add_to_cart").click(function(){
        //console.log(parseInt($("#total-price").text().replace("$","").replace(",","").split(".00")));
        var prod = {
            desc: $("#prod_desc").text(),
            cant: parseInt($(".shop_cant").text()),
            totalPrice: parseInt($("#total-price").text().replace("$","").replace(",","").split(".00"))
        };
        carProds.push(prod);
        $.post("../php/cart_script.php", {"carProds": carProds});
    });

    //Pluguin del modal de los productos para ir al carrito o a la tienda
    function goCart() {
        window.location.href = "/shopping-cart.html";
    }
    function goShop() {
        $("#modal-shop-cart").modal("toggle");
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(".related-product-list-title").offset().top-50
        }, 2000, 'easeInOutExpo');
        event.preventDefault();
        //window.location.href = "/tienda.html";
    }

    //Pluguin para botones de servicios en index
    /*
    $(".feature-box a.readon").each(function(){
        var dist = $('.feature-box a.readon:first-child').offset().top - $('.feature-box-area .feature-box:first-child').offset().top;
        $(this).css("margin-top",dist);
    });
    */

    //Pluguin para validar formulario de escritorios
    $("#escritorio-submit").click(function(){
        var isCorrect = true;
        var check = false;
        var select = false;
        $(".escritorio-main-area .contact-form-aream input").each(function(){
            if($(this).prop("required")) {
                if($(this).prop("type") == "radio" && $(this).is(":checked")){
                    check = true;
                }
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    isCorrect = false;
                }
                else {
                    $(this).parent().removeClass("has-error");
                }
            }
        });
        //Para confirmar la selección de un sistema aspel
        if($(".select-required").val() != "- Elegir -") {
            select = true;
            $(this).parent().removeClass("has-error");
        } else {
            $(this).parent().addClass("has-error");
        }
        if (!isCorrect || !check || !select) {
            alert("Los campos marcados con un * deben estar llenos");
        }
        else {
            $("#form-e").submit();
            $("#modal-escritorio").modal();
        }
    });
    
    //Pluguin para validar formulario de datos del cliente
    $("#datos-submit").click(function(){
        var isCorrect = true;
        var check = false;
        var select = false;
        $(".escritorio-main-area .contact-form-aream input").each(function(){
            if($(this).prop("required")) {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    isCorrect = false;
                }
                else {
                    $(this).parent().removeClass("has-error");
                }
            }
        });
        if (!isCorrect) {
            alert("Los campos marcados con un * deben estar llenos");
        }
        else {
            //$("#form-e").submit();
            $.post( "datos_cliente.php", $( "#form-e" ).serialize(), function(data) {
                if (data == "success") {
                    $("#modal-datos").modal();
                } else {
                    console.log(data);
                    alert("Ocurrio un error al enviar el correo.\nRevisa tu conexión a internet si el problema persiste contáctanos.")
                }
            });
            
        }
    });
    
    
    
    //Pluguin para validar el formulario de timbrado
    $("#timbrado-submit").click(function(){
        var isCorrect = true;
        $(".escritorio-main-area .contact-form-aream input").each(function(){
            if($(this).prop("required")) {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    isCorrect = false;
                }
                else {
                    $(this).parent().removeClass("has-error");
                }
            }
        });
        if (!isCorrect) {
            alert("Los campos marcados con un * deben estar llenos");
        }
        else {
            $.post("../php/form_timbrado.php", $("#form-t").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-timbrado").modal();
                } else {
                    alert("No fue posible enviar tus datos. Revisa tu conexión a internet y vuelve a intentarlo.");
                }
            });
            /*
            $("#form-t").submit();
            $("#modal-timbrado").modal();
            */
        }
    });
    
    //Pluguin para validar el formulario de sistemas aspel
    $("#sistemas-submit").click(function(){
        var isCorrect = true;
        $(".escritorio-main-area .contact-form-aream input").each(function(){
            if($(this).prop("required")) {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    isCorrect = false;
                }
                else {
                    $(this).parent().removeClass("has-error");
                }
            }
        });
        if (!isCorrect) {
            alert("Los campos marcados con un * deben estar llenos");
        }
        else {
            $.post("../php/form_sistemas.php", $("#form-s").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-sistemas").modal();
                } else {
                    alert("No fue posible enviar tus datos. Revisa tu conexión a internet y vuelve a intentarlo.");
                }
            });
            /*
            $("#form-t").submit();
            $("#modal-timbrado").modal();
            */
        }
    });

    
    $("#a-btn-mdl-escritorio").click(function(){
        window.location.href = "servicios/index.html"; 
    });
    /*
    if ($.browser.msie) {console.log("hola");
      var version = "ie" + $.browser.version.substring(0, 1);
      $("body").addClass("ie " + version);
    }
    */
    
    //Pluguin para buscar datos de ciudad por CP
    $(".escritorio-form input[name='inputcp']").keyup(function(e){
        var estado = "";
        if (e.keyCode == 13) {
            $.get( "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/"+$(this).val(), function( data ) {
                //console.log(data);
                if (data.estado == "Distrito Federal") estado = "Ciudad de México";
                else estado = data.estado;
                $(".escritorio-form input[name='inputcol']").val(data.colonias[0]);
                $(".escritorio-form input[name='inputdel']").val(data.municipio);
                $(".escritorio-form input[name='inputestado']").val(estado);
                $(".escritorio-form input[name='inputcp']").blur();
                $(".escritorio-form input[name='inputcp']").tooltip("hide");
                $(".escritorio-form input[name='inputcontacto']").focus();
        });
        }
    });
    
    //Pluguin para abrir el dropdown de las opciones de los productos
    $(".drop-price i").click(function(e) {
        e.stopPropagation();
        $('.dropdown-toggle').dropdown('toggle');
    });
    
    $(".ask-timbres").click(function(){
       window.location.href =  "\aspel-timbrado.html";
    });
    
    //Plugin para el formulario del Admin del Blog
    $(".control-group select[name='tipo']").change(function() {
        switch ($(this).val()) {
            case "Imagen":
                $(this).parent().removeClass("col-md-2 col-md-3").addClass("col-md-4");
                $(".control-group input[name='blog_submit']").parent().removeClass("col-md-2").addClass("col-md-4");
                $(".control-group select[name='sist']").parent().addClass("hide");
                $(".control-group input[name='inputprev']").parent().addClass("hide");
                break;
            case "PDF":
                $(this).parent().removeClass("col-md-4 col-md-3").addClass("col-md-2");
                $(".control-group input[name='inputprev']").parent().removeClass("hide");
                $(".control-group select[name='sist']").parent().addClass("hide");
                $(".control-group input[name='blog_submit']").parent().removeClass("col-md-4").addClass("col-md-2");
                break;
            case "PDF de Reinstalable":
                $(this).parent().removeClass("col-md-4 col-md-2").addClass("col-md-3");
                $(".control-group select[name='sist']").parent().removeClass("hide");
                $(".control-group input[name='inputprev']").parent().addClass("hide");
                $(".control-group input[name='blog_submit']").parent().removeClass("col-md-4").addClass("col-md-2");
                break;
        }
    });
    
    //Pluguin para mostrar el modal de coonfirmación de correo.
    //Y para validar el formulario de contacto.
    $(".contact-form-aream #submit").click(function(){
        var isCorrect = true;
        $("#contact-form input").each(function(){
            if($(this).prop("required")) {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    isCorrect = false;
                }
                else {
                    $(this).parent().removeClass("has-error");
                }
            }
        });
        if (!$("#contact-form textarea").val()) {
            $("#contact-form textarea").parent().addClass("has-error");
            isCorrect = false;
        } else {
            $("#contact-form textarea").parent().removeClass("has-error");
        }
        if (!isCorrect) {
            alert("Los campos marcados con un * deben estar llenos");
        }
        else {
            $.post("./assets/php/mail.php", $("#contact-form").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-contact").modal();
                }
            });
        }
    });
    
    $("#btn-mdl-contact").click(function(){
       window.location.href = "\index.html";
    });
    
    //Plugin para el botón de pago especial
    $("#pago_especial").click(function() {
       $("#form-pago-especial").submit();
    });
    
    //Plugin para poner el nombre del curso en el formulario del modal de los cursos por agendar
    $(document).on("click", ".btn-infoModal", function() {
        console.log("btn-infoModal");
        $(".control-group input[name='curso']").val($(this).parents(".event-item").find(".event-name").text());
    });
    
    //Plugin para el formulario del modal de los cursos por agendar
    $("#cursos_submit").click(function(){
        if($("#cursos-form").valid()) {
            $.post("../assets/php/mail_cursos.php", $("#cursos-form").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-cursos").modal("toggle");
                    window.location.href =  "\servicios.html";
                }
            });
        }
    });
    
    //--Función para validar el fomulario de petición de curso
    $("#cursos-form").validate({
        rules: {
            name: "required",
            email: "required",
            tel: "required"
        },
        messages: {
            name: "Debes proporcionar tu nombre",
            email: "Debes proporcionar un email válido",
            tel: "Debes proporcionar un teléfono válido"
        }
    });
    
    //Abre el modal de "Más información" en la página tienda/aspel-respaldos.html
    $("#btn-info-resp").click(function(e) {
        e.preventDefault();
        $("#modal-info-resp").modal();
    });
    
    //Plugin para el formulario del modal de los info de los respaldos
    $("#btn-enviar-infoResp").click(function(e){
        var message = ""
        e.preventDefault();
        if($("#form-info-resp").valid()) {
            $.post("../assets/php/mail_infoResp.php", $("#form-info-resp").serialize())
                .done(function(data) {
                if(data == "Message sent!") {
                    message = "Mensaje enviado!<br>En breve nos pondremos en contacto contigo!";
                    $("#modal-alert button.mdl-close").one("click", function() {
                        window.location.href =  "../servicios/";
                    });
                } else {
                    message = "No fue posible enviar el mensaje, revisa tu conexión a internet y vuelve a intentarlo<br>O contáctanos al (55) 5678-5136, info@pass.com.mx";
                }
                
                //$("#form-info-resp .input-user").val("");
                $("#modal-info-resp").modal("hide");
                $("#modal-info-resp").one('hidden.bs.modal', function () {
                    $("#alert-message").html(message);
                    $("#modal-alert").modal();
                });
                
                
            });
        }
    });
    
    //--Función para validar el fomulario de información de respaldos
    $("#form-info-resp").validate({
        rules: {
            name: "required",
            email: "required",
            tel: "required"
        },
        messages: {
            name: "Debes proporcionar tu nombre",
            email: "Debes proporcionar un email válido",
            tel: "Debes proporcionar un teléfono válido"
        }
    });
    
    //--Función para validar el fomulario de reservación de cursos
    $("#reservar-form").validate({
        rules: {
            nombre: "required",
            empresa: "required",
            email: "required",
            tel: "required",
            polCheck: "required"
        },
        messages: {
            nombre: "Debes proporcionar tu nombre",
            empresa: "Debes proporcionar el nombre de tu empresa",
            email: "Debes proporcionar un email válido",
            tel: "Debes proporcionar un teléfono válido",
            polCheck: "Debes aceptar las políticas para reservar"
        }
    });
    
    //--Válida el formulario de reservación de cursos al dar clic al botón de reservar
    $("#reservar-submit").click(function(){
        if($("#reservar-form").valid()) {
            $("#reservar-submit").fadeOut("fast", function(){
                $(".loader2").fadeIn("fast");
            });
            $.post("../assets/php/mail_reservar.php", $("#reservar-form").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-reservar").modal("toggle");
                    $("#status-message").html("Hemos recibido tu correo de solicitud de reservación.<br>En breve nos pondremos en contacto contigo.");
                    
                    $("#modal-reservar input").val("");
                    $("#modal-reservar textarea").val("");
                    $("#reservar-submit").val("Reservar");
                    $("#reservar-submit").fadeIn("fast");
                    $(".loader2").fadeOut("fast");
                    //window.location.href =  "\servicios.html";
                } else {
                    $("#status-message").html("Ocurrió un error al tratar de enviar tu solicitud.<br>Vuelve a intentarlo o ponte en contacto con nosotros al (55) 5678-5136.");
                }
                $("#modal-reservar").one("hidden.bs.modal", function() {
                    $("#modal-status").modal();
                });
            });
        }
    });
    
    //--Abre el modal de la reservación de cursos
    $(document).on("click", "#btn-reservar", function() {
        $("input[name='curso']").val($(this).parents(".event-item").find(".event-name").text());
        $("input[name='fecha']").val($(this).parents(".event-item").find(".event-date").text());
        $("#modal-reservar").modal();
    });
    
    //--Hace un post para guardar los datos del producto en la sesión del producto y redirecciona para procesar el pago.
    $("#btn-comprar, .btn-comprar").click(function() {
        var desc = $(this).attr("data_desc");
        var price = $(this).attr("data_price");
        $.post("../assets/php/product_session.php", {set_product: true, desc: desc, price: price})
            .done(function(){
            window.location.href = "../tienda/procesar-pago.html";
        });
    });
    
    //--Muestra el modal de solicitud de información
    $(".btn-infoModal").click(function() {
        $("input[name='asunto']").val($(this).text() + " relacionado con Web Hosting" + $("#prod_desc").text());
        $("#modal-info").modal();
    });
    
    //--Hace un post para la solicitud de información
    $("#info-submit").click(function() {
        if ($("#info-form").valid()) {
            $("#info-submit").fadeOut("fast", function(){
                $(".loader2").fadeIn("fast");
            });
            $.post("../assets/php/mail_info.php", $("#info-form").serialize())
                .done(function(data) {
                if(data) {
                    $("#modal-info").modal("toggle");
                    $("#status-message").html("Hemos recibido tu mensaje.<br>En breve nos pondremos en contacto contigo.");
                    //--Borra los inputs
                    $("#modal-reservar input").val("");
                    $("#modal-reservar textarea").val("");
                    $("#reservar-submit").val("Enviar");
                    //window.location.href =  "\servicios.html";
                } else {
                    $("#status-message").html("Ocurrió un error al tratar de enviar tu mensaje.<br>Vuelve a intentarlo o ponte en contacto con nosotros al (55) 5678-5136.");
                }
                //--Esconde loader y muestra el botón de submit
                $(".loader2").fadeOut("fast");
                $("#reservar-submit").fadeIn("fast");
                
                $("#modal-info").one("hidden.bs.modal", function() {
                    $("#modal-status").modal();
                });
            });
        }
    });
    
    //--Función para validar el fomulario de reservación de cursos
    $("#info-form").validate({
        rules: {
            nombre: "required",
            email: "required",
            tel: "required",
            message: "required"
        },
        messages: {
            nombre: "Debes proporcionar tu nombre",
            email: "Debes proporcionar un email válido",
            tel: "Debes proporcionar un teléfono válido",
            message: "Debes escribir tu mensaje"
        }
    });
    
    //--Funciones para el modal del vídeo de los Sistemas Aspel
    $("#play-button").click(function() {
        $("#modalVideo").modal();
    });
    
    $(".modalFull .close").click(function() {
        $(".modalFull").modal("hide");
    });
    
    $("#modalVideo").on('show.bs.modal', function(){
        var url = $("#cartoonVideo").attr("data_url");
        $("#cartoonVideo").attr('src', url);
    });
    
    $("#modalVideo").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
})(jQuery);