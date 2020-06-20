const axios = require('axios').default
const fs = require('fs')
const moment = require('moment')

const url = "" //inserri url da API aqui
const body = {
    "Inputs": {
        "input1": {
            "ColumnNames": [
                //inserri colunas aqui
            ],
            "Values": []
        }
    },
    "GlobalParameters": {}
}

async function doRequest() {
    const dateFromFile = fs.readFileSync("./baseRegressaoOleo.csv").toString().split('\r\n')
    for (let i = 1; i < (dateFromFile.length - 1); i++) {
        const line = dateFromFile[i].split(",")

        body.Inputs.input1.Values.push(line)
    }

    try {
        const response = await axios.post(url, body, {
            headers: {
                'Authorization': 'Bearer ',//colocar api key aqui 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const values = response.data.Results.output1.value.Values
        const headder = response.data.Results.output1.value.ColumnNames.join(",") + "\n"
        const nameFIle = `./regressionResultsOf${moment().format("DD-MM-YYYY-HH-mm-ss")}.csv`

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