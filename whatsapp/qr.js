function hi(){

    let a = document.getElementById("input1").value
    let openn = "https://wa.me/91"+a
    document.location.href = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+openn  
}