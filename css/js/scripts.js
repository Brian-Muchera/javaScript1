function getAkanName() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var daysOfTheWeek = dateOfBirth.getDay();

    if (myBirthday === "") {
        document.getElementById('message').innerHTML = "Be serious!Invalid character!!";
    }
    else {
        for (var i = 0; i < myGender.length; i++) {
            if (myGender[i].checked) {
                if (myGender[i].value === "Male") {
                    alert("Born on a " + daysOfTheWeek[dateOfBirth.getDay()] + " " + "Your Akan Name is: " + maleAkanNames[dayOfTheWeek]);
                    document.getElementById('message').innerHTML = names[dateOfBirth.getDay()];
                }
                else if (myGender[i].value === "Female") {
                    alert(" Born on a " + daysOfTheWeek[dateOfBirth.getDay()] + " " + "Your Akan Name is: " + femaleAkanNames[dayOfTheWeek]);
                    document.getElementById('message').innerHTML = names[dateOfBirth.getDay()];
                }
            }
            else if ('null') {
                alert("Please select a Gender");
                document.getElementById('message').innerHTML = names[dateOfBirth.getDay()];
            }
            else ("null"); {
                alert("click Submit");
            }
        }
    }
}
