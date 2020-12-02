function calendar() {

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

typeof window.addEventListener == 'undefined' ? window.attachEvent("onload", calendar) : addEventListener('load', calendar, false);
