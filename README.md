# Bem vindo ao repositório do MakeYourGo

### Instalação Node
É preciso ter no mínimo o [Node.js](https://nodejs.org/) v16.15+
### Etapas para começar a trabalhar no projeto:

1 - Para iniciar o projeto basta dar git clone https://github.com/Veronezegui/MakeYourGO.git em uma pasta do seu computador

2 - Rode o comando yarn em ambas as pastas para instalar as bibliotecas do projeto.

____________________________________________________________________________________________________________________________

### Fluxo para atualizar o projeto:

git fetch

git checkout master 

git pull --rebase origin master   <- vai atualizar sua branch master com a branch origin (essa branch é a principal) 

git checkout -B [nome_branch_feature] ex: git checkout -B adiciona-filtro-usuarios 

git add .

git commit -m "msg"

git push origin [nome_branch_feature] ex: git push origin adiciona-filtro-usuario

