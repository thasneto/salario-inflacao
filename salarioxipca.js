import rlSync from "readline-sync";

let salarioXipca = [
	{"Ano": 2010, "valorSalario": 510, "valorIPCA": 5.91},
	{"Ano": 2011, "valorSalario": 545, "valorIPCA": 6.50},
	{"Ano": 2012, "valorSalario": 622, "valorIPCA": 5.84},
	{"Ano": 2013, "valorSalario": 678, "valorIPCA": 5.91},
	{"Ano": 2014, "valorSalario": 724, "valorIPCA": 6.41},
	{"Ano": 2015, "valorSalario": 788, "valorIPCA": 10.67},
	{"Ano": 2016, "valorSalario": 880, "valorIPCA": 6.29},
	{"Ano": 2017, "valorSalario": 937, "valorIPCA": 2.95},
	{"Ano": 2018, "valorSalario": 954, "valorIPCA": 3.75},
	{"Ano": 2019, "valorSalario": 998, "valorIPCA": 4.31},
	{"Ano": 2020, "valorSalario": 1045, "valorIPCA": 4.52}
]

function retornaSalario(objSalario) {
	
	for (let salario of objSalario) {
		
		let ano = salario.Ano;
		let valorSalario = "R$ " + salario.valorSalario.toFixed(2).replace(".", ",");
		
		console.log("\n\nAno:".padEnd(25, ".") + ano);
		console.log("Salário:".padEnd(25, ".") + valorSalario + "\n");

	}

}

function retornaIPCA(objIPCA) {

	for (let inflacao of objIPCA) {

		let ano = inflacao.Ano;
		let IPCA = inflacao.valorIPCA + "%";
		
		console.log("\n\nAno:".padEnd(25, ".") + ano);
		console.log("Inflação IPCA:".padEnd(25, ".") + IPCA + "\n");

	}

}

function retornaComparacao(objSalarioInflacao) {
	
	for (let cont = 0; cont < objSalarioInflacao.length; cont++) {

		let ano = objSalarioInflacao[cont].Ano;
		let valorSalario = "R$" + objSalarioInflacao[cont].valorSalario.toFixed(2).replace(".", ",");
		let IPCA = objSalarioInflacao[cont].valorIPCA.toFixed(2).replace(".", ",") + "%";
		let comparacaoSalario = "---";

		if (cont > 0) {

			let salarioAtual = objSalarioInflacao[cont].valorSalario;
			let salarioPassado = objSalarioInflacao[cont - 1].valorSalario;
			comparacaoSalario = ((salarioAtual - salarioPassado) / salarioPassado) * 100
			comparacaoSalario = comparacaoSalario.toFixed(2).replace(".", ",") + "%"
		
		}
		
		console.log("\nAno:".padEnd(25, ".") + ano);
		console.log("Salário Mínimo:".padEnd(25, ".") + valorSalario);
		console.log("Crescimento Salarial:".padEnd(25, ".") + comparacaoSalario);
		console.log("Inflação IPCA:".padEnd(25, ".") + IPCA+ "\n");

	}

}

function exec () {
	
	switch (parseInt(chooseNumber)) {
		case 1:
			retornaSalario(salarioXipca);
			break;
		
		case 2:
			retornaIPCA(salarioXipca);
			break;

		case 3:
			retornaComparacao(salarioXipca);
			break;

		default :
			console.log("Opção Inválida!");
			break;
	}
	
}

console.log("\nEscolha uma das Alternativas: \n");

console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o Índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let chooseNumber = rlSync.question("Digite o número da sua escolha: ");

exec();