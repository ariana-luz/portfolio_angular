function cambiar_parrafo() {
	document.getElementById("edit-acercade").style.display="block";
	let texto = document.getElementById("text-acercade").innerText;
	console.log(texto);
}

function myFunction2(valor) {
	document.getElementById("text-acercade").innerText=valor;
}

function logMessage(message) {
	console.log(message + "<br>");
}

document.addEventListener('keyup', (e) => {
	logMessage(`Key "${e.key}" released [event: keyup]`);
	if (e.key=="Enter"){
	document.getElementById("edit-acercade").style.display="none"
	}
});

function cambiar_foto_banner() {
	document.getElementById("edit_foto_banner").style.display="block";
	let image = document.getElementById("avatar");
}

function showFile(input){
	let file = input.files[0];
	alert (`File name: ${file.name}`); 

	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto_banner").style.display="none"
}

function cambiar_foto_perfil() {
	document.getElementById("edit_foto_perfil").style.display="block";
	let image = document.getElementById("perfil");
}

function showFile5(input){
	let file = input.files[0];
	alert (`File name: ${file.name}`); 

	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("perfil").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto_perfil").style.display="none"
}

function mostrar_contacto(){
	document.getElementById("contacto").style.display="block";
}

function cambiar_data(){
	document.getElementById("edit-data").style.display="block";
	let texto = document.getElementById("info_data").innerText;
	console.log(texto);
}

function myFunction6(valor) {
	document.getElementById("info_name").innerText=valor;
}

function cambiar_data(){
	document.getElementById("edit-data").style.display="block";
	let texto = document.getElementById("info_data").innerText;
	console.log(texto);
}
function myFunction7(valor) {
	document.getElementById("info_profession").innerText=valor;
}

function cambiar_data(){
	document.getElementById("edit-data").style.display="block";
	let texto = document.getElementById("info_data").innerText;
	console.log(texto);
}
function myFunction8(valor) {
	document.getElementById("info_location").innerText=valor;
}

function cambiar_data(){
	document.getElementById("edit-data").style.display="block";
	let texto = document.getElementById("info_data").innerText;
	console.log(texto);
}
function myFunction9(valor) {
	document.getElementById("info_company").innerText=valor;
}

function cambiar_data(){
	document.getElementById("edit-data").style.display="block";
	let texto = document.getElementById("info_data").innerText;
	console.log(texto);
}
function myFunction10(valor) {
	document.getElementById("info_school").innerText=valor;
}

function cambiar_foto_companies() {
	document.getElementById("edit_foto3").style.display="block";
	let image = document.getElementById("avatar3");
}

function showFile3(input){
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar3").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto3").style.display="none"
}

function cambiar_foto_schools() {
	document.getElementById("edit_foto4").style.display="block";
	let image = document.getElementById("avatar4");
}

function showFile4(input){
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar4").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto4").style.display="none"
}

function logMessage(message) {
	console.log(message + "<br>");
}

document.addEventListener('keyup', (e) => {
	logMessage(`Key "${e.key}" released [event: keyup]`);
	if (e.key=="Enter"){
	document.getElementById("edit-data").style.display="none"
	}
});

function edit_experiencia() {
	document.getElementById("editar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput1").innerText;
	console.log(texto);
}

function myFunction3(valor) {
	document.getElementById("company").innerText=valor;
}

function edit_experiencia() {
	document.getElementById("editar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput2").innerText;
	console.log(texto);
}

function myFunction4(valor) {
	document.getElementById("position").innerText=valor;
}

function edit_experiencia() {
	document.getElementById("editar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput3").innerText;
	console.log(texto);
}

function myFunction5(valor) {
	document.getElementById("period").innerText=valor;
}

function cambiar_foto_company() {
	document.getElementById("edit_foto2").style.display="block";
	let image = document.getElementById("avatar2");
}

document.addEventListener('keyup', (e) => {
	logMessage(`Key "${e.key}" released [event: keyup]`);
	if (e.key=="Enter"){
	document.getElementById("editar_experiencia").style.display="none"
	}
});

function showFile2(input){
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar2").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto2").style.display="none"
}

function guardar_experiencia(){
	document.getElementById("editar_experiencia").style.display="none"
}

function nueva_experiencia() {
	document.getElementById("agregar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput4").innerText;
	console.log(texto);
}

function myFunction12(valor) {
	document.getElementById("company1").innerText=valor;
}

function edit_experiencia() {
	document.getElementById("agregar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput5").innerText;
	console.log(texto);
}

function myFunction13(valor) {
	document.getElementById("position1").innerText=valor;
}

function edit_experiencia() {
	document.getElementById("editar_experiencia").style.display="block";
	let texto = document.getElementById("exampleFormControlInput6").innerText;
	console.log(texto);
}

function myFunction14(valor) {
	document.getElementById("period1").innerText=valor;
}

function guardar_nueva_experiencia(){
	document.getElementById("agregar_experiencia").style.display="none"
	document.getElementById("details").style.display="block"
}

function cambiar_foto_company20() {
	document.getElementById("edit_foto20").style.display="block";
	let image = document.getElementById("avatar20");
}

document.addEventListener('keyup', (e) => {
	logMessage(`Key "${e.key}" released [event: keyup]`);
	if (e.key=="Enter"){
	document.getElementById("editar_experiencia").style.display="none"
	}
});

function cambiar_foto_company2() {
	document.getElementById("edit_foto6").style.display="block";
	let image = document.getElementById("avatar20");
}

function showFile6(input){
	let file = input.files[0];
	alert (`File name: ${file.name}`); 

	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar20").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit_foto6").style.display="none"
}

Login()
{
  this.ruta.navigate(['/iniciar-sesion']);
}