function provera() {
    var ime = document.MojaForma.ime.value;
    var prezime = document.MojaForma.prezime.value;
    var email = document.MojaForma.email.value;
    var lozinka = document.MojaForma.lozinka.value;
    var potvrdalozinke = document.MojaForma.potvrdalozinke.value;
    var uslov = document.MojaForma.uslov.checked;

    if (ime === "" || ime.length < 2) {
        alert("Molimo unesite validno ime (minimalna duzina je 2 karaktera).");
        return false;
    } else if (prezime === "" || prezime.length < 2) {
        alert("Molimo unesite validno prezime (minimalna duzina je 2 karaktera).")
        return false;
    } else if (email === "" || !email.match(/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/)) {
        alert("Molimo unesite validnu E-mail adresu.");
        return false;
    } else if (lozinka === "" || lozinka.length < 6 || !lozinka.match(/^(?=.*[A-Z])(?=.*\d).{6,}$/)) {
        alert("Molimo unesite validnu lozinku (minimalna duzina je 6 karaktera, mora da sadrzi barem jedno veliko slovo i barem jedan broj.");
        return false;
    } else if (potvrdalozinke !== lozinka)  {
        alert("Lozinke se ne podudaraju. Molimo Vas unesite iste lozinke.");
         return false;
    } else if (uslov.checked === false){
        alert("Niste prihvatili uslove koriscenja!");
        return false;
    } else {
        alert("Uspešno ste poslali formu!");
        return true;
    }
}
