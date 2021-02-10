class NegociacaoController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
            new NegociacoesView($("#negociacoesView")),
            'adiciona','apaga');
                
        this._mensagem = new Bind(new Mensagem(), 
            new MensagemView($("#mensagemView")),
            'texto');
    }
    
    adicionaNegociacao(event){
        event.preventDefault();
                      
        this._listaNegociacoes.adiciona(this._criaNegociacao());
   
        this._mensagem.texto = "Negociação adicionada com sucesso!";
       
        this._limpaformulario();
             
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }

    apagaNegociacoes(){

            this._listaNegociacoes.apaga();
            
            this._mensagem.texto = "Negociações apagadas com sucesso!";
    }

    _limpaformulario(){
        return this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0,
        this._inputData.focus();
    }
}