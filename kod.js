function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let db = prompt("Hány darabot szeretne?");
    if (db != null && db != "")
    {
        document.getElementById("kosar").innerHTML += db + " db " + melyikTermek + "<br>";
    }
}
