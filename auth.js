const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password"); 
const email = document.getElementById("email");

function show_password() {
    
    
    pass_val = password.value;
    password.type ="text";
    confirm_password.type = "text";
    console.log(pass_val);

}
function check_email(email_str) {
    var valid = 0;
    for (let i = 0; i < email_str.length; i++) {
        if (email_str[i] == '@') {
            valid = 1;
            return valid;  
        }   
    }
    return valid;
    
}

function sign_up() {

    pass_val = password.value;
    email_val = email.value;
    confirm_pass_val = confirm_password.value;
    if (pass_val =="" || email_val==""  || confirm_pass_val=="") {
        password_msg = document.getElementById("password_msg");
        password_msg.innerHTML ="Email and Password cannot be empty !"
        password_msg.style.display = "block"
        
    }
    else if (!check_email(email_val)) {
        password_msg = document.getElementById("password_msg");
        password_msg.innerHTML ="Invalid email!"
        password_msg.style.display = "block"


        
    }
    
    else if (pass_val.length <6 || confirm_pass_val.length<6) {
        password_msg = document.getElementById("password_msg");
        password_msg.innerHTML = "Password should be of at least 6 character"
        password_msg.style.display = "block" ;
    }
    else if (pass_val != confirm_pass_val) {
        password_msg = document.getElementById("password_msg");
        password_msg.innerHTML = "Password not matching"

        password_msg.style.display = "block"   
    }


    else{
       
      
        var signup_container = document.getElementById("signup_container");
        signup_container.style.display = "none"
        var signupsuccess = document.getElementById("signupsuccess");
        signupsuccess.style.display = "block"

    }


    

    
}