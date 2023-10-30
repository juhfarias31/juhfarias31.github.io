function POO() {
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const img = document.querySelector("img");
    const img2 = document.querySelector("#img2");
    const img3 = document.querySelector("#img3");
    const img4 = document.querySelector("#img4");
    const img5 = document.querySelector("#img5");

    const valor = document.querySelector('#valor').value;

    if ((valor == "Definição") || (valor == "definição") || (valor == "definicao") || (valor == "Definicao")|| (valor == "1")|| (valor == "01")) {
        texto.innerHTML = "Definição de POO!";
        img.setAttribute("src", "img/definição.png");
        img.setAttribute("width", "500px");
        texto2.innerHTML = "POO é a Programação Orientada a Objetos e consiste num paradigma de linguagem de programação. Assim como em outras áreas, existem diferentes caminhos para se chegar ao mesmo resultado. Portanto, no universo do desenvolvimento de softwares isso também acontece.";
    }
    else if ((valor == "Características") || (valor == "característica") || (valor == "caracteristicas") || (valor == "Caracteristicas")|| (valor == "2")|| (valor == "02")) {
        texto.innerHTML = "Características da programação POO!";
        img.setAttribute("src", "img/caracteristicas.jpg");
        img.setAttribute("width", "500px");
        texto2.innerHTML = "Para uma linguagem de programação ser considerada orientada a objetos, deve haver quatro comportamentos característicos. São eles o encapsulamento, a herança, o polimorfismo e a abstração.";
    }
    else if ((valor == "Pilares") || (valor == "pilares")|| (valor == "3")|| (valor == "03")) {
        texto.innerHTML = "Os Pilares da POO!";
        img.setAttribute("src", "img/encapsulamento.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "img/herança.png");
        img2.setAttribute("width", "300px");
        img3.setAttribute("src", "img/herança2.png");
        img3.setAttribute("width", "500px");
        img4.setAttribute("src", "img/herança3.png");
        img4.setAttribute("width", "500px");
        img5.setAttribute("src", "img/polimorfismo.png");
        img5.setAttribute("width", "500px");
        texto2.innerHTML = "Encapsulamento: O encapsulamento transforma a implementação de alguns códigos em uma espécie de caixa preta. Na prática, isso significa que as classes externas não precisam acessar alguns dados de forma direta. Assim, o desenvolvimento dos sistemas passa a ficar simplificado e acelerado. Herança: A ideia de herança é facilitar a programação. Uma classe A deve herdar de uma classe B quando podemos dizer que A é um B. Por exemplo, imagine que já exista uma classe que defina o comportamento de um dado objeto da vida real, por exemplo, animal. Polimorfismo:  polimorfismo é a habilidade de objetos de classes diferentes responderem a mesma mensagem de diferentes maneiras. Ou seja, várias formas de responder à mesma mensagem. Abstração: Abstrair algo significa esconder os detalhes da implementação dentro de algo – às vezes um protótipo, às vezes em uma função. Portanto, quando você chama a função, não precisa entender exatamente o que ela está fazendo.";
    }
    else if ((valor == "Objeto") || (valor == "objeto") || (valor == "4")|| (valor == "04")) {
        texto.innerHTML = "O que é objeto na programação?";
        img.setAttribute("src", "img/instanciaEobjeto.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Um objeto é um elemento computacional que representa, no domínio da solução, alguma entidade (abstrata ou concreta) do domínio de interesse do problema sob análise. Objetos similares são agrupados em classes. No paradigma de orientação a objetos, tudo pode ser potencialmente representado como um objeto.";
    }
    else if ((valor == "Instanciar um objeto") || (valor == "instanciar um objeto")|| (valor == "5")|| (valor == "05")) {
        texto.innerHTML = "O que é instanciar um objeto ?";
        img.setAttribute("src", "img/instanciaEobjeto.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente. Uma classe, a qual tem a função de determinar um tipo de dado, deve ser instanciada para que possamos utilizá-la.";
    }
    else if ((valor == "Class") || (valor == "class")|| (valor == "6")|| (valor == "06")) {
        texto.innerHTML = "O que é uma class em programação?";
        img.setAttribute("src", "img/classeInterna.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "img/classeAbstrata.png");
        img2.setAttribute("width", "500px");
        img3.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Uma classe é uma forma de definir um tipo de dado em uma linguagem orientada a objeto. Ela é formada por dados e comportamentos. Para definir os dados são utilizados os atributos, e para definir o comportamento são utilizados métodos. Classes abstratas: É um tipo de classe especial que não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a partir de sua instanciação. Essas classes são muito importantes quando não queremos criar um objeto a partir de uma classe “geral”, apenas de suas “subclasses”. Classes internas: Uma classe interna é uma classe que é subordinada a uma outra classe, sendo definida no corpo dessa outra classe. Dependendo de onde e como se dá essa definição, a classe interna pode ser de diferentes tipos. Uma classe membro tem seus objetos sempre associados a objetos da classe topo. Classes anônimas: Classes anônimas te permitem criar um código mais conciso. Elas te permitem declarar e instanciar uma classe ao mesmo tempo. Elas são como classes locais exceto pelo fato de que elas não possuem nome. Recomenda-se que você as utilize caso precise de uma classe local uma única vez.";
    }
    else if ((valor == "Atributos") || (valor == "atributos")|| (valor == "7")|| (valor == "07")) {
        texto.innerHTML = "O que são atributos programação?";
        img.setAttribute("src", "img/atributos.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Os atributos são as propriedades de um objeto, também são conhecidos como variáveis ou campos. Essas propriedades definem o estado de um objeto, fazendo com que esses valores possam sofrer alterações.";
    }
    else if ((valor == "Métodos") || (valor == " Metodos") || (valor == "metodos") || (valor == "métodos?")|| (valor == "8")|| (valor == "08")) {
        texto.innerHTML = "O que são métodos?";
        img.setAttribute("src", "img/metodos.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Um método é uma sub-rotina que é executada por um objeto ao receber uma mensagem. Os métodos determinam o comportamento dos objetos de uma classe e são análogos a funções ou procedimentos da programação estruturada. O envio de mensagens (chamada de métodos) pode alterar o estado de um objeto.";
    }
    else if ((valor == "Modificadores de acesso") || (valor == "modificadores de acesso")|| (valor == "9")|| (valor == "09")) {
        texto.innerHTML = "O que são  modificadores de acesso em programação orientada a objetos?";
        img.setAttribute("src", "img/modificadores.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Os modificadores de acesso são elementos de fundamental importância na Programação Orientada a Objetos. Trata-se de palavras reservadas da linguagem de programação que determinam a forma de acesso a atributos e métodos de uma classe.";
    }
    else if ((valor == "pacotes") || (valor == "Pacotes")|| (valor == "10")) {
        texto.innerHTML = "o que são pacotes na programação?";
        img.setAttribute("src", "img/pacotes.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Um pacote é uma unidade de organização de código que congrega classes, interfaces e exceções relacionadas. O código-base de Java está todo estruturado em pacotes e as aplicações desenvolvidas em Java também devem ser assim organizadas. Essencialmente, uma classe Xyz que pertence a um pacote nome.";
    }
    else if ((valor == "Interface") || (valor == "interface")|| (valor == "11")) {
        texto.innerHTML = "O que é uma interface na programação?";
        img.setAttribute("src", "img/interface.webp");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Uma interface é uma maneira de declarar o comportamento de uma classe. Nesta declaração não especificamos exatamente como acontece internamente cada comportamento. Para uma interface são declarados somente o nome do método e seus parâmetros. Esta especificação de parâmetros é feita através de seus tipos.";
    }
    else if ((valor == "Enumeração") || (valor == "enumeracao")|| (valor == "12")) {
        texto.innerHTML = "O que é enumeração programação?";
        img.setAttribute("src", "img/enumeração.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Em programação, uma enumeração é um tipo de dado abstrato, cujos valores são atribuídos a exatamente um elemento de um conjunto finito de identificadores escolhidos pelo programador. Esse tipo é geralmente usado para variáveis categóricas (como os naipes de um baralho), que não possuem uma ordem numérica definida.";
    }
    else if ((valor == "Serialização de objetos") || (valor == "serialização de objetos")|| (valor == "13")) {
        texto.innerHTML = "O que é Serialização de objetos em Java?";
        img.setAttribute("src", "img/serialização.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "A serialização é quando um objeto é transformado, em uma cadeia de bytes e desta forma pode ser manipulado de maneira mais fácil, seja através de transporte pela rede ou salvo no disco.";
    }
    else if ((valor == "Relacionamento de objetos?") || (valor == "relacionamento de objetos")|| (valor == "14")) {
        texto.innerHTML = "o que é relacionamento de objetos?";
        img.setAttribute("src", "img/relacionamento.png");
        img.setAttribute("width", "500px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
        texto2.innerHTML = "Os relacionamentos ligam as classes/objetos entre si criando relações lógicas entre estas entidades. Os relacionamentos podem ser de: Associação: É uma conexão entre classes, e também significa que é uma conexão entre objetos daquelas classes.";
    }
    else {
        texto.innerHTML = "Não encontrado... =(";
        img.setAttribute("src", "img/x.webp");
        img.setAttribute("width", "250px");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        img4.setAttribute("src", "");
        img5.setAttribute("src", "");
    }
}