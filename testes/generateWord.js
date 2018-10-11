var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var ImageModule = require('docxtemplater-image-module');

function base64DataURLToArrayBuffer(dataURL) {
	const base64Regex = /^data:image\/(png|jpg);base64,/;
	if (!base64Regex.test(dataURL)) {
		return false;
	}
	const stringBase64 = dataURL.replace(base64Regex, "");
	let binaryString;
	if (typeof window !== "undefined") {
		binaryString = window.atob(stringBase64);
	}
	else {
		binaryString = new Buffer(stringBase64, "base64").toString("binary");
	}
	const len = binaryString.length;
	const bytes = new Uint8Array(len);
	for (let i = 0; i < len; i++) {
		const ascii = binaryString.charCodeAt(i);
		bytes[i] = ascii;
	}
	return bytes.buffer;
}
const imageOpts = {
	getImage(tag) {
		return base64DataURLToArrayBuffer(tag);
	},
	getSize() {
		return [100, 100];
	},
};
var imageModule = new ImageModule(imageOpts);

//Load the docx file as a binary
var content = fs
	.readFileSync(path.resolve(__dirname, 'templateVariavel4.docx'), 'binary');

var zip = new JSZip(content);

var doc = new Docxtemplater();
doc.attachModule(imageModule);
doc.loadZip(zip);

//Estrutura de entrada!
var obj = {
	localRelatorio: 'CT Faria Lima',
	dataRelatorio: '21/09/2018',
	gerente: 'Ana Maria Rodrigues',
	auditor: 'Gilmar Silva Santos',
	//Começa o primeiro Reservatorio
	reservatorio: [{
		nomeclatura: 'Incêndio',
		tipo: 'Polietileno',
		localizacao: 'Pavimento Térreo',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',

		//-------------//
		portFechamento: 'Cadeado',
		portHermetico: 'Sim',
		portStatusGeral: 'Danificada',

		portFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		portComentario: 'A portinhola está completamente corroída e necessita ser trocada.',
		portNota: '75%',

		//-------------//
		impTipo: 'Asfáltica',
		impEstrutura: 'Pontos aparente',
		impStatusGeral: 'Soltando',
		impFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		impComentario: 'A impermeabilização asfásltica está sem a proteção mecânica (fora das normas).',
		impNota: '35%',

		//-------------//
		limpAgua: 'Limpa',
		limpBoiaNivel: 'OK',
		limpStatusGeral: 'OK',
		limpFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		limpComentario: 'A água da está suja',
		limpNota: '100%',

		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}],
	barrilete: [{
		nomeclatura: 'Incêndio',
		localizacao: 'Pavimento Térreo',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',
		
		//-------------//
		bombRolamento: 'Com vibrações',
		bombAcoplamento: 'OK',
		bombSeloMecanico: 'Irregular',
		bombAquecimento: 'Sim',
		bombPintura: 'Oxidada',
		bombStatusGeral: 'OK',
		bombFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bombComentario: 'Bomba está totalmente danificada',
		bombNota: '35%',
		
		//-------------//
		bfelFixacao: 'OK',
		bfelVibraStop: 'Irregular',
		bfelInstalacaoEletrica: 'Irregular',
		bfelStatusGeral: 'Com Corrosão',
		bfelFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bfelComentario: 'Bomba com aquecimento e oxidada',
		bfelNota: '35%',
		
		//-------------//
		tubuMaterial: 'Aço Carbono',
		tubuAcabamento: 'Envelopada',
		tubuVazamento: 'Não',
		tubuFixacao: 'NA',
		tubuFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		tubuComentario: 'Oxidação avançada nas tubulações',
		tubuNota: '75%',
		
		//-------------//
		regiInstalacao: 'OK',
		regiAcabamento: 'Irregular',
		regiFixacao: 'Irregular',
		regiFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		regiComentario: 'As fixações precisam de uma pintura geral',
		regiNota: '75%',
		
		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}],
	geradoraAguaQuente: [{
		nomeclatura: 'Incêndio',
		sistema: 'Bomba Calor',
		alimentacao: 'Elétrico',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',
		
		//-------------//
		boilMaterial: 'Cobre',
		boilIsolamentoTermico: 'Danificado',
		boilIsolamentoMecanico: 'Soltando',
		boilPortaInspecao: 'OK',
		boilTermDigital: 'OK',
		boilTermAnalogico: 'Irregular',
		boilValvulaAlivio: 'Danificado',
		boilStatusGeral: 'OK',
		boilFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		boilComentario: 'Boiler com Vazamento',
		boilNota: '35%',
		
		//-------------//
		aqueInstalacao: 'Corrosão',
		aqueAcabamento: 'OK',
		aqueDetectorGas: 'Irregular',
		aqueFixacao: 'OK',
		aqueFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		aqueComentario: 'Dois aquecedores estão desligados',
		aqueNota: '35%',
			
		//-------------//
		bombcInstalacao: 'Vazando',
		bombcAcabamento: 'OK',
		bombcFixacao: 'OK',
		bombcFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bombcComentario: 'Comprerssor Queimado',
		bombcNota: '35%',
		
		//-------------//
		placsPlacasSolares: 'Suja',
		placsTubulacao: 'Corrosão',
		placsFixacao: 'OK',
		placsFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		placsComentario: 'Sete Placas quebradas e sujas',
		placsNota: '35%',
		
		//-------------//
		bombRolamento: 'Com vibrações',
		bombAcoplamento: 'OK',
		bombSeloMecanico: 'Irregular',
		bombAquecimento: 'Sim',
		bombPintura: 'Oxidada',
		bombStatusGeral: 'OK',
		bombFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bombComentario: 'Bomba está totalmente danificada',
		bombNota: '35%',
		
		//-------------//
		bfelFixacao: 'OK',
		bfelVibraStop: 'Irregular',
		bfelInstalacaoEletrica: 'Irregular',
		bfelStatusGeral: 'Com Corrosão',
		bfelFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bfelComentario: 'Bomba com aquecimento e oxidada',
		bfelNota: '35%',
		
		//-------------//
		tubuMaterial: 'Aço Carbono',
		tubuAcabamento: 'Envelopada',
		tubuVazamento: 'Não',
		tubuFixacao: 'NA',
		tubuFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		tubuComentario: 'Oxidação avançada nas tubulações',
		tubuNota: '75%',
		
		//-------------//
		regiInstalacao: 'OK',
		regiAcabamento: 'Irregular',
		regiFixacao: 'Irregular',
		regiFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		regiComentario: 'As fixações precisam de uma pintura geral',
		regiNota: '75%',
		
		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}],
	tubulacoes: [{
		nomeclatura: 'Incêndio',
		alimentacao: 'Pavimento Térreo',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',
		
		//-------------//
		tubuMaterial: 'Aço Carbono',
		tubuAcabamento: 'Envelopada',
		tubuVazamento: 'Não',
		tubuFixacao: 'NA',
		tubuFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		tubuComentario: 'Oxidação avançada nas tubulações',
		tubuNota: '75%',
		
		//-------------//
		regiInstalacao: 'OK',
		regiAcabamento: 'Irregular',
		regiFixacao: 'Irregular',
		regiFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		regiComentario: 'As fixações precisam de uma pintura geral',
		regiNota: '75%',
		
		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}],
	bombas: [{
		nomeclatura: 'Incêndio',
		localizacao: 'Pavimento Térreo',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',
		
		//-------------//
		bombRolamento: 'Com vibrações',
		bombAcoplamento: 'OK',
		bombSeloMecanico: 'Irregular',
		bombAquecimento: 'Sim',
		bombPintura: 'Oxidada',
		bombStatusGeral: 'OK',
		bombFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bombComentario: 'Bomba está totalmente danificada',
		bombNota: '35%',
		
		//-------------//
		bfelFixacao: 'OK',
		bfelVibraStop: 'Irregular',
		bfelInstalacaoEletrica: 'Irregular',
		bfelStatusGeral: 'Com Corrosão',
		bfelFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		bfelComentario: 'Bomba com aquecimento e oxidada',
		bfelNota: '35%',
		
		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}],
	redeGas: [{
		nomeclatura: 'Incêndio',
		alimentacao: 'Pavimento Térreo',

		//-------------//
		itemAuditado: 'Não',
		planejado: 'Sim',
		executado: 'NA',
		apontamentos: 'Não',
		
		//-------------//
		tubuMaterial: 'Aço Carbono',
		tubuAcabamento: 'Envelopada',
		tubuVazamento: 'Não',
		tubuFixacao: 'NA',
		tubuFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		tubuComentario: 'Oxidação avançada nas tubulações',
		tubuNota: '75%',
		
		//-------------//
		regiInstalacao: 'OK',
		regiAcabamento: 'Irregular',
		regiFixacao: 'Irregular',
		regiFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		regiComentario: 'As fixações precisam de uma pintura geral',
		regiNota: '75%',
		
		//-------------//
		gasSistema: 'Gás Natural',
		gasTanques: 'Corrosão',
		gasDetectorGas: 'OK',
		gasExtintores: 'Não tem',
		gasLocalInstalacao: 'OK',
		gasFotos: [
			{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==' },
		],
		gasComentario: 'As fixações precisam de uma pintura geral',
		gasNota: '75%',
		
		
		//-------------//
		notaFinal: '47%',
		nivelRisco: 'MEDIO',
	}]
};

var newData = {
	localRelatorio: obj.localRelatorio,
	dataRelatorio: obj.dataRelatorio,
	gerente: obj.gerente,
	auditor: obj.auditor,
	reservatorio: [],
	barrilete: [],
	geradoraAguaQuente: [],
	tubulacoes: [],
	bombas: [],
	redeGas: []
};

//Adicionar reservatórios ajustados
for (let index = 0; index < obj.reservatorio.length; index++) {
	let objReservatorio = {};
	objReservatorio.nomeclatura = obj.reservatorio[index].nomeclatura;
	objReservatorio.tipo = obj.reservatorio[index].tipo;
	objReservatorio.localizacao = obj.reservatorio[index].localizacao;
	
	switch (obj.reservatorio[index].itemAuditado) {
		case 'Sim':
			objReservatorio.auItem = '';
			objReservatorio.auItemR = '';
			objReservatorio.auItemG = 'Sim';
			break;
		case 'Não':
			objReservatorio.auItem = '';
			objReservatorio.auItemR = 'Não';
			objReservatorio.auItemG = '';
			break;
		default:
			objReservatorio.auItem = 'NA';
			objReservatorio.auItemR = '';
			objReservatorio.auItemG = '';
			break;
	}
	switch (obj.reservatorio[index].planejado) {
		case 'Sim':
			objReservatorio.auPlan = '';
			objReservatorio.auPlanR = '';
			objReservatorio.auPlanG = obj.reservatorio[index].planejado;
			break;
		case 'Não':
			objReservatorio.auPlan = '';
			objReservatorio.auPlanR = obj.reservatorio[index].planejado;
			objReservatorio.auPlanG = '';
			break;
		default:
			objReservatorio.auPlan = obj.reservatorio[index].planejado;
			objReservatorio.auPlanR = '';
			objReservatorio.auPlanG = '';
			break;
	}
	switch (obj.reservatorio[index].executado) {
		case 'Sim':
			objReservatorio.auExe = '';
			objReservatorio.auExeR = '';
			objReservatorio.auExeG = obj.reservatorio[index].executado;
			break;
		case 'Não':
			objReservatorio.auExe = '';
			objReservatorio.auExeR = obj.reservatorio[index].executado;
			objReservatorio.auExeG = '';
			break;
		default:
			objReservatorio.auExe = obj.reservatorio[index].executado;
			objReservatorio.auExeR = '';
			objReservatorio.auExeG = '';
			break;
	}
	switch (obj.reservatorio[index].apontamentos) {
		case 'Sim':
			objReservatorio.auApo = '';
			objReservatorio.auApoR = obj.reservatorio[index].apontamentos;
			objReservatorio.auApoG = '';
			break;
		case 'Não':
			objReservatorio.auApo = '';
			objReservatorio.auApoR = '';
			objReservatorio.auApoG = obj.reservatorio[index].apontamentos;
			break;
		default:
			objReservatorio.auApo = obj.reservatorio[index].apontamentos;
			objReservatorio.auApoR = '';
			objReservatorio.auApoG = '';
			break;
	}
	
	switch (obj.reservatorio[index].portFechamento) {
		case 'OK':
		case 'Cadeado':
			objReservatorio.portFechR = '';
			objReservatorio.portFechG = obj.reservatorio[index].portFechamento;
			break;
		default:
			objReservatorio.portFechR = obj.reservatorio[index].portFechamento;
			objReservatorio.portFechG = '';
			break;
	}
	switch (obj.reservatorio[index].portHermetico) {
		case 'Sim':
			objReservatorio.portHerm = '';
			objReservatorio.portHermR = '';
			objReservatorio.portHermG = obj.reservatorio[index].portHermetico;
			break;
		case 'Não':
		case 'Irregular':
			objReservatorio.portHerm = '';
			objReservatorio.portHermR = obj.reservatorio[index].portHermetico;
			objReservatorio.portHermG = '';
			break;
		default:
			objReservatorio.portHerm = obj.reservatorio[index].portHermetico;
			objReservatorio.portHermR = '';
			objReservatorio.portHermG = '';
			break;
	}
	switch (obj.reservatorio[index].portStatusGeral) {
		case 'OK':
			objReservatorio.portStGeR = '';
			objReservatorio.portStGeG = obj.reservatorio[index].portStatusGeral;
			break;
		default:
			objReservatorio.portStGeR = obj.reservatorio[index].portStatusGeral;
			objReservatorio.portStGeG = '';
			break;
	}
	objReservatorio.portFotos = obj.reservatorio[index].portFotos;
	objReservatorio.portComentario = obj.reservatorio[index].portComentario;
	switch (obj.reservatorio[index].portNota) {
		case '35':
		case '35%':
			objReservatorio.portNotaR = obj.reservatorio[index].portNota;
			objReservatorio.portNotaY = '';
			objReservatorio.portNotaG = '';
			break;
		case '75':
		case '75%':
			objReservatorio.portNotaR = '';
			objReservatorio.portNotaY = obj.reservatorio[index].portNota;
			objReservatorio.portNotaG = '';
			break;
		default:
			objReservatorio.portNotaR = '';
			objReservatorio.portNotaY = '';
			objReservatorio.portNotaG = obj.reservatorio[index].portNota;
			break;
	}
	
	objReservatorio.impTipo = obj.reservatorio[index].impTipo;
	switch (obj.reservatorio[index].impEstrutura) {
		case 'OK':
			objReservatorio.impEstR = '';
			objReservatorio.impEstG = obj.reservatorio[index].impEstrutura;
			break;
		default:
			objReservatorio.impEstR = obj.reservatorio[index].impEstrutura;
			objReservatorio.impEstG = '';
			break;
	}
	switch (obj.reservatorio[index].impStatusGeral) {
		case 'OK':
			objReservatorio.impStGeR = '';
			objReservatorio.impStGeG = obj.reservatorio[index].impStatusGeral;
			break;
		default:
			objReservatorio.impStGeR = obj.reservatorio[index].impStatusGeral;
			objReservatorio.impStGeG = '';
			break;
	}
	objReservatorio.impFotos = obj.reservatorio[index].impFotos;
	objReservatorio.impComentario = obj.reservatorio[index].impComentario;
	switch (obj.reservatorio[index].impNota) {
		case '35':
		case '35%':
			objReservatorio.impNotaR = obj.reservatorio[index].impNota;
			objReservatorio.impNotaY = '';
			objReservatorio.impNotaG = '';
			break;
		case '75':
		case '75%':
			objReservatorio.impNotaR = '';
			objReservatorio.impNotaY = obj.reservatorio[index].impNota;
			objReservatorio.impNotaG = '';
			break;
		default:
			objReservatorio.impNotaR = '';
			objReservatorio.impNotaY = '';
			objReservatorio.impNotaG = obj.reservatorio[index].impNota;
			break;
	}
	
	switch (obj.reservatorio[index].limpAgua) {
		case 'Limpa':
			objReservatorio.limpAguaR = '';
			objReservatorio.limpAguaG = obj.reservatorio[index].limpAgua;
			break;
		default:
			objReservatorio.limpAguaR = obj.reservatorio[index].limpAgua;
			objReservatorio.limpAguaG = '';
			break;
	}
	switch (obj.reservatorio[index].limpBoiaNivel) {
		case 'OK':
			objReservatorio.limpBoiaR = '';
			objReservatorio.limpBoiaG = obj.reservatorio[index].limpBoiaNivel;
			break;
		default:
			objReservatorio.limpBoiaR = obj.reservatorio[index].limpBoiaNivel;
			objReservatorio.limpBoiaG = '';
			break;
	}
	switch (obj.reservatorio[index].limpStatusGeral) {
		case 'OK':
			objReservatorio.limpStGeR = '';
			objReservatorio.limpStGeG = obj.reservatorio[index].limpStatusGeral;
			break;
		default:
			objReservatorio.limpStGeR = obj.reservatorio[index].limpStatusGeral;
			objReservatorio.limpStGeG = '';
			break;
	}
	objReservatorio.limpFotos = obj.reservatorio[index].limpFotos;
	objReservatorio.limpComentario = obj.reservatorio[index].limpComentario;
	switch (obj.reservatorio[index].limpNota) {
		case '35':
		case '35%':
			objReservatorio.limpNotaR = obj.reservatorio[index].limpNota;
			objReservatorio.limpNotaY = '';
			objReservatorio.limpNotaG = '';
			break;
		case '75':
		case '75%':
			objReservatorio.limpNotaR = '';
			objReservatorio.limpNotaY = obj.reservatorio[index].limpNota;
			objReservatorio.limpNotaG = '';
			break;
		default:
			objReservatorio.limpNotaR = '';
			objReservatorio.limpNotaY = '';
			objReservatorio.limpNotaG = obj.reservatorio[index].limpNota;
			break;
	}
	
	objReservatorio.notaFinal = obj.reservatorio[index].notaFinal;
	switch (obj.reservatorio[index].nivelRisco) {
		case 'BAIXO':
			objReservatorio.nivelR = obj.reservatorio[index].nivelRisco;
			objReservatorio.nivelY = '';
			objReservatorio.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objReservatorio.nivelR = '';
			objReservatorio.nivelY = obj.reservatorio[index].nivelRisco;
			objReservatorio.nivelG = '';
			break;
		default:
			objReservatorio.nivelR = '';
			objReservatorio.nivelY = '';
			objReservatorio.nivelG = obj.reservatorio[index].nivelRisco;
			break;
	}
 	
	newData.reservatorio.push(objReservatorio); 	
}

//Adicionar barriletes ajustados
for (let index = 0; index < obj.barrilete.length; index++) {
	let objBarrilete = {};
	objBarrilete.nomeclatura = obj.barrilete[index].nomeclatura;
	objBarrilete.localizacao = obj.barrilete[index].localizacao;
	switch (obj.barrilete[index].itemAuditado) {
		case 'Sim':
			objBarrilete.auItem = '';
			objBarrilete.auItemR = '';
			objBarrilete.auItemG = 'Sim';
			break;
		case 'Não':
			objBarrilete.auItem = '';
			objBarrilete.auItemR = 'Não';
			objBarrilete.auItemG = '';
			break;
		default:
			objBarrilete.auItem = 'NA';
			objBarrilete.auItemR = '';
			objBarrilete.auItemG = '';
			break;
	}
	switch (obj.barrilete[index].planejado) {
		case 'Sim':
			objBarrilete.auPlan = '';
			objBarrilete.auPlanR = '';
			objBarrilete.auPlanG = obj.barrilete[index].planejado;
			break;
		case 'Não':
			objBarrilete.auPlan = '';
			objBarrilete.auPlanR = obj.barrilete[index].planejado;
			objBarrilete.auPlanG = '';
			break;
		default:
			objBarrilete.auPlan = obj.barrilete[index].planejado;
			objBarrilete.auPlanR = '';
			objBarrilete.auPlanG = '';
			break;
	}
	switch (obj.barrilete[index].executado) {
		case 'Sim':
			objBarrilete.auExe = '';
			objBarrilete.auExeR = '';
			objBarrilete.auExeG = obj.barrilete[index].executado;
			break;
		case 'Não':
			objBarrilete.auExe = '';
			objBarrilete.auExeR = obj.barrilete[index].executado;
			objBarrilete.auExeG = '';
			break;
		default:
			objBarrilete.auExe = obj.barrilete[index].executado;
			objBarrilete.auExeR = '';
			objBarrilete.auExeG = '';
			break;
	}
	switch (obj.barrilete[index].apontamentos) {
		case 'Sim':
			objBarrilete.auApo = '';
			objBarrilete.auApoR = obj.barrilete[index].apontamentos;
			objBarrilete.auApoG = '';
			break;
		case 'Não':
			objBarrilete.auApo = '';
			objBarrilete.auApoR = '';
			objBarrilete.auApoG = obj.barrilete[index].apontamentos;
			break;
		default:
			objBarrilete.auApo = obj.barrilete[index].apontamentos;
			objBarrilete.auApoR = '';
			objBarrilete.auApoG = '';
			break;
	}
	
	switch (obj.barrilete[index].bombRolamento) {
		case 'OK':
			objBarrilete.bombRolaR = '';
			objBarrilete.bombRolaG = obj.barrilete[index].bombRolamento;
			break;
		default:
			objBarrilete.bombRolaR = obj.barrilete[index].bombRolamento;
			objBarrilete.bombRolaG = '';
			break;
	}
	switch (obj.barrilete[index].bombAcoplamento) {
		case 'OK':
			objBarrilete.bombAcoR = '';
			objBarrilete.bombAcoG = obj.barrilete[index].bombAcoplamento;
			break;
		default:
			objBarrilete.bombAcoR = obj.barrilete[index].bombAcoplamento;
			objBarrilete.bombAcoG = '';
			break;
	}
	switch (obj.barrilete[index].bombSeloMecanico) {
		case 'OK':
			objBarrilete.bombSelMR = '';
			objBarrilete.bombSelMG = obj.barrilete[index].bombSeloMecanico;
			break;
		default:
			objBarrilete.bombSelMR = obj.barrilete[index].bombSeloMecanico;
			objBarrilete.bombSelMG = '';
			break;
	}
	switch (obj.barrilete[index].bombAquecimento) {
		case 'Não':
			objBarrilete.bombAqueR = '';
			objBarrilete.bombAqueG = obj.barrilete[index].bombAquecimento;
			break;
		default:
			objBarrilete.bombAqueR = obj.barrilete[index].bombAquecimento;
			objBarrilete.bombAqueG = '';
			break;
	}
	switch (obj.barrilete[index].bombPintura) {
		case 'OK':
			objBarrilete.bombPintR = '';
			objBarrilete.bombPintG = obj.barrilete[index].bombPintura;
			break;
		default:
			objBarrilete.bombPintR = obj.barrilete[index].bombPintura;
			objBarrilete.bombPintG = '';
			break;
	}
	switch (obj.barrilete[index].bombStatusGeral) {
		case 'OK':
			objBarrilete.bombStGeR = '';
			objBarrilete.bombStGeG = obj.barrilete[index].bombStatusGeral;
			break;
		default:
			objBarrilete.bombStGeR = obj.barrilete[index].bombStatusGeral;
			objBarrilete.bombStGeG = '';
			break;
	}
	objBarrilete.bombFotos = obj.barrilete[index].bombFotos;
	objBarrilete.bombComentario = obj.barrilete[index].bombComentario;
	switch (obj.barrilete[index].bombNota) {
		case '35':
		case '35%':
			objBarrilete.bombNotaR = obj.barrilete[index].bombNota;
			objBarrilete.bombNotaY = '';
			objBarrilete.bombNotaG = '';
			break;
		case '75':
		case '75%':
			objBarrilete.bombNotaR = '';
			objBarrilete.bombNotaY = obj.barrilete[index].bombNota;
			objBarrilete.bombNotaG = '';
			break;
		default:
			objBarrilete.bombNotaR = '';
			objBarrilete.bombNotaY = '';
			objBarrilete.bombNotaG = obj.barrilete[index].bombNota;
			break;
	}
	
	switch (obj.barrilete[index].bfelFixacao) {
		case 'OK':
			objBarrilete.bfelFixaR = '';
			objBarrilete.bfelFixaG = obj.barrilete[index].bfelFixacao;
			break;
		default:
			objBarrilete.bfelFixaR = obj.barrilete[index].bfelFixacao;
			objBarrilete.bfelFixaG = '';
			break;
	}
	switch (obj.barrilete[index].bfelVibraStop) {
		case 'OK':
			objBarrilete.bfelVibraR = '';
			objBarrilete.bfelVibraG = obj.barrilete[index].bfelVibraStop;
			break;
		default:
			objBarrilete.bfelVibraR = obj.barrilete[index].bfelVibraStop;
			objBarrilete.bfelVibraG = '';
			break;
	}
	switch (obj.barrilete[index].bfelInstalacaoEletrica) {
		case 'OK':
			objBarrilete.bfelIntEletR = '';
			objBarrilete.bfelIntEletG = obj.barrilete[index].bfelInstalacaoEletrica;
			break;
		default:
			objBarrilete.bfelIntEletR = obj.barrilete[index].bfelInstalacaoEletrica;
			objBarrilete.bfelIntEletG = '';
			break;
	}
	switch (obj.barrilete[index].bfelStatusGeral) {
		case 'OK':
			objBarrilete.bfelStGe  = '';
			objBarrilete.bfelStGeR = '';
			objBarrilete.bfelStGeG = obj.barrilete[index].bfelStatusGeral;
			break;
		case 'NA':
			objBarrilete.bfelStGe  = obj.barrilete[index].bfelStatusGeral;
			objBarrilete.bfelStGeR = '';
			objBarrilete.bfelStGeG = '';
			break;
		default:
			objBarrilete.bfelStGe  = '';
			objBarrilete.bfelStGeR = obj.barrilete[index].bfelStatusGeral;
			objBarrilete.bfelStGeG = '';
			break;
	}
	objBarrilete.bfelFotos = obj.barrilete[index].bfelFotos;
	objBarrilete.bfelComentario = obj.barrilete[index].bfelComentario;
	switch (obj.barrilete[index].bfelNota) {
		case '35':
		case '35%':
			objBarrilete.bfelNotaR = obj.barrilete[index].bfelNota;
			objBarrilete.bfelNotaY = '';
			objBarrilete.bfelNotaG = '';
			break;
		case '75':
		case '75%':
			objBarrilete.bfelNotaR = '';
			objBarrilete.bfelNotaY = obj.barrilete[index].bfelNota;
			objBarrilete.bfelNotaG = '';
			break;
		default:
			objBarrilete.bfelNotaR = '';
			objBarrilete.bfelNotaY = '';
			objBarrilete.bfelNotaG = obj.barrilete[index].bfelNota;
			break;
	}
	
	objBarrilete.tubuMat = obj.barrilete[index].tubuMaterial;
	switch (obj.barrilete[index].tubuAcabamento) {
		case 'Sem pintura':
		case 'Sem isolação':
			objBarrilete.tubuAcabaR = obj.barrilete[index].tubuAcabamento;
			objBarrilete.tubuAcabaG = '';
			break;
		default:
			objBarrilete.tubuAcabaR = '';
			objBarrilete.tubuAcabaG = obj.barrilete[index].tubuAcabamento;
			break;
	}
	switch (obj.barrilete[index].tubuVazamento) {
		case 'Não':
			objBarrilete.tubuVazaR = '';
			objBarrilete.tubuVazaG = obj.barrilete[index].tubuVazamento;
			break;
		default:
			objBarrilete.tubuVazaR = obj.barrilete[index].tubuVazamento;
			objBarrilete.tubuVazaG = '';
			break;
	}
	switch (obj.barrilete[index].tubuFixacao) {
		case 'OK':
			objBarrilete.tubuFixa  = '';
			objBarrilete.tubuFixaR = '';
			objBarrilete.tubuFixaG = obj.barrilete[index].tubuFixacao;
			break;
		case 'NA':
			objBarrilete.tubuFixa  = obj.barrilete[index].tubuFixacao;
			objBarrilete.tubuFixaR = '';
			objBarrilete.tubuFixaG = '';
			break;
		default:
			objBarrilete.tubuFixa  = '';
			objBarrilete.tubuFixaR = obj.barrilete[index].tubuFixacao;
			objBarrilete.tubuFixaG = '';
			break;
	}
	objBarrilete.tubuFotos = obj.barrilete[index].tubuFotos;
	objBarrilete.tubuComentario = obj.barrilete[index].tubuComentario;
	switch (obj.barrilete[index].tubuNota) {
		case '35':
		case '35%':
			objBarrilete.tubuNotaR = obj.barrilete[index].tubuNota;
			objBarrilete.tubuNotaY = '';
			objBarrilete.tubuNotaG = '';
			break;
		case '75':
		case '75%':
			objBarrilete.tubuNotaR = '';
			objBarrilete.tubuNotaY = obj.barrilete[index].tubuNota;
			objBarrilete.tubuNotaG = '';
			break;
		default:
			objBarrilete.tubuNotaR = '';
			objBarrilete.tubuNotaY = '';
			objBarrilete.tubuNotaG = obj.barrilete[index].tubuNota;
			break;
	}
	
	switch (obj.barrilete[index].regiInstalacao) {
		case 'OK':
			objBarrilete.regiInstR = '';
			objBarrilete.regiInstG = obj.barrilete[index].regiInstalacao;
			break;
		default:
			objBarrilete.regiInstR = obj.barrilete[index].regiInstalacao;
			objBarrilete.regiInstG = '';
			break;
	}
	switch (obj.barrilete[index].regiAcabamento) {
		case 'OK':
			objBarrilete.regiAcabaR = '';
			objBarrilete.regiAcabaG = obj.barrilete[index].regiAcabamento;
			break;
		default:
			objBarrilete.regiAcabaR = obj.barrilete[index].regiAcabamento;
			objBarrilete.regiAcabaG = '';
			break;
	}
	switch (obj.barrilete[index].regiFixacao) {
		case 'OK':
			objBarrilete.regiFixaR = '';
			objBarrilete.regiFixaG = obj.barrilete[index].regiFixacao;
			break;
		default:
			objBarrilete.regiFixaR = obj.barrilete[index].regiFixacao;
			objBarrilete.regiFixaG = '';
			break;
	}
	objBarrilete.regiFotos = obj.barrilete[index].regiFotos;
	objBarrilete.regiComentario = obj.barrilete[index].regiComentario;
	switch (obj.barrilete[index].regiNota) {
		case '35':
		case '35%':
			objBarrilete.regiNotaR = obj.barrilete[index].regiNota;
			objBarrilete.regiNotaY = '';
			objBarrilete.regiNotaG = '';
			break;
		case '75':
		case '75%':
			objBarrilete.regiNotaR = '';
			objBarrilete.regiNotaY = obj.barrilete[index].regiNota;
			objBarrilete.regiNotaG = '';
			break;
		default:
			objBarrilete.regiNotaR = '';
			objBarrilete.regiNotaY = '';
			objBarrilete.regiNotaG = obj.barrilete[index].regiNota;
			break;
	}
	
	objBarrilete.notaFinal = obj.barrilete[index].notaFinal;
	switch (obj.barrilete[index].nivelRisco) {
		case 'BAIXO':
			objBarrilete.nivelR = obj.barrilete[index].nivelRisco;
			objBarrilete.nivelY = '';
			objBarrilete.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objBarrilete.nivelR = '';
			objBarrilete.nivelY = obj.barrilete[index].nivelRisco;
			objBarrilete.nivelG = '';
			break;
		default:
			objBarrilete.nivelR = '';
			objBarrilete.nivelY = '';
			objBarrilete.nivelG = obj.barrilete[index].nivelRisco;
			break;
	}
 	
	newData.barrilete.push(objBarrilete); 	
}

//Adicionar geradora de agua quente ajustados
for (let index = 0; index < obj.geradoraAguaQuente.length; index++) {
	let objGeradoraAguaQuente = {};
	objGeradoraAguaQuente.nomeclatura = obj.geradoraAguaQuente[index].nomeclatura;
	objGeradoraAguaQuente.sistema = obj.geradoraAguaQuente[index].sistema;
	objGeradoraAguaQuente.alimentacao = obj.geradoraAguaQuente[index].alimentacao;
	switch (obj.geradoraAguaQuente[index].itemAuditado) {
		case 'Sim':
			objGeradoraAguaQuente.auItem = '';
			objGeradoraAguaQuente.auItemR = '';
			objGeradoraAguaQuente.auItemG = 'Sim';
			break;
		case 'Não':
			objGeradoraAguaQuente.auItem = '';
			objGeradoraAguaQuente.auItemR = 'Não';
			objGeradoraAguaQuente.auItemG = '';
			break;
		default:
			objGeradoraAguaQuente.auItem = 'NA';
			objGeradoraAguaQuente.auItemR = '';
			objGeradoraAguaQuente.auItemG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].planejado) {
		case 'Sim':
			objGeradoraAguaQuente.auPlan = '';
			objGeradoraAguaQuente.auPlanR = '';
			objGeradoraAguaQuente.auPlanG = obj.geradoraAguaQuente[index].planejado;
			break;
		case 'Não':
			objGeradoraAguaQuente.auPlan = '';
			objGeradoraAguaQuente.auPlanR = obj.geradoraAguaQuente[index].planejado;
			objGeradoraAguaQuente.auPlanG = '';
			break;
		default:
			objGeradoraAguaQuente.auPlan = obj.geradoraAguaQuente[index].planejado;
			objGeradoraAguaQuente.auPlanR = '';
			objGeradoraAguaQuente.auPlanG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].executado) {
		case 'Sim':
			objGeradoraAguaQuente.auExe = '';
			objGeradoraAguaQuente.auExeR = '';
			objGeradoraAguaQuente.auExeG = obj.geradoraAguaQuente[index].executado;
			break;
		case 'Não':
			objGeradoraAguaQuente.auExe = '';
			objGeradoraAguaQuente.auExeR = obj.geradoraAguaQuente[index].executado;
			objGeradoraAguaQuente.auExeG = '';
			break;
		default:
			objGeradoraAguaQuente.auExe = obj.geradoraAguaQuente[index].executado;
			objGeradoraAguaQuente.auExeR = '';
			objGeradoraAguaQuente.auExeG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].apontamentos) {
		case 'Sim':
			objGeradoraAguaQuente.auApo = '';
			objGeradoraAguaQuente.auApoR = obj.geradoraAguaQuente[index].apontamentos;
			objGeradoraAguaQuente.auApoG = '';
			break;
		case 'Não':
			objGeradoraAguaQuente.auApo = '';
			objGeradoraAguaQuente.auApoR = '';
			objGeradoraAguaQuente.auApoG = obj.geradoraAguaQuente[index].apontamentos;
			break;
		default:
			objGeradoraAguaQuente.auApo = obj.geradoraAguaQuente[index].apontamentos;
			objGeradoraAguaQuente.auApoR = '';
			objGeradoraAguaQuente.auApoG = '';
			break;
	}
	
	objGeradoraAguaQuente.boilMat = obj.geradoraAguaQuente[index].boilMaterial;
	switch (obj.geradoraAguaQuente[index].boilIsolamentoTermico) {
		case 'OK':
			objGeradoraAguaQuente.boilIsoTermR = '';
			objGeradoraAguaQuente.boilIsoTermG = obj.geradoraAguaQuente[index].boilIsolamentoTermico;
			break;
		default:
			objGeradoraAguaQuente.boilIsoTermR = obj.geradoraAguaQuente[index].boilIsolamentoTermico;
			objGeradoraAguaQuente.boilIsoTermG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilIsolamentoMecanico) {
		case 'OK':
			objGeradoraAguaQuente.boilIsoMecR = '';
			objGeradoraAguaQuente.boilIsoMecG = obj.geradoraAguaQuente[index].boilIsolamentoMecanico;
			break;
		default:
			objGeradoraAguaQuente.boilIsoMecR = obj.geradoraAguaQuente[index].boilIsolamentoMecanico;
			objGeradoraAguaQuente.boilIsoMecG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilPortaInspecao) {
		case 'OK':
			objGeradoraAguaQuente.boilPortInspR = '';
			objGeradoraAguaQuente.boilPortInspG = obj.geradoraAguaQuente[index].boilPortaInspecao;
			break;
		default:
			objGeradoraAguaQuente.boilPortInspR = obj.geradoraAguaQuente[index].boilPortaInspecao;
			objGeradoraAguaQuente.boilPortInspG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilTermDigital) {
		case 'OK':
			objGeradoraAguaQuente.boilTermDigR = '';
			objGeradoraAguaQuente.boilTermDigG = obj.geradoraAguaQuente[index].boilTermDigital;
			break;
		default:
			objGeradoraAguaQuente.boilTermDigR = obj.geradoraAguaQuente[index].boilTermDigital;
			objGeradoraAguaQuente.boilTermDigG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilTermAnalogico) {
		case 'OK':
			objGeradoraAguaQuente.boilTermAnaR = '';
			objGeradoraAguaQuente.boilTermAnaG = obj.geradoraAguaQuente[index].boilTermAnalogico;
			break;
		default:
			objGeradoraAguaQuente.boilTermAnaR = obj.geradoraAguaQuente[index].boilTermAnalogico;
			objGeradoraAguaQuente.boilTermAnaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilValvulaAlivio) {
		case 'OK':
			objGeradoraAguaQuente.boilValAliR = '';
			objGeradoraAguaQuente.boilValAliG = obj.geradoraAguaQuente[index].boilValvulaAlivio;
			break;
		default:
			objGeradoraAguaQuente.boilValAliR = obj.geradoraAguaQuente[index].boilValvulaAlivio;
			objGeradoraAguaQuente.boilValAliG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].boilStatusGeral) {
		case 'OK':
			objGeradoraAguaQuente.boilStGeR = '';
			objGeradoraAguaQuente.boilStGeG = obj.geradoraAguaQuente[index].boilStatusGeral;
			break;
		default:
			objGeradoraAguaQuente.boilStGeR = obj.geradoraAguaQuente[index].boilStatusGeral;
			objGeradoraAguaQuente.boilStGeG = '';
			break;
	}
	objGeradoraAguaQuente.boilFotos = obj.geradoraAguaQuente[index].boilFotos;
	objGeradoraAguaQuente.boilComentario = obj.geradoraAguaQuente[index].boilComentario;
	switch (obj.geradoraAguaQuente[index].boilNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.boilNotaR = obj.geradoraAguaQuente[index].boilNota;
			objGeradoraAguaQuente.boilNotaY = '';
			objGeradoraAguaQuente.boilNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.boilNotaR = '';
			objGeradoraAguaQuente.boilNotaY = obj.geradoraAguaQuente[index].boilNota;
			objGeradoraAguaQuente.boilNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.boilNotaR = '';
			objGeradoraAguaQuente.boilNotaY = '';
			objGeradoraAguaQuente.boilNotaG = obj.geradoraAguaQuente[index].boilNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].aqueInstalacao) {
		case 'OK':
			objGeradoraAguaQuente.aqueInstR = '';
			objGeradoraAguaQuente.aqueInstG = obj.geradoraAguaQuente[index].aqueInstalacao;
			break;
		default:
			objGeradoraAguaQuente.aqueInstR = obj.geradoraAguaQuente[index].aqueInstalacao;
			objGeradoraAguaQuente.aqueInstG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].aqueAcabamento) {
		case 'OK':
			objGeradoraAguaQuente.aqueAcabaR = '';
			objGeradoraAguaQuente.aqueAcabaG = obj.geradoraAguaQuente[index].aqueAcabamento;
			break;
		default:
			objGeradoraAguaQuente.aqueAcabaR = obj.geradoraAguaQuente[index].aqueAcabamento;
			objGeradoraAguaQuente.aqueAcabaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].aqueDetectorGas) {
		case 'OK':
			objGeradoraAguaQuente.aqueDetGasR = '';
			objGeradoraAguaQuente.aqueDetGasG = obj.geradoraAguaQuente[index].aqueDetectorGas;
			break;
		default:
			objGeradoraAguaQuente.aqueDetGasR = obj.geradoraAguaQuente[index].aqueDetectorGas;
			objGeradoraAguaQuente.aqueDetGasG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].aqueFixacao) {
		case 'OK':
			objGeradoraAguaQuente.aqueFixaR = '';
			objGeradoraAguaQuente.aqueFixaG = obj.geradoraAguaQuente[index].aqueFixacao;
			break;
		default:
			objGeradoraAguaQuente.aqueFixaR = obj.geradoraAguaQuente[index].aqueFixacao;
			objGeradoraAguaQuente.aqueFixaG = '';
			break;
	}
	objGeradoraAguaQuente.aqueFotos = obj.geradoraAguaQuente[index].aqueFotos;
	objGeradoraAguaQuente.aqueComentario = obj.geradoraAguaQuente[index].aqueComentario;
	switch (obj.geradoraAguaQuente[index].aqueNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.aqueNotaR = obj.geradoraAguaQuente[index].aqueNota;
			objGeradoraAguaQuente.aqueNotaY = '';
			objGeradoraAguaQuente.aqueNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.aqueNotaR = '';
			objGeradoraAguaQuente.aqueNotaY = obj.geradoraAguaQuente[index].aqueNota;
			objGeradoraAguaQuente.aqueNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.aqueNotaR = '';
			objGeradoraAguaQuente.aqueNotaY = '';
			objGeradoraAguaQuente.aqueNotaG = obj.geradoraAguaQuente[index].aqueNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].bombcInstalacao) {
		case 'OK':
			objGeradoraAguaQuente.bombcInstR = '';
			objGeradoraAguaQuente.bombcInstG = obj.geradoraAguaQuente[index].bombcInstalacao;
			break;
		default:
			objGeradoraAguaQuente.bombcInstR = obj.geradoraAguaQuente[index].bombcInstalacao;
			objGeradoraAguaQuente.bombcInstG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombcAcabamento) {
		case 'OK':
			objGeradoraAguaQuente.bombcAcabaR = '';
			objGeradoraAguaQuente.bombcAcabaG = obj.geradoraAguaQuente[index].bombcAcabamento;
			break;
		default:
			objGeradoraAguaQuente.bombcAcabaR = obj.geradoraAguaQuente[index].bombcAcabamento;
			objGeradoraAguaQuente.bombcAcabaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombcFixacao) {
		case 'OK':
			objGeradoraAguaQuente.bombcFixaR = '';
			objGeradoraAguaQuente.bombcFixaG = obj.geradoraAguaQuente[index].bombcFixacao;
			break;
		default:
			objGeradoraAguaQuente.bombcFixaR = obj.geradoraAguaQuente[index].bombcFixacao;
			objGeradoraAguaQuente.bombcFixaG = '';
			break;
	}
	objGeradoraAguaQuente.bombcFotos = obj.geradoraAguaQuente[index].bombcFotos;
	objGeradoraAguaQuente.bombcComentario = obj.geradoraAguaQuente[index].bombcComentario;
	switch (obj.geradoraAguaQuente[index].bombcNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.bombcNotaR = obj.geradoraAguaQuente[index].bombcNota;
			objGeradoraAguaQuente.bombcNotaY = '';
			objGeradoraAguaQuente.bombcNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.bombcNotaR = '';
			objGeradoraAguaQuente.bombcNotaY = obj.geradoraAguaQuente[index].bombcNota;
			objGeradoraAguaQuente.bombcNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.bombcNotaR = '';
			objGeradoraAguaQuente.bombcNotaY = '';
			objGeradoraAguaQuente.bombcNotaG = obj.geradoraAguaQuente[index].bombcNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].placsPlacasSolares) {
		case 'OK':
			objGeradoraAguaQuente.placsPlacaR = '';
			objGeradoraAguaQuente.placsPlacaG = obj.geradoraAguaQuente[index].placsPlacasSolares;
			break;
		default:
			objGeradoraAguaQuente.placsPlacaR = obj.geradoraAguaQuente[index].placsPlacasSolares;
			objGeradoraAguaQuente.placsPlacaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].placsTubulacao) {
		case 'OK':
			objGeradoraAguaQuente.placsTubuR = '';
			objGeradoraAguaQuente.placsTubuG = obj.geradoraAguaQuente[index].placsTubulacao;
			break;
		default:
			objGeradoraAguaQuente.placsTubuR = obj.geradoraAguaQuente[index].placsTubulacao;
			objGeradoraAguaQuente.placsTubuG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].placsFixacao) {
		case 'OK':
			objGeradoraAguaQuente.placsFixaR = '';
			objGeradoraAguaQuente.placsFixaG = obj.geradoraAguaQuente[index].placsFixacao;
			break;
		default:
			objGeradoraAguaQuente.placsFixaR = obj.geradoraAguaQuente[index].placsFixacao;
			objGeradoraAguaQuente.placsFixaG = '';
			break;
	}
	objGeradoraAguaQuente.placsFotos = obj.geradoraAguaQuente[index].placsFotos;
	objGeradoraAguaQuente.placsComentario = obj.geradoraAguaQuente[index].placsComentario;
	switch (obj.geradoraAguaQuente[index].placsNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.placsNotaR = obj.geradoraAguaQuente[index].placsNota;
			objGeradoraAguaQuente.placsNotaY = '';
			objGeradoraAguaQuente.placsNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.placsNotaR = '';
			objGeradoraAguaQuente.placsNotaY = obj.geradoraAguaQuente[index].placsNota;
			objGeradoraAguaQuente.placsNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.placsNotaR = '';
			objGeradoraAguaQuente.placsNotaY = '';
			objGeradoraAguaQuente.placsNotaG = obj.geradoraAguaQuente[index].placsNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].bombRolamento) {
		case 'OK':
			objGeradoraAguaQuente.bombRolaR = '';
			objGeradoraAguaQuente.bombRolaG = obj.geradoraAguaQuente[index].bombRolamento;
			break;
		default:
			objGeradoraAguaQuente.bombRolaR = obj.geradoraAguaQuente[index].bombRolamento;
			objGeradoraAguaQuente.bombRolaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombAcoplamento) {
		case 'OK':
			objGeradoraAguaQuente.bombAcoR = '';
			objGeradoraAguaQuente.bombAcoG = obj.geradoraAguaQuente[index].bombAcoplamento;
			break;
		default:
			objGeradoraAguaQuente.bombAcoR = obj.geradoraAguaQuente[index].bombAcoplamento;
			objGeradoraAguaQuente.bombAcoG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombSeloMecanico) {
		case 'OK':
			objGeradoraAguaQuente.bombSelMR = '';
			objGeradoraAguaQuente.bombSelMG = obj.geradoraAguaQuente[index].bombSeloMecanico;
			break;
		default:
			objGeradoraAguaQuente.bombSelMR = obj.geradoraAguaQuente[index].bombSeloMecanico;
			objGeradoraAguaQuente.bombSelMG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombAquecimento) {
		case 'Não':
			objGeradoraAguaQuente.bombAqueR = '';
			objGeradoraAguaQuente.bombAqueG = obj.geradoraAguaQuente[index].bombAquecimento;
			break;
		default:
			objGeradoraAguaQuente.bombAqueR = obj.geradoraAguaQuente[index].bombAquecimento;
			objGeradoraAguaQuente.bombAqueG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombPintura) {
		case 'OK':
			objGeradoraAguaQuente.bombPintR = '';
			objGeradoraAguaQuente.bombPintG = obj.geradoraAguaQuente[index].bombPintura;
			break;
		default:
			objGeradoraAguaQuente.bombPintR = obj.geradoraAguaQuente[index].bombPintura;
			objGeradoraAguaQuente.bombPintG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bombStatusGeral) {
		case 'OK':
			objGeradoraAguaQuente.bombStGeR = '';
			objGeradoraAguaQuente.bombStGeG = obj.geradoraAguaQuente[index].bombStatusGeral;
			break;
		default:
			objGeradoraAguaQuente.bombStGeR = obj.geradoraAguaQuente[index].bombStatusGeral;
			objGeradoraAguaQuente.bombStGeG = '';
			break;
	}
	objGeradoraAguaQuente.bombFotos = obj.geradoraAguaQuente[index].bombFotos;
	objGeradoraAguaQuente.bombComentario = obj.geradoraAguaQuente[index].bombComentario;
	switch (obj.geradoraAguaQuente[index].bombNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.bombNotaR = obj.geradoraAguaQuente[index].bombNota;
			objGeradoraAguaQuente.bombNotaY = '';
			objGeradoraAguaQuente.bombNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.bombNotaR = '';
			objGeradoraAguaQuente.bombNotaY = obj.geradoraAguaQuente[index].bombNota;
			objGeradoraAguaQuente.bombNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.bombNotaR = '';
			objGeradoraAguaQuente.bombNotaY = '';
			objGeradoraAguaQuente.bombNotaG = obj.geradoraAguaQuente[index].bombNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].bfelFixacao) {
		case 'OK':
			objGeradoraAguaQuente.bfelFixaR = '';
			objGeradoraAguaQuente.bfelFixaG = obj.geradoraAguaQuente[index].bfelFixacao;
			break;
		default:
			objGeradoraAguaQuente.bfelFixaR = obj.geradoraAguaQuente[index].bfelFixacao;
			objGeradoraAguaQuente.bfelFixaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bfelVibraStop) {
		case 'OK':
			objGeradoraAguaQuente.bfelVibraR = '';
			objGeradoraAguaQuente.bfelVibraG = obj.geradoraAguaQuente[index].bfelVibraStop;
			break;
		default:
			objGeradoraAguaQuente.bfelVibraR = obj.geradoraAguaQuente[index].bfelVibraStop;
			objGeradoraAguaQuente.bfelVibraG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bfelInstalacaoEletrica) {
		case 'OK':
			objGeradoraAguaQuente.bfelIntEletR = '';
			objGeradoraAguaQuente.bfelIntEletG = obj.geradoraAguaQuente[index].bfelInstalacaoEletrica;
			break;
		default:
			objGeradoraAguaQuente.bfelIntEletR = obj.geradoraAguaQuente[index].bfelInstalacaoEletrica;
			objGeradoraAguaQuente.bfelIntEletG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].bfelStatusGeral) {
		case 'OK':
			objGeradoraAguaQuente.bfelStGe  = '';
			objGeradoraAguaQuente.bfelStGeR = '';
			objGeradoraAguaQuente.bfelStGeG = obj.geradoraAguaQuente[index].bfelStatusGeral;
			break;
		case 'NA':
			objGeradoraAguaQuente.bfelStGe  = obj.geradoraAguaQuente[index].bfelStatusGeral;
			objGeradoraAguaQuente.bfelStGeR = '';
			objGeradoraAguaQuente.bfelStGeG = '';
			break;
		default:
			objGeradoraAguaQuente.bfelStGe  = '';
			objGeradoraAguaQuente.bfelStGeR = obj.geradoraAguaQuente[index].bfelStatusGeral;
			objGeradoraAguaQuente.bfelStGeG = '';
			break;
	}
	objGeradoraAguaQuente.bfelFotos = obj.geradoraAguaQuente[index].bfelFotos;
	objGeradoraAguaQuente.bfelComentario = obj.geradoraAguaQuente[index].bfelComentario;
	switch (obj.geradoraAguaQuente[index].bfelNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.bfelNotaR = obj.geradoraAguaQuente[index].bfelNota;
			objGeradoraAguaQuente.bfelNotaY = '';
			objGeradoraAguaQuente.bfelNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.bfelNotaR = '';
			objGeradoraAguaQuente.bfelNotaY = obj.geradoraAguaQuente[index].bfelNota;
			objGeradoraAguaQuente.bfelNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.bfelNotaR = '';
			objGeradoraAguaQuente.bfelNotaY = '';
			objGeradoraAguaQuente.bfelNotaG = obj.geradoraAguaQuente[index].bfelNota;
			break;
	}
	
	objGeradoraAguaQuente.tubuMat = obj.geradoraAguaQuente[index].tubuMaterial;
	switch (obj.geradoraAguaQuente[index].tubuAcabamento) {
		case 'Sem pintura':
		case 'Sem isolação':
			objGeradoraAguaQuente.tubuAcabaR = obj.geradoraAguaQuente[index].tubuAcabamento;
			objGeradoraAguaQuente.tubuAcabaG = '';
			break;
		default:
			objGeradoraAguaQuente.tubuAcabaR = '';
			objGeradoraAguaQuente.tubuAcabaG = obj.geradoraAguaQuente[index].tubuAcabamento;
			break;
	}
	switch (obj.geradoraAguaQuente[index].tubuVazamento) {
		case 'Não':
			objGeradoraAguaQuente.tubuVazaR = '';
			objGeradoraAguaQuente.tubuVazaG = obj.geradoraAguaQuente[index].tubuVazamento;
			break;
		default:
			objGeradoraAguaQuente.tubuVazaR = obj.geradoraAguaQuente[index].tubuVazamento;
			objGeradoraAguaQuente.tubuVazaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].tubuFixacao) {
		case 'OK':
			objGeradoraAguaQuente.tubuFixa  = '';
			objGeradoraAguaQuente.tubuFixaR = '';
			objGeradoraAguaQuente.tubuFixaG = obj.geradoraAguaQuente[index].tubuFixacao;
			break;
		case 'NA':
			objGeradoraAguaQuente.tubuFixa  = obj.geradoraAguaQuente[index].tubuFixacao;
			objGeradoraAguaQuente.tubuFixaR = '';
			objGeradoraAguaQuente.tubuFixaG = '';
			break;
		default:
			objGeradoraAguaQuente.tubuFixa  = '';
			objGeradoraAguaQuente.tubuFixaR = obj.geradoraAguaQuente[index].tubuFixacao;
			objGeradoraAguaQuente.tubuFixaG = '';
			break;
	}
	objGeradoraAguaQuente.tubuFotos = obj.geradoraAguaQuente[index].tubuFotos;
	objGeradoraAguaQuente.tubuComentario = obj.geradoraAguaQuente[index].tubuComentario;
	switch (obj.geradoraAguaQuente[index].tubuNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.tubuNotaR = obj.geradoraAguaQuente[index].tubuNota;
			objGeradoraAguaQuente.tubuNotaY = '';
			objGeradoraAguaQuente.tubuNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.tubuNotaR = '';
			objGeradoraAguaQuente.tubuNotaY = obj.geradoraAguaQuente[index].tubuNota;
			objGeradoraAguaQuente.tubuNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.tubuNotaR = '';
			objGeradoraAguaQuente.tubuNotaY = '';
			objGeradoraAguaQuente.tubuNotaG = obj.geradoraAguaQuente[index].tubuNota;
			break;
	}
	
	switch (obj.geradoraAguaQuente[index].regiInstalacao) {
		case 'OK':
			objGeradoraAguaQuente.regiInstR = '';
			objGeradoraAguaQuente.regiInstG = obj.geradoraAguaQuente[index].regiInstalacao;
			break;
		default:
			objGeradoraAguaQuente.regiInstR = obj.geradoraAguaQuente[index].regiInstalacao;
			objGeradoraAguaQuente.regiInstG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].regiAcabamento) {
		case 'OK':
			objGeradoraAguaQuente.regiAcabaR = '';
			objGeradoraAguaQuente.regiAcabaG = obj.geradoraAguaQuente[index].regiAcabamento;
			break;
		default:
			objGeradoraAguaQuente.regiAcabaR = obj.geradoraAguaQuente[index].regiAcabamento;
			objGeradoraAguaQuente.regiAcabaG = '';
			break;
	}
	switch (obj.geradoraAguaQuente[index].regiFixacao) {
		case 'OK':
			objGeradoraAguaQuente.regiFixaR = '';
			objGeradoraAguaQuente.regiFixaG = obj.geradoraAguaQuente[index].regiFixacao;
			break;
		default:
			objGeradoraAguaQuente.regiFixaR = obj.geradoraAguaQuente[index].regiFixacao;
			objGeradoraAguaQuente.regiFixaG = '';
			break;
	}
	objGeradoraAguaQuente.regiFotos = obj.geradoraAguaQuente[index].regiFotos;
	objGeradoraAguaQuente.regiComentario = obj.geradoraAguaQuente[index].regiComentario;
	switch (obj.geradoraAguaQuente[index].regiNota) {
		case '35':
		case '35%':
			objGeradoraAguaQuente.regiNotaR = obj.geradoraAguaQuente[index].regiNota;
			objGeradoraAguaQuente.regiNotaY = '';
			objGeradoraAguaQuente.regiNotaG = '';
			break;
		case '75':
		case '75%':
			objGeradoraAguaQuente.regiNotaR = '';
			objGeradoraAguaQuente.regiNotaY = obj.geradoraAguaQuente[index].regiNota;
			objGeradoraAguaQuente.regiNotaG = '';
			break;
		default:
			objGeradoraAguaQuente.regiNotaR = '';
			objGeradoraAguaQuente.regiNotaY = '';
			objGeradoraAguaQuente.regiNotaG = obj.geradoraAguaQuente[index].regiNota;
			break;
	}
	
	objGeradoraAguaQuente.notaFinal = obj.geradoraAguaQuente[index].notaFinal;
	switch (obj.geradoraAguaQuente[index].nivelRisco) {
		case 'BAIXO':
			objGeradoraAguaQuente.nivelR = obj.geradoraAguaQuente[index].nivelRisco;
			objGeradoraAguaQuente.nivelY = '';
			objGeradoraAguaQuente.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objGeradoraAguaQuente.nivelR = '';
			objGeradoraAguaQuente.nivelY = obj.geradoraAguaQuente[index].nivelRisco;
			objGeradoraAguaQuente.nivelG = '';
			break;
		default:
			objGeradoraAguaQuente.nivelR = '';
			objGeradoraAguaQuente.nivelY = '';
			objGeradoraAguaQuente.nivelG = obj.geradoraAguaQuente[index].nivelRisco;
			break;
	}
 	
	newData.geradoraAguaQuente.push(objGeradoraAguaQuente); 	
}

//Adicionar tubulações ajustadas
for (let index = 0; index < obj.tubulacoes.length; index++) {
	let objTubulacoes = {};
	objTubulacoes.nomeclatura = obj.tubulacoes[index].nomeclatura;
	objTubulacoes.alimentacao = obj.tubulacoes[index].alimentacao;
	switch (obj.tubulacoes[index].itemAuditado) {
		case 'Sim':
			objTubulacoes.auItem = '';
			objTubulacoes.auItemR = '';
			objTubulacoes.auItemG = 'Sim';
			break;
		case 'Não':
			objTubulacoes.auItem = '';
			objTubulacoes.auItemR = 'Não';
			objTubulacoes.auItemG = '';
			break;
		default:
			objTubulacoes.auItem = 'NA';
			objTubulacoes.auItemR = '';
			objTubulacoes.auItemG = '';
			break;
	}
	switch (obj.tubulacoes[index].planejado) {
		case 'Sim':
			objTubulacoes.auPlan = '';
			objTubulacoes.auPlanR = '';
			objTubulacoes.auPlanG = obj.tubulacoes[index].planejado;
			break;
		case 'Não':
			objTubulacoes.auPlan = '';
			objTubulacoes.auPlanR = obj.tubulacoes[index].planejado;
			objTubulacoes.auPlanG = '';
			break;
		default:
			objTubulacoes.auPlan = obj.tubulacoes[index].planejado;
			objTubulacoes.auPlanR = '';
			objTubulacoes.auPlanG = '';
			break;
	}
	switch (obj.tubulacoes[index].executado) {
		case 'Sim':
			objTubulacoes.auExe = '';
			objTubulacoes.auExeR = '';
			objTubulacoes.auExeG = obj.tubulacoes[index].executado;
			break;
		case 'Não':
			objTubulacoes.auExe = '';
			objTubulacoes.auExeR = obj.tubulacoes[index].executado;
			objTubulacoes.auExeG = '';
			break;
		default:
			objTubulacoes.auExe = obj.tubulacoes[index].executado;
			objTubulacoes.auExeR = '';
			objTubulacoes.auExeG = '';
			break;
	}
	switch (obj.tubulacoes[index].apontamentos) {
		case 'Sim':
			objTubulacoes.auApo = '';
			objTubulacoes.auApoR = obj.tubulacoes[index].apontamentos;
			objTubulacoes.auApoG = '';
			break;
		case 'Não':
			objTubulacoes.auApo = '';
			objTubulacoes.auApoR = '';
			objTubulacoes.auApoG = obj.tubulacoes[index].apontamentos;
			break;
		default:
			objTubulacoes.auApo = obj.tubulacoes[index].apontamentos;
			objTubulacoes.auApoR = '';
			objTubulacoes.auApoG = '';
			break;
	}
		
	objTubulacoes.tubuMat = obj.tubulacoes[index].tubuMaterial;
	switch (obj.tubulacoes[index].tubuAcabamento) {
		case 'Sem pintura':
		case 'Sem isolação':
			objTubulacoes.tubuAcabaR = obj.tubulacoes[index].tubuAcabamento;
			objTubulacoes.tubuAcabaG = '';
			break;
		default:
			objTubulacoes.tubuAcabaR = '';
			objTubulacoes.tubuAcabaG = obj.tubulacoes[index].tubuAcabamento;
			break;
	}
	switch (obj.tubulacoes[index].tubuVazamento) {
		case 'Não':
			objTubulacoes.tubuVazaR = '';
			objTubulacoes.tubuVazaG = obj.tubulacoes[index].tubuVazamento;
			break;
		default:
			objTubulacoes.tubuVazaR = obj.tubulacoes[index].tubuVazamento;
			objTubulacoes.tubuVazaG = '';
			break;
	}
	switch (obj.tubulacoes[index].tubuFixacao) {
		case 'OK':
			objTubulacoes.tubuFixa  = '';
			objTubulacoes.tubuFixaR = '';
			objTubulacoes.tubuFixaG = obj.tubulacoes[index].tubuFixacao;
			break;
		case 'NA':
			objTubulacoes.tubuFixa  = obj.tubulacoes[index].tubuFixacao;
			objTubulacoes.tubuFixaR = '';
			objTubulacoes.tubuFixaG = '';
			break;
		default:
			objTubulacoes.tubuFixa  = '';
			objTubulacoes.tubuFixaR = obj.tubulacoes[index].tubuFixacao;
			objTubulacoes.tubuFixaG = '';
			break;
	}
	objTubulacoes.tubuFotos = obj.tubulacoes[index].tubuFotos;
	objTubulacoes.tubuComentario = obj.tubulacoes[index].tubuComentario;
	switch (obj.tubulacoes[index].tubuNota) {
		case '35':
		case '35%':
			objTubulacoes.tubuNotaR = obj.tubulacoes[index].tubuNota;
			objTubulacoes.tubuNotaY = '';
			objTubulacoes.tubuNotaG = '';
			break;
		case '75':
		case '75%':
			objTubulacoes.tubuNotaR = '';
			objTubulacoes.tubuNotaY = obj.tubulacoes[index].tubuNota;
			objTubulacoes.tubuNotaG = '';
			break;
		default:
			objTubulacoes.tubuNotaR = '';
			objTubulacoes.tubuNotaY = '';
			objTubulacoes.tubuNotaG = obj.tubulacoes[index].tubuNota;
			break;
	}
	
	switch (obj.tubulacoes[index].regiInstalacao) {
		case 'OK':
			objTubulacoes.regiInstR = '';
			objTubulacoes.regiInstG = obj.tubulacoes[index].regiInstalacao;
			break;
		default:
			objTubulacoes.regiInstR = obj.tubulacoes[index].regiInstalacao;
			objTubulacoes.regiInstG = '';
			break;
	}
	switch (obj.tubulacoes[index].regiAcabamento) {
		case 'OK':
			objTubulacoes.regiAcabaR = '';
			objTubulacoes.regiAcabaG = obj.tubulacoes[index].regiAcabamento;
			break;
		default:
			objTubulacoes.regiAcabaR = obj.tubulacoes[index].regiAcabamento;
			objTubulacoes.regiAcabaG = '';
			break;
	}
	switch (obj.tubulacoes[index].regiFixacao) {
		case 'OK':
			objTubulacoes.regiFixaR = '';
			objTubulacoes.regiFixaG = obj.tubulacoes[index].regiFixacao;
			break;
		default:
			objTubulacoes.regiFixaR = obj.tubulacoes[index].regiFixacao;
			objTubulacoes.regiFixaG = '';
			break;
	}
	objTubulacoes.regiFotos = obj.tubulacoes[index].regiFotos;
	objTubulacoes.regiComentario = obj.tubulacoes[index].regiComentario;
	switch (obj.tubulacoes[index].regiNota) {
		case '35':
		case '35%':
			objTubulacoes.regiNotaR = obj.tubulacoes[index].regiNota;
			objTubulacoes.regiNotaY = '';
			objTubulacoes.regiNotaG = '';
			break;
		case '75':
		case '75%':
			objTubulacoes.regiNotaR = '';
			objTubulacoes.regiNotaY = obj.tubulacoes[index].regiNota;
			objTubulacoes.regiNotaG = '';
			break;
		default:
			objTubulacoes.regiNotaR = '';
			objTubulacoes.regiNotaY = '';
			objTubulacoes.regiNotaG = obj.tubulacoes[index].regiNota;
			break;
	}
	
	objTubulacoes.notaFinal = obj.tubulacoes[index].notaFinal;
	switch (obj.tubulacoes[index].nivelRisco) {
		case 'BAIXO':
			objTubulacoes.nivelR = obj.tubulacoes[index].nivelRisco;
			objTubulacoes.nivelY = '';
			objTubulacoes.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objTubulacoes.nivelR = '';
			objTubulacoes.nivelY = obj.tubulacoes[index].nivelRisco;
			objTubulacoes.nivelG = '';
			break;
		default:
			objTubulacoes.nivelR = '';
			objTubulacoes.nivelY = '';
			objTubulacoes.nivelG = obj.tubulacoes[index].nivelRisco;
			break;
	}
 	
	newData.tubulacoes.push(objTubulacoes); 	
}

//Adicionar bombas ajustados
for (let index = 0; index < obj.bombas.length; index++) {
	let objBomba = {};
	objBomba.nomeclatura = obj.bombas[index].nomeclatura;
	objBomba.localizacao = obj.bombas[index].localizacao;
	switch (obj.bombas[index].itemAuditado) {
		case 'Sim':
			objBomba.auItem = '';
			objBomba.auItemR = '';
			objBomba.auItemG = 'Sim';
			break;
		case 'Não':
			objBomba.auItem = '';
			objBomba.auItemR = 'Não';
			objBomba.auItemG = '';
			break;
		default:
			objBomba.auItem = 'NA';
			objBomba.auItemR = '';
			objBomba.auItemG = '';
			break;
	}
	switch (obj.bombas[index].planejado) {
		case 'Sim':
			objBomba.auPlan = '';
			objBomba.auPlanR = '';
			objBomba.auPlanG = obj.bombas[index].planejado;
			break;
		case 'Não':
			objBomba.auPlan = '';
			objBomba.auPlanR = obj.bombas[index].planejado;
			objBomba.auPlanG = '';
			break;
		default:
			objBomba.auPlan = obj.bombas[index].planejado;
			objBomba.auPlanR = '';
			objBomba.auPlanG = '';
			break;
	}
	switch (obj.bombas[index].executado) {
		case 'Sim':
			objBomba.auExe = '';
			objBomba.auExeR = '';
			objBomba.auExeG = obj.bombas[index].executado;
			break;
		case 'Não':
			objBomba.auExe = '';
			objBomba.auExeR = obj.bombas[index].executado;
			objBomba.auExeG = '';
			break;
		default:
			objBomba.auExe = obj.bombas[index].executado;
			objBomba.auExeR = '';
			objBomba.auExeG = '';
			break;
	}
	switch (obj.bombas[index].apontamentos) {
		case 'Sim':
			objBomba.auApo = '';
			objBomba.auApoR = obj.bombas[index].apontamentos;
			objBomba.auApoG = '';
			break;
		case 'Não':
			objBomba.auApo = '';
			objBomba.auApoR = '';
			objBomba.auApoG = obj.bombas[index].apontamentos;
			break;
		default:
			objBomba.auApo = obj.bombas[index].apontamentos;
			objBomba.auApoR = '';
			objBomba.auApoG = '';
			break;
	}
	
	switch (obj.bombas[index].bombRolamento) {
		case 'OK':
			objBomba.bombRolaR = '';
			objBomba.bombRolaG = obj.bombas[index].bombRolamento;
			break;
		default:
			objBomba.bombRolaR = obj.bombas[index].bombRolamento;
			objBomba.bombRolaG = '';
			break;
	}
	switch (obj.bombas[index].bombAcoplamento) {
		case 'OK':
			objBomba.bombAcoR = '';
			objBomba.bombAcoG = obj.bombas[index].bombAcoplamento;
			break;
		default:
			objBomba.bombAcoR = obj.bombas[index].bombAcoplamento;
			objBomba.bombAcoG = '';
			break;
	}
	switch (obj.bombas[index].bombSeloMecanico) {
		case 'OK':
			objBomba.bombSelMR = '';
			objBomba.bombSelMG = obj.bombas[index].bombSeloMecanico;
			break;
		default:
			objBomba.bombSelMR = obj.bombas[index].bombSeloMecanico;
			objBomba.bombSelMG = '';
			break;
	}
	switch (obj.bombas[index].bombAquecimento) {
		case 'Não':
			objBomba.bombAqueR = '';
			objBomba.bombAqueG = obj.bombas[index].bombAquecimento;
			break;
		default:
			objBomba.bombAqueR = obj.bombas[index].bombAquecimento;
			objBomba.bombAqueG = '';
			break;
	}
	switch (obj.bombas[index].bombPintura) {
		case 'OK':
			objBomba.bombPintR = '';
			objBomba.bombPintG = obj.bombas[index].bombPintura;
			break;
		default:
			objBomba.bombPintR = obj.bombas[index].bombPintura;
			objBomba.bombPintG = '';
			break;
	}
	switch (obj.bombas[index].bombStatusGeral) {
		case 'OK':
			objBomba.bombStGeR = '';
			objBomba.bombStGeG = obj.bombas[index].bombStatusGeral;
			break;
		default:
			objBomba.bombStGeR = obj.bombas[index].bombStatusGeral;
			objBomba.bombStGeG = '';
			break;
	}
	objBomba.bombFotos = obj.bombas[index].bombFotos;
	objBomba.bombComentario = obj.bombas[index].bombComentario;
	switch (obj.bombas[index].bombNota) {
		case '35':
		case '35%':
			objBomba.bombNotaR = obj.bombas[index].bombNota;
			objBomba.bombNotaY = '';
			objBomba.bombNotaG = '';
			break;
		case '75':
		case '75%':
			objBomba.bombNotaR = '';
			objBomba.bombNotaY = obj.bombas[index].bombNota;
			objBomba.bombNotaG = '';
			break;
		default:
			objBomba.bombNotaR = '';
			objBomba.bombNotaY = '';
			objBomba.bombNotaG = obj.bombas[index].bombNota;
			break;
	}
	
	switch (obj.bombas[index].bfelFixacao) {
		case 'OK':
			objBomba.bfelFixaR = '';
			objBomba.bfelFixaG = obj.bombas[index].bfelFixacao;
			break;
		default:
			objBomba.bfelFixaR = obj.bombas[index].bfelFixacao;
			objBomba.bfelFixaG = '';
			break;
	}
	switch (obj.bombas[index].bfelVibraStop) {
		case 'OK':
			objBomba.bfelVibraR = '';
			objBomba.bfelVibraG = obj.bombas[index].bfelVibraStop;
			break;
		default:
			objBomba.bfelVibraR = obj.bombas[index].bfelVibraStop;
			objBomba.bfelVibraG = '';
			break;
	}
	switch (obj.bombas[index].bfelInstalacaoEletrica) {
		case 'OK':
			objBomba.bfelIntEletR = '';
			objBomba.bfelIntEletG = obj.bombas[index].bfelInstalacaoEletrica;
			break;
		default:
			objBomba.bfelIntEletR = obj.bombas[index].bfelInstalacaoEletrica;
			objBomba.bfelIntEletG = '';
			break;
	}
	switch (obj.bombas[index].bfelStatusGeral) {
		case 'OK':
			objBomba.bfelStGe  = '';
			objBomba.bfelStGeR = '';
			objBomba.bfelStGeG = obj.bombas[index].bfelStatusGeral;
			break;
		case 'NA':
			objBomba.bfelStGe  = obj.bombas[index].bfelStatusGeral;
			objBomba.bfelStGeR = '';
			objBomba.bfelStGeG = '';
			break;
		default:
			objBomba.bfelStGe  = '';
			objBomba.bfelStGeR = obj.bombas[index].bfelStatusGeral;
			objBomba.bfelStGeG = '';
			break;
	}
	objBomba.bfelFotos = obj.bombas[index].bfelFotos;
	objBomba.bfelComentario = obj.bombas[index].bfelComentario;
	switch (obj.bombas[index].bfelNota) {
		case '35':
		case '35%':
			objBomba.bfelNotaR = obj.bombas[index].bfelNota;
			objBomba.bfelNotaY = '';
			objBomba.bfelNotaG = '';
			break;
		case '75':
		case '75%':
			objBomba.bfelNotaR = '';
			objBomba.bfelNotaY = obj.bombas[index].bfelNota;
			objBomba.bfelNotaG = '';
			break;
		default:
			objBomba.bfelNotaR = '';
			objBomba.bfelNotaY = '';
			objBomba.bfelNotaG = obj.bombas[index].bfelNota;
			break;
	}
	
	objBomba.notaFinal = obj.bombas[index].notaFinal;
	switch (obj.bombas[index].nivelRisco) {
		case 'BAIXO':
			objBomba.nivelR = obj.bombas[index].nivelRisco;
			objBomba.nivelY = '';
			objBomba.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objBomba.nivelR = '';
			objBomba.nivelY = obj.bombas[index].nivelRisco;
			objBomba.nivelG = '';
			break;
		default:
			objBomba.nivelR = '';
			objBomba.nivelY = '';
			objBomba.nivelG = obj.bombas[index].nivelRisco;
			break;
	}
	
	newData.bombas.push(objBomba); 	
}

//Adicionar rede de gas ajustada
for (let index = 0; index < obj.redeGas.length; index++) {
	let objRedeGas = {};
	objRedeGas.nomeclatura = obj.redeGas[index].nomeclatura;
	objRedeGas.alimentacao = obj.redeGas[index].alimentacao;
	switch (obj.redeGas[index].itemAuditado) {
		case 'Sim':
			objRedeGas.auItem = '';
			objRedeGas.auItemR = '';
			objRedeGas.auItemG = 'Sim';
			break;
		case 'Não':
			objRedeGas.auItem = '';
			objRedeGas.auItemR = 'Não';
			objRedeGas.auItemG = '';
			break;
		default:
			objRedeGas.auItem = 'NA';
			objRedeGas.auItemR = '';
			objRedeGas.auItemG = '';
			break;
	}
	switch (obj.redeGas[index].planejado) {
		case 'Sim':
			objRedeGas.auPlan = '';
			objRedeGas.auPlanR = '';
			objRedeGas.auPlanG = obj.redeGas[index].planejado;
			break;
		case 'Não':
			objRedeGas.auPlan = '';
			objRedeGas.auPlanR = obj.redeGas[index].planejado;
			objRedeGas.auPlanG = '';
			break;
		default:
			objRedeGas.auPlan = obj.redeGas[index].planejado;
			objRedeGas.auPlanR = '';
			objRedeGas.auPlanG = '';
			break;
	}
	switch (obj.redeGas[index].executado) {
		case 'Sim':
			objRedeGas.auExe = '';
			objRedeGas.auExeR = '';
			objRedeGas.auExeG = obj.redeGas[index].executado;
			break;
		case 'Não':
			objRedeGas.auExe = '';
			objRedeGas.auExeR = obj.redeGas[index].executado;
			objRedeGas.auExeG = '';
			break;
		default:
			objRedeGas.auExe = obj.redeGas[index].executado;
			objRedeGas.auExeR = '';
			objRedeGas.auExeG = '';
			break;
	}
	switch (obj.redeGas[index].apontamentos) {
		case 'Sim':
			objRedeGas.auApo = '';
			objRedeGas.auApoR = obj.redeGas[index].apontamentos;
			objRedeGas.auApoG = '';
			break;
		case 'Não':
			objRedeGas.auApo = '';
			objRedeGas.auApoR = '';
			objRedeGas.auApoG = obj.redeGas[index].apontamentos;
			break;
		default:
			objRedeGas.auApo = obj.redeGas[index].apontamentos;
			objRedeGas.auApoR = '';
			objRedeGas.auApoG = '';
			break;
	}
		
	objRedeGas.tubuMat = obj.redeGas[index].tubuMaterial;
	switch (obj.redeGas[index].tubuAcabamento) {
		case 'Sem pintura':
		case 'Sem isolação':
			objRedeGas.tubuAcabaR = obj.redeGas[index].tubuAcabamento;
			objRedeGas.tubuAcabaG = '';
			break;
		default:
			objRedeGas.tubuAcabaR = '';
			objRedeGas.tubuAcabaG = obj.redeGas[index].tubuAcabamento;
			break;
	}
	switch (obj.redeGas[index].tubuVazamento) {
		case 'Não':
			objRedeGas.tubuVazaR = '';
			objRedeGas.tubuVazaG = obj.redeGas[index].tubuVazamento;
			break;
		default:
			objRedeGas.tubuVazaR = obj.redeGas[index].tubuVazamento;
			objRedeGas.tubuVazaG = '';
			break;
	}
	switch (obj.redeGas[index].tubuFixacao) {
		case 'OK':
			objRedeGas.tubuFixa  = '';
			objRedeGas.tubuFixaR = '';
			objRedeGas.tubuFixaG = obj.redeGas[index].tubuFixacao;
			break;
		case 'NA':
			objRedeGas.tubuFixa  = obj.redeGas[index].tubuFixacao;
			objRedeGas.tubuFixaR = '';
			objRedeGas.tubuFixaG = '';
			break;
		default:
			objRedeGas.tubuFixa  = '';
			objRedeGas.tubuFixaR = obj.redeGas[index].tubuFixacao;
			objRedeGas.tubuFixaG = '';
			break;
	}
	objRedeGas.tubuFotos = obj.redeGas[index].tubuFotos;
	objRedeGas.tubuComentario = obj.redeGas[index].tubuComentario;
	switch (obj.redeGas[index].tubuNota) {
		case '35':
		case '35%':
			objRedeGas.tubuNotaR = obj.redeGas[index].tubuNota;
			objRedeGas.tubuNotaY = '';
			objRedeGas.tubuNotaG = '';
			break;
		case '75':
		case '75%':
			objRedeGas.tubuNotaR = '';
			objRedeGas.tubuNotaY = obj.redeGas[index].tubuNota;
			objRedeGas.tubuNotaG = '';
			break;
		default:
			objRedeGas.tubuNotaR = '';
			objRedeGas.tubuNotaY = '';
			objRedeGas.tubuNotaG = obj.redeGas[index].tubuNota;
			break;
	}
	
	switch (obj.redeGas[index].regiInstalacao) {
		case 'OK':
			objRedeGas.regiInstR = '';
			objRedeGas.regiInstG = obj.redeGas[index].regiInstalacao;
			break;
		default:
			objRedeGas.regiInstR = obj.redeGas[index].regiInstalacao;
			objRedeGas.regiInstG = '';
			break;
	}
	switch (obj.redeGas[index].regiAcabamento) {
		case 'OK':
			objRedeGas.regiAcabaR = '';
			objRedeGas.regiAcabaG = obj.redeGas[index].regiAcabamento;
			break;
		default:
			objRedeGas.regiAcabaR = obj.redeGas[index].regiAcabamento;
			objRedeGas.regiAcabaG = '';
			break;
	}
	switch (obj.redeGas[index].regiFixacao) {
		case 'OK':
			objRedeGas.regiFixaR = '';
			objRedeGas.regiFixaG = obj.redeGas[index].regiFixacao;
			break;
		default:
			objRedeGas.regiFixaR = obj.redeGas[index].regiFixacao;
			objRedeGas.regiFixaG = '';
			break;
	}
	objRedeGas.regiFotos = obj.redeGas[index].regiFotos;
	objRedeGas.regiComentario = obj.redeGas[index].regiComentario;
	switch (obj.redeGas[index].regiNota) {
		case '35':
		case '35%':
			objRedeGas.regiNotaR = obj.redeGas[index].regiNota;
			objRedeGas.regiNotaY = '';
			objRedeGas.regiNotaG = '';
			break;
		case '75':
		case '75%':
			objRedeGas.regiNotaR = '';
			objRedeGas.regiNotaY = obj.redeGas[index].regiNota;
			objRedeGas.regiNotaG = '';
			break;
		default:
			objRedeGas.regiNotaR = '';
			objRedeGas.regiNotaY = '';
			objRedeGas.regiNotaG = obj.redeGas[index].regiNota;
			break;
	}
	
	objRedeGas.gasSist = obj.redeGas[index].gasSistema;
	switch (obj.redeGas[index].gasTanques) {
		case 'OK':
			objRedeGas.gasTanq  = '';
			objRedeGas.gasTanqR = '';
			objRedeGas.gasTanqG = obj.redeGas[index].gasTanques;
			break;
		case 'NA':
			objRedeGas.gasTanq  = obj.redeGas[index].gasTanques;
			objRedeGas.gasTanqR = '';
			objRedeGas.gasTanqG = '';
			break;
		default:
			objRedeGas.gasTanq  = '';
			objRedeGas.gasTanqR = obj.redeGas[index].gasTanques;
			objRedeGas.gasTanqG = '';
			break;
	}
	switch (obj.redeGas[index].gasDetectorGas) {
		case 'OK':
			objRedeGas.gasDetecR = '';
			objRedeGas.gasDetecG = obj.redeGas[index].gasDetectorGas;
			break;
		default:
			objRedeGas.gasDetecR = obj.redeGas[index].gasDetectorGas;
			objRedeGas.gasDetecG = '';
			break;
	}
	switch (obj.redeGas[index].gasExtintores) {
		case 'OK':
			objRedeGas.gasExtintR = '';
			objRedeGas.gasExtintG = obj.redeGas[index].gasExtintores;
			break;
		default:
			objRedeGas.gasExtintR = obj.redeGas[index].gasExtintores;
			objRedeGas.gasExtintG = '';
			break;
	}
	switch (obj.redeGas[index].gasLocalInstalacao) {
		case 'OK':
			objRedeGas.gasLocalR = '';
			objRedeGas.gasLocalG = obj.redeGas[index].gasLocalInstalacao;
			break;
		default:
			objRedeGas.gasLocalR = obj.redeGas[index].gasLocalInstalacao;
			objRedeGas.gasLocalG = '';
			break;
	}
	objRedeGas.gasFotos = obj.redeGas[index].gasFotos;
	objRedeGas.gasComentario = obj.redeGas[index].gasComentario;
	switch (obj.redeGas[index].gasNota) {
		case '35':
		case '35%':
			objRedeGas.gasNotaR = obj.redeGas[index].gasNota;
			objRedeGas.gasNotaY = '';
			objRedeGas.gasNotaG = '';
			break;
		case '75':
		case '75%':
			objRedeGas.gasNotaR = '';
			objRedeGas.gasNotaY = obj.redeGas[index].gasNota;
			objRedeGas.gasNotaG = '';
			break;
		default:
			objRedeGas.gasNotaR = '';
			objRedeGas.gasNotaY = '';
			objRedeGas.gasNotaG = obj.redeGas[index].gasNota;
			break;
	}
	
	objRedeGas.notaFinal = obj.redeGas[index].notaFinal;
	switch (obj.redeGas[index].nivelRisco) {
		case 'BAIXO':
			objRedeGas.nivelR = obj.redeGas[index].nivelRisco;
			objRedeGas.nivelY = '';
			objRedeGas.nivelG = '';
			break;
		case 'MEDIO':
		case 'MÉDIO':
			objRedeGas.nivelR = '';
			objRedeGas.nivelY = obj.redeGas[index].nivelRisco;
			objRedeGas.nivelG = '';
			break;
		default:
			objRedeGas.nivelR = '';
			objRedeGas.nivelY = '';
			objRedeGas.nivelG = obj.redeGas[index].nivelRisco;
			break;
	}
 	
	newData.redeGas.push(objRedeGas); 	
}



//set the templateVariables
doc.setData(newData);

try {
	// render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
	doc.render();
}
catch (error) {
	var e = {
		message: error.message,
		name: error.name,
		stack: error.stack,
		properties: error.properties,
	}
	console.log(JSON.stringify({ error: e }));
	// The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
	throw error;
}

var buf = doc.getZip()
	.generate({ type: 'nodebuffer' });

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
fs.writeFileSync(path.resolve(__dirname, 'relatorioOut.docx'), buf);