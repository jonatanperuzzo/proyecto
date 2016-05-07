function limpiarForm(){
	alert("Limpiando");
	document.getElementById("contacto-frm").reset();//reset limpia el formulario
}

function validarForm(){
	var verificar = true;
	var expRegNombre = /^[a-z0-9_-]{3,16}$/;
	var expRegEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	var expRegPassword = /^[a-z0-9_-]{6,18}$/;

	var formulario = document.getElementById("contacto_frm");
	var nombre = document.getElementById("nombre");
	var password = document.getElementById("password");
	var password2 = document.getElementById("password2");
	var edad = document.getElementById("edad");
	var email = document.getElementById("email");
	var masculino = document.getElementById("M");
	var femenino = document.getElementById("F");
	var asunto = document.getElementById("asunto");
	var comentarios = document.getElementById("comentarios");

	if(!nombre.value){
		alert("El campo nombre es requerido");
		contacto_frm.nombre.style.border = "1px solid red";
		nombre.focus();
		verificar = false;
	}else if(!expRegNombre.exec(nombre.value)){
		alert("El campo solo acepta letras y espacios en blanco");
		contacto_frm.nombre.style.border = "1px solid red";
		nombre.focus();
		verificar = false;
	}else if(!edad.value){
		alert("El campo edad es requerido");
		edad.focus();
		verificar = false;
	}
	else if(isNaN(edad.value)){//isNotaNumber
		alert("El campo edad solo acepta numeros");
		edad.focus();
		verificar = false;
	}else if(edad.value < 18 || edad.value > 60){
		alert("Debes estar en un rango de edad entre 18 y 60 años");
		edad.focus();
		verificar = false;
	}else if(!email.value){
		alert("El campo email es requerido");
		email.focus();
		verificar = false;
	}else if(!expRegEmail.exec(email.value)){
		alert("El campo email no es valido");
		email.focus();
		verificar = false;
	}else if(!expRegPassword.exec(password.value)){
		alert("El campo password es requerido. De 6 a 18 caracteres");
		contacto_frm.password.style.border = "1px solid red";
		password.focus();
		verificar = false;
	}else if(!expRegPassword.exec(password2.value)){
		alert("El campo password es requerido. De 6 a 18 caracteres");
		contacto_frm.password2.style.border = "1px solid red";
		password.focus();
		verificar = false;
	}
	else if(password.value != password2.value){
		alert("Los passwords deben ser Iguales");
		contacto_frm.password.style.border = "1px solid red";
		password.focus();
		verificar = false;
	}
	else if(!masculino.checked && !femenino.checked){
		alert("El campo sexo es requerido");
		femenino.focus();
		verificar = false;
	}else if(!asunto.value){
		alert("El campo asunto es requerido");
		asunto.focus();
		verificar = false;
	}else if(!comentarios.value){
		alert("El campo comentarios es requerido");
		comentarios.focus();
		verificar = false;
	}else if(comentarios.value > 255){
		alert("El campo comentario no puede tener mas de 255 caracteres");
		comentarios.focus();
		verificar = false;
	}


	if(verificar){
		alert("Se ha enviado el formulario.");
		document.contacto_frm.submit();
	}

	
}

window.onload = function(){
	var botonEnviar, botonLimpiar;
	botonLimpiar = document.getElementById("limpiar");
	botonLimpiar.onclick = limpiarForm;

	botonEnviar = document.contacto_frm.enviar_btn;//camina por el dom por los elementos "name=''".
	botonEnviar.onclick = validarForm;
}