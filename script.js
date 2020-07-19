var maleNames=[ "Kwasi",  "Kwadwo", "Kwabena", "Kwaku", "Yaw",  "Kofi",  "Kwame"];


var femaleNames=[ "Akosua", "Adwoa",  "Abenaa", "Akua",  "Yaa",  "Afua",  "Ama",];



var weekDays=[ "Sunday", "Monday", "Tuesday", "Wednesday",  "Thursday", "Friday",  "Saturday",];
   

function additionSubmit() {
    event.preventDefault();
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male') {
        alert(" HER BIRTHDAY " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    }
    else if (gender === 'female') {
        alert(" HIS BIRTHDAY  " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    }
    else {
        alert( " IF HIS/HER BIRTHDAY" + " UNDFINED DATE " + ',' + " Your Akan Name Is "  + " UNDEFINED ");
    }
}
