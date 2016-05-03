# Node.js - Aula 01 - Exercício
**user:** [gabrieltome](https://github.com/gabrieltome)
**autor:** Gabriel Tomé Lisboa

##1. Explique como um processo síncrono e assíncrono roda no Node.js, dê um exemplo para cada.

Em um processo **síncrono**, é executada uma task por vez. Ou seja, uma task só é executada quando a task anterior é finalizada.

```
var fs = require('fs');
for(var i = 1; i <= 5; i++) {  var file = "sync-txt" + i + ".txt";  var out = fs.writeFileSync(file, "Hello Node.js!");  console.log(out);}
```

Já em um processo **assíncrono**, as tasks são executadas em paralelo, ou seja, não é preciso esperar uma task finalizar para iniciar a execução de outra.

```
var fs = require('fs');for(var i = 1; i <= 5; i++) {  var file = "async-txt" + i + ".txt";  fs.writeFile(file, "Hello Node.js!", function(err, out) {    console.log(out);  });}
```


##2. Como o V8 executa JavaScript? Demonstre 1 exemplo com código ou imagem.

![image](/Users/gabrieltome/Desktop/v8-execute-js.png)

![image](/Users/gabrieltome/Dropbox/Capturas de tela/Captura de tela 2016-05-02 22.35.59.png)

##3. Qual a diferença entre um sistema single para um multi-thread?


Em um sistema **single-thread**, um processo é executado por vez.

Em um sistema **multi-thread**, vários processos são executados ao mesmo tempo, porém há um aumento significativo no uso de memória.


##4. Como a Thread Pool tem um tamanho padrão de 4, o que acontece se você enviar 5 requisições ao banco?

A 5ª requisição vai para o estado de **IDLE** (dormindo) e fica esperando uma das quatro threads que estão na **Thread Pool** ser finalizada.


##5. Como você venderia seu peixe de Node.js na sua empresa para tentar convencer seu chefe da sua adoção?

Node.js é Open Source!
Node.js utiliza a linguagem JavaScript, a linguagem de programação mais utilizada do mundo.
Node roda em cima da engine V8, desenvolvida por nada mais nada menos que a Google.
Node vem sido utilizado em grandes companhias ao redor do mundo, como Paypal, Uber, Linkedin, Netflix, entre outras.



##6. Qual a versão do seu 'node'?

```
MacBook-Pro-de-Gabriel-Tome:~ gabrieltome$ node -v
v5.10.1
```


##7. Qual a versão do seu 'npm'?

```
MacBook-Pro-de-Gabriel-Tome:~ gabrieltome$ npm -v
3.8.3
```