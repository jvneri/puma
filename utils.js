// 'module.exports' is a node.JS specific feature, it does not work with regular JavaScript
module.exports =
	{
		// This is the function which will be called in the main file, which is server.js
		// The parameters 'name' and 'surname' will be provided inside the function
		// when the function is called in the main file.
		// Example: concatenameNames('John,'Doe');

		IsJsonString: function (str) {
			var text = str.toString();
			//console.log("in: " + text);
			if (typeof text !== "string") {
				console.log("false1");
				return false;
			}
			try {
				//console.log(true);
				JSON.parse(text);
				return true;
			}
			catch (error) {
				//console.log(false);
				return false;
			}
		},
		generateWordName: function () {
			var date = new Date();
			var aaaa = date.getFullYear();
			var gg = date.getDate();
			var mm = (date.getMonth() + 1);

			if (gg < 10)
				gg = "0" + gg;

			if (mm < 10)
				mm = "0" + mm;

			var cur_day = aaaa + "-" + mm + "-" + gg;

			var hours = date.getHours()
			var minutes = date.getMinutes()
			var seconds = date.getSeconds();

			if (hours < 10)
				hours = "0" + hours;

			if (minutes < 10)
				minutes = "0" + minutes;

			if (seconds < 10)
				seconds = "0" + seconds;

			return "words/" + cur_day + " " + hours + "-" + minutes + "-" + seconds + ".docx";
		},
		objectExempleStructure: function () {
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					portComentario: 'A portinhola está completamente corroída e necessita ser trocada.',
					portNota: '75%',

					//-------------//
					impTipo: 'Asfáltica',
					impEstrutura: 'Pontos aparente',
					impStatusGeral: 'Soltando',
					impFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					impComentario: 'A impermeabilização asfásltica está sem a proteção mecânica (fora das normas).',
					impNota: '35%',

					//-------------//
					limpAgua: 'Limpa',
					limpBoiaNivel: 'OK',
					limpStatusGeral: 'OK',
					limpFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bombComentario: 'Bomba está totalmente danificada',
					bombNota: '35%',

					//-------------//
					bfelFixacao: 'OK',
					bfelVibraStop: 'Irregular',
					bfelInstalacaoEletrica: 'Irregular',
					bfelStatusGeral: 'Com Corrosão',
					bfelFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bfelComentario: 'Bomba com aquecimento e oxidada',
					bfelNota: '35%',

					//-------------//
					tubuMaterial: 'Aço Carbono',
					tubuAcabamento: 'Envelopada',
					tubuVazamento: 'Não',
					tubuFixacao: 'NA',
					tubuFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					tubuComentario: 'Oxidação avançada nas tubulações',
					tubuNota: '75%',

					//-------------//
					regiInstalacao: 'OK',
					regiAcabamento: 'Irregular',
					regiFixacao: 'Irregular',
					regiFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					boilComentario: 'Boiler com Vazamento',
					boilNota: '35%',

					//-------------//
					aqueInstalacao: 'Corrosão',
					aqueAcabamento: 'OK',
					aqueDetectorGas: 'Irregular',
					aqueFixacao: 'OK',
					aqueFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					aqueComentario: 'Dois aquecedores estão desligados',
					aqueNota: '35%',

					//-------------//
					bombcInstalacao: 'Vazando',
					bombcAcabamento: 'OK',
					bombcFixacao: 'OK',
					bombcFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bombcComentario: 'Comprerssor Queimado',
					bombcNota: '35%',

					//-------------//
					placsPlacasSolares: 'Suja',
					placsTubulacao: 'Corrosão',
					placsFixacao: 'OK',
					placsFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bombComentario: 'Bomba está totalmente danificada',
					bombNota: '35%',

					//-------------//
					bfelFixacao: 'OK',
					bfelVibraStop: 'Irregular',
					bfelInstalacaoEletrica: 'Irregular',
					bfelStatusGeral: 'Com Corrosão',
					bfelFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bfelComentario: 'Bomba com aquecimento e oxidada',
					bfelNota: '35%',

					//-------------//
					tubuMaterial: 'Aço Carbono',
					tubuAcabamento: 'Envelopada',
					tubuVazamento: 'Não',
					tubuFixacao: 'NA',
					tubuFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					tubuComentario: 'Oxidação avançada nas tubulações',
					tubuNota: '75%',

					//-------------//
					regiInstalacao: 'OK',
					regiAcabamento: 'Irregular',
					regiFixacao: 'Irregular',
					regiFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					tubuComentario: 'Oxidação avançada nas tubulações',
					tubuNota: '75%',

					//-------------//
					regiInstalacao: 'OK',
					regiAcabamento: 'Irregular',
					regiFixacao: 'Irregular',
					regiFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					bombComentario: 'Bomba está totalmente danificada',
					bombNota: '35%',

					//-------------//
					bfelFixacao: 'OK',
					bfelVibraStop: 'Irregular',
					bfelInstalacaoEletrica: 'Irregular',
					bfelStatusGeral: 'Com Corrosão',
					bfelFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					tubuComentario: 'Oxidação avançada nas tubulações',
					tubuNota: '75%',

					//-------------//
					regiInstalacao: 'OK',
					regiAcabamento: 'Irregular',
					regiFixacao: 'Irregular',
					regiFotos: [
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
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
						{ img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKC.....==' },
					],
					gasComentario: 'As fixações precisam de uma pintura geral',
					gasNota: '75%',


					//-------------//
					notaFinal: '47%',
					nivelRisco: 'MEDIO',
				}]
			};
			return obj;
		},
	};