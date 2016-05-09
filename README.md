# Módulo Node.js - Workshop Be MEAN

:beginner: Nodejs module of Be MEAN Workshop

![be-mean-logo](https://camo.githubusercontent.com/1a286c9f755fd3565a692c42b38c34495e44ac68/687474703a2f2f7765627363686f6f6c2e696f2f62656d65616e2f696d616765732f6c6f676f2e706e67)

###About

Workshop de [**MEAN**](http://mean.io/) ([MongoDb](https://www.mongodb.org/), [Express](http://expressjs.com/), [Angular](https://angularjs.org/) e [NodeJs](https://nodejs.org/en/) via CROWDFUNDING. Criação de um sistema Web Full Stack igual o Instagram utilizando somente **Javascript**.

===

![node logo](https://nodeblog.files.wordpress.com/2011/07/nodejs.png)

###Links

[Official Website](https://nodejs.org)

[Be MEAN - Official Repo](https://github.com/Webschool-io/be-mean-instagram)

[Playlist Youtube](https://www.youtube.com/playlist?list=PL77JVjKTJT2hP_lxL88oDo2rJvOskpGfJ)

[Code Style](https://github.com/Webschool-io/be-mean-instagram/blob/master/Apostila/module-nodejs/pt-br/code-style.md)

===
===
DICA PARA MANTER O REPO FORKADO SINCRONIZADO

```
git remote add upstream [ENDEREÇO DO REPOSITÓRIO PRINCIPAL]
```
Depois, para sincronizar os repositórios, execute o comando:

```
git fetch upstream
```
depois

```
git merge upstream/master
```
===
===

###Exercícios

===

##Aula 01

**Node.js®** is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

###Event Loop

O Event-Loop é o agente responsável por escutar e emitir eventos no sistema. Na prática ele é um loop infinito que a cada iteração verifica em sua fila de eventos se um determinado evento foi emitido. Quando ocorre, é emitido um evento. Ele o executa e envia para fila de executados. Quando um evento está em execução, nós podemos programar qualquer lógica dentro dele e isso tudo acontece graças ao mecanismo de função callback do Javascript.

Fonte: Livro - Aplicações Web Real Time com Node.js - Casa do Código

###Libuv

A libuv é uma biblioteca multi-plataforma responsável pela realização de I/O assíncrono, fornecendo a implementação do event loop e do thread pool, juntamente com o suporte a TCP e UDP socket, resolução de DNS, sistema de arquivos, processos, entre outras.

#####I/O Async

#####Thread Pool

#####Event Driven


##Aula 02

###HTTP

É o principal módulo da aplicação, pois através dele que criamos um servidor web para fornecer o sistema.

É um módulo nativo.

Para utilizar o módulo:

```
require('http');
```

Para cada requisição enviada, possui cabeçalhos que dizem o que essa requisição faz.

O cliente envia uma requisição com um **verbo HTTP** e seus cabeçalhos, depois de recebida e tratada, o servidor responde com um **STATUS CODE** e seus cabeçalhos.

####Methods

O protocolo HTTP possui um conjunto de métodos/verbos que o cliente pode executar.

**GET**: requisita uma representação do recurso especificado.

**HEAD**: retorna os cabeçalhos de uma resposta.

**POST**: envia uma entidade e requisita que o servidor aceita-a como subordinada do recurso identificado pela URI.

**PUT**: Requisita que uma entidade seja armazenada embaixo da URI fornecida. Se a URI se refere a um recurso que já existe, ele é modificado; se a URI não aponta para um recurso existente, então o servidor pode criar o recurso com essa URI.

**DELETE**: apaga o recurso especificado.

**TRACE**: ecoa de volta a requisição recebida para que o cliente veja se houveram mudanças e adições feitas por servidores intermediários.

**OPTIONS**: retorna os métodos HTTP que o servidor suporta para a URL especificada.

**PATCH**: aplica modificações parciais a um recurso.

####STATUS CODE

Os **códigos de retorno** HTTP são compostos por 3 dígitos que seguem um formato padrão dando melhor direcionamento para a identificação correta do retorno.

São divididos em:

**1XX Informacional** -> Serve para informar que a informação foi recebida e que o processo continua.

**2XX SUCESSO** -> Quando o pedido foi recebido com sucesso.

**3XX Redirecionamento** -> Para avisar pelo cabeçalho HTTP uma mudança de página, ou seja, que a URL mudou.


**4XX Erro do cliente** -> O nome já fala por si só. :p

**5XX Erro do Servidor** -> O servidor não consegue atender o pedido por algum erro. Também não permitirá a indexação da página.



###createServer


Para iniciarmos um servidor HTTP utilizamos a função **createServer**, que recebe uma função com dois parâmetros:

- request
- response

```
//forma concatenada

var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Be MEAN");
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost: 3000');
});
```

ou

```
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Be MEAN");
  response.end();
});

server.listen(3000, function(){
  console.log('Servidor rodando em localhost: 3000');
});

```

**Função Anônima**

Essa função anônima poderá ser executada somente **uma vez**, pois ela não tem nenhuma referência a uma variável.

```
function (request, response) {
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("Be MEAN");
  response.end();
}
```

Enviando um **HTML** na RESPOSTA:

```
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type':'text/html'}); // <--- HTML
  response.write('<h1>Be MEAN</h1>');  // <--- HTML
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost: 3000');
});

```

Lendo **HTML** com o **fs.readFileSync**:

```
var http = require('http'),
 fs = require('fs'),
 index = fs.readFileSync('index.html');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(index);
}).listen(3000, function() {
  console.log('Servidor rodando em localhost:3000');
});

```

###Rotas

[Um exemplo do uso de rotas](https://github.com/gabrieltome/be-mean-instagram-nodejs/blob/master/workshop-be-mean/nodejs/routes/server.js)

#####QueryString 

Querystring é o padrão que o protocolo HTTP utiliza para transporte de informações do cliente para o servidor. Devemos utilizar a query para filtrar dados. A sintaxe de uma query string é =. Indicamos que vamos concatenar mais uma busca após outra com o caracter &(e comercial). O início da query string é indicado pelo caractere ? (interrogação).

[Exemplo utilizando QueryString](https://github.com/gabrieltome/be-mean-instagram-nodejs/blob/master/workshop-be-mean/nodejs/hello-querystring.js)




## Aula 03


###GET

```
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false // criar um novo agente para este pedido
}, function(res) {
  // faça algo com 'res'
})
```

[Exemplo](https://github.com/gabrieltome/be-mean-instagram-nodejs/blob/master/workshop-be-mean/nodejs/hello-get-localhost-querystring.js)

```
const http = require('http');

http.get({
    hostname: 'localhost',
    path: '/user?name=Gabriel&aluno=true&age=27',
    port: 3000,
    agent: false
}, (response) => {
  let body = '';
  console.log('STATUS:' + response.statusCode);
  console.log('HEADERS:' + response.headers);

  response.on('data', function(data){
    body += data;
  });
  
  response.on('end', function(){
    console.log('Resposta:', body);
  });

});
```

`A única diferença entre o **http.get()** e **http.request** é que o **get()** seta o valor do verbo para **GET** e chama o **req.end()** automaticamente.`

####IncomingMessage

É um objeto criado por **http.Server** ou **http.ClientRequest** e passado como o primeiro argumento para o **request** e **response**, respectivamente.
Ele pode ser usado para acessar resposta de status, os cabeçalhos e os dados em si.

O **IncomingMessage** implementa a interface de **Readable Stream**, que nos dá alguns eventos importantes:

- **close**: evento emitido quando qualquer tipo de stream foi fechada;
- **data**: evento que recebe os dados da *Stream*;
- **end**: evento emitido quando não há mais dados para ler;
- **error**: evento emitido quando acontecer algum erro.


###REQUEST

Primeiro criamos um JSON de configuração:

```
const options = {
  host: 'api.redtube.com',
  path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};
```

Depois criamos a função de *callback*:

```
function callback(res) {
  console.log('STATUS:' + res.statusCode);
  console.log('HEADERS:' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Dados finalizados:', data);
  });
}
```

Então passamos o JSON de configuração e o *callback* para o **request**:

```
const req = http.request(options, callback);
```

[Exemplo completo](https://github.com/gabrieltome/be-mean-instagram-nodejs/blob/master/workshop-be-mean/nodejs/http-request.js)

###Create - POST










