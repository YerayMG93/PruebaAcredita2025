//VARIABLES
const email = document.querySelector("#email");
const tipoConsulta = document.querySelector("#tipoConsulta");
const mensaje = document.querySelector("#mensaje");
const btnSubmit = document.querySelector("#btnSubmit");

const errores = {
	email: document.querySelector("#email + .error"),
  	tipoConsulta: document.querySelector("#tipoConsulta + .error"),
  	mensaje: document.querySelector("#mensaje ~ .error")
};

//FUNCIONES

//Volver a la página principal
function goToIndex(){
    console.log("hola");
    window.location.href = "./index.html";
}

//Validar Email
function validarEmail(){
	//¿Existe?
	if(!email.value){
		errores.email.textContent = "El email es obligatorio";
		return false;
	}
	//¿Es válido?
	if (!email.checkValidity()) {
		errores.email.textContent = "Email no válido";
		return false;
	}
	//Todo correcto.
	errores.email.textContent = "";
	return true;
}

//Validar consulta
function validarTipoConsulta() {
	//¿Tiene valor?
	if (!tipoConsulta.value) {
	  errores.tipoConsulta.textContent = "Selecciona un tipo de consulta";
	  return false;
	}
	//Todo ok
	errores.tipoConsulta.textContent = "";
	return true;
}
//Validar mensaje
function validarMensaje() {
	const max = 50;
	//¿Se ha escrito demasiado?
	if (mensaje.value.length > max) {
	  errores.mensaje.textContent = `Máximo ${max} caracteres`;
	  return false;
	}
	//Todo ok
	errores.mensaje.textContent = "";
	return true;
}

//Comprobar el formulario completo
function validarFormulario() {	  
	btnSubmit.disabled = !(validarEmail() &&
	validarTipoConsulta() &&
	validarMensaje());
}

//LISTENERS
email.addEventListener("input", validarFormulario);
tipoConsulta.addEventListener("change", validarFormulario);
mensaje.addEventListener("input", validarFormulario);
btnSubmit.addEventListener("submit", (e) =>{
	e.preventDefault();
	console.log("TODO conexion a BBDD para subir datos y envío de email");
});