const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url)
  .then(response => {
    const funcionarios = response.data
    console.log(funcionarios);
    console.log(funcionarios[0]);
    console.log(funcionarios[0].nome);
  })