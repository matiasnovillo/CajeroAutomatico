//Teclado
$("#1").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "1");
});

$("#2").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "2");
});

$("#3").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "3");
});

$("#4").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "4");
});

$("#5").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "5");
});

$("#6").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "6");
});

$("#7").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "7");
});

$("#8").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "8");
});

$("#9").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "9");
});

$("#0").on("click", function () {
    let numeroanterior = $("#cantidad-de-dinero").val();
    $("#cantidad-de-dinero").val(numeroanterior + "0");
});

//Limpiar teclado
$("#limpiarteclado").on("click", function () {
    $("#cantidad-de-dinero").val("");
});


var formData = new FormData();

//LOAD EVENT
$(document).ready(function () {

    var forms = document.getElementsByClassName("needs-validation");

    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();
            event.stopPropagation();

            formData.append("cantidad-de-dinero", $("#cantidad-de-dinero").val());

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
                    if (xmlHttpRequest.response == "Dinero Insuficiente") {
                        window.location.replace("/Error/DineroInsuficiente");
                    }
                    else {
                        window.location.replace("/Mensaje/TransaccionExitosa");
                    }
                }
            };
            //Open connection
            xmlHttpRequest.open("POST", "/api/CajeroAutomatico/Retiro", true);
            //Send request
            xmlHttpRequest.send(formData);

            form.classList.add("was-validated");
        }, false);
    });
});
