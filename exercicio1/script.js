let coxinha = prompt('Deseja comer mais coxinhas??\n S - Sim\n N - Não').toLowerCase()
let totalCoxinhas = 0

while(coxinha === 's'){
    totalCoxinhas = totalCoxinhas + 1 
    coxinha = prompt('Deseja comer mais coxinhas??\n S - Sim\n N - Não').toLowerCase()
        console.log('Você comeu até agora', totalCoxinhas,'coxinhas')
}
console.log('Sua conta é',totalCoxinhas*2.5,)