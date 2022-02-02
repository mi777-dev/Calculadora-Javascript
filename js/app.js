var calculadora = {
  visor: document.getElementById("display"),
  valorVisor: "0",
  operacoes: "",
  valorUm: 0,
  valorDois: 0,
  ultimoValor: 0,
  resultado: 0,
  auxTeclaIgual: false,

 init: function() {
    this.atribuirEventosFuncao();
    this.atribuirEfeitosBotao();
  }, 

  atribuirEventosFuncao: function() {
    document.getElementById("0").addEventListener("click", function() {
      calculadora.imprimirNumero("0");
    });
    document.getElementById("1").addEventListener("click", function() {
      calculadora.imprimirNumero("1");
    });
    document.getElementById("2").addEventListener("click", function() {
      calculadora.imprimirNumero("2");
    });
    document.getElementById("3").addEventListener("click", function() {
      calculadora.imprimirNumero("3");
    });
    document.getElementById("4").addEventListener("click", function() {
      calculadora.imprimirNumero("4");
    });
    document.getElementById("5").addEventListener("click", function() {
      calculadora.imprimirNumero("5");
    });
    document.getElementById("6").addEventListener("click", function() {
      calculadora.imprimirNumero("6");
    });
    document.getElementById("7").addEventListener("click", function() {
      calculadora.imprimirNumero("7");
    });
    document.getElementById("8").addEventListener("click", function() {
      calculadora.imprimirNumero("8");
    });
    document.getElementById("9").addEventListener("click", function() {
      calculadora.imprimirNumero("9");
    });
    document.getElementById("mais").addEventListener("click", function() {
      calculadora.inserirOperacoes("+");
    }); 
    document.getElementById("menos").addEventListener("click", function() {
      calculadora.inserirOperacoes("-");
    }); 
    document.getElementById("por").addEventListener("click", function() {
      calculadora.inserirOperacoes("*");
    }); 
    document.getElementById("dividido").addEventListener("click", function() {
      calculadora.inserirOperacoes("/");
    }); 
    document.getElementById("raiz").addEventListener("click", function() {
      calculadora.inserirOperacoes("raiz");
    }); 
    document.getElementById("sign").addEventListener("click", function() {
      calculadora.mudarSinal();
    }); 
    document.getElementById("on").addEventListener("click", function() {
      calculadora.zerarVisor();
    });
    document.getElementById("ponto").addEventListener("click", function() {
      calculadora.colocarPonto("");
    }); 
    document.getElementById("igual").addEventListener("click", function() {
      calculadora.obterResultado();
    }); 
  },

  updateVisor: function() {
    this.visor.innerHTML = this.valorVisor;
  },

  imprimirNumero: function(valor) {
    if (this.valorVisor.length < 8) {
      if (this.valorVisor == "0") {
        this.valorVisor = "";
        this.valorVisor = this.valorVisor + valor;
      } else {
	    this.valorVisor = this.valorVisor + valor;
      }
      this.updateVisor();
    }
  },

 zerarVisor: function() {
    this.valorVisor = "0";
    this.operacoes = "";
    this.valorUm = 0;
    this.valorDois = 0;
    this.resultado = 0;
    this.auxTeclaIgual = false;
    this.ultimoValor = 0;
    this.updateVisor();
  },
  
   atribuirEfeitosBotao: function() {
    function aumentarImagem1() {
      document.getElementById("1").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem1() {
      document.getElementById("1").style = "width: 22%";
      document.getElementById("1").style = "height:62.91px";
    }

    function aumentarImagem2() {
      document.getElementById("2").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem2() {
      document.getElementById("2").style = "width: 22%";
      document.getElementById("2").style = "height:62.91px";
    }

    function aumentarImagem3() {
      document.getElementById("3").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem3() {
      document.getElementById("3").style = "width: 22%";
      document.getElementById("3").style = "height:62.91px";
    }

    function aumentarImagem4() {
      document.getElementById("4").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem4() {
      document.getElementById("4").style = "width: 22%";
      document.getElementById("4").style = "height:62.91px";
    }

    function aumentarImagem5() {
      document.getElementById("5").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem5() {
      document.getElementById("5").style = "width: 22%";
      document.getElementById("5").style = "height:62.91px";
    }

    function aumentarImagem6() {
      document.getElementById("6").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem6() {
      document.getElementById("6").style = "width: 22%";
      document.getElementById("6").style = "height:62.91px";
    }

    function aumentarImagem7() {
      document.getElementById("7").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem7() {
      document.getElementById("7").style = "width: 22%";
      document.getElementById("7").style = "height:62.91px";
    }

    function aumentarImagem8() {
      document.getElementById("8").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem8() {
      document.getElementById("8").style = "width: 22%";
      document.getElementById("8").style = "height:62.91px";
    }

    function aumentarImagem9() {
      document.getElementById("9").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem9() {
      document.getElementById("9").style = "width: 22%";
      document.getElementById("9").style = "height:62.91px";
    }

    function alterarImagemLiga() {
      document.getElementById("on").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemOn() {
      document.getElementById("on").style = "width: 22%";
      document.getElementById("on").style = "height:62.91px";
    }

    function alterarImagemSinal() {
      document.getElementById("sign").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemSign() {
      document.getElementById("sign").style = "width: 22%";
      document.getElementById("sign").style = "height:62.91px";
    }

    function alterarImagemRaiz() {
      document.getElementById("raiz").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemraiz() {
      document.getElementById("raiz").style = "width: 22%";
      document.getElementById("raiz").style = "height:62.91px";
    }

    function alterarImagemDividido() {
      document.getElementById("dividido").style =
        "transform: scale(0.91, 0.91)";
    }

    function alterarImagemdividido() {
      document.getElementById("dividido").style = "width: 22%";
      document.getElementById("dividido").style = "height:62.91px";
    }

    function alterarImagemMultiplica() {
      document.getElementById("por").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemmultiplica() {
      document.getElementById("por").style = "width: 22%";
      document.getElementById("por").style = "height:62.91px";
    }

    function alterarImagemMenos() {
      document.getElementById("menos").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemmenos() {
      document.getElementById("menos").style = "width: 22%";
      document.getElementById("menos").style = "height:62.91px";
    }

    function alterarImagemPonto() {
      document.getElementById("ponto").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemponto() {
      document.getElementById("ponto").style = "width: 22%";
      document.getElementById("ponto").style = "height:62.91px";
    }

    function aumentarImagem0() {
      document.getElementById("0").style = "transform: scale(0.91, 0.91)";
    }

    function diminuirImagem0() {
      document.getElementById("0").style = "width: 22%";
      document.getElementById("0").style = "height:62.91px";
    }

    function alterarImagemIgual() {
      document.getElementById("igual").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemigual() {
      document.getElementById("igual").style = "width: 22%";
      document.getElementById("igual").style = "height:62.91px";
    }

    function alterarImagemMais() {
      document.getElementById("mais").style = "transform: scale(0.91, 0.91)";
    }

    function alterarImagemmais() {
      document.getElementById("mais").style = "width: 90%";
      document.getElementById("mais").style = "height:100%";
    }
    
    function MudarTamanho() {
      document.getElementById("1").onclick = aumentarImagem1;
      document.getElementById("1").onmouseout = diminuirImagem1;
      document.getElementById("2").onclick = aumentarImagem2;
      document.getElementById("2").onmouseout = diminuirImagem2;
      document.getElementById("3").onclick = aumentarImagem3;
      document.getElementById("3").onmouseout = diminuirImagem3;
      document.getElementById("4").onclick = aumentarImagem4;
      document.getElementById("4").onmouseout = diminuirImagem4;
      document.getElementById("5").onclick = aumentarImagem5;
      document.getElementById("5").onmouseout = diminuirImagem5;
      document.getElementById("6").onclick = aumentarImagem6;
      document.getElementById("6").onmouseout = diminuirImagem6;
      document.getElementById("7").onclick = aumentarImagem7;
      document.getElementById("7").onmouseout = diminuirImagem7;
      document.getElementById("8").onclick = aumentarImagem8;
      document.getElementById("8").onmouseout = diminuirImagem8;
      document.getElementById("9").onclick = aumentarImagem9;
      document.getElementById("9").onmouseout = diminuirImagem9;
      document.getElementById("on").onclick = alterarImagemLiga;
      document.getElementById("on").onmouseout = alterarImagemOn;
      document.getElementById("sign").onclick = alterarImagemSinal;
      document.getElementById("sign").onmouseout = alterarImagemSign;
      document.getElementById("raiz").onclick = alterarImagemRaiz;
      document.getElementById("raiz").onmouseout = alterarImagemraiz;
      document.getElementById("dividido").onclick = alterarImagemDividido;
      document.getElementById("dividido").onmouseout = alterarImagemdividido;
      document.getElementById("por").onclick = alterarImagemMultiplica;
      document.getElementById("por").onmouseout = alterarImagemmultiplica;
      document.getElementById("menos").onclick = alterarImagemMenos;
      document.getElementById("menos").onmouseout = alterarImagemmenos;
      document.getElementById("ponto").onclick = alterarImagemPonto;
      document.getElementById("ponto").onmouseout = alterarImagemponto;
      document.getElementById("0").onclick = aumentarImagem0;
      document.getElementById("0").onmouseout = diminuirImagem0;
      document.getElementById("igual").onclick = alterarImagemIgual;
      document.getElementById("igual").onmouseout = alterarImagemigual;
      document.getElementById("mais").onclick = alterarImagemMais;
      document.getElementById("mais").onmouseout = alterarImagemmais;
    }
	MudarTamanho();
  },
 
 colocarPonto: function() {
    if (this.valorVisor.indexOf(".") == -1) {
      if (this.valorVisor == "") {
        this.valorVisor = this.valorVisor + "0.";
      } else {
        this.valorVisor = this.valorVisor + ".";
      }
      this.updateVisor();
    }
  },

  mudarSinal: function() {
    if (this.valorVisor != "0") {
      var aux;
      if (this.valorVisor.charAt(0) == "-") {
        aux = this.valorVisor.slice(1);
      } else {
        aux = "-" + this.valorVisor;
      }
      this.valorVisor = "";
      this.valorVisor = aux;
      this.updateVisor();
    }
  },

  inserirOperacoes: function(oper) {
    this.valorUm = parseFloat(this.valorVisor);
    this.valorVisor = "";
    this.operacoes = oper;
    this.auxTeclaIgual = false;
    this.updateVisor();
  },
  

  obterResultado: function(){
	if(!this.auxTeclaIgual){ 
	 this.valorDois = parseFloat(this.valorVisor);
	 this.ultimoValor = this.valorDois;
	 this.realizarOperacoes(this.valorUm, this.valorDois, this.operacoes);
	 } else { 
		this.realizarOperacoes(this.valorUm, this.ultimoValor, this.operacoes);
    	}
		this.valorUm = this.resultado;
		this.valorVisor = "";
	if (this.resultado.toString().length < 9){
		this.valorVisor = this.resultado.toString();
		} else {
			this.valorVisor = this.resultado.toString().slice(0,8) + "...";
		}
		 this.auxTeclaIgual = true;		
		 this.updateVisor();
 
   },
   realizarOperacoes: function(valorUm, valorDois, operacoes){
	 switch(operacoes){
		case "+": 
		 this.resultado = eval(valorUm + valorDois);
		break;
		case "-": 
		 this.resultado = eval(valorUm -valorDois);
		break;
		case "*": 
		 this.resultado = eval(valorUm *valorDois);
		break;
		case "/": 
		 this.resultado = eval(valorUm/ valorDois);
		break;
		case "raiz":
		 this.resultado = eval(Math.sqrt(valorUm));
		}
	},
	updateVisor: function(){
	this.visor.innerHTML = this.valorVisor;
		}
};
calculadora.init();
 