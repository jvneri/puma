// 'module.exports' is a node.JS specific feature, it does not work with regular JavaScript
module.exports =
    {
        // This is the function which will be called in the main file, which is server.js
        // The parameters 'name' and 'surname' will be provided inside the function
        // when the function is called in the main file.
        // Example: concatenameNames('John,'Doe');
        addReservatorios: function (arrayReservatorio) {
            //console.log(arrayReservatorio);
            var reservatorios = [];
            for (let index = 0; index < arrayReservatorio.length; index++) {
                let objReservatorio = {};
                objReservatorio.nomeclatura = arrayReservatorio[index].nomeclatura;
                objReservatorio.tipo = arrayReservatorio[index].tipo;
                objReservatorio.localizacao = arrayReservatorio[index].localizacao;

                switch (arrayReservatorio[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objReservatorio.auItem = '';
                        objReservatorio.auItemR = '';
                        objReservatorio.auItemG = arrayReservatorio[index].itemAuditado;
                        break;
                    case 'NAO':
                    case 'NÃO':
                        objReservatorio.auItem = '';
                        objReservatorio.auItemR = arrayReservatorio[index].itemAuditado;
                        objReservatorio.auItemG = '';
                        break;
                    default:
                        objReservatorio.auItem = arrayReservatorio[index].itemAuditado;
                        objReservatorio.auItemR = '';
                        objReservatorio.auItemG = '';
                        break;
                }
                switch (arrayReservatorio[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objReservatorio.auPlan = '';
                        objReservatorio.auPlanR = '';
                        objReservatorio.auPlanG = arrayReservatorio[index].planejado;
                        break;
                    case 'NAO': 
                    case 'NÃO':
                        objReservatorio.auPlan = '';
                        objReservatorio.auPlanR = arrayReservatorio[index].planejado;
                        objReservatorio.auPlanG = '';
                        break;
                    default:
                        objReservatorio.auPlan = arrayReservatorio[index].planejado;
                        objReservatorio.auPlanR = '';
                        objReservatorio.auPlanG = '';
                        break;
                }
                switch (arrayReservatorio[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objReservatorio.auExe = '';
                        objReservatorio.auExeR = '';
                        objReservatorio.auExeG = arrayReservatorio[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objReservatorio.auExe = '';
                        objReservatorio.auExeR = arrayReservatorio[index].executado;
                        objReservatorio.auExeG = '';
                        break;
                    default:
                        objReservatorio.auExe = arrayReservatorio[index].executado;
                        objReservatorio.auExeR = '';
                        objReservatorio.auExeG = '';
                        break;
                }
                switch (arrayReservatorio[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objReservatorio.auApo = '';
                        objReservatorio.auApoR = arrayReservatorio[index].apontamentos;
                        objReservatorio.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objReservatorio.auApo = '';
                        objReservatorio.auApoR = '';
                        objReservatorio.auApoG = arrayReservatorio[index].apontamentos;
                        break;
                    default:
                        objReservatorio.auApo = arrayReservatorio[index].apontamentos;
                        objReservatorio.auApoR = '';
                        objReservatorio.auApoG = '';
                        break;
                }

                switch (arrayReservatorio[index].portFechamento.toString().toUpperCase()) {
                    case 'OK':
                    case 'CADEADO':
                        objReservatorio.portFechR = '';
                        objReservatorio.portFechG = arrayReservatorio[index].portFechamento;
                        break;
                    default:
                        objReservatorio.portFechR = arrayReservatorio[index].portFechamento;
                        objReservatorio.portFechG = '';
                        break;
                }
                switch (arrayReservatorio[index].portHermetico.toString().toUpperCase()) {
                    case 'SIM':
                        objReservatorio.portHerm = '';
                        objReservatorio.portHermR = '';
                        objReservatorio.portHermG = arrayReservatorio[index].portHermetico;
                        break;
                    case 'NAO': case 'NÃO':
                    case 'IRREGULAR':
                        objReservatorio.portHerm = '';
                        objReservatorio.portHermR = arrayReservatorio[index].portHermetico;
                        objReservatorio.portHermG = '';
                        break;
                    default:
                        objReservatorio.portHerm = arrayReservatorio[index].portHermetico;
                        objReservatorio.portHermR = '';
                        objReservatorio.portHermG = '';
                        break;
                }
                switch (arrayReservatorio[index].portStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objReservatorio.portStGeR = '';
                        objReservatorio.portStGeG = arrayReservatorio[index].portStatusGeral;
                        break;
                    default:
                        objReservatorio.portStGeR = arrayReservatorio[index].portStatusGeral;
                        objReservatorio.portStGeG = '';
                        break;
                }
                objReservatorio.portFotos = arrayReservatorio[index].portFotos;
                objReservatorio.portComentario = arrayReservatorio[index].portComentario;
                switch (arrayReservatorio[index].portNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objReservatorio.portNotaR = arrayReservatorio[index].portNota;
                        objReservatorio.portNotaY = '';
                        objReservatorio.portNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objReservatorio.portNotaR = '';
                        objReservatorio.portNotaY = arrayReservatorio[index].portNota;
                        objReservatorio.portNotaG = '';
                        break;
                    default:
                        objReservatorio.portNotaR = '';
                        objReservatorio.portNotaY = '';
                        objReservatorio.portNotaG = arrayReservatorio[index].portNota;
                        break;
                }

                objReservatorio.impTipo = arrayReservatorio[index].impTipo;
                switch (arrayReservatorio[index].impEstrutura.toString().toUpperCase()) {
                    case 'OK':
                        objReservatorio.impEstR = '';
                        objReservatorio.impEstG = arrayReservatorio[index].impEstrutura;
                        break;
                    default:
                        objReservatorio.impEstR = arrayReservatorio[index].impEstrutura;
                        objReservatorio.impEstG = '';
                        break;
                }
                switch (arrayReservatorio[index].impStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objReservatorio.impStGeR = '';
                        objReservatorio.impStGeG = arrayReservatorio[index].impStatusGeral;
                        break;
                    default:
                        objReservatorio.impStGeR = arrayReservatorio[index].impStatusGeral;
                        objReservatorio.impStGeG = '';
                        break;
                }
                objReservatorio.impFotos = arrayReservatorio[index].impFotos;
                objReservatorio.impComentario = arrayReservatorio[index].impComentario;
                switch (arrayReservatorio[index].impNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objReservatorio.impNotaR = arrayReservatorio[index].impNota;
                        objReservatorio.impNotaY = '';
                        objReservatorio.impNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objReservatorio.impNotaR = '';
                        objReservatorio.impNotaY = arrayReservatorio[index].impNota;
                        objReservatorio.impNotaG = '';
                        break;
                    default:
                        objReservatorio.impNotaR = '';
                        objReservatorio.impNotaY = '';
                        objReservatorio.impNotaG = arrayReservatorio[index].impNota;
                        break;
                }

                switch (arrayReservatorio[index].limpAgua.toString().toUpperCase()) {
                    case 'LIMPA':
                        objReservatorio.limpAguaR = '';
                        objReservatorio.limpAguaG = arrayReservatorio[index].limpAgua;
                        break;
                    default:
                        objReservatorio.limpAguaR = arrayReservatorio[index].limpAgua;
                        objReservatorio.limpAguaG = '';
                        break;
                }
                switch (arrayReservatorio[index].limpBoiaNivel.toString().toUpperCase()) {
                    case 'OK':
                        objReservatorio.limpBoiaR = '';
                        objReservatorio.limpBoiaG = arrayReservatorio[index].limpBoiaNivel;
                        break;
                    default:
                        objReservatorio.limpBoiaR = arrayReservatorio[index].limpBoiaNivel;
                        objReservatorio.limpBoiaG = '';
                        break;
                }
                switch (arrayReservatorio[index].limpStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objReservatorio.limpStGeR = '';
                        objReservatorio.limpStGeG = arrayReservatorio[index].limpStatusGeral;
                        break;
                    default:
                        objReservatorio.limpStGeR = arrayReservatorio[index].limpStatusGeral;
                        objReservatorio.limpStGeG = '';
                        break;
                }
                objReservatorio.limpFotos = arrayReservatorio[index].limpFotos;
                objReservatorio.limpComentario = arrayReservatorio[index].limpComentario;
                switch (arrayReservatorio[index].limpNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objReservatorio.limpNotaR = arrayReservatorio[index].limpNota;
                        objReservatorio.limpNotaY = '';
                        objReservatorio.limpNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objReservatorio.limpNotaR = '';
                        objReservatorio.limpNotaY = arrayReservatorio[index].limpNota;
                        objReservatorio.limpNotaG = '';
                        break;
                    default:
                        objReservatorio.limpNotaR = '';
                        objReservatorio.limpNotaY = '';
                        objReservatorio.limpNotaG = arrayReservatorio[index].limpNota;
                        break;
                }

                objReservatorio.notaFinal = arrayReservatorio[index].notaFinal;
                switch (arrayReservatorio[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objReservatorio.nivelR = arrayReservatorio[index].nivelRisco;
                        objReservatorio.nivelY = '';
                        objReservatorio.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objReservatorio.nivelR = '';
                        objReservatorio.nivelY = arrayReservatorio[index].nivelRisco;
                        objReservatorio.nivelG = '';
                        break;
                    default:
                        objReservatorio.nivelR = '';
                        objReservatorio.nivelY = '';
                        objReservatorio.nivelG = arrayReservatorio[index].nivelRisco;
                        break;
                }

                reservatorios.push(objReservatorio);
            }

            return reservatorios;
        },

        addBarriletes: function (arrayBarrilete) {
            var barriletes = [];
            for (let index = 0; index < arrayBarrilete.length; index++) {
                let objBarrilete = {};
                objBarrilete.nomeclatura = arrayBarrilete[index].nomeclatura;
                objBarrilete.localizacao = arrayBarrilete[index].localizacao;
                switch (arrayBarrilete[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objBarrilete.auItem = '';
                        objBarrilete.auItemR = '';
                        objBarrilete.auItemG = 'Sim';
                        break;
                    case 'NAO': case 'NÃO':
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
                switch (arrayBarrilete[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objBarrilete.auPlan = '';
                        objBarrilete.auPlanR = '';
                        objBarrilete.auPlanG = arrayBarrilete[index].planejado;
                        break;
                    case 'NAO': case 'NÃO':
                        objBarrilete.auPlan = '';
                        objBarrilete.auPlanR = arrayBarrilete[index].planejado;
                        objBarrilete.auPlanG = '';
                        break;
                    default:
                        objBarrilete.auPlan = arrayBarrilete[index].planejado;
                        objBarrilete.auPlanR = '';
                        objBarrilete.auPlanG = '';
                        break;
                }
                switch (arrayBarrilete[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objBarrilete.auExe = '';
                        objBarrilete.auExeR = '';
                        objBarrilete.auExeG = arrayBarrilete[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objBarrilete.auExe = '';
                        objBarrilete.auExeR = arrayBarrilete[index].executado;
                        objBarrilete.auExeG = '';
                        break;
                    default:
                        objBarrilete.auExe = arrayBarrilete[index].executado;
                        objBarrilete.auExeR = '';
                        objBarrilete.auExeG = '';
                        break;
                }
                switch (arrayBarrilete[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objBarrilete.auApo = '';
                        objBarrilete.auApoR = arrayBarrilete[index].apontamentos;
                        objBarrilete.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objBarrilete.auApo = '';
                        objBarrilete.auApoR = '';
                        objBarrilete.auApoG = arrayBarrilete[index].apontamentos;
                        break;
                    default:
                        objBarrilete.auApo = arrayBarrilete[index].apontamentos;
                        objBarrilete.auApoR = '';
                        objBarrilete.auApoG = '';
                        break;
                }

                switch (arrayBarrilete[index].bombRolamento.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bombRolaR = '';
                        objBarrilete.bombRolaG = arrayBarrilete[index].bombRolamento;
                        break;
                    default:
                        objBarrilete.bombRolaR = arrayBarrilete[index].bombRolamento;
                        objBarrilete.bombRolaG = '';
                        break;
                }
                switch (arrayBarrilete[index].bombAcoplamento.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bombAcoR = '';
                        objBarrilete.bombAcoG = arrayBarrilete[index].bombAcoplamento;
                        break;
                    default:
                        objBarrilete.bombAcoR = arrayBarrilete[index].bombAcoplamento;
                        objBarrilete.bombAcoG = '';
                        break;
                }
                switch (arrayBarrilete[index].bombSeloMecanico.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bombSelMR = '';
                        objBarrilete.bombSelMG = arrayBarrilete[index].bombSeloMecanico;
                        break;
                    default:
                        objBarrilete.bombSelMR = arrayBarrilete[index].bombSeloMecanico;
                        objBarrilete.bombSelMG = '';
                        break;
                }
                switch (arrayBarrilete[index].bombAquecimento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objBarrilete.bombAqueR = '';
                        objBarrilete.bombAqueG = arrayBarrilete[index].bombAquecimento;
                        break;
                    default:
                        objBarrilete.bombAqueR = arrayBarrilete[index].bombAquecimento;
                        objBarrilete.bombAqueG = '';
                        break;
                }
                switch (arrayBarrilete[index].bombPintura.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bombPintR = '';
                        objBarrilete.bombPintG = arrayBarrilete[index].bombPintura;
                        break;
                    default:
                        objBarrilete.bombPintR = arrayBarrilete[index].bombPintura;
                        objBarrilete.bombPintG = '';
                        break;
                }
                switch (arrayBarrilete[index].bombStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bombStGeR = '';
                        objBarrilete.bombStGeG = arrayBarrilete[index].bombStatusGeral;
                        break;
                    default:
                        objBarrilete.bombStGeR = arrayBarrilete[index].bombStatusGeral;
                        objBarrilete.bombStGeG = '';
                        break;
                }
                objBarrilete.bombFotos = arrayBarrilete[index].bombFotos;
                objBarrilete.bombComentario = arrayBarrilete[index].bombComentario;
                switch (arrayBarrilete[index].bombNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBarrilete.bombNotaR = arrayBarrilete[index].bombNota;
                        objBarrilete.bombNotaY = '';
                        objBarrilete.bombNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBarrilete.bombNotaR = '';
                        objBarrilete.bombNotaY = arrayBarrilete[index].bombNota;
                        objBarrilete.bombNotaG = '';
                        break;
                    default:
                        objBarrilete.bombNotaR = '';
                        objBarrilete.bombNotaY = '';
                        objBarrilete.bombNotaG = arrayBarrilete[index].bombNota;
                        break;
                }

                switch (arrayBarrilete[index].bfelFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bfelFixaR = '';
                        objBarrilete.bfelFixaG = arrayBarrilete[index].bfelFixacao;
                        break;
                    default:
                        objBarrilete.bfelFixaR = arrayBarrilete[index].bfelFixacao;
                        objBarrilete.bfelFixaG = '';
                        break;
                }
                switch (arrayBarrilete[index].bfelVibraStop.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bfelVibraR = '';
                        objBarrilete.bfelVibraG = arrayBarrilete[index].bfelVibraStop;
                        break;
                    default:
                        objBarrilete.bfelVibraR = arrayBarrilete[index].bfelVibraStop;
                        objBarrilete.bfelVibraG = '';
                        break;
                }
                switch (arrayBarrilete[index].bfelInstalacaoEletrica.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bfelIntEletR = '';
                        objBarrilete.bfelIntEletG = arrayBarrilete[index].bfelInstalacaoEletrica;
                        break;
                    default:
                        objBarrilete.bfelIntEletR = arrayBarrilete[index].bfelInstalacaoEletrica;
                        objBarrilete.bfelIntEletG = '';
                        break;
                }
                switch (arrayBarrilete[index].bfelStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.bfelStGe = '';
                        objBarrilete.bfelStGeR = '';
                        objBarrilete.bfelStGeG = arrayBarrilete[index].bfelStatusGeral;
                        break;
                    case 'NA':
                        objBarrilete.bfelStGe = arrayBarrilete[index].bfelStatusGeral;
                        objBarrilete.bfelStGeR = '';
                        objBarrilete.bfelStGeG = '';
                        break;
                    default:
                        objBarrilete.bfelStGe = '';
                        objBarrilete.bfelStGeR = arrayBarrilete[index].bfelStatusGeral;
                        objBarrilete.bfelStGeG = '';
                        break;
                }
                objBarrilete.bfelFotos = arrayBarrilete[index].bfelFotos;
                objBarrilete.bfelComentario = arrayBarrilete[index].bfelComentario;
                switch (arrayBarrilete[index].bfelNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBarrilete.bfelNotaR = arrayBarrilete[index].bfelNota;
                        objBarrilete.bfelNotaY = '';
                        objBarrilete.bfelNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBarrilete.bfelNotaR = '';
                        objBarrilete.bfelNotaY = arrayBarrilete[index].bfelNota;
                        objBarrilete.bfelNotaG = '';
                        break;
                    default:
                        objBarrilete.bfelNotaR = '';
                        objBarrilete.bfelNotaY = '';
                        objBarrilete.bfelNotaG = arrayBarrilete[index].bfelNota;
                        break;
                }

                objBarrilete.tubuMat = arrayBarrilete[index].tubuMaterial;
                switch (arrayBarrilete[index].tubuAcabamento.toString().toUpperCase()) {
                    case 'SEM PINTURA':
                    case 'SEM ISOLAÇÃO':
                        objBarrilete.tubuAcabaR = arrayBarrilete[index].tubuAcabamento;
                        objBarrilete.tubuAcabaG = '';
                        break;
                    default:
                        objBarrilete.tubuAcabaR = '';
                        objBarrilete.tubuAcabaG = arrayBarrilete[index].tubuAcabamento;
                        break;
                }
                switch (arrayBarrilete[index].tubuVazamento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objBarrilete.tubuVazaR = '';
                        objBarrilete.tubuVazaG = arrayBarrilete[index].tubuVazamento;
                        break;
                    default:
                        objBarrilete.tubuVazaR = arrayBarrilete[index].tubuVazamento;
                        objBarrilete.tubuVazaG = '';
                        break;
                }
                switch (arrayBarrilete[index].tubuFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.tubuFixa = '';
                        objBarrilete.tubuFixaR = '';
                        objBarrilete.tubuFixaG = arrayBarrilete[index].tubuFixacao;
                        break;
                    case 'NA':
                        objBarrilete.tubuFixa = arrayBarrilete[index].tubuFixacao;
                        objBarrilete.tubuFixaR = '';
                        objBarrilete.tubuFixaG = '';
                        break;
                    default:
                        objBarrilete.tubuFixa = '';
                        objBarrilete.tubuFixaR = arrayBarrilete[index].tubuFixacao;
                        objBarrilete.tubuFixaG = '';
                        break;
                }
                objBarrilete.tubuFotos = arrayBarrilete[index].tubuFotos;
                objBarrilete.tubuComentario = arrayBarrilete[index].tubuComentario;
                switch (arrayBarrilete[index].tubuNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBarrilete.tubuNotaR = arrayBarrilete[index].tubuNota;
                        objBarrilete.tubuNotaY = '';
                        objBarrilete.tubuNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBarrilete.tubuNotaR = '';
                        objBarrilete.tubuNotaY = arrayBarrilete[index].tubuNota;
                        objBarrilete.tubuNotaG = '';
                        break;
                    default:
                        objBarrilete.tubuNotaR = '';
                        objBarrilete.tubuNotaY = '';
                        objBarrilete.tubuNotaG = arrayBarrilete[index].tubuNota;
                        break;
                }

                switch (arrayBarrilete[index].regiInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.regiInstR = '';
                        objBarrilete.regiInstG = arrayBarrilete[index].regiInstalacao;
                        break;
                    default:
                        objBarrilete.regiInstR = arrayBarrilete[index].regiInstalacao;
                        objBarrilete.regiInstG = '';
                        break;
                }
                switch (arrayBarrilete[index].regiAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.regiAcabaR = '';
                        objBarrilete.regiAcabaG = arrayBarrilete[index].regiAcabamento;
                        break;
                    default:
                        objBarrilete.regiAcabaR = arrayBarrilete[index].regiAcabamento;
                        objBarrilete.regiAcabaG = '';
                        break;
                }
                switch (arrayBarrilete[index].regiFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objBarrilete.regiFixaR = '';
                        objBarrilete.regiFixaG = arrayBarrilete[index].regiFixacao;
                        break;
                    default:
                        objBarrilete.regiFixaR = arrayBarrilete[index].regiFixacao;
                        objBarrilete.regiFixaG = '';
                        break;
                }
                objBarrilete.regiFotos = arrayBarrilete[index].regiFotos;
                objBarrilete.regiComentario = arrayBarrilete[index].regiComentario;
                switch (arrayBarrilete[index].regiNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBarrilete.regiNotaR = arrayBarrilete[index].regiNota;
                        objBarrilete.regiNotaY = '';
                        objBarrilete.regiNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBarrilete.regiNotaR = '';
                        objBarrilete.regiNotaY = arrayBarrilete[index].regiNota;
                        objBarrilete.regiNotaG = '';
                        break;
                    default:
                        objBarrilete.regiNotaR = '';
                        objBarrilete.regiNotaY = '';
                        objBarrilete.regiNotaG = arrayBarrilete[index].regiNota;
                        break;
                }

                objBarrilete.notaFinal = arrayBarrilete[index].notaFinal;
                switch (arrayBarrilete[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objBarrilete.nivelR = arrayBarrilete[index].nivelRisco;
                        objBarrilete.nivelY = '';
                        objBarrilete.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objBarrilete.nivelR = '';
                        objBarrilete.nivelY = arrayBarrilete[index].nivelRisco;
                        objBarrilete.nivelG = '';
                        break;
                    default:
                        objBarrilete.nivelR = '';
                        objBarrilete.nivelY = '';
                        objBarrilete.nivelG = arrayBarrilete[index].nivelRisco;
                        break;
                }
                barriletes.push(objBarrilete);
            }

            return barriletes;
        },

        addGeradoraAguaQuente: function (arrayGeradoraAguaQuente) {
            var geradorasAguaQuente = [];
            for (let index = 0; index < arrayGeradoraAguaQuente.length; index++) {
                let objGeradoraAguaQuente = {};
                objGeradoraAguaQuente.nomeclatura = arrayGeradoraAguaQuente[index].nomeclatura;
                objGeradoraAguaQuente.sistema = arrayGeradoraAguaQuente[index].sistema;
                objGeradoraAguaQuente.alimentacao = arrayGeradoraAguaQuente[index].alimentacao;
                switch (arrayGeradoraAguaQuente[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objGeradoraAguaQuente.auItem = '';
                        objGeradoraAguaQuente.auItemR = '';
                        objGeradoraAguaQuente.auItemG = 'Sim';
                        break;
                    case 'NAO': case 'NÃO':
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
                switch (arrayGeradoraAguaQuente[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objGeradoraAguaQuente.auPlan = '';
                        objGeradoraAguaQuente.auPlanR = '';
                        objGeradoraAguaQuente.auPlanG = arrayGeradoraAguaQuente[index].planejado;
                        break;
                    case 'NAO': case 'NÃO':
                        objGeradoraAguaQuente.auPlan = '';
                        objGeradoraAguaQuente.auPlanR = arrayGeradoraAguaQuente[index].planejado;
                        objGeradoraAguaQuente.auPlanG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.auPlan = arrayGeradoraAguaQuente[index].planejado;
                        objGeradoraAguaQuente.auPlanR = '';
                        objGeradoraAguaQuente.auPlanG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objGeradoraAguaQuente.auExe = '';
                        objGeradoraAguaQuente.auExeR = '';
                        objGeradoraAguaQuente.auExeG = arrayGeradoraAguaQuente[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objGeradoraAguaQuente.auExe = '';
                        objGeradoraAguaQuente.auExeR = arrayGeradoraAguaQuente[index].executado;
                        objGeradoraAguaQuente.auExeG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.auExe = arrayGeradoraAguaQuente[index].executado;
                        objGeradoraAguaQuente.auExeR = '';
                        objGeradoraAguaQuente.auExeG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objGeradoraAguaQuente.auApo = '';
                        objGeradoraAguaQuente.auApoR = arrayGeradoraAguaQuente[index].apontamentos;
                        objGeradoraAguaQuente.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objGeradoraAguaQuente.auApo = '';
                        objGeradoraAguaQuente.auApoR = '';
                        objGeradoraAguaQuente.auApoG = arrayGeradoraAguaQuente[index].apontamentos;
                        break;
                    default:
                        objGeradoraAguaQuente.auApo = arrayGeradoraAguaQuente[index].apontamentos;
                        objGeradoraAguaQuente.auApoR = '';
                        objGeradoraAguaQuente.auApoG = '';
                        break;
                }

                objGeradoraAguaQuente.boilMat = arrayGeradoraAguaQuente[index].boilMaterial;
                switch (arrayGeradoraAguaQuente[index].boilIsolamentoTermico.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilIsoTermR = '';
                        objGeradoraAguaQuente.boilIsoTermG = arrayGeradoraAguaQuente[index].boilIsolamentoTermico;
                        break;
                    default:
                        objGeradoraAguaQuente.boilIsoTermR = arrayGeradoraAguaQuente[index].boilIsolamentoTermico;
                        objGeradoraAguaQuente.boilIsoTermG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilIsolamentoMecanico.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilIsoMecR = '';
                        objGeradoraAguaQuente.boilIsoMecG = arrayGeradoraAguaQuente[index].boilIsolamentoMecanico;
                        break;
                    default:
                        objGeradoraAguaQuente.boilIsoMecR = arrayGeradoraAguaQuente[index].boilIsolamentoMecanico;
                        objGeradoraAguaQuente.boilIsoMecG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilPortaInspecao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilPortInspR = '';
                        objGeradoraAguaQuente.boilPortInspG = arrayGeradoraAguaQuente[index].boilPortaInspecao;
                        break;
                    default:
                        objGeradoraAguaQuente.boilPortInspR = arrayGeradoraAguaQuente[index].boilPortaInspecao;
                        objGeradoraAguaQuente.boilPortInspG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilTermDigital.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilTermDigR = '';
                        objGeradoraAguaQuente.boilTermDigG = arrayGeradoraAguaQuente[index].boilTermDigital;
                        break;
                    default:
                        objGeradoraAguaQuente.boilTermDigR = arrayGeradoraAguaQuente[index].boilTermDigital;
                        objGeradoraAguaQuente.boilTermDigG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilTermAnalogico.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilTermAnaR = '';
                        objGeradoraAguaQuente.boilTermAnaG = arrayGeradoraAguaQuente[index].boilTermAnalogico;
                        break;
                    default:
                        objGeradoraAguaQuente.boilTermAnaR = arrayGeradoraAguaQuente[index].boilTermAnalogico;
                        objGeradoraAguaQuente.boilTermAnaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilValvulaAlivio.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilValAliR = '';
                        objGeradoraAguaQuente.boilValAliG = arrayGeradoraAguaQuente[index].boilValvulaAlivio;
                        break;
                    default:
                        objGeradoraAguaQuente.boilValAliR = arrayGeradoraAguaQuente[index].boilValvulaAlivio;
                        objGeradoraAguaQuente.boilValAliG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].boilStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.boilStGeR = '';
                        objGeradoraAguaQuente.boilStGeG = arrayGeradoraAguaQuente[index].boilStatusGeral;
                        break;
                    default:
                        objGeradoraAguaQuente.boilStGeR = arrayGeradoraAguaQuente[index].boilStatusGeral;
                        objGeradoraAguaQuente.boilStGeG = '';
                        break;
                }
                objGeradoraAguaQuente.boilFotos = arrayGeradoraAguaQuente[index].boilFotos;
                objGeradoraAguaQuente.boilComentario = arrayGeradoraAguaQuente[index].boilComentario;
                switch (arrayGeradoraAguaQuente[index].boilNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.boilNotaR = arrayGeradoraAguaQuente[index].boilNota;
                        objGeradoraAguaQuente.boilNotaY = '';
                        objGeradoraAguaQuente.boilNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.boilNotaR = '';
                        objGeradoraAguaQuente.boilNotaY = arrayGeradoraAguaQuente[index].boilNota;
                        objGeradoraAguaQuente.boilNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.boilNotaR = '';
                        objGeradoraAguaQuente.boilNotaY = '';
                        objGeradoraAguaQuente.boilNotaG = arrayGeradoraAguaQuente[index].boilNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].aqueInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.aqueInstR = '';
                        objGeradoraAguaQuente.aqueInstG = arrayGeradoraAguaQuente[index].aqueInstalacao;
                        break;
                    default:
                        objGeradoraAguaQuente.aqueInstR = arrayGeradoraAguaQuente[index].aqueInstalacao;
                        objGeradoraAguaQuente.aqueInstG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].aqueAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.aqueAcabaR = '';
                        objGeradoraAguaQuente.aqueAcabaG = arrayGeradoraAguaQuente[index].aqueAcabamento;
                        break;
                    default:
                        objGeradoraAguaQuente.aqueAcabaR = arrayGeradoraAguaQuente[index].aqueAcabamento;
                        objGeradoraAguaQuente.aqueAcabaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].aqueDetectorGas.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.aqueDetGasR = '';
                        objGeradoraAguaQuente.aqueDetGasG = arrayGeradoraAguaQuente[index].aqueDetectorGas;
                        break;
                    default:
                        objGeradoraAguaQuente.aqueDetGasR = arrayGeradoraAguaQuente[index].aqueDetectorGas;
                        objGeradoraAguaQuente.aqueDetGasG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].aqueFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.aqueFixaR = '';
                        objGeradoraAguaQuente.aqueFixaG = arrayGeradoraAguaQuente[index].aqueFixacao;
                        break;
                    default:
                        objGeradoraAguaQuente.aqueFixaR = arrayGeradoraAguaQuente[index].aqueFixacao;
                        objGeradoraAguaQuente.aqueFixaG = '';
                        break;
                }
                objGeradoraAguaQuente.aqueFotos = arrayGeradoraAguaQuente[index].aqueFotos;
                objGeradoraAguaQuente.aqueComentario = arrayGeradoraAguaQuente[index].aqueComentario;
                switch (arrayGeradoraAguaQuente[index].aqueNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.aqueNotaR = arrayGeradoraAguaQuente[index].aqueNota;
                        objGeradoraAguaQuente.aqueNotaY = '';
                        objGeradoraAguaQuente.aqueNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.aqueNotaR = '';
                        objGeradoraAguaQuente.aqueNotaY = arrayGeradoraAguaQuente[index].aqueNota;
                        objGeradoraAguaQuente.aqueNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.aqueNotaR = '';
                        objGeradoraAguaQuente.aqueNotaY = '';
                        objGeradoraAguaQuente.aqueNotaG = arrayGeradoraAguaQuente[index].aqueNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].bombcInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombcInstR = '';
                        objGeradoraAguaQuente.bombcInstG = arrayGeradoraAguaQuente[index].bombcInstalacao;
                        break;
                    default:
                        objGeradoraAguaQuente.bombcInstR = arrayGeradoraAguaQuente[index].bombcInstalacao;
                        objGeradoraAguaQuente.bombcInstG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombcAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombcAcabaR = '';
                        objGeradoraAguaQuente.bombcAcabaG = arrayGeradoraAguaQuente[index].bombcAcabamento;
                        break;
                    default:
                        objGeradoraAguaQuente.bombcAcabaR = arrayGeradoraAguaQuente[index].bombcAcabamento;
                        objGeradoraAguaQuente.bombcAcabaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombcFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombcFixaR = '';
                        objGeradoraAguaQuente.bombcFixaG = arrayGeradoraAguaQuente[index].bombcFixacao;
                        break;
                    default:
                        objGeradoraAguaQuente.bombcFixaR = arrayGeradoraAguaQuente[index].bombcFixacao;
                        objGeradoraAguaQuente.bombcFixaG = '';
                        break;
                }
                objGeradoraAguaQuente.bombcFotos = arrayGeradoraAguaQuente[index].bombcFotos;
                objGeradoraAguaQuente.bombcComentario = arrayGeradoraAguaQuente[index].bombcComentario;
                switch (arrayGeradoraAguaQuente[index].bombcNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.bombcNotaR = arrayGeradoraAguaQuente[index].bombcNota;
                        objGeradoraAguaQuente.bombcNotaY = '';
                        objGeradoraAguaQuente.bombcNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.bombcNotaR = '';
                        objGeradoraAguaQuente.bombcNotaY = arrayGeradoraAguaQuente[index].bombcNota;
                        objGeradoraAguaQuente.bombcNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.bombcNotaR = '';
                        objGeradoraAguaQuente.bombcNotaY = '';
                        objGeradoraAguaQuente.bombcNotaG = arrayGeradoraAguaQuente[index].bombcNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].placsPlacasSolares.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.placsPlacaR = '';
                        objGeradoraAguaQuente.placsPlacaG = arrayGeradoraAguaQuente[index].placsPlacasSolares;
                        break;
                    default:
                        objGeradoraAguaQuente.placsPlacaR = arrayGeradoraAguaQuente[index].placsPlacasSolares;
                        objGeradoraAguaQuente.placsPlacaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].placsTubulacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.placsTubuR = '';
                        objGeradoraAguaQuente.placsTubuG = arrayGeradoraAguaQuente[index].placsTubulacao;
                        break;
                    default:
                        objGeradoraAguaQuente.placsTubuR = arrayGeradoraAguaQuente[index].placsTubulacao;
                        objGeradoraAguaQuente.placsTubuG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].placsFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.placsFixaR = '';
                        objGeradoraAguaQuente.placsFixaG = arrayGeradoraAguaQuente[index].placsFixacao;
                        break;
                    default:
                        objGeradoraAguaQuente.placsFixaR = arrayGeradoraAguaQuente[index].placsFixacao;
                        objGeradoraAguaQuente.placsFixaG = '';
                        break;
                }
                objGeradoraAguaQuente.placsFotos = arrayGeradoraAguaQuente[index].placsFotos;
                objGeradoraAguaQuente.placsComentario = arrayGeradoraAguaQuente[index].placsComentario;
                switch (arrayGeradoraAguaQuente[index].placsNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.placsNotaR = arrayGeradoraAguaQuente[index].placsNota;
                        objGeradoraAguaQuente.placsNotaY = '';
                        objGeradoraAguaQuente.placsNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.placsNotaR = '';
                        objGeradoraAguaQuente.placsNotaY = arrayGeradoraAguaQuente[index].placsNota;
                        objGeradoraAguaQuente.placsNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.placsNotaR = '';
                        objGeradoraAguaQuente.placsNotaY = '';
                        objGeradoraAguaQuente.placsNotaG = arrayGeradoraAguaQuente[index].placsNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].bombRolamento.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombRolaR = '';
                        objGeradoraAguaQuente.bombRolaG = arrayGeradoraAguaQuente[index].bombRolamento;
                        break;
                    default:
                        objGeradoraAguaQuente.bombRolaR = arrayGeradoraAguaQuente[index].bombRolamento;
                        objGeradoraAguaQuente.bombRolaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombAcoplamento.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombAcoR = '';
                        objGeradoraAguaQuente.bombAcoG = arrayGeradoraAguaQuente[index].bombAcoplamento;
                        break;
                    default:
                        objGeradoraAguaQuente.bombAcoR = arrayGeradoraAguaQuente[index].bombAcoplamento;
                        objGeradoraAguaQuente.bombAcoG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombSeloMecanico.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombSelMR = '';
                        objGeradoraAguaQuente.bombSelMG = arrayGeradoraAguaQuente[index].bombSeloMecanico;
                        break;
                    default:
                        objGeradoraAguaQuente.bombSelMR = arrayGeradoraAguaQuente[index].bombSeloMecanico;
                        objGeradoraAguaQuente.bombSelMG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombAquecimento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objGeradoraAguaQuente.bombAqueR = '';
                        objGeradoraAguaQuente.bombAqueG = arrayGeradoraAguaQuente[index].bombAquecimento;
                        break;
                    default:
                        objGeradoraAguaQuente.bombAqueR = arrayGeradoraAguaQuente[index].bombAquecimento;
                        objGeradoraAguaQuente.bombAqueG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombPintura.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombPintR = '';
                        objGeradoraAguaQuente.bombPintG = arrayGeradoraAguaQuente[index].bombPintura;
                        break;
                    default:
                        objGeradoraAguaQuente.bombPintR = arrayGeradoraAguaQuente[index].bombPintura;
                        objGeradoraAguaQuente.bombPintG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bombStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bombStGeR = '';
                        objGeradoraAguaQuente.bombStGeG = arrayGeradoraAguaQuente[index].bombStatusGeral;
                        break;
                    default:
                        objGeradoraAguaQuente.bombStGeR = arrayGeradoraAguaQuente[index].bombStatusGeral;
                        objGeradoraAguaQuente.bombStGeG = '';
                        break;
                }
                objGeradoraAguaQuente.bombFotos = arrayGeradoraAguaQuente[index].bombFotos;
                objGeradoraAguaQuente.bombComentario = arrayGeradoraAguaQuente[index].bombComentario;
                switch (arrayGeradoraAguaQuente[index].bombNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.bombNotaR = arrayGeradoraAguaQuente[index].bombNota;
                        objGeradoraAguaQuente.bombNotaY = '';
                        objGeradoraAguaQuente.bombNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.bombNotaR = '';
                        objGeradoraAguaQuente.bombNotaY = arrayGeradoraAguaQuente[index].bombNota;
                        objGeradoraAguaQuente.bombNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.bombNotaR = '';
                        objGeradoraAguaQuente.bombNotaY = '';
                        objGeradoraAguaQuente.bombNotaG = arrayGeradoraAguaQuente[index].bombNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].bfelFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bfelFixaR = '';
                        objGeradoraAguaQuente.bfelFixaG = arrayGeradoraAguaQuente[index].bfelFixacao;
                        break;
                    default:
                        objGeradoraAguaQuente.bfelFixaR = arrayGeradoraAguaQuente[index].bfelFixacao;
                        objGeradoraAguaQuente.bfelFixaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bfelVibraStop.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bfelVibraR = '';
                        objGeradoraAguaQuente.bfelVibraG = arrayGeradoraAguaQuente[index].bfelVibraStop;
                        break;
                    default:
                        objGeradoraAguaQuente.bfelVibraR = arrayGeradoraAguaQuente[index].bfelVibraStop;
                        objGeradoraAguaQuente.bfelVibraG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bfelInstalacaoEletrica.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bfelIntEletR = '';
                        objGeradoraAguaQuente.bfelIntEletG = arrayGeradoraAguaQuente[index].bfelInstalacaoEletrica;
                        break;
                    default:
                        objGeradoraAguaQuente.bfelIntEletR = arrayGeradoraAguaQuente[index].bfelInstalacaoEletrica;
                        objGeradoraAguaQuente.bfelIntEletG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].bfelStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.bfelStGe = '';
                        objGeradoraAguaQuente.bfelStGeR = '';
                        objGeradoraAguaQuente.bfelStGeG = arrayGeradoraAguaQuente[index].bfelStatusGeral;
                        break;
                    case 'NA':
                        objGeradoraAguaQuente.bfelStGe = arrayGeradoraAguaQuente[index].bfelStatusGeral;
                        objGeradoraAguaQuente.bfelStGeR = '';
                        objGeradoraAguaQuente.bfelStGeG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.bfelStGe = '';
                        objGeradoraAguaQuente.bfelStGeR = arrayGeradoraAguaQuente[index].bfelStatusGeral;
                        objGeradoraAguaQuente.bfelStGeG = '';
                        break;
                }
                objGeradoraAguaQuente.bfelFotos = arrayGeradoraAguaQuente[index].bfelFotos;
                objGeradoraAguaQuente.bfelComentario = arrayGeradoraAguaQuente[index].bfelComentario;
                switch (arrayGeradoraAguaQuente[index].bfelNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.bfelNotaR = arrayGeradoraAguaQuente[index].bfelNota;
                        objGeradoraAguaQuente.bfelNotaY = '';
                        objGeradoraAguaQuente.bfelNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.bfelNotaR = '';
                        objGeradoraAguaQuente.bfelNotaY = arrayGeradoraAguaQuente[index].bfelNota;
                        objGeradoraAguaQuente.bfelNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.bfelNotaR = '';
                        objGeradoraAguaQuente.bfelNotaY = '';
                        objGeradoraAguaQuente.bfelNotaG = arrayGeradoraAguaQuente[index].bfelNota;
                        break;
                }

                objGeradoraAguaQuente.tubuMat = arrayGeradoraAguaQuente[index].tubuMaterial;
                switch (arrayGeradoraAguaQuente[index].tubuAcabamento.toString().toUpperCase()) {
                    case 'SEM PINTURA':
                    case 'SEM ISOLAÇÃO':
                        objGeradoraAguaQuente.tubuAcabaR = arrayGeradoraAguaQuente[index].tubuAcabamento;
                        objGeradoraAguaQuente.tubuAcabaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.tubuAcabaR = '';
                        objGeradoraAguaQuente.tubuAcabaG = arrayGeradoraAguaQuente[index].tubuAcabamento;
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].tubuVazamento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objGeradoraAguaQuente.tubuVazaR = '';
                        objGeradoraAguaQuente.tubuVazaG = arrayGeradoraAguaQuente[index].tubuVazamento;
                        break;
                    default:
                        objGeradoraAguaQuente.tubuVazaR = arrayGeradoraAguaQuente[index].tubuVazamento;
                        objGeradoraAguaQuente.tubuVazaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].tubuFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.tubuFixa = '';
                        objGeradoraAguaQuente.tubuFixaR = '';
                        objGeradoraAguaQuente.tubuFixaG = arrayGeradoraAguaQuente[index].tubuFixacao;
                        break;
                    case 'NA':
                        objGeradoraAguaQuente.tubuFixa = arrayGeradoraAguaQuente[index].tubuFixacao;
                        objGeradoraAguaQuente.tubuFixaR = '';
                        objGeradoraAguaQuente.tubuFixaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.tubuFixa = '';
                        objGeradoraAguaQuente.tubuFixaR = arrayGeradoraAguaQuente[index].tubuFixacao;
                        objGeradoraAguaQuente.tubuFixaG = '';
                        break;
                }
                objGeradoraAguaQuente.tubuFotos = arrayGeradoraAguaQuente[index].tubuFotos;
                objGeradoraAguaQuente.tubuComentario = arrayGeradoraAguaQuente[index].tubuComentario;
                switch (arrayGeradoraAguaQuente[index].tubuNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.tubuNotaR = arrayGeradoraAguaQuente[index].tubuNota;
                        objGeradoraAguaQuente.tubuNotaY = '';
                        objGeradoraAguaQuente.tubuNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.tubuNotaR = '';
                        objGeradoraAguaQuente.tubuNotaY = arrayGeradoraAguaQuente[index].tubuNota;
                        objGeradoraAguaQuente.tubuNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.tubuNotaR = '';
                        objGeradoraAguaQuente.tubuNotaY = '';
                        objGeradoraAguaQuente.tubuNotaG = arrayGeradoraAguaQuente[index].tubuNota;
                        break;
                }

                switch (arrayGeradoraAguaQuente[index].regiInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.regiInstR = '';
                        objGeradoraAguaQuente.regiInstG = arrayGeradoraAguaQuente[index].regiInstalacao;
                        break;
                    default:
                        objGeradoraAguaQuente.regiInstR = arrayGeradoraAguaQuente[index].regiInstalacao;
                        objGeradoraAguaQuente.regiInstG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].regiAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.regiAcabaR = '';
                        objGeradoraAguaQuente.regiAcabaG = arrayGeradoraAguaQuente[index].regiAcabamento;
                        break;
                    default:
                        objGeradoraAguaQuente.regiAcabaR = arrayGeradoraAguaQuente[index].regiAcabamento;
                        objGeradoraAguaQuente.regiAcabaG = '';
                        break;
                }
                switch (arrayGeradoraAguaQuente[index].regiFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objGeradoraAguaQuente.regiFixaR = '';
                        objGeradoraAguaQuente.regiFixaG = arrayGeradoraAguaQuente[index].regiFixacao;
                        break;
                    default:
                        objGeradoraAguaQuente.regiFixaR = arrayGeradoraAguaQuente[index].regiFixacao;
                        objGeradoraAguaQuente.regiFixaG = '';
                        break;
                }
                objGeradoraAguaQuente.regiFotos = arrayGeradoraAguaQuente[index].regiFotos;
                objGeradoraAguaQuente.regiComentario = arrayGeradoraAguaQuente[index].regiComentario;
                switch (arrayGeradoraAguaQuente[index].regiNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objGeradoraAguaQuente.regiNotaR = arrayGeradoraAguaQuente[index].regiNota;
                        objGeradoraAguaQuente.regiNotaY = '';
                        objGeradoraAguaQuente.regiNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objGeradoraAguaQuente.regiNotaR = '';
                        objGeradoraAguaQuente.regiNotaY = arrayGeradoraAguaQuente[index].regiNota;
                        objGeradoraAguaQuente.regiNotaG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.regiNotaR = '';
                        objGeradoraAguaQuente.regiNotaY = '';
                        objGeradoraAguaQuente.regiNotaG = arrayGeradoraAguaQuente[index].regiNota;
                        break;
                }

                objGeradoraAguaQuente.notaFinal = arrayGeradoraAguaQuente[index].notaFinal;
                switch (arrayGeradoraAguaQuente[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objGeradoraAguaQuente.nivelR = arrayGeradoraAguaQuente[index].nivelRisco;
                        objGeradoraAguaQuente.nivelY = '';
                        objGeradoraAguaQuente.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objGeradoraAguaQuente.nivelR = '';
                        objGeradoraAguaQuente.nivelY = arrayGeradoraAguaQuente[index].nivelRisco;
                        objGeradoraAguaQuente.nivelG = '';
                        break;
                    default:
                        objGeradoraAguaQuente.nivelR = '';
                        objGeradoraAguaQuente.nivelY = '';
                        objGeradoraAguaQuente.nivelG = arrayGeradoraAguaQuente[index].nivelRisco;
                        break;
                }
                geradorasAguaQuente.push(objGeradoraAguaQuente);
            }
            return geradorasAguaQuente;
        },
        addTubulacoes: function (arrayTubulacao) {
            var tubulacoes = [];
            for (let index = 0; index < arrayTubulacao.length; index++) {
                let objTubulacoes = {};
                objTubulacoes.nomeclatura = arrayTubulacao[index].nomeclatura;
                objTubulacoes.alimentacao = arrayTubulacao[index].alimentacao;
                switch (arrayTubulacao[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objTubulacoes.auItem = '';
                        objTubulacoes.auItemR = '';
                        objTubulacoes.auItemG = 'Sim';
                        break;
                    case 'NAO': case 'NÃO':
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
                switch (arrayTubulacao[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objTubulacoes.auPlan = '';
                        objTubulacoes.auPlanR = '';
                        objTubulacoes.auPlanG = arrayTubulacao[index].planejado;
                        break;
                    case 'NAO': case 'NÃO':
                        objTubulacoes.auPlan = '';
                        objTubulacoes.auPlanR = arrayTubulacao[index].planejado;
                        objTubulacoes.auPlanG = '';
                        break;
                    default:
                        objTubulacoes.auPlan = arrayTubulacao[index].planejado;
                        objTubulacoes.auPlanR = '';
                        objTubulacoes.auPlanG = '';
                        break;
                }
                switch (arrayTubulacao[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objTubulacoes.auExe = '';
                        objTubulacoes.auExeR = '';
                        objTubulacoes.auExeG = arrayTubulacao[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objTubulacoes.auExe = '';
                        objTubulacoes.auExeR = arrayTubulacao[index].executado;
                        objTubulacoes.auExeG = '';
                        break;
                    default:
                        objTubulacoes.auExe = arrayTubulacao[index].executado;
                        objTubulacoes.auExeR = '';
                        objTubulacoes.auExeG = '';
                        break;
                }
                switch (arrayTubulacao[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objTubulacoes.auApo = '';
                        objTubulacoes.auApoR = arrayTubulacao[index].apontamentos;
                        objTubulacoes.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objTubulacoes.auApo = '';
                        objTubulacoes.auApoR = '';
                        objTubulacoes.auApoG = arrayTubulacao[index].apontamentos;
                        break;
                    default:
                        objTubulacoes.auApo = arrayTubulacao[index].apontamentos;
                        objTubulacoes.auApoR = '';
                        objTubulacoes.auApoG = '';
                        break;
                }

                objTubulacoes.tubuMat = arrayTubulacao[index].tubuMaterial;
                switch (arrayTubulacao[index].tubuAcabamento.toString().toUpperCase()) {
                    case 'SEM PINTURA':
                    case 'SEM ISOLAÇÃO':
                        objTubulacoes.tubuAcabaR = arrayTubulacao[index].tubuAcabamento;
                        objTubulacoes.tubuAcabaG = '';
                        break;
                    default:
                        objTubulacoes.tubuAcabaR = '';
                        objTubulacoes.tubuAcabaG = arrayTubulacao[index].tubuAcabamento;
                        break;
                }
                switch (arrayTubulacao[index].tubuVazamento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objTubulacoes.tubuVazaR = '';
                        objTubulacoes.tubuVazaG = arrayTubulacao[index].tubuVazamento;
                        break;
                    default:
                        objTubulacoes.tubuVazaR = arrayTubulacao[index].tubuVazamento;
                        objTubulacoes.tubuVazaG = '';
                        break;
                }
                switch (arrayTubulacao[index].tubuFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objTubulacoes.tubuFixa = '';
                        objTubulacoes.tubuFixaR = '';
                        objTubulacoes.tubuFixaG = arrayTubulacao[index].tubuFixacao;
                        break;
                    case 'NA':
                        objTubulacoes.tubuFixa = arrayTubulacao[index].tubuFixacao;
                        objTubulacoes.tubuFixaR = '';
                        objTubulacoes.tubuFixaG = '';
                        break;
                    default:
                        objTubulacoes.tubuFixa = '';
                        objTubulacoes.tubuFixaR = arrayTubulacao[index].tubuFixacao;
                        objTubulacoes.tubuFixaG = '';
                        break;
                }
                objTubulacoes.tubuFotos = arrayTubulacao[index].tubuFotos;
                objTubulacoes.tubuComentario = arrayTubulacao[index].tubuComentario;
                switch (arrayTubulacao[index].tubuNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objTubulacoes.tubuNotaR = arrayTubulacao[index].tubuNota;
                        objTubulacoes.tubuNotaY = '';
                        objTubulacoes.tubuNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objTubulacoes.tubuNotaR = '';
                        objTubulacoes.tubuNotaY = arrayTubulacao[index].tubuNota;
                        objTubulacoes.tubuNotaG = '';
                        break;
                    default:
                        objTubulacoes.tubuNotaR = '';
                        objTubulacoes.tubuNotaY = '';
                        objTubulacoes.tubuNotaG = arrayTubulacao[index].tubuNota;
                        break;
                }

                switch (arrayTubulacao[index].regiInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objTubulacoes.regiInstR = '';
                        objTubulacoes.regiInstG = arrayTubulacao[index].regiInstalacao;
                        break;
                    default:
                        objTubulacoes.regiInstR = arrayTubulacao[index].regiInstalacao;
                        objTubulacoes.regiInstG = '';
                        break;
                }
                switch (arrayTubulacao[index].regiAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objTubulacoes.regiAcabaR = '';
                        objTubulacoes.regiAcabaG = arrayTubulacao[index].regiAcabamento;
                        break;
                    default:
                        objTubulacoes.regiAcabaR = arrayTubulacao[index].regiAcabamento;
                        objTubulacoes.regiAcabaG = '';
                        break;
                }
                switch (arrayTubulacao[index].regiFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objTubulacoes.regiFixaR = '';
                        objTubulacoes.regiFixaG = arrayTubulacao[index].regiFixacao;
                        break;
                    default:
                        objTubulacoes.regiFixaR = arrayTubulacao[index].regiFixacao;
                        objTubulacoes.regiFixaG = '';
                        break;
                }
                objTubulacoes.regiFotos = arrayTubulacao[index].regiFotos;
                objTubulacoes.regiComentario = arrayTubulacao[index].regiComentario;
                switch (arrayTubulacao[index].regiNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objTubulacoes.regiNotaR = arrayTubulacao[index].regiNota;
                        objTubulacoes.regiNotaY = '';
                        objTubulacoes.regiNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objTubulacoes.regiNotaR = '';
                        objTubulacoes.regiNotaY = arrayTubulacao[index].regiNota;
                        objTubulacoes.regiNotaG = '';
                        break;
                    default:
                        objTubulacoes.regiNotaR = '';
                        objTubulacoes.regiNotaY = '';
                        objTubulacoes.regiNotaG = arrayTubulacao[index].regiNota;
                        break;
                }

                objTubulacoes.notaFinal = arrayTubulacao[index].notaFinal;
                switch (arrayTubulacao[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objTubulacoes.nivelR = arrayTubulacao[index].nivelRisco;
                        objTubulacoes.nivelY = '';
                        objTubulacoes.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objTubulacoes.nivelR = '';
                        objTubulacoes.nivelY = arrayTubulacao[index].nivelRisco;
                        objTubulacoes.nivelG = '';
                        break;
                    default:
                        objTubulacoes.nivelR = '';
                        objTubulacoes.nivelY = '';
                        objTubulacoes.nivelG = arrayTubulacao[index].nivelRisco;
                        break;
                }

                tubulacoes.push(objTubulacoes);
            }
            return tubulacoes;
        },
        addBombas: function (arrayBomba) {
            var bombas = [];
            for (let index = 0; index < arrayBomba.length; index++) {
                let objBomba = {};
                objBomba.nomeclatura = arrayBomba[index].nomeclatura;
                objBomba.localizacao = arrayBomba[index].localizacao;
                switch (arrayBomba[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objBomba.auItem = '';
                        objBomba.auItemR = '';
                        objBomba.auItemG = 'Sim';
                        break;
                    case 'NAO': case 'NÃO':
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
                switch (arrayBomba[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objBomba.auPlan = '';
                        objBomba.auPlanR = '';
                        objBomba.auPlanG = arrayBomba[index].planejado;
                        break;
                    case 'NAO': case 'NÃO':
                        objBomba.auPlan = '';
                        objBomba.auPlanR = arrayBomba[index].planejado;
                        objBomba.auPlanG = '';
                        break;
                    default:
                        objBomba.auPlan = arrayBomba[index].planejado;
                        objBomba.auPlanR = '';
                        objBomba.auPlanG = '';
                        break;
                }
                switch (arrayBomba[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objBomba.auExe = '';
                        objBomba.auExeR = '';
                        objBomba.auExeG = arrayBomba[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objBomba.auExe = '';
                        objBomba.auExeR = arrayBomba[index].executado;
                        objBomba.auExeG = '';
                        break;
                    default:
                        objBomba.auExe = arrayBomba[index].executado;
                        objBomba.auExeR = '';
                        objBomba.auExeG = '';
                        break;
                }
                switch (arrayBomba[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objBomba.auApo = '';
                        objBomba.auApoR = arrayBomba[index].apontamentos;
                        objBomba.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objBomba.auApo = '';
                        objBomba.auApoR = '';
                        objBomba.auApoG = arrayBomba[index].apontamentos;
                        break;
                    default:
                        objBomba.auApo = arrayBomba[index].apontamentos;
                        objBomba.auApoR = '';
                        objBomba.auApoG = '';
                        break;
                }

                switch (arrayBomba[index].bombRolamento.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bombRolaR = '';
                        objBomba.bombRolaG = arrayBomba[index].bombRolamento;
                        break;
                    default:
                        objBomba.bombRolaR = arrayBomba[index].bombRolamento;
                        objBomba.bombRolaG = '';
                        break;
                }
                switch (arrayBomba[index].bombAcoplamento.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bombAcoR = '';
                        objBomba.bombAcoG = arrayBomba[index].bombAcoplamento;
                        break;
                    default:
                        objBomba.bombAcoR = arrayBomba[index].bombAcoplamento;
                        objBomba.bombAcoG = '';
                        break;
                }
                switch (arrayBomba[index].bombSeloMecanico.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bombSelMR = '';
                        objBomba.bombSelMG = arrayBomba[index].bombSeloMecanico;
                        break;
                    default:
                        objBomba.bombSelMR = arrayBomba[index].bombSeloMecanico;
                        objBomba.bombSelMG = '';
                        break;
                }
                switch (arrayBomba[index].bombAquecimento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objBomba.bombAqueR = '';
                        objBomba.bombAqueG = arrayBomba[index].bombAquecimento;
                        break;
                    default:
                        objBomba.bombAqueR = arrayBomba[index].bombAquecimento;
                        objBomba.bombAqueG = '';
                        break;
                }
                switch (arrayBomba[index].bombPintura.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bombPintR = '';
                        objBomba.bombPintG = arrayBomba[index].bombPintura;
                        break;
                    default:
                        objBomba.bombPintR = arrayBomba[index].bombPintura;
                        objBomba.bombPintG = '';
                        break;
                }
                switch (arrayBomba[index].bombStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bombStGeR = '';
                        objBomba.bombStGeG = arrayBomba[index].bombStatusGeral;
                        break;
                    default:
                        objBomba.bombStGeR = arrayBomba[index].bombStatusGeral;
                        objBomba.bombStGeG = '';
                        break;
                }
                objBomba.bombFotos = arrayBomba[index].bombFotos;
                objBomba.bombComentario = arrayBomba[index].bombComentario;
                switch (arrayBomba[index].bombNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBomba.bombNotaR = arrayBomba[index].bombNota;
                        objBomba.bombNotaY = '';
                        objBomba.bombNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBomba.bombNotaR = '';
                        objBomba.bombNotaY = arrayBomba[index].bombNota;
                        objBomba.bombNotaG = '';
                        break;
                    default:
                        objBomba.bombNotaR = '';
                        objBomba.bombNotaY = '';
                        objBomba.bombNotaG = arrayBomba[index].bombNota;
                        break;
                }

                switch (arrayBomba[index].bfelFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bfelFixaR = '';
                        objBomba.bfelFixaG = arrayBomba[index].bfelFixacao;
                        break;
                    default:
                        objBomba.bfelFixaR = arrayBomba[index].bfelFixacao;
                        objBomba.bfelFixaG = '';
                        break;
                }
                switch (arrayBomba[index].bfelVibraStop.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bfelVibraR = '';
                        objBomba.bfelVibraG = arrayBomba[index].bfelVibraStop;
                        break;
                    default:
                        objBomba.bfelVibraR = arrayBomba[index].bfelVibraStop;
                        objBomba.bfelVibraG = '';
                        break;
                }
                switch (arrayBomba[index].bfelInstalacaoEletrica.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bfelIntEletR = '';
                        objBomba.bfelIntEletG = arrayBomba[index].bfelInstalacaoEletrica;
                        break;
                    default:
                        objBomba.bfelIntEletR = arrayBomba[index].bfelInstalacaoEletrica;
                        objBomba.bfelIntEletG = '';
                        break;
                }
                switch (arrayBomba[index].bfelStatusGeral.toString().toUpperCase()) {
                    case 'OK':
                        objBomba.bfelStGe = '';
                        objBomba.bfelStGeR = '';
                        objBomba.bfelStGeG = arrayBomba[index].bfelStatusGeral;
                        break;
                    case 'NA':
                        objBomba.bfelStGe = arrayBomba[index].bfelStatusGeral;
                        objBomba.bfelStGeR = '';
                        objBomba.bfelStGeG = '';
                        break;
                    default:
                        objBomba.bfelStGe = '';
                        objBomba.bfelStGeR = arrayBomba[index].bfelStatusGeral;
                        objBomba.bfelStGeG = '';
                        break;
                }
                objBomba.bfelFotos = arrayBomba[index].bfelFotos;
                objBomba.bfelComentario = arrayBomba[index].bfelComentario;
                switch (arrayBomba[index].bfelNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objBomba.bfelNotaR = arrayBomba[index].bfelNota;
                        objBomba.bfelNotaY = '';
                        objBomba.bfelNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objBomba.bfelNotaR = '';
                        objBomba.bfelNotaY = arrayBomba[index].bfelNota;
                        objBomba.bfelNotaG = '';
                        break;
                    default:
                        objBomba.bfelNotaR = '';
                        objBomba.bfelNotaY = '';
                        objBomba.bfelNotaG = arrayBomba[index].bfelNota;
                        break;
                }

                objBomba.notaFinal = arrayBomba[index].notaFinal;
                switch (arrayBomba[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objBomba.nivelR = arrayBomba[index].nivelRisco;
                        objBomba.nivelY = '';
                        objBomba.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objBomba.nivelR = '';
                        objBomba.nivelY = arrayBomba[index].nivelRisco;
                        objBomba.nivelG = '';
                        break;
                    default:
                        objBomba.nivelR = '';
                        objBomba.nivelY = '';
                        objBomba.nivelG = arrayBomba[index].nivelRisco;
                        break;
                }

                bombas.push(objBomba);
            }

            return bombas;
        },
        addRedesGas: function (arrayRedeGas) {
            var redesGas = [];
            for (let index = 0; index < arrayRedeGas.length; index++) {
                let objRedeGas = {};
                objRedeGas.nomeclatura = arrayRedeGas[index].nomeclatura;
                objRedeGas.alimentacao = arrayRedeGas[index].alimentacao;
                switch (arrayRedeGas[index].itemAuditado.toString().toUpperCase()) {
                    case 'SIM':
                        objRedeGas.auItem = '';
                        objRedeGas.auItemR = '';
                        objRedeGas.auItemG = 'Sim';
                        break;
                    case 'NAO': case 'NÃO':
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
                switch (arrayRedeGas[index].planejado.toString().toUpperCase()) {
                    case 'SIM':
                        objRedeGas.auPlan = '';
                        objRedeGas.auPlanR = '';
                        objRedeGas.auPlanG = arrayRedeGas[index].planejado;
                        break;
                    case 'NAO': case 'NÃO':
                        objRedeGas.auPlan = '';
                        objRedeGas.auPlanR = arrayRedeGas[index].planejado;
                        objRedeGas.auPlanG = '';
                        break;
                    default:
                        objRedeGas.auPlan = arrayRedeGas[index].planejado;
                        objRedeGas.auPlanR = '';
                        objRedeGas.auPlanG = '';
                        break;
                }
                switch (arrayRedeGas[index].executado.toString().toUpperCase()) {
                    case 'SIM':
                        objRedeGas.auExe = '';
                        objRedeGas.auExeR = '';
                        objRedeGas.auExeG = arrayRedeGas[index].executado;
                        break;
                    case 'NAO': case 'NÃO':
                        objRedeGas.auExe = '';
                        objRedeGas.auExeR = arrayRedeGas[index].executado;
                        objRedeGas.auExeG = '';
                        break;
                    default:
                        objRedeGas.auExe = arrayRedeGas[index].executado;
                        objRedeGas.auExeR = '';
                        objRedeGas.auExeG = '';
                        break;
                }
                switch (arrayRedeGas[index].apontamentos.toString().toUpperCase()) {
                    case 'SIM':
                        objRedeGas.auApo = '';
                        objRedeGas.auApoR = arrayRedeGas[index].apontamentos;
                        objRedeGas.auApoG = '';
                        break;
                    case 'NAO': case 'NÃO':
                        objRedeGas.auApo = '';
                        objRedeGas.auApoR = '';
                        objRedeGas.auApoG = arrayRedeGas[index].apontamentos;
                        break;
                    default:
                        objRedeGas.auApo = arrayRedeGas[index].apontamentos;
                        objRedeGas.auApoR = '';
                        objRedeGas.auApoG = '';
                        break;
                }

                objRedeGas.tubuMat = arrayRedeGas[index].tubuMaterial;
                switch (arrayRedeGas[index].tubuAcabamento.toString().toUpperCase()) {
                    case 'SEM PINTURA':
                    case 'SEM ISOLAÇÃO':
                        objRedeGas.tubuAcabaR = arrayRedeGas[index].tubuAcabamento;
                        objRedeGas.tubuAcabaG = '';
                        break;
                    default:
                        objRedeGas.tubuAcabaR = '';
                        objRedeGas.tubuAcabaG = arrayRedeGas[index].tubuAcabamento;
                        break;
                }
                switch (arrayRedeGas[index].tubuVazamento.toString().toUpperCase()) {
                    case 'NAO': case 'NÃO':
                        objRedeGas.tubuVazaR = '';
                        objRedeGas.tubuVazaG = arrayRedeGas[index].tubuVazamento;
                        break;
                    default:
                        objRedeGas.tubuVazaR = arrayRedeGas[index].tubuVazamento;
                        objRedeGas.tubuVazaG = '';
                        break;
                }
                switch (arrayRedeGas[index].tubuFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.tubuFixa = '';
                        objRedeGas.tubuFixaR = '';
                        objRedeGas.tubuFixaG = arrayRedeGas[index].tubuFixacao;
                        break;
                    case 'NA':
                        objRedeGas.tubuFixa = arrayRedeGas[index].tubuFixacao;
                        objRedeGas.tubuFixaR = '';
                        objRedeGas.tubuFixaG = '';
                        break;
                    default:
                        objRedeGas.tubuFixa = '';
                        objRedeGas.tubuFixaR = arrayRedeGas[index].tubuFixacao;
                        objRedeGas.tubuFixaG = '';
                        break;
                }
                objRedeGas.tubuFotos = arrayRedeGas[index].tubuFotos;
                objRedeGas.tubuComentario = arrayRedeGas[index].tubuComentario;
                switch (arrayRedeGas[index].tubuNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objRedeGas.tubuNotaR = arrayRedeGas[index].tubuNota;
                        objRedeGas.tubuNotaY = '';
                        objRedeGas.tubuNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objRedeGas.tubuNotaR = '';
                        objRedeGas.tubuNotaY = arrayRedeGas[index].tubuNota;
                        objRedeGas.tubuNotaG = '';
                        break;
                    default:
                        objRedeGas.tubuNotaR = '';
                        objRedeGas.tubuNotaY = '';
                        objRedeGas.tubuNotaG = arrayRedeGas[index].tubuNota;
                        break;
                }

                switch (arrayRedeGas[index].regiInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.regiInstR = '';
                        objRedeGas.regiInstG = arrayRedeGas[index].regiInstalacao;
                        break;
                    default:
                        objRedeGas.regiInstR = arrayRedeGas[index].regiInstalacao;
                        objRedeGas.regiInstG = '';
                        break;
                }
                switch (arrayRedeGas[index].regiAcabamento.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.regiAcabaR = '';
                        objRedeGas.regiAcabaG = arrayRedeGas[index].regiAcabamento;
                        break;
                    default:
                        objRedeGas.regiAcabaR = arrayRedeGas[index].regiAcabamento;
                        objRedeGas.regiAcabaG = '';
                        break;
                }
                switch (arrayRedeGas[index].regiFixacao.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.regiFixaR = '';
                        objRedeGas.regiFixaG = arrayRedeGas[index].regiFixacao;
                        break;
                    default:
                        objRedeGas.regiFixaR = arrayRedeGas[index].regiFixacao;
                        objRedeGas.regiFixaG = '';
                        break;
                }
                objRedeGas.regiFotos = arrayRedeGas[index].regiFotos;
                objRedeGas.regiComentario = arrayRedeGas[index].regiComentario;
                switch (arrayRedeGas[index].regiNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objRedeGas.regiNotaR = arrayRedeGas[index].regiNota;
                        objRedeGas.regiNotaY = '';
                        objRedeGas.regiNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objRedeGas.regiNotaR = '';
                        objRedeGas.regiNotaY = arrayRedeGas[index].regiNota;
                        objRedeGas.regiNotaG = '';
                        break;
                    default:
                        objRedeGas.regiNotaR = '';
                        objRedeGas.regiNotaY = '';
                        objRedeGas.regiNotaG = arrayRedeGas[index].regiNota;
                        break;
                }

                objRedeGas.gasSist = arrayRedeGas[index].gasSistema;
                switch (arrayRedeGas[index].gasTanques.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.gasTanq = '';
                        objRedeGas.gasTanqR = '';
                        objRedeGas.gasTanqG = arrayRedeGas[index].gasTanques;
                        break;
                    case 'NA':
                        objRedeGas.gasTanq = arrayRedeGas[index].gasTanques;
                        objRedeGas.gasTanqR = '';
                        objRedeGas.gasTanqG = '';
                        break;
                    default:
                        objRedeGas.gasTanq = '';
                        objRedeGas.gasTanqR = arrayRedeGas[index].gasTanques;
                        objRedeGas.gasTanqG = '';
                        break;
                }
                switch (arrayRedeGas[index].gasDetectorGas.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.gasDetecR = '';
                        objRedeGas.gasDetecG = arrayRedeGas[index].gasDetectorGas;
                        break;
                    default:
                        objRedeGas.gasDetecR = arrayRedeGas[index].gasDetectorGas;
                        objRedeGas.gasDetecG = '';
                        break;
                }
                switch (arrayRedeGas[index].gasExtintores.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.gasExtintR = '';
                        objRedeGas.gasExtintG = arrayRedeGas[index].gasExtintores;
                        break;
                    default:
                        objRedeGas.gasExtintR = arrayRedeGas[index].gasExtintores;
                        objRedeGas.gasExtintG = '';
                        break;
                }
                switch (arrayRedeGas[index].gasLocalInstalacao.toString().toUpperCase()) {
                    case 'OK':
                        objRedeGas.gasLocalR = '';
                        objRedeGas.gasLocalG = arrayRedeGas[index].gasLocalInstalacao;
                        break;
                    default:
                        objRedeGas.gasLocalR = arrayRedeGas[index].gasLocalInstalacao;
                        objRedeGas.gasLocalG = '';
                        break;
                }
                objRedeGas.gasFotos = arrayRedeGas[index].gasFotos;
                objRedeGas.gasComentario = arrayRedeGas[index].gasComentario;
                switch (arrayRedeGas[index].gasNota.toString().toUpperCase()) {
                    case '35':
                    case '35%':
                        objRedeGas.gasNotaR = arrayRedeGas[index].gasNota;
                        objRedeGas.gasNotaY = '';
                        objRedeGas.gasNotaG = '';
                        break;
                    case '75':
                    case '75%':
                        objRedeGas.gasNotaR = '';
                        objRedeGas.gasNotaY = arrayRedeGas[index].gasNota;
                        objRedeGas.gasNotaG = '';
                        break;
                    default:
                        objRedeGas.gasNotaR = '';
                        objRedeGas.gasNotaY = '';
                        objRedeGas.gasNotaG = arrayRedeGas[index].gasNota;
                        break;
                }

                objRedeGas.notaFinal = arrayRedeGas[index].notaFinal;
                switch (arrayRedeGas[index].nivelRisco.toString().toUpperCase()) {
                    case 'BAIXO':
                        objRedeGas.nivelR = arrayRedeGas[index].nivelRisco;
                        objRedeGas.nivelY = '';
                        objRedeGas.nivelG = '';
                        break;
                    case 'MEDIO':
                    case 'MÉDIO':
                        objRedeGas.nivelR = '';
                        objRedeGas.nivelY = arrayRedeGas[index].nivelRisco;
                        objRedeGas.nivelG = '';
                        break;
                    default:
                        objRedeGas.nivelR = '';
                        objRedeGas.nivelY = '';
                        objRedeGas.nivelG = arrayRedeGas[index].nivelRisco;
                        break;
                }

                redesGas.push(objRedeGas);
            }
            return redesGas;
        },
        exampleStructure: function () {
            return {
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
                    limpAgua: 'LIMPA',
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
        }

    };