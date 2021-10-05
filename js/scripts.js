

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

var enableShow = false;

function showPassword() {
    var fieldPassword = document.getElementById("password");
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");

    if (fieldPassword.type === "password") {
        fieldPassword.type = "text";
        show.className =" show ion-eye-disabled";
    }
    else {
        fieldPassword.type = "password";
        show.className =" show ion-eye";
    }
        
    
  }