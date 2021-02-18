//validate and redirect
function validateAdmin(){
    var adminName = document.querySelector("#admin-ID").value;
    var adminPassword = document.querySelector("#adminPassword").value;

    if(adminName == "DoctorAdmin" && adminPassword == "admindoctor"){
        window.location="admin.html";
        return;
    } else if(adminName ==null && adminpassword== null){
        alert("provide login details");         
    }else{
        alert("invalid login\ncall the admin");
    }
}

function validateUser(){
    var username = document.querySelector("#user-ID").value;
    var password = document.querySelector("#password").value;

    if(username == "doctoruser001" && password == "userdoctor"){
        window.location="user.html";
        return;
    } else{
        alert("invalid userID or password");
    }
}