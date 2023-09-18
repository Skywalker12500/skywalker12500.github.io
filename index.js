function addText() {    
    const today = new Date();
    d2 = today.getDate();
    m2 = today.getMonth() + 1;
    y2 = today.getFullYear();

    d1 = (document.getElementById('dayin').value);
    m1 = (document.getElementById('monthin').value);
    y1 = (document.getElementById('yearin').value);

    var years, months, days;
    years = y2 - y1; //subtract years

    if (m2 >= m1) { //subtract months
        months = m2 - m1;
    } else {
        years--;
        months = 12 + m2 - m1;
    }

    if (d2 > d1) { //subtract days
        days = d2 - d1;
    } else {
        months--;
        days = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (months < 0) { //if months is reduced to -1 by days subtraction:
        months = 11;
        years--;
    }

    //calculate decimal and onlyDays
    const decimal = years + (months/12) + (days/365);

    //display days, months, and years on page
    document.getElementById("dayout").innerText = days;
    document.getElementById("monthout").innerText = months;
    document.getElementById("yearout").innerText = years;

    //display decimal
    document.getElementById("decimal").innerText = decimal.toFixed(3);

    return false;
};

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}