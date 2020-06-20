# TestingML

<h1>Proposta</h1>
<p>
    Esse projeto tem a proposta basica de testar as API feita no azure machine learning studio
    Nele consta dois aquivos cada uma com seus proprios codigos que executam os projetos distintintos e trazem resultados diferentes
</p>


<h1>Pré Requisitos</h1>
<p>
    É necessário ter instalado o nodeJS v10 no minimo
    e consequentemente instalado o npm para instalçao dos pacotes
</p>



<h1>Dados a serem enviados</h1>
<p>
    As bases já devem estar preenchida elas estao nos arquivos 'baseClassificaçãoConsumo.csv' e 'baseRegressaoOleo.csv', mas caso não esteja é necessário preencher os arquivos com os dados a serem passados para a API tendo o seguinte padrão:

    Primeira linha de 'baseClassificaçãoConsumo.csv':
    ID_usuario,Genero,Idade,Estado_civil,Atividade_no_site,Pesquisou_eletronicos_12m,Comprou_eletronicos_12m,Pesquisou_midia_digital_18m,Comprou_midia_digital_18m,Forma_pagamento,Adocao_eReader

    exemplo de dados de 'baseClassificaçãoConsumo.csv':
    56031,M,57,S,Intermitente,Sim,Sim,Sim,Sim,Transferencia,

    Primeira linha de 'baseRegressaoOleo.csv':
    TODO

    exemplo de dados de 'baseRegressaoOleo.csv':
    TODO

</p>

<h1>Como executar</h1>
<p>
    Priemiro caso tenha clonado o projeto pela priemira vez é necessário executar o comando 'npm i' para instalção dos pacotes necessários para o funcionameto do sistema
    Logo apos o termino da execução dos pacotes para rodar os programas execute os seguintes comados:

    node getClassificationData.js
    após a execução desse será gerado um novo arquivo com os dados anteriores enviados a ele e os dados da classificação num arquivo com o padrão de nome: classificationResultsOf mais a data e hora de execução do arquivo no path que ele foi executado

    node getRegressionData.js
    após a execução desse será gerado um novo arquivo com os dados anteriores enviados a ele e os dados da classificação num arquivo com o padrão de nome: regressionResultsOf mais a data e hora de execução do arquivo no path que ele foi executado
</p>