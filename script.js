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

    // La ligne avec le mois et l'année
    var tbHead = document.createElement("th");
    tbHead.setAttribute('colspan', '7');
    var tbhtxt = document.createTextNode(monthNames[today.getMonth()] + ' - ' + year);
    
    // Couleur du mois
    // On récupère le mois actuel
    var monthIndex = today.getMonth();
    // On ajoute la classe correspondante au mois actuel
    tbHead.setAttribute("class", monthClass[monthIndex]);

    tbHead.appendChild(tbhtxt);
    tbRow.appendChild(tbHead);

    // La ligne avec les noms des jours
    var tbRow = table.insertRow(-1);
    for (var i = 0; i < weekDays.length; i++) {
        tbRow.insertCell(-1).appendChild(document.createTextNode(weekDays[i]));
    }

    // La ligne avec les numeros des jours
    var tbRow = table.insertRow(-1);
    // Jour en train d'etre traité (commence sur Lundi)
    var curDay = firstDay;
    for (let i = 0; i < 7; i++) {

        // Nouvelle case
        var tbData = tbRow.insertCell(-1);

        // Couleur jaune pour aujourd'hui
        curDay.getDate() == thisDay ? tbData.style.color = "#FFFF00" : null;

        // Couleur du mois
        // On récupère le mois actuel
        var monthIndex = curDay.getMonth();
        // On ajoute la classe correspondante au mois actuel
        tbData.setAttribute("class", monthClass[monthIndex]);

        // On met le texte dans la case
        tbData.appendChild(document.createTextNode(curDay.getDate()));

        // On passe au jour suivant
        curDay.setDate(curDay.getDate()+1);

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
