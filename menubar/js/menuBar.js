function transformar() {
	
	var ContainerGeral = document.getElementById("contentGeral");

	if (ContainerGeral.className.indexOf('rotacao') == -1 || ContainerGeral.classList.contains("rotacaoInversa")) {
		document.getElementById("contentGeral").classList.remove('rotacaoInversa')
		document.getElementById("contentGeral").className += " rotacao";
	}
	else {
		document.getElementById("contentGeral").classList.remove('rotacao');
		document.getElementById("contentGeral").classList.add('rotacaoInversa');
	}

	var barra1 = document.getElementById("barraOne");

	if (barra1.className.indexOf('girabarra1') == -1 || barra1.classList.contains("girabarra1Inversa")) {
		document.getElementById("barraOne").classList.remove('girabarra1Inversa')
		document.getElementById("barraOne").className += " girabarra1";
	}
	else {
		document.getElementById("barraOne").classList.remove('girabarra1');
		document.getElementById("barraOne").classList.add('girabarra1Inversa');
	}

	var barraCentral = document.getElementById("barraTwo");

	if (barraCentral.className.indexOf('sumirBarraCentral') == -1 || barraCentral.classList.contains("aparecerBarraCentral")) {
		document.getElementById("barraTwo").classList.remove('aparecerBarraCentral')
		document.getElementById("barraTwo").className += " sumirBarraCentral";
	}
	else {
		document.getElementById("barraTwo").classList.remove('sumirBarraCentral');
		document.getElementById("barraTwo").classList.add('aparecerBarraCentral');
	}

	var barra2 = document.getElementById("barraThree");

	if (barra2.className.indexOf('girabarra2') == -1 || barra2.classList.contains("girabarra2Inversa")) {
		document.getElementById("barraThree").classList.remove('girabarra2Inversa')
		document.getElementById("barraThree").className += " girabarra2";
	}
	else {
		document.getElementById("barraThree").classList.remove('girabarra2');
		document.getElementById("barraThree").classList.add('girabarra2Inversa');
	}	

}