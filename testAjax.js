function serverRequest(url, callback ){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onload = function() {
		if (xmlhttp.readyState == 4 || xmlhttp.status == 200) {
			var resultado = JSON.parse(xmlhttp.response);
			callback(resultado);
		}
	};

	xmlhttp.responseType = "json";
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function procesarRespuesta(jsonObject){
	document.write(jsonObject.<campo> + “<br>”);
}

function search(){
	var dir = “...”;
	serverRequest(dir, procesarRespuesta);
}