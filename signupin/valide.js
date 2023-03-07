const listArrTk = [
    {
        tk : "cuong01",
        mk : 1
    }
];
const listProduct = [
    {
        id : 1,
        img : "img/asset 8.jpeg",
        name : "Gourmet Love Chocolate/ Romantic Heart - S01",
        price : "625.000"
    }
]
//thêm list sản phẩm vào local
let newProduct = JSON.parse(localStorage.getItem("product"));
if(newProduct == null) {
    localStorage.setItem("product",JSON.stringify(listProduct))
}
//thêm list tài khoản vào local
let newList = JSON.parse(localStorage.getItem("login"));
console.log(newList);


const signin= ()=>{
    let name = document.querySelector(".name").value;
    let pass = document.querySelector(".pass").value;
    let passCheck = document.querySelector(".repass").value;
    if(pass==passCheck) {
        let newTk = {
                tk : name,
                mk : pass
        }
        newList.push(newTk)
        localStorage.setItem("login",JSON.stringify(newList))
        window.location.href = "http://127.0.0.1:5500/signupin/signin.html";
    }
}
if(newList == null) {
    localStorage.setItem("login",JSON.stringify(listArrTk))
}

const login= ()=>{
    let tk = document.querySelector(".name");
    let mk =    document.querySelector(".pass");
    for(let item of newList) {
        if((item.tk==tk.value) && (item.mk==mk.value)) {
            window.location.href = "http://127.0.0.1:5500/home/home.html";
        }
    }
}

let form_login = document.querySelector("#login1");
if(form_login) {
    form_login.addEventListener("submit" , (e)=>{
        e.preventDefault()
        login();
    })
}
let form_signin = document.querySelector("#signin1");
if(form_signin) {
    form_signin.addEventListener("submit" , (e)=>{
        e.preventDefault()
        signin();
    
    })
}
function valide() {
    var _name = document.name.value;
    var _pass = document.Password.value;
    var _repass = document.RePassword.value;
    var ok =  true;
    var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    var ktpass = /^0[0-9]{9,11}$/;
    var ktrepass = /^0[0-9]{9,11}$/;
if (!_name.match(ktten)) {
    document.getElementById("loiName").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiName").style.display = "none";
}

if (!_pass.match(ktpass)) {
    document.getElementById("loiSdt").style.display = "block";
    ok =false;
} else document.getElementById("loiSdt").style.display = "block";


if (_repass==_pass) {
    document.getElementById("loiGmail").style.display = "block";
    ok =false;
} else document.getElementById("loiGmail").style.display = "block";

if (ok) {
    alert("thanh cong");
    return ok;
} else return ok;
}