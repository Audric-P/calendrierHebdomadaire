function calendarWeek() {
    // Noms des mois
    var monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    // Noms des classes CSS des mois
    var monthClass = ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'aou', 'sep', 'oct', 'nov', 'dec'];
    // Noms des jours
    var weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    // Durées des mois
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Date d'aujourd'hui
    var today = new Date();
    // Jour de la date
    var thisDay = today.getDate();
    // Année de la date
    var year = today.getYear();
    year <= 200 ? year += 1900 : null;

    // Années bissextiles
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        monthDays[1] = 29;
    }

    // Deuxieme mois de la semaine
    var secondMonth = makeSecondMonth(today, monthNames);

    // Premier jour de la semaine
    var firstDay = today;
    // On le met sur Lundi
    while (firstDay.getDay() != 1) {
        firstDay.setDate(firstDay.getDate()-1);
    }
    
    
    // Tableau
    var table = document.createElement('table');

    // Ajouter une ligne au début
    var rowMonth = table.insertRow(0);

    // La ligne avec le mois et l'année
    var headMonth = document.createElement("th");
    headMonth.setAttribute('colspan', '7');
    var tbhtxt = document.createTextNode(monthNames[today.getMonth()] + secondMonth + ' - '  + year);
    
    // Couleur du mois
    // On récupère le mois actuel
    var monthIndex = today.getMonth();
    // On ajoute la classe correspondante au mois actuel
    headMonth.setAttribute("class", monthClass[monthIndex]);

    headMonth.appendChild(tbhtxt);
    rowMonth.appendChild(headMonth);

    // La ligne avec les noms des jours
    var rowDays = table.insertRow(-1);
    // La ligne avec les numeros des jours
    var rowNumbers = table.insertRow(-1);
    // Jour en train d'etre traité (commence sur Lundi)
    var curDay = firstDay;
    // Les deux lignes sont traitées simultanément
    for (let i = 0; i < weekDays.length; i++) {

        // Nouvelle case
        var cellNumbers = rowNumbers.insertCell(-1);
        var cellDays = rowDays.insertCell(-1);

        // Couleur du mois
        // On récupère le mois actuel
        var monthIndex = curDay.getMonth();
        // On ajoute la classe correspondante au mois actuel
        cellNumbers.setAttribute("class", monthClass[monthIndex]);
        cellDays.setAttribute("class", monthClass[monthIndex]);

        // Classe .today pour le jour d'aujourd'hui
        if (curDay.getDate() == thisDay) {
            cellNumbers.setAttribute("class", monthClass[monthIndex] + " today");
            cellDays.setAttribute("class", monthClass[monthIndex] + " today");
        }

        // On met le texte dans la case
        cellNumbers.appendChild(document.createTextNode(curDay.getDate()));
        cellDays.appendChild(document.createTextNode(weekDays[i]));

        // On passe au jour suivant
        curDay.setDate(curDay.getDate()+1);

    }

    // La ligne de textearea
    var rowNote = table.insertRow(-1);
    for (let i = 0; i < 7; i++) {

        // Nouvelle case
        var cellNote = rowNote.insertCell(-1);
        // Nouvelle zone de texte
        var txtarea = document.createElement('textarea');
        
        txtarea.cols = 7;
        
        cellNote.appendChild(txtarea);

    }
    document.getElementById('calendar').appendChild(table);
}
 
function makeSecondMonth(today, monthNames) {
    var numFirstMonth = today.getMonth();
    // Dernier jour de la semaine
    var lastDay = today;
    // On avance sur le prochain Dimanche
    while (lastDay.getDay() != 0) {
        lastDay.setDate(lastDay.getDate()+1);
    }
    // Numero du mois du dernier jour de la semaine
    var numSecondMonth = lastDay.getMonth();
    // Chaine vide retournée si le mois est le meme que le premier jour
    var strToReturn = "";
    // Si le mois n'est pas le même que celui du premier jour :
    if (numFirstMonth != numSecondMonth) {
        // On récupère le nom du mois dans le tableau
        var strSecondMonth = monthNames[numSecondMonth];
        // On sépare les deux mois par un '/'
        strToReturn = " / " + strSecondMonth;
    }
    return(strToReturn);
}

typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", calendarWeek) : addEventListener('load', calendarWeek, false);