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
    var firstDay = today;
    // On le met sur Lundi
    while (firstDay.getDay() != 1) {
        firstDay.setDate(firstDay.getDate()-1);
    }
    
    
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

    // La ligne avec les noms des jours
    var tbRow = table.insertRow(-1);
    for (var i = 0; i < weekDays.length; i++) {
        tbRow.insertCell(-1).appendChild(document.createTextNode(weekDays[i]));
    }

    // La ligne avec les numeros des jours
    var tbRow = table.insertRow(-1);
    // Numero du premier jour
    var firstNum = firstDay.getDate();
    for (let i = 0; i < 7; i++) {

        // Nouvelle case
        var tbData = tbRow.insertCell(-1);

        // Couleur jaune pour aujourd'hui
        firstNum+i == thisDay ? tbData.style.color = "#FFFF00" : null;

        // On met le texte dans la case
        tbData.appendChild(document.createTextNode(firstNum+i));

    }

    // La ligne de textearea
    var tbRow = table.insertRow(-1);
    for (let i = 0; i < 7; i++) {

        // Nouvelle case
        var tbData = tbRow.insertCell(-1);
        // Nouvelle zone de texte
        var txtarea = document.createElement('textarea');
        
        txtarea.cols = 7;
        
        tbData.appendChild(txtarea);

    }
    document.getElementById('calendar').appendChild(table);
}

typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", calendarWeek) : addEventListener('load', calendarWeek, false);
