class NegociacaoService {

   constructor() {
       this.http = new HttpService();      
   }

   obterNegociacoesSemana() {

       return new Promise((resolve, reject) => {

           this.http
               .get('negociacoes/semana')
               .then(negociacoes => {
                   resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
               })
               .catch(erro => {
                   console.log(erro);
                   reject('Não foi possível obter as negociações da semana');
               })
       });
   } 

   obterNegociacoesSemanaAnterior() {

      return new Promise((resolve, reject) => {

          this.http
              .get('negociacoes/anterior')
              .then(negociacoes => {
                  resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
              })
              .catch(erro => {
                  console.log(erro);
                  reject('Não foi possível obter as negociações da semana anterior.');
              })
      });
  }

    obterNegociacoesSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this.http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada.');
                })
        });
    }
  
    obterNegociacoes() {

        return Promise.all([this.obterNegociacoesSemana(),
            this.obterNegociacoesSemanaAnterior(),
            this.obterNegociacoesSemanaRetrasada()])
        .then(listasNegociacoes => {
            let negociacoes = 
            listasNegociacoes.reduce((listasNegociacoes, listaAtual) => listasNegociacoes.concat(listaAtual), []);
            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });

    } 
}  