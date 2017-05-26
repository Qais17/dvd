var table = null;
var URL = "http://www.deeveadee.fr/";
var CONTENT = $("#resultat");
//Fabrique le rendu (<table>) et l'insere dans la zone prévue (<div id="content"></div>)
//L'algorythme est découpé en 3 parties 
function createTableDvds(dvds) {
    //prepration de la balise table
    table = document.createElement("table");
    $(CONTENT).append(table);
    //affectation des lignes
    $(table).append(getHeaderLineForTableBook());
    generateContentForTableBook(dvds);
    //mise en forme via l'application de classe css
    $(table).addClass("col-xs-10 col-xs-offset-1 color1 books");
}

function getHeaderLineForTableDvd() {
    //creation des balises
    var ligne = document.createElement("tr");
    var idDvd = document.createElement("th");
    var titleDvd = document.createElement("th");
    var auteur = document.createElement("th");

    //affectation des textes
    $(idDvd).text("id");
    $(titleDvd).text("Titre");
    $(auteur).text("Auteur");

    //insertion des th dans la ligne
    $(ligne).append(idDvd);
    $(ligne).append(titleDvd);
    $(ligne).append(auteur);

    return ligne;
}