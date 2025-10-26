totale      = 0;
carrello    = new Array();
numProdotti = 0;
control     = false;

let prodotti = [
    {
        "name": "T-shirt Vuitton",
        "prezzo": "200"
    },
    {
        "name": "T-shirt Gucci",
        "prezzo": "300",
    },
    {
        "name": "T-shirt Nike",
        "prezzo": "50"
    },
    {
        "name": "T-shirt Balenciaga",
        "prezzo": "100"
    } 
]

function aggiungi_prodotto(id)
{
            prodotto = prodotti[id];
            alert("Il prodotto : " + prodotto.name + ", prezzo : " + prodotto.prezzo + "$ e' stato aggiunto al carrello");

            aggiungi_al_pop_up(this.prodotto);


            carrello[numProdotti] = this.prodotto;
            this.totale          += parseInt(this.prodotto.prezzo);
            
            numProdotti++;

            document.getElementById("totale").innerHTML = "Totale : " + this.totale;
}

function aggiungi_al_pop_up()
{
    var paragrafo = document.createElement("p");
    var pop_up    = document.createTextNode(prodotto.name + " : " + prodotto.prezzo + "$\n");

    paragrafo.appendChild(pop_up);
    document.getElementById("pop_up").appendChild(paragrafo);
}

function showPop_up()
{
    if (control)
    {
        document.getElementById("pop_up").style.display = "none";
        control = false;
    } else {
        document.getElementById("pop_up").style.display = "block";
        control = true;
    } 
}