$(document).ready(function () {

	$('#boton').click(function(){
    	console.log("hola");
    	$( "#cubo" ).animate({ "left": "+=300px" }, 2000);
    	$("#barra").animate({width: 300},2000,function(){alert("termino")});
    })
	
    $('.jcarousel').jcarousel({
	    animation: {
	        duration: 800,
	        easing:   'linear',
	        complete: function() {
	        }
	    }
	});

    //$('.jcarousel').jcarousel('scroll', '+=2');
	/*$('.jcarousel-prev').click(function() {
	    $('.jcarousel').jcarousel('scroll', '-=1');
	})*/

	$('#btncar').click(function() {
	    $('.jcarousel').jcarousel('scroll', '+=1');
	});

	$('#btnAgregar').on('click', function(){
		var contenido = "<div id = 'hola' style='height: 100px; width: 500px; background-color: green; border: 1px solid black'></div>"
		//$('#ladoinferior').prepend(contenido);
		//$( "#po" ).slideDown(  );
		$('.fadeInUp').addClass('fadeInUpLater');
	});

	$('#btnVer').on('click',function(){
		//$('.circulo').toggleClass('circulo2');
		/*setTimeout(function(){
		  $('#myModal').modal('hide');
		}, 4000);*/
	});

	
	$('#modalBtn').on('click',function(){
		//$('.circulo').toggleClass('circulo2');
		/*setTimeout(function(){
		  $('#myModal').modal('hide');
		}, 4000);*/
		$('.cle').show();
		$('.cle').addClass('circle');
	});

	var arreglo = new Array();
	var num_personas =parseInt(0);

	/*var objeto = new Object();
	objeto.id = "1";
	objeto.disponible = "si";

	var obj2 = new Object();
	obj2.id = "2";
	obj2.disponible = "no";

	var obj3 = new Object();
	obj3.id = "3";
	obj3.disponible = "no";
	
	arreglo.push(objeto);
	arreglo.push(obj2);
	arreglo.push(obj3);

	arreglo[1].disponibe="hola q hace";

	console.log(arreglo.length);
	console.log(arreglo);

	for (var i = 0; i < arreglo.length; i++) {
		console.log(arreglo[i].disponible);
	}*/
	
	$('#ipt_num_personas').on('change',function(){
		//$('.imagen_disponible').show();
		$('#colaboradores').empty();
		$('#espacio').empty();
		arreglo.length = 0;
		var indice = parseInt($(this).val());
		//console.log(indice);
		var estilo = "";
		/*if(indice%2==0){
			console.log("par");
			//estilo = "float: left"
		}else{
			console.log("impar");
			//estilo = "display:block"
		}*/
		//num_personas = indice; 
		console.log("valor actual: "+indice+" - valor viejo: "+num_personas)
		
		if(indice > num_personas){	//si el valor aumenta, agregar la diferencia
			//console.log(" + Indice (valor): "+indice+" - numero de personas: "+num_personas);
			var diferencia = parseInt(indice - num_personas);
			console.log(diferencia);
			num_personas = indice;
		}else{						//si el valor disminuye, quitar la diferencia
			//console.log(" - Indice (valor): "+indice+" - numero de personas: "+num_personas);	
			var diferencia = parseInt(num_personas - indice);
			console.log(diferencia);
			num_personas = indice;
		}
		for (var i = 0; i < indice; i++) {
			/*if(i%2==0){
				//console.log("par");
				estilo = "float: left; display: inline-block ";
			}else{
				//console.log("impar");
				estilo = "clear: left;";
			}*/
			var o = "<div class='img_check' id = 'img_dpnb"+i+"' data-disponible='si' style='width: 150px; height: 150px; background-color: red; text-align: center; position: relative; display: inline-block;'>"+
			"<img src='img/disponible1.jpg' width='150px;' height='150px;' class='img_dpnb'  style='cursor: pointer; z-index: 1'>"+
			"</div>";
			//$('#colaboradores').append("<div id='img_dpnb"+i+"' class='imagen_disponible' style='float: left';><img src='img/disponible1.jpg' alt='' class='img_dpnb' width='100px' height='100px'></div>");
			var objeto = new Object();
			objeto.id = "img_dpnb"+i+"";
			objeto.disponible = "si";
			$('#colaboradores').append(o);
			$('#espacio').append(o);
			arreglo.push(objeto);
		}
		//$('#colaboradores').append('<div id="" class="imagen_disponible" style="float: left;"><img src="img/disponible1.jpg" alt="" class="img_dpnb" width="100px" height="100px"></div>');
	});
	$('#btn_ver').click(function(){
		for (var i = 0; i < arreglo.length; i++) {
			console.log(arreglo[i]);
		}
	});
	$('#btn_invitar').click(function(){
		//console.log(arreglo.length);
		var i = 0;
		while(i< arreglo.length){
			if(arreglo[i].disponible == "si"){
				console.log("Lugar disponible en valor: "+i);
				arreglo[i].disponible = "no";
				$("#img_dpnb"+i+"").remove();
				var o = "<div class='img_check' id = 'img_dpnb"+i+"' data-disponible='si' style='width: 150px; height: 150px; background-color: blue; text-align: center; position: relative; display: inline-block;'>"+
						"<img src='img/disponible1.jpg' width='150px;' height='150px;' class='img_dpnb'  style='cursor: pointer; z-index: 1'>"+
						"</div>";
				$('#colaboradores').prepend(o);
				break;
			}
			i++;
		}
	});
	$('#opc_agregar').hover(
		function(){
			$(this).css({"background-color": "blue"});
		},
		function(){
			$(this).css({"background-color": "white"});
		}
	);
	$('#colaboradores').on('click','.img_check', function(){
		if($(this).attr('data-clickeado')=='true'){
			console.log("hola");
			$('.img_icon', this).remove();
			$(this).removeAttr("data-clickeado");
			$(this).removeData("clickeado");
			
		}else{
			$(this).append("<img src='img/check.png' class='img_icon' width='20px;' height='20px;' style= 'position: absolute; right:0 ; top:0; z-index: 2'>");
			$(this).attr('data-clickeado','true');
		}
	});
	var target = null;
	$('.img_thumb').hover(function(e){
	    target = $(this);
	    $('img',this).css({"opacity":"0.5"});
	    $('#img_descrip').fadeIn(200);
	    $('#img_descrip').css({"display":"table"});
	}, function(){
		$('img',this).css({"opacity":"1"});
	    $('#img_descrip').fadeOut(200);
	});
	$('#img_descrip').click(function(){
		alert("Equom");
	});
	//$('#colaboradores').perfectScrollbar();
	
	//$('#contenedorPrueba').perfectScrollbar({minScrollbarLength: 10});
	/*$('#contenedorPrueba').slimScroll({
        height: '250px',
        railVisible: true,
    	alwaysVisible: true
    });*/

    /***********************************************************/

});
//<img src="img/check.png" width="20px" height="20px" style="position: absolute; top: 0; left: 0; z-index: 2" >