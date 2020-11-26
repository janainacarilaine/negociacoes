//vetor que guarda as entradas
var campos= [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]

//seleciona a tabela 
var tbody = document.querySelector("table tbody"); 

//escutador de evento que insere elementos na tabela
document.querySelector(".form").addEventListener("submit",function(event){
    event.preventDefault(); //previnir comportamento padrao da pag

    var tr = document.createElement("tr");

    campos.forEach(function(campo){
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
        
    });
    
    var tdVolume= document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);
    
    //resetando a pag
    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0.0;
    
    campos[0].focus();
    

});