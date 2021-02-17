class ListaNegociacoes{
    constructor(){
        this._negociacoes= [];
    }
  
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    } 
  
    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    apaga(){
        this._negociacoes = []; 
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total,atual) => total = total + atual.volume, 0.0);
    }

    ordena(criterio){
        return this._negociacoes.sort(criterio);
    }
    
    inverteOrdem(){
        return this._negociacoes.reverse();
    }
}