class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }
    
    adicionaEvento(event){
        event.preventDefault();
                      
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        console.log(this._listaNegociacoes.Negociacoes);   
        this._limpaformulario();
             
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }

    _limpaformulario(){
        return this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0,
        this._inputData.focus();
    }
}