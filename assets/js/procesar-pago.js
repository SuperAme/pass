$(document).ready(function() {
    
    $.post("../assets/php/product_session.php", {get_product: true})
        .done(function(data) {
        var product = JSON.parse(data);
        if (product.desc) {
            $("#productDesc-div p").text(product.desc);
            $("#productDesc-div input").val(product.desc);
            $("#paypal-form input[name='item_name']").val(product.desc);
            
            $("#productPrice-div p").text(formatMoney(parseFloat(product.price), "$"));
            $("#productPrice-div input").val(formatMoney(parseFloat(product.price), "$"));
            
            //$("#paypal-form input[name='amount']").val(product.price);
            $("#productPrice-div p").attr("data_price", product.price);
            
            $("#productIva-div p").text(formatMoney(parseFloat(product.price)*0.16, "$"));
            $("#productIva-div p").attr("data_iva", (parseFloat(product.price)*0.16).toFixed(2));
            
            /*$("#productTotal-div p").text(formatMoney((parseFloat(product.price)*0.16)+parseFloat(product.price), "$"));
            $("#productTotal-div p").attr("data_totalPrice", ((parseFloat(product.price)*0.16)+parseFloat(product.price)).toFixed(2));*/
            
            $("#productTotal-div p").text(formatMoney(parseFloat(product.price), "$"));
            $("#productTotal-div p").attr("data_price", product.price);
        } else {
            window.location.href = "../tienda/";
        }
        
    });
    
    function formatMoney(n, currency) {
        return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
    
    //--Consigue los métodos de pago disponibles
    /*$.post("../assets/php/payment_methods.php")
        .done(function(data) {
        console.log(data);
    });*/
    
    //Mercadopago.setPublishableKey("TEST-b0a1854b-dedf-4028-af10-85be63aab2a1"); //--Public key de sandbox
    Mercadopago.setPublishableKey("APP_USR-6300acae-9a69-4a2e-8860-19e782e5906d"); //--Public key de producción
    Mercadopago.getIdentificationTypes();
    
    //--Muestra o esconde el formulario de pago dependiendo de la opción seleccionada
    $("#radioTar").prop('checked', true);
    $(".radio-inline input").click(function() {
        if($('#radioTar').is(':checked')) {
            $("#formGral").slideDown("slow");
            $("#formTarjeta").slideDown("slow");
            $("#transfers").slideUp("slow");
            $("#btn-pagar").parent().slideDown("fast");
            $("#paypal-button").slideUp("fast");
            $("#paymentMethod").attr('value', '');
        } else if ($('#radioOxxo').is(':checked')) {
            $("#formGral").slideDown("slow");
            $("#formTarjeta").slideUp("slow");
            $("#transfers").slideUp("slow");
            $("#btn-pagar").parent().slideDown("fast");
            $("#paypal-button").slideUp("fast");
            $("#paymentMethod").attr('value', 'oxxo');
        } else if ($('#radioPaypal').is(':checked')) {
            $("#formGral").slideDown("slow");
            $("#formTarjeta").slideUp("slow");
            $("#transfers").slideUp("slow");
            $("#btn-pagar").parent().slideUp("fast");
            $("#paypal-button").slideDown("fast");
            $("#paymentMethod").attr('value', 'paypal');
        } else { //--Cuando el método de pago es por transferencia
            $("#formGral").slideUp("slow");
            $("#formTarjeta").slideUp("slow");
            $("#transfers").slideDown("slow");
            $("#btn-pagar").parent().slideUp("fast");
            $("#paypal-button").slideUp("fast");
        }
    });
    
    //Obtiene el bin de la tarjeta y llama a la función: setPaymentMethodInfo
    $("#cardNumber").keyup(function(event) {
        var bin = $("#cardNumber").val();
        if (event.type == "keyup") {
            if (bin.length >= 6) {
                Mercadopago.getPaymentMethod({
                    "bin": bin
                }, setPaymentMethodInfo);
            }
        } else {
            setTimeout(function() {
                if (bin.length >= 6) {
                    Mercadopago.getPaymentMethod({
                        "bin": bin
                    }, setPaymentMethodInfo);
                }
            }, 100);
        }
    });
    
    //Imprime el id del método de pago en el input correspondiente
    function setPaymentMethodInfo(status, response) {
        var paymentMethod = $("#paymentMethod");
        if (status == 200) {
            paymentMethod.attr('value', response[0].id);
        }
    }
    
    //Crea el token con los datos de la tarjeta al dar clic en pagar y llama a la función: sdkResponseHandler
    var doSubmit = false;
    //addEvent(document.querySelector('#pay'), 'submit', doPay);
    $("#pay").submit(function(event) {
        event.preventDefault();
        if (validateForm()) {
            if(!doSubmit){
                var $form = $('#pay');
                //--Si es un pago con tarjeta se crea el token de pago
                if ($('#radioTar').is(':checked')) {
                    Mercadopago.createToken($form, sdkResponseHandler); // The function "sdkResponseHandler" is defined below
                } else if ($('#radioOxxo').is(':checked')) { //--Si el método de pago es con Oxxo
                    postPago();
                }
                return false;
            }
        }
    });
    
    //--Función para manejar la respuesta al crear el token de la tarjeta
    function sdkResponseHandler(status, response) {
        //console.log(response);
        if (status != 200 && status != 201) {
            alert(getBadRequestMessage(response["cause"][0]["code"]));
        } else {
            var form = document.querySelector('#pay');
            var card = document.createElement('input');
            card.setAttribute('name', 'token');
            card.setAttribute('type', 'hidden');
            card.setAttribute('value', response.id);
            form.appendChild(card);
            doSubmit = true;
            //form.submit();
            postPago();
        }
    }
    
    //Si la respuesta es satisfactoría envia el formulario con los datos de pago, en caso contrario regresa un mensaje de error
    function postPago() {
        //--Muestra el loader y esconde el botón de pago
        $(".loader").removeClass("hidden");
        $("#btn-pagar").addClass("hidden");
        //--Envia el formulario para procesar el pago
        $.post("../assets/php/procesar-pago.php", $("#pay").serialize())
            .done(function(data) {
            console.log(data)
            $(".loader").addClass("hidden");
            //var paymentMethodId = $("#paymentMethod").val();
            if (data) {
                if ($('#radioTar').is(':checked')) {
                    $("#status-message").html(getStatusMessage(data));
                    //--Si el pago con tarjeta fue acreditado se hace un post para enviar el correo de confirmación
                    if (data == "accredited") {
                        $.post("../assets/php/mail_pago.php", {
                            pay_tar: true,
                            nombre: $("#pay #nombre").val(),
                            email: $("#pay #email").val(),
                            tel: $("#pay #tel").val(),
                            product: $("#productDesc-div p").text(),
                            price: $("#productTotal-div p").text()
                        }).done(function(data){
                            console.log(data);
                        });
                    } else {
                        $.post("../assets/php/mail_pago.php", {
                            pay_incomplete: true,
                            nombre: $("#pay #nombre").val(),
                            email: $("#pay #email").val(),
                            tel: $("#pay #tel").val(),
                            product: $("#productDesc-div p").text(),
                            price: $("#productTotal-div p").text(),
                            tipo_pago: "Tarjeta (Mercado Pago)"
                        }).done(function(data){
                            console.log(data);
                            //$("#modal-status").modal();
                        });
                    }
                } else if ($('#radioOxxo').is(':checked')) {
                    $("#status-message").html("Descarga el ticket del siguiente enlace para completar tu pago en Oxxo:<br><a type='button' class='btn btn-primary' id='btn-ticketOxxo' href='"+data+"' target='_blank'>DESCARGA AQUÍ!</a>");
                    $.post("../assets/php/mail_pago.php", {
                        pay_oxxo: true,
                        nombre: $("#pay #nombre").val(),
                        email: $("#pay #email").val(),
                        tel: $("#pay #tel").val(),
                        product: $("#productDesc-div p").text(),
                        price: $("#productTotal-div p").text(),
                        ticket_link: data
                    }).done(function(data){
                        console.log(data);
                    });
                }
            } else {
                $("#status-message").html("Hubo un error al procesar el pago<br>Intentalo de nuevo más tarde");
            }
            
            $("#modal-status").modal();
            //--Redirecciona la página dependiendo del estatus de aceptaicón del pago
            if (data && (data == "accredited" || $('#radioOxxo').is(':checked'))) {
                $("#modal-status").one("hidden.bs.modal", function() {
                    //window.location.href = "../servicios/";
                    resumenCompra();
                });
            } else {
                $("#modal-status").one("hidden.bs.modal", function() {
                    window.location.href = "../tienda/procesar-pago.html";
                });
            }
            
        });
    }
    
    //--Función para mostrar el resumen de la compra tras completar el proceso de pago
    function resumenCompra() {
        $("#banners-title").fadeOut("slow", function() {
            $("#banners-title").text("GRACIAS POR TU COMPRA!");
            $(this).fadeIn("slow");
        });
        $("#banners").slideUp("slow");
        $("#formGral").slideUp("slow");
        $("#formTarjeta").slideUp("slow");
        $("#transfers").slideUp("slow");
        $("#btn-pagar").parent().slideUp("fast");
        $("#paypal-button").slideUp("fast");
        $.post("../assets/php/product_session.php", {quit_product: true});
    }
    
    /*--Función para activar o desactivar el botón de pago de PayPal
    ** dependiendo del formulario general*/
    function toggleButton(actions) {
        //return validateForm() ? actions.enable() : actions.disable();
        var each = true;
        $("#formGral input.required").each(function() {
            if (each) {
                if(!$(this).val()) {
                    each = false;
                    //console.log("disable");
                    return actions.disable();
                } else {
                    //console.log("enable");
                    return actions.enable();
                }
            }
        });
    }
    
    //--Manejador de los inputs del formulario general de pago
    function onFormChange(handler) {
        $("#formGral input.required").keyup(handler);
    }
    
    /*--Función para cargar el botón de pago de PayPal
    ** con sus correspondientes opciones*/
    paypal.Button.render({
        // Configure environment
        env: 'sandbox',
        client: {
            sandbox: 'Ae_ev-k161o6lZjyDofNurVYER8gVxXUpQIarrhdToDGtm9jN_fI_E5nsXotyYIT0sV9MH6p2UlQCDTd',
            production: 'demo_production_client_id'
        },
        // Customize button (optional)
        locale: 'es_MX',
        style: {
            size: 'medium',
            color: 'blue',
            shape: 'rect',
        },
        
        //--Función para validar el formulario correspondiente
        validate: function(actions) {
            toggleButton(actions); //--Para ejecutar la primera validación al cargar el botón
            onFormChange(function() { //--Para ejecutar validaciones al escribir sobre el formulario
                toggleButton(actions); //--Activa o desactiva el botón de pago de acuerdo con la validación
            });
        },
        
        /*--Muestra o esconde los mensajes de error de la validación
        ** sobre el formulario al hacer clic al botón de pago*/
        onClick: function() {
            $(".input-error").parent().removeClass("has-error");
            $(".input-error").remove();
            $("#formGral input.required").each(function() {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    $(this).parent().append("<p class='input-error'>Campo obligatorio</p>");
                }
            });
        },
        
        // Set up a payment
        payment: function (data, actions) {
            return actions.payment.create({
                transactions: [{
                    amount: {
                        total: $("#productTotal-div p").attr("data_totalPrice"),
                        currency: 'MXN',
                        details: {
                            subtotal: $("#productPrice-div p").attr("data_price"),
                            tax: $("#productIva-div p").attr("data_iva"),
                            shipping: '0'
                        }
                    },
                    description: $("#productDesc-div p").text()
                }]
            });
        },
        item_list: {
            items: [{
                name: $("#productDesc-div p").text(),
                quantity: '1',
                price: $("#productPrice-div p").attr("data_price"),
                tax: $("#productIva-div p").attr("data_iva"),
                currency: 'MXN'
            }]
        },
        // Execute the payment
        onAuthorize: function (data, actions) {
            // Get the payment details
            return actions.payment.get().then(function(data) {
                // Display the payment details and a confirmation button
                var payer = data.payer.payer_info;
                var payer_tel = payer.shipping_address.phone;
                
                //console.log(payer.first_name, payer.last_name, payer.email, payer_tel);

                // Execute the payment
                return actions.payment.execute().then(function() {
                    $("#status-message").html("Su compra se ha realizado con éxito!");
                    $("#modal-status").modal();
                    $("#modal-status").one("hidden.bs.modal", function() {
                        //window.location.href = "../servicios/";
                        resumenCompra();
                    });
                    $.post("../assets/php/mail_pago.php", {
                        pay_paypal: true,
                        nombre: payer.first_name + " " + payer.last_name,
                        email: payer.email,
                        tel: payer_tel,
                        product: $("#productDesc-div p").text(),
                        price: $("#productTotal-div p").text()
                    }).done(function(data){
                        console.log(data);
                    });
                });
                
            });
        },
        /*--Si el cliente cancela el pago (cierra la ventana de PayPal)
        ** se ejectua el post para enviar los correos correspondientes*/
        onCancel: function (data, actions) {
            $.post("../assets/php/mail_pago.php", {
                pay_incomplete: true,
                nombre: $("#pay #nombre").val(),
                email: $("#pay #email").val(),
                tel: $("#pay #tel").val(),
                product: $("#productDesc-div p").text(),
                price: $("#productTotal-div p").text(),
                tipo_pago: "PayPal"
            }).done(function(data){
                console.log(data);
                //$("#modal-status").modal();
            });
        },
        //--Si ocurre un error se muestra un mensaje en el modal
        onError: function (error) {
            console.error(error);
            //TODO Simular errores
            /*if (error === 'INSTRUMENT_DECLINED') {
                actions.restart();
            }*/
            $("#status-message").html("Ocurrió un error al intentar procesar tu pago, inténtalo nuevamente!");
            $("#modal-status").modal();
        }
    }, '#paypal-button');
    
    /*--Función para validar el formulario dependiendo de la opción
    ** de pago seleccionada*/
    function validateForm() {
        var valid = true;
        $(".input-error").parent().removeClass("has-error");
        $(".input-error").remove();
        //--Si el radio button de pago con tarjetas está activado revisa todo el formulario
        if($('#radioTar').is(':checked')) {
            $("#pay input.required").each(function() {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    $(this).parent().append("<p class='input-error'>Campo obligatorio</p>");
                    valid = false;
                }
            });
        } else if ($('#radioOxxo').is(':checked') || $('#radioPaypal').is(':checked')) {
            $("#formGral input.required").each(function() {
                if(!$(this).val()) {
                    $(this).parent().addClass("has-error");
                    $(this).parent().append("<p class='input-error'>Campo obligatorio</p>");
                    valid = false;
                }
            });
        }
        return valid;
    }
    
    //--Consigue los parámetros de la URL divididos por "&"
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    
    function getStatusMessage (status) {
        var statusMessage = "";
        switch (status) {
            case "accredited":
                statusMessage = "Su compra se ha realizado con éxito!";
                break;
            case "pending_contingency":
                statusMessage = "Estamos procesando el pago.<br><br>En menos de una hora te debe llegar por e-mail el resultado.";
                break;
            case "pending_review_manual":
                statusMessage = "Estamos procesando el pago.<br><br>En menos de 2 días hábiles te diremos por e-mail si se acreditó o si necesitamos más información.";
                break;
            case "cc_rejected_bad_filled_card_number":
                statusMessage = "Tu pago fue rechazado.<br><br>Revisa el número de tarjeta.";
                break;
            case "cc_rejected_bad_filled_date":
                statusMessage = "Tu pago fue rechazado.<br><br>Revisa la fecha de vencimiento.";
                break;
            case "cc_rejected_bad_filled_other":
                statusMessage = "Tu pago fue rechazado.<br><br>Revisa los datos.";
                break;
            case "cc_rejected_bad_filled_security_code":
                statusMessage = "Tu pago fue rechazado.<br><br>Revisa el código de seguridad.";
                break;
            case "cc_rejected_blacklist":
                statusMessage = "No pudimos procesar tu pago.";
                break;
            case "cc_rejected_call_for_authorize":
                statusMessage = "Debes autorizar el pago ante tu banco.";
                break;
            case "cc_rejected_card_disabled":
                statusMessage = "Llama a tu banco para que active tu tarjeta. El teléfono debe estar al dorso de tu tarjeta.";
                break;
            case "cc_rejected_card_error":
                statusMessage = "No pudimos procesar tu pago.";
                break;
            case "cc_rejected_duplicated_payment":
                statusMessage = "Ya hiciste un pago por ese valor. Si necesitas volver a pagar usa otra tarjeta u otro medio de pago.";
                break;
            case "cc_rejected_high_risk":
                statusMessage = "Tu pago fue rechazado.<br><br>Elige otro de los medios de pago, te recomendamos con medios en efectivo.";
                break;
            case "cc_rejected_insufficient_amount":
                statusMessage = "Tu tarjeta no tiene fondos suficientes.";
                break;
            case "cc_rejected_invalid_installments":
                statusMessage = "Tu tarjeta no procesa pagos de este tipo.";
                break;
            case "cc_rejected_max_attempts":
                statusMessage = "Llegaste al límite de intentos permitidos. Elige otra tarjeta u otro medio de pago.";
                break;
            case "cc_rejected_other_reason":
                statusMessage = "Tu banco no procesó el pago.";
                break;
        }
        return statusMessage;
    }
    
    function getBadRequestMessage(code) {
        var message = "";
        switch(code) {
            case "205":
                message = "Ingresa el número de tu tarjeta.";
                break;
            case "208":
                message = "Elige un mes.";
                break;
            case "209":
                message = "InElige un año.";
                break;
            case "212":
                message = "Ingresa tu documento.";
                break;
            case "213":
                message = "Ingresa tu documento.";
                break;
            case "214":
                message = "Ingresa tu documento.";
                break;
            case "220":
                message = "Ingresa tu banco emisor.";
                break;
            case "221":
                message = "Ingresa el nombre y apellido.";
                break;
            case "224":
                message = "Ingresa el código de seguridad.";
                break;
            case "E301":
                message = "Hay algo mal en el número de tu tarjeta. Vuelve a ingresarlo.";
                break;
            case "E302":
                message = "Revisa el código de seguridad.";
                break;
            case "316":
                message = "Ingresa un nombre válido.";
                break;
            case "322":
                message = "Revisa tu documento.";
                break;
            case "323":
                message = "Revisa tu documento.";
                break;
            case "324":
                message = "Revisa tu documento.";
                break;
            case "325":
                message = "Revisa el mes.";
                break;
            case "326":
                message = "Revisa el año.";
                break;
            default:
                message = "Revisa los datos.";
        }
        return message;
    }
    
});