class DateHelper{
    
    constructor(){
        throw new Error('Não pode ser instanciado!');
    }
    
    static textoParaData(texto){
        if(!/^\d{4}-\d{2}-\d{2}/.test(texto))
            return new Error('Data deve estar no formato aaaa-mm-dd');
       return new Date(...texto.split('-').map((item, indice) => item - (indice % 2)));
    }
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
   
}