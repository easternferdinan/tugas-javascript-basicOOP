class Table {
    constructor(init) {
        this.init = init
    }

    createHeader(data) {
        let openingTags = '<thead class="table-content thead-dark"><tr>';
        let closingTags = '</tr></thead>';

        data.forEach(datum => {
            openingTags += `<th>${datum}</th>`;
        });

        return openingTags + closingTags;
    }

    createBody(data) {
        let openingTags = '<tbody class="table-content"><tr>';
        let closingTags = '</tr></tbody>';

        for (const teamName in data) {
            openingTags += `<tr>
            <td>${teamName}</td>
            <td>${data[teamName].driver[0]}</td>
            <td>${data[teamName].driver[1]}</td>
            <td>${data[teamName].homebase}</td>`
        }

        return openingTags + closingTags;
    }

    render(elementSelector) {
        let table = `<table class="table table-striped text-center table-bordered">
        ${this.createHeader(this.init.columns)}
        ${this.createBody(this.init.teams)}
        </table>`;

        elementSelector.innerHTML = table;
    }
}

const entryList = new Table({
    "columns": ["Team", "Driver 1", "Driver 2", "Origin"],
    "teams":{
        "Mercedes-AMG Petronas Formula 1 Team": {
            "driver": ["Lewis Hamilton", "George Russel"],
            "homebase": "Germany"
        },
        "Oracle Red Bull Racing": {
            "driver": ["Max Verstappen", "Sergio Perez"],
            "homebase": "Austria"
        },
        "Scuderia Ferrari": {
            "driver": ["Charles Leclerc", "Carlos Sainz"],
            "homebase": "Italy"
        },
        "McLaren Formula 1 Team": {
            "driver": ["Lando Norris", "Oscar Piatri"],
            "homebase": "Great Britain"
        },
        "BWT Alpine F1 Team": {
            "driver": ["Esteban Ocon", "Pierre Gasly"],
            "homebase": "France"
        },
        "Alfa Romeo F1 Team Orlen": {
            "driver": ["Valtteri Bottas", "Guanyu Zhou"],
            "homebase": "Italy"
        },
        "Aston Martin Aramco Cognizant F1 Team": {
            "driver": ["Lance Stroll", "Fernando Alonso"],
            "homebase": "Great Britain"
        },
        "MoneyGram Haas F1 Team": {
            "driver": ["Kevin Magnussen", "Nico Hulkenberg"],
            "homebase": "United States of America"
        },
        "Scuderia AlphaTauri": {
            "driver": ["Nyck de Vries", "Yuki Tsunoda"],
            "homebase": "Italy"
        },
        "Williams Racing": {
            "driver": ["Alex Albon", "Logan Sargeant"],
            "homebase": "Great Britain"
        }
    }
});

const selector = document.querySelector(".dynamicTable");
entryList.render(selector);