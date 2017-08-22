# Projeto para relatório de empresas, consumindo dados de API fornecida. #

### Aplicação construida com Angular 2, montando a estrutura com angular-cli e Bootstrap. ###

### Como rodar o projeto  ###

* Instalar NodeJs/NPM no computador.
* Fazer o download do projeto.
* Abrir o terminal ou prompt e na pasta do projeto usar "npm install" para baixar os módulos do projeto.
* Ainda no terminal ou prompt rodar "npm start".
* Abrir o browser e no campo de pesquisa digitar localhost:4200
* Espero que goste, rs 😆

### ESCOPO DO PROJETO ###

* Login e acesso de Usuário já registrado
* Listagem de Empresas
* Detalhamento de Empresas
* Filtro de Empresas por nome e tipo


### Especificações da construção do projeto ###

* Foi utilizado angular para melhor reaproveitamento de codigo e evitar repetições. 
* Para a busca de empresas foi reaproveitado a component List, asssim ele é usado para montar tanto a consulta de todas as empresas quanto a por filtros.
* Foram criadas classes especificas para empresa, desta forma existe um objeto tipado para a mesma.
* Utilização de guardião para rotas, assim só é possível acessar as empresas se o usuário estiver autenticado.
* Para arquivos estaticos foram utilizadas bibliotecas globais e configurado o direcionamento no arquivo ".angular-cli.json", deixando o código mais limpo.