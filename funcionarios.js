const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chinesa = f => f.pais ==='China';// função que recebe funcionario como params e verifica se o pais é da china.

const mulheres = f => f.genero === 'F';// função que recebe funcionario como params e verifica se o genero é feminino.

const menoSalario = ( funcionario, funcionarioAtual ) => { 
  return funcionario.salario > funcionarioAtual.salario ? funcionario : funcionarioAtual;
}//metodo reduce para passar em cada funcionario e comparar se é true ou false e criar um novo array com essa informação.

axios.get(url)
  .then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    
    const func = funcionarios
    .filter(chinesa)
    .filter(mulheres)
    .reduce(menoSalario)
    console.log(func)

})
    
       

    
    
  