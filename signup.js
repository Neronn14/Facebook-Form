const name = document.getElementById("signup-name");
const surname = document.getElementById("signup-surname");
const signEmail = document.getElementById("signup-email");
const signPwd = document.getElementById("signup-password");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const female = document.getElementById("gender-female");
const male = document.getElementById("gender-male");
const custom = document.getElementById("gender-custom");


function addData(){
   
    // const email = document.getElementById("email").value;
    // const pass = document.getElementById("pwd").value;

    const localName = name.value;
    const localSurname = surname.value;
    const localEmail = signEmail.value;
    const localPass = signPwd.value;
    const localDay = day.value;
    const localMonth = month.value;
    const localYear = year.value;
    const localFemale = female.value;
    const localMale = male.value;
    const localCustom = custom.value;
    
    // adding data to localstorage

    localStorage.setItem("name",localName);
    localStorage.setItem('surname',localSurname)
    localStorage.setItem("email",localEmail);
    localStorage.setItem("password",localPass);
    localStorage.setItem('day',localDay);
    localStorage.setItem('month',localMonth);
    localStorage.setItem('year',localYear);
    localStorage.setItem('female',localFemale);
    localStorage.setItem('male',localMale);
    localStorage.setItem('custom',localCustom);
}
