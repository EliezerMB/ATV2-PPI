import express from "express";
const app = express();
const porta = 3000;
const host = "0.0.0.0";


function addComida(req, resp){
    resp.send(`
           <html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Cadastro de Comida :-)</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
   <div class = "Container text-center">
   <h1> Cadastro de Pratros</h1>
    <form class="row g-3" novalidate>
    <div class="col-md-4">
    <label for="Nome do Prato" class="form-label">Nome do Prato</label>
    <input type="text" class="form-control" id="nome" value="nome" placeholder="Exemplo:Arroz Carreteiro" required>
    </div>

    <div class="col-md-4">
    <label for=" Região" class="form-label">Região Tipica</label>
    <input type="text" class="form-control" id="Rgiao" value="Regiao" placeholder="Exemplo:Centro-Oeste e Nordeste" required>
  </div>

  <div class="col-md-4">
    <label for="Melhor Horario Para o consumo" class="form-label">Melhor Horario Para o consumo</label>
    <input type="text" class="form-control" id="horario" value="horario" placeholder="Exemplo:Cafe da Manha - Almoço - Jantar - Ceia" required>
  </div>

  <div class="col-md-6">
    <label for="Estação" class="form-label">Melhor Estacao para o consumo</label>
    <input type="text" class="form-control" id="estacao" value="estacao" placeholder="Exemplo:Inverno" required>
  </div>

  <div class="col-12">
    <button class="btn btn-primary" type="submit">Cadastrar</button>
  </div>
</form>
   </div> 
</body>
</html> 
        `);
}

app.get(`/cadastro`,addComida);


app.listen(porta,host,() =>{
    console.log(`Servidor inicializado e em Execusao no Endereço http://${host}:${porta}`)
});