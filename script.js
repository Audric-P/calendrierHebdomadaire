function calendarMonth() {

    var monthNames = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];
    var jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var today = new Date();
    var thisDay = today.getDate();
    var year = today.getYear();
    year <= 200 ? year += 1900 : null;

    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        monthDays[1] = 29;
    }
    var nDays = monthDays[today.getMonth()];
    var firstDay = today;
    firstDay.setDate(0);

    firstDay.getDate() == 2 ? firstDay.setDate(0) : null;

    var startDay = firstDay.getDay();

    var table = document.createElement('table');

    var tbRow = table.insertRow(-1);

    var tbHead = document.createElement("th");
    tbHead.setAttribute('colspan', '7');
    var tbhtxt = document.createTextNode(monthNames[today.getMonth() + 1] + '.' + year);
    tbHead.appendChild(tbhtxt);

    tbRow.appendChild(tbHead);

    var tbRow = table.insertRow(-1);

    for (var i = 0; i < jours.length; i++) {

        tbRow.insertCell(-1).appendChild(document.createTextNode(jours[i]));
    }

    var tbRow = document.createElement("tr");

    var column = 0;

    for (var i = 0; i < startDay; i++) {
        tbRow.insertCell(0);
        column++;
    }

    for (var i = 1; i <= nDays; i++) {

        var tdd = tbRow.insertCell(-1);

        i == thisDay ? tdd.style.color = "#FF0000" : null;

        tdd.appendChild(document.createTextNode(i));

        column++;
        if (column == 7) {
            table.appendChild(tbRow);
            var tbRow = document.createElement("tr");
            column = 0;
        }

        i == nDays ? table.appendChild(tbRow) : null;

    }
    document.getElementById('contcalendar').appendChild(table);
}

function calendarWeek() {
    // Noms des mois
    var monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
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

    // Premier jour de la semaine
    // On le met sur Lundi
    var firstDay = today;
    while (firstDay.getDay() != 1) {
        firstDay.setDate(firstDay.getDate()-1);
    }
    
    var startDay = firstDay.getDay();   
    
    // Tableau
    var table = document.createElement('table');

    // Ajouter une ligne à la fin
    var tbRow = table.insertRow(-1);

    // La case avec le mois et l'année
    var tbHead = document.createElement("th");
    tbHead.setAttribute('colspan', '7');
    var tbhtxt = document.createTextNode(monthNames[today.getMonth() ] + ' - ' + year);
    tbHead.appendChild(tbhtxt);
    tbRow.appendChild(tbHead);

    // La ligne avec les jours de la semaine
    var tbRow = table.insertRow(-1);
    for (var i = 0; i < weekDays.length; i++) {
        tbRow.insertCell(-1).appendChild(document.createTextNode(weekDays[i]));
    }

    // La première ligne, cases vide jusqu'aujourd'hui
    var tbRow = document.createElement("tr");
    var column = 0;
    for (var i = 0; i < startDay; i++) {
        tbRow.insertCell(0);
        column++;
    }

    var day = firstDay;
    for (let i = 0; i < 7; i++) {

        // Nouvelle case
        var tdd = tbRow.insertCell(-1);

        // Couleur rouge pour aujourd'hui
        i == thisDay ? tdd.style.color = "#FF0000" : null;

        // On met dans la case le texte
        tdd.appendChild(document.createTextNode(day.getDate+i));
    }

    // for (var i = 1; i <= nDays; i++) {

    //     // Nouvelle case
    //     var tdd = tbRow.insertCell(-1);

    //     // Couleur rouge pour aujourd'hui
    //     i == thisDay ? tdd.style.color = "#FF0000" : null;

    //     // On met dans la cases le texte
    //     tdd.appendChild(document.createTextNode(i));

    //     // Compteur de colonne
    //     column++;
    //     // Si on a fait 7 colonnes alors :
    //     if (column == 7) {
    //         // Nouvelle ligne
    //         table.appendChild(tbRow);
    //         var tbRow = document.createElement("tr");
    //         column = 0;
    //     }

    //     i == nDays ? table.appendChild(tbRow) : null;

    // }

    document.getElementById('secondcalendar').appendChild(table);
}

typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", calendarMonth) : addEventListener('load', calendarMonth, false);
typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", calendarWeek) : addEventListener('load', calendarWeek, false);
