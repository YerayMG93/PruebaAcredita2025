//VARIABLES
const email = document.getElementsByName("email");
const tipoConsulta = document.getElementsByName("tipoConsulta");
const mensaje = document.getElementsByName("mensaje");
const btnSubmit = document.getElementsById("btnSubmit");

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
	const contador = document.querySelector(".contador");
	contador.textContent = `${mensaje.value.length} / 450`;
	//¿Se ha escrito demasiado?
	if (mensaje.value.length > 50) {
	  errores.mensaje.textContent = "Máximo 50 caracteres";
	  return false;
	}
	//Todo ok
	errores.mensaje.textContent = "";
	return true;
}

//Comprobar el formulario completo
function validarFormulario() {
	const valido =
	  validarEmail() &&
	  validarTipoConsulta() &&
	  validarMensaje();
	btnEnviar.disabled = !valido;
}

//LISTENERS
email.addEventListener("input", validarFormulario);
tipoConsulta.addEventListener("change", validarFormulario);
mensaje.addEventListener("input", validarFormulario);