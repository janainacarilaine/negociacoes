class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
       
    }
    
    adicionaEvento(event){
        event.preventDefault();
               
        //utilização da função map, arrowfunction e do recurso ... que permite passar um array como parâmetro
        let data = new Date(...this._inputData.value.split('-').
            map((item, indice) => item - (indice % 2)))

            console.log('a nova data é: ',data);
       
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
       
                 
    }
}