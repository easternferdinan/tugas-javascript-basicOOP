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
    
        data.forEach(datum => {
            openingTags += `<tr>
            <td>${datum[0]}</td>
            <td>${datum[1]}</td>
            <td>${datum[2]}</td>
            </tr>`;
        });
    
        return openingTags + closingTags;
    }

    render(elementSelector) {
        let table = `<table class="table table-striped text-center table-bordered">
        ${this.createHeader(this.init.header)}
        ${this.createBody(this.init.team)}
        </table>`;

        // console.log(elementSelector.innerHTML = table)
        elementSelector.innerHTML = table;
    }
}


const entryList = new Table ({
    header: ["Team", "Driver", "Homebase"],
    team: [
        ["Mercedes-AMG Petronas Formula 1 Team", "Lewis Hamilton, George Russel", "Great Britain"], 
        ["Oracle Red Bull Racing", "Max Verstappen, Sergio Perez", "Austria"], 
        ["Scuderia Ferrari", "Charles Leclerc, Carlos Sainz", "Italy"], 
        ["McLaren Formula 1 Team", "Lando Norris, Oscar Piatri", "Great Britain"], 
        ["BWT Alpine F1 Team", "Esteban Ocon, Pierre Gasly", "France"], 
        ["Alfa Romeo F1 Team Orlen", "Valtteri Bottas, Guanyu Zhou", "Italy"], 
        ["Aston Martin Aramco Cognizant F1 Team", "Lance Stroll, Fernando Alonso", "Great Britain"], 
        ["MoneyGram Haas F1 Team", "Kevin Magnussen, Nico Hulkenberg", "United States of America"], 
        ["Scuderia AlphaTauri", "Nyck de Vries, Yuki Tsunoda", "Italy"], 
        ["Williams Racing", "Alex Albon, Logan Sargeant", "Great Britain"],
    ],
});

const selector = document.querySelector(".dynamicTable");
entryList.render(selector);
