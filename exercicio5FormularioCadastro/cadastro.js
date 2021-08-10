var camposMultiplos = document.querySelectorAll('.campos-multiplos');

function inicializarCampos(campos) {

    let botaoAdicionar = document.createElement('button');
    botaoAdicionar.textContent = 'Adicionar';
    botaoAdicionar.type = 'button';
    let primeiroInput = campos.querySelectorAll('input');

    botaoAdicionar.addEventListener('click', function() {
       
        let div = document.createElement('div'); 
        let novoInput = document.createElement('input');
        novoInput.name = primeiroInput.name;
        novoInput.type = primeiroInput.type;
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.type = 'button';

        botaoExcluir.addEventListener('click', function() {

        div.remove();

        })

        div.appendChild(novoInput);
        div.appendChild(botaoExcluir);



        campos.insertBefore(div, botaoAdicionar);
    
    })

    campos.appendChild(botaoAdicionar);

}

for (let i = 0; i < camposMultiplos.length; i++) {
    
    inicializarCampos(camposMultiplos[i]);
    
}