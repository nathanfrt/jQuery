
$(function(){
$(".btnCalcular").bind("click", function(){
    var altura = $("#altura").val();
    var peso = $("#peso").val();
    var imc = peso / (altura * altura);
    var resultado = " CLASSIFICAÇÃO = "

    altura = altura.replace(",",".");
    peso = peso.replace(",",".");

    if (imc <= 18.5){
        resultado += "Magreza"
    }

    else if (imc >= 18.6 & imc <= 24.9){
        resultado += "Normal"
    }

    else if (imc >= 25.0 & imc <= 29.9){
        resultado += "Sobrepeso"
    }

    else if (imc >= 30.0 & imc <= 39.9){
        resultado += "Obesidade"
    }

    else if (imc >= 40.0){
        resultado += "Obesidade Grave"
    }
    
    if (altura == "" || peso == ""){
        $(".resultadoCalculo").html("Digite um valor válido");
        $(".resultadoCalculo").toggleClass("block");
    }
    else{
        $(".resultadoCalculo").addClass("block");
        $(".resultadoCalculo").html("IMC = " + imc.toFixed(2) + "<br> " + resultado);
    }
});
});

$(function(){
$(".ajuda").eq(0).mouseover(function(){
    $(".exAltura").toggleClass("show");
});
$(".ajuda").eq(1).mouseover(function(){
    $(".exPeso").toggleClass("show");
});
});

$(function(){
    $(".btnLimpar").click(function(){
        $("#altura").val("");
        $("#peso").val("");
        $(".resultadoCalculo").removeClass("block");
    });
});