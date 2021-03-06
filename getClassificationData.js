const axios = require('axios').default
const fs = require('fs')
const moment = require('moment')

const url = "https://ussouthcentral.services.azureml.net/workspaces/622eae26a54e4a50b70f2ed980cfda2c/services/b6099d2e6576404596376bc14f41d65e/execute?api-version=2.0&details=true"
const body = {
    "Inputs": {
        "input1": {
            "ColumnNames": [
                "ID_usuario",
                "Genero",
                "Idade",
                "Estado_civil",
                "Atividade_no_site",
                "Pesquisou_eletronicos_12m",
                "Comprou_eletronicos_12m",
                "Pesquisou_midia_digital_18m",
                "Comprou_midia_digital_18m",
                "Forma_pagamento",
                "Adocao_eReader"
            ],
            "Values": []
        }
    },
    "GlobalParameters": {}
}

async function doRequest() {
    const dateFromFile = fs.readFileSync("./baseClassificaçãoConsumo.csv").toString().split('\r\n')
    for (let i = 1; i < (dateFromFile.length - 1); i++) {
        const line = dateFromFile[i].split(",")

        body.Inputs.input1.Values.push(line)
    }

    try {
        const response = await axios.post(url, body, {
            headers: {
                'Authorization': 'Bearer e0losjchPPuxZD6o9AO4WmOzTmv/V/myLjOYTtuiH2UOpkkv+vXPMil1LcRCV+arKZ85m2wJgEP1TpIEp9cLOA==',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const values = response.data.Results.output1.value.Values
        const headder = response.data.Results.output1.value.ColumnNames.join(",") + "\n"
        const nameFIle = `./classificationResultsOf${moment().format("DD-MM-YYYY-HH-mm-ss")}.csv`

        fs.writeFileSync(nameFIle, headder)

        for (let i = 0; i < values.length; i++) {
            const lineData = values[i].join(',') + "\n"
            fs.appendFileSync(nameFIle, lineData)
        }

    } catch (err) {
        console.log(err)
    }
}

doRequest()