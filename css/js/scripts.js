function getAkanName() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(dateOfBirth.getDay()
   
    var a = Math.floor((14 - month) / 12)

    var y = year - a
    var m = month + 12 * a - 2
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m / 12)) % 7)

    if (myBirthday === "") {
        document.getElementById('message').innerHTML = "Be serious!Invalid character!!";
    }
    else {
        for (var i = 0; i < myGender.length; i++) {
            if (myGender[i].checked) {
                if (myGender[i].value === "Male") {
                    alert(" Born on a " + daysOfTheWeek[dateOfBirth.getDay()] + " " + "Your Akan Name is: " + maleAkanNames[dayOfTheWeek]);
                    document.getElementById('message').innerHTML = names[dateOfBirth.getDay()];
                }
                else if (myGender[i].value === "Female") {
                    alert(" Born on a " + daysOfTheWeek[dateOfBirth.getDay()] + " " + "Your Akan Name is: " + femaleAkanNames[dayOfTheWeek]);
                    document.getElementById('message').innerHTML = names[dateOfBirth.getDay()];
                }
            }
            else if {
                document.getElementById('message').innerHTML = "Please select a Gender";
            }
            else {
                alert("click submit")
            }
        }
    }
}
