const loginEmail = document.getElementById("login-email");
const loginPwd = document.getElementById("login-password");

const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");

function checkData(){
    // const enterEmail = document.getElementById("email").value;
    // const enterPwd = document.getElementById("pwd").value;
    
    const enterEmail = loginEmail.value;
    const enterPwd = loginPwd.value;
    // get data from localstorage

   const getEmail = localStorage.getItem("email");
   const getPwd = localStorage.getItem("password");

   if(enterEmail == getEmail)
   {
    if(enterPwd == getPwd)
    {
        // alert("login Succesful");
        
    }
    else{
        alert("wrong password")
        // if (loginPwd.value.length < 6){
        //     loginPwd.style.border = "1px solid red";
        //     pass_error.style.display = "block";
        //     loginPwd.focus();
        //     return false;
        // }
    }
   }

   else{
    alert("Invalid datails")
    // if (loginEmail.value.length < 9){
    //     loginEmail.style.border = "1px solid red";
    //     email_error.style.display = "block";
    //     loginEmail.focus();
    //     return false;
    // }
   }
}


function validated(){
    if (loginEmail.value.length < 9){
        loginEmail.style.border = "1px solid red";
        email_error.style.display = "block";
        loginEmail.focus();
        return false;
    }
    if (loginPwd.value.length < 6){
        loginPwd.style.border = "1px solid red"
        pass_error.style.display = "block";
        loginPwd.focus();
        return false;
    }

}

function email_Verify(){
    if (loginEmail.value.length >= 8) {
        loginEmail.style.border = "1px solid green";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify(){
    if (loginPwd.value.length >= 5) {
        loginPwd.style.border = "1px solid green";
        pass_error.style.display = "none";
        return true;
    }
}

