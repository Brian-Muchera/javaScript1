var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function press(){
    var d = parseInt(document.getElementById("d").value);
    var m = parseInt(document.getElementById("m").value);
    var y = document.getElementById("y").value;
    var cc = parseInt(year.slice(0, 2));
    var y = parseInt(year.slice(2, 4));
    var gender = document.getElementById("gender").value;
}

alert(gender);

if(d<1 || d>31){
    alert('invalid character')
}

if(m<1 || m>12){
    alert('invalid character')
 }
 else{
     for(var i=0;i<gender.length;i++) {
         if (gender[i].checked) {
             if (gender[i].value === "Male") {
                 document.getElementById('yea').innerHTML = "Born on a <span>" + weekDays []
             }
         }
     }
 }
 