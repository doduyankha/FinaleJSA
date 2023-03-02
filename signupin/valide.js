const arrayListSignIn =[{
    name :"DuyAnh" ,
    pass : "ANHNANHANHA"
     }
]

let dangki=() => {
    localStorage.setItem("user",JSON.stringify(arrayListSignIn))
    let arrayCheckpoint = JSON.parse(localStorage.getItem(user))
    let name = document.querySelector(".name").value
    let pass = document.querySelector(".pass").value
    arrayCheckpoint.push
}
function dangnhap() {
    let name = document.querySelector(".name")
    let pass = document.querySelector(".pass")
    for (let item of arrayListSignIn) {
        if ((name == item.name) && (pass == item.pass))
        {window.location.assign("http://127.0.0.1:5500/home/home.html"); alert("thanhcong")}
    }
}