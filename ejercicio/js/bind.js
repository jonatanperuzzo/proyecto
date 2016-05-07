$(document).ready(function(){
		var v_img1=$("#imagen1").attr("src");

		$("#imagen_grande").hide();
		$("#imagen1").bind("click", v_img1, abreimagen);
	});

	function abreimagen(e){
		e.stopPropagation();//no propage el evento.
		$("#imagen_grande").fadeIn(1000);
		$("#img_sustitucion").replaceWith("<img src='" + e.data + "' width='700' height='405'>");
	}

	$(document).bind("click keypress", function(){
		$("#imagen_grande").fadeOut(1000);
	});