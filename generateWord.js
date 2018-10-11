module.exports =
	{
		generateWord: function (data) {
			var JSZip = require('jszip');
			var Docxtemplater = require('docxtemplater');
			var fs = require('fs');
			var path = require('path');
			var ImageModule = require('docxtemplater-image-module');
			var model = require('./model');
			var utils = require('./utils');

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
				.readFileSync(path.resolve(__dirname, 'templateVariavel.docx'), 'binary');

			var zip = new JSZip(content);

			var doc = new Docxtemplater();
			doc.attachModule(imageModule);
			doc.loadZip(zip);

			//Estrutura de entrada!
			//var obj = model.exampleStructure();
			var obj = data;
			//console.log(obj);
			var newData = {
				localRelatorio: obj.localRelatorio,
				dataRelatorio: obj.dataRelatorio,
				gerente: obj.gerente,
				auditor: obj.auditor,
				reservatorio: model.addReservatorios(obj.reservatorio),
				barrilete: model.addBarriletes(obj.barrilete),
				geradoraAguaQuente: model.addGeradoraAguaQuente(obj.geradoraAguaQuente),
				tubulacoes: model.addTubulacoes(obj.tubulacoes),
				bombas: model.addBombas(obj.bombas),
				redeGas: model.addRedesGas(obj.redeGas)
			};
			
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
			fs.writeFileSync(path.resolve(__dirname, utils.generateWordName()), buf);

		}

	};
