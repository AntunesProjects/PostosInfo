fetch('http://localhost:3000/posto')
.then(response => response.json())
.then(data =>{
    if (data.success) {
        const gerentes = data.data.map(posto => posto.gerente);
        console.log(gerentes);
    } else {
        console.error('Erro ao buscar informações do servidor:', data.error)
    }
})
.catch(error => {
    console.error('Erro na requisição:', error)
})