Parte visual do aplicativo Explorer Food (FRONT-END)

Nesse aplicativo usamos as seguintes técnicas:

- Componentes
- Migrations na parte de back-end
- Criação de interfaces com react-js
- Uso de estados (useState)
- Uso de hooks (useEffect, useRef)
- Uso de ícones (react-icons)

Para utilizar o projeto como desenvolvedor siga os seguintes passos:

1. Caso Você deseje utilizar o frontend sem com o beckend já conectado, basta inserir a senha que está disponível ao final (passo 3). Caso deseje ativar o beckend no seu computador e local, basta iniciar a aplicação de ambos os arquivos de front-end como no back-end com o comando "npm run dev"

2. Na parte de banck-end, você pode apagar o database e depois que ativar novamente o servidor com o comando "npm run dev" o database será criado novamente, mas também será necessário usar o comando "npm run migrate" para criar as migrations (outras tabelas criadas com esse método) que usa o knex.

3. Para utilizar o usuário de administrador da aplicação é importante usar o Insomnia ou o Beekeeper para criar um usuário para o administrador, pois não existe um local, uma rota na aplicação pra criar esse usuário de administrador, existe apenas as rotas para criar contas para o cliente na aplicação - a rota para ser utilizada no Insomnia ou no Beekeeper para criar a conta do administrador é "localhost:3333/adm" e os dados precisam ser inseridos em formato JSON (segue exemplo abaixo): 

CONTA DO CLIENTE:

email do cliente:
	
	teste@teste.com"
	
senha do cliente:
	
	123456
	


CONTA DO ADMINISTRADOR:

email do administrador:
	
	pablomartins1515@hotmail.com
	
senha administrador:
	
	123456
	


site publicado em: https://frontend-explorer.vercel.app/
