document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteio').addEventListener('submit', function(evento){
        evento.preventDefault();
        let nummeroMaximo = document.getElementById('nummero-maximo').value; 
        nummeroMaximo = parseInt(nummeroMaximo);

        let numeroAleatorio = Math.random() * nummeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio);
        
        while(numeroAleatorio === 0) {
            numeroAleatorio = Math.random() * nummeroMaximo;
            numeroAleatorio = Math.round(numeroAleatorio);
        }
        

        document.getElementById('resultado-valor').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})  