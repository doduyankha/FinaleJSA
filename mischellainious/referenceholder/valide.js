function valide() {
    var _name = document.dangKi.name.value;
    var _sdt = document.dangKi.sdt.value;
    var _gmail = document.dangKi.gmail.value;
    var ok =  true;
    var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    var ktsdt = /^0[0-9]{9,11}$/;
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
if (!_name.match(ktten)) {
    document.getElementById("loiName").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiName").style.display = "none";
}

if (!_sdt.match(ktsdt)) {
    document.getElementById("loiSdt").style.display = "block";
    ok =false;
} else document.getElementById("loiSdt").style.display = "block";


if (!_gmail.match(ktgmail)) {
    document.getElementById("loiGmail").style.display = "block";
    ok =false;
} else document.getElementById("loiGmail").style.display = "block";

if (ok) {
    alert("thanh cong");
    return ok;
} else return ok;
}