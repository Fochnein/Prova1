function creaScacchiera() {
    let n = parseInt(document.getElementById("nValue").value);
    let errore = document.getElementById("errore");
    let tabellaDiv = document.getElementById("tabella");
    let sommaP = document.getElementById("somma");

    tabellaDiv.innerHTML = "";
    sommaP.textContent = "";
    errore.textContent = "";


    if (isNaN(n) || n < 1 || n > 10) {
        errore.textContent = "Errore: inserisci un numero tra 1 e 10.";
        return;
    }


    let table = document.createElement("table");
    let somma = 0;

    for (let r = 1; r <= n; r++) {
        let row = document.createElement("tr");
        for (let c = 1; c <= n; c++) {
            let cell = document.createElement("td");
            let value = r * c;
            cell.textContent = value;
            somma += value;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tabellaDiv.appendChild(table);


    sommaP.textContent = "Somma Magica: " + somma;
}
