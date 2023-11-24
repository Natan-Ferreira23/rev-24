 function salvar(){
    
    var nome= document.getElementById('nome').value;
    var resp= document.getElementById('resposta');
    resp.innerHTML=nome;
    let estilos = document.querySelectorAll('input[type="checkbox"]:checked');
    var musical='';
    for(i=0;i<estilos.length;i++){
        musical = musical + ", " + estilos[i].value;
    }
    var time = document.getElementById('time').value;
    
    let texto =` Um dia ${nome} esava escutando ${musical} e percebeu que estava no ${time}`;
    document.getElementById('resposta').innerHTML=texto;
 }