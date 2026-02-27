function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol() 
{
    let arak = document.getElementsByClassName("ar");
    let darabok = document.getElementsByTagName("input");
    let reszek = document.getElementsByClassName("resz");
    let vegosszeg = 0;
    for (let i = 0; i < arak.length; i++) {
        
        let sorOsszeg = arak[i].innerHTML * darabok[i].value;
        reszek[i].innerHTML = sorOsszeg;
        vegosszeg += sorOsszeg;
    }

    document.getElementById("osszesen").innerHTML = vegosszeg + " Ft";
}