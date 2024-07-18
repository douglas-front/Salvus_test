# SALVUS TESTE
## LINKS

ACESSE O SITE : https://salvus-xi.vercel.app/

repósitório apenas backend: https://github.com/douglas-front/apiSalvus



# como usar?

passo 1 : primeiro instale o node js no seu computador, em seguinte instale e configure o git.

passo 2 : rode o seguinte comando no terminal do vs code ( git clone https://github.com/douglas-front/Salvus_test.git )

passo 3 : agora entre na pasta que deseja , exemplo ( cd ./front/ )

passo 4 : rode o seguinte comando ( npm install ) para o node baixar todas as dependências nescessárias. OBS ( ambas as pastas front e backend terão que rodar esse comando )

# CRIAR TABELA NO BANCO DE DADOS POSTGRES SQL

passo 1 : instale o postgres sql no seu computador, em seguida crie um banco de dados.

passo 2 : rode a seguinte query no seu banco de dados :

![image](https://github.com/user-attachments/assets/6dfac5a7-d233-42b7-9f74-be88f3945cb6)

# RODAR BACKEND

passo 1 : depois de seguir os passo você precisa pegar a connection string do seu banco.

passo 2 : crie um arquivo " .env " na raiz do projeto ( backend ).

passo 3 : declare a variavel de ambiente, exeplo : ( CONNECTION_STRING=SUA_CONNECTION_STRING )

passo 4 : agora vá ate a pasta " dataBase " , em seguinta clique em " db.ts " procure pela seguinte informação,
![image](https://github.com/user-attachments/assets/ec1cf9d9-7c75-48f6-bf6b-fb64f0dedb04)

troque o process.env.POSTGRES_URL pela sua variável que você criou no .env , exeplo process.env.CONNECTION_STRING

passo 5 : rode o comando npm start para iniciar a aplicação.

# RODAR FRONT END

depois de rodar o comando npm install dito acima, siga os passos.

passo 1 : troque a url da api e coloque a sua dr acordo com as rotas do back end , rota padrão:
( http://localhost:3000/products ). Os links que você tem que trocar se encontram na pasta :

" hooks/useGetProducts.ts no useEffect ",

" routes/Management/layouts/PostSection/Form.tsx na função handleSubmit " ,

" routes/Management/layouts/Products/ProductCard.tsx na função deleteProduct " ,

" routes/Management/layouts/Modal/FormEdit.tsx na função handleSubmit ".

passo 2 : rode o comando ( npm run dev ).


# Detalhes do projeto

FOI USADO AS SEGUINTES BIBLIOTECAS NO FRONT END :

gsap para animações,

lenis scroll para deixar o scroll da pagina mais suave,

react-icons para icones,

react-router-dom para criação de rotas,

sass pré processador de css.

FOI USADO AS SEGUINTES BIBLIOTECAS NO BACK END :

express js para criação de rotas,

pg biblioteca do postgres sql,

dotenv para variáveis de ambientes.

AMBOS OS PROJETOS CONTAM COM O TYPESCRIPT , PARA EVITAR ERROS E TER UM CÓDIGO MAIS SEGURO.

OBRIGADO PELA ATENÇÃO.



