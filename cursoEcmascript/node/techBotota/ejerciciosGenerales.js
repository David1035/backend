let salario;

document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('input');

    input.addEventListener('keydown', function(event) {
        if(event.key === 'Enter' || event.key === 'Tab') {
            salario = parseFloat(input.value);
            calcularSalario()
        }
    })
})

function calcularSalario(){
    //document.getElementById('idsalario').innerHTML = `Su salario es $${salarioTotal}`
    for(let i = 0; i < salario; i++){
        document.getElementById('idsalario').innerHTML = `los numeros pares ${i}`
    }

}