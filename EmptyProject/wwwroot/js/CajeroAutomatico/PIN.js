//Teclado
function rellenarcampo(numeroanterior, longitud, numeronuevo) {
    if (longitud < 4) {
        $("#pin").val(numeroanterior + numeronuevo);
    }
}

$("#1").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 1);
});

$("#2").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 2);
});

$("#3").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 3);
});

$("#4").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 4);
});

$("#5").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 5);
});

$("#6").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 6);
});

$("#7").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 7);
});

$("#8").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 8);
});

$("#9").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 9);
});

$("#0").on("click", function () {
    let numeroanterior = $("#pin").val();
    let longitud = numeroanterior.length;
    rellenarcampo(numeroanterior, longitud, 0);
});

//Limpiar teclado
$("#limpiarteclado").on("click", function () {
    $("#pin").val("");
});


var formData = new FormData();

//LOAD EVENT
$(document).ready(function () {

    var forms = document.getElementsByClassName("needs-validation");

    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();
            event.stopPropagation();

            if ($("#pin").val().length != 4) {
                $.notify({ message: "Rellene el campo con sus 4 dígitos" }, { type: "warning", placement: { from: "bottom", align: "center" } });
                return;
            }

            formData.append("pin", $("#pin").val());

            //Setup request
            var xmlHttpRequest = new XMLHttpRequest();
            //Set event listeners
            xmlHttpRequest.upload.addEventListener("loadstart", function (e) {
                //SAVING
                $.notify({ message: "Espere..." }, { type: "info", placement: { from: "bottom", align: "center" } });
            });
            xmlHttpRequest.onload = function () {
                formData = new FormData();
                if (xmlHttpRequest.status >= 400) {
                    //ERROR
                    console.log(xmlHttpRequest);
                    window.location.replace("/Error/Error");
                }
                else {
                    if (xmlHttpRequest.response == "PIN Invalido") {
                        $("#pin").val("");
                        $.notify({ message: "PIN inválido" }, { type: "warning", placement: { from: "bottom", align: "center" } });
                    }
                    else if (xmlHttpRequest.response == "Tarjeta bloqueada") {
                        window.location.replace("/Mensaje/TarjetaBloqueada");
                    }
                    else {
                        window.location.replace("/Operaciones");
                    }
                }
            };
            //Open connection
            xmlHttpRequest.open("POST", "/api/CajeroAutomatico/GetPIN", true);
            //Send request
            xmlHttpRequest.send(formData);

            form.classList.add("was-validated");
        }, false);
    });
});
