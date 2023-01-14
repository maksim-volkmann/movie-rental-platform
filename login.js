const loginForm = document.getElementById("login-form")
const loginEmail = document.getElementById("login-email")
const loginPass = document.getElementById("login-password")

loginForm.addEventListener("submit", e => {
  e.preventDefault()


  if(loginEmail.value === ''){
    alert("Email can't be empty")
    loginEmail.classList.add("error")
    return
  }else{
    loginEmail.classList.remove("error")
    loginEmail.classList.add("success")
  }

  if(loginPass.value === ''){
    alert("Password can't be empty")
    loginPass.classList.add("error")
    return
  }else{
    loginPass.classList.remove("error")
    loginPass.classList.add("success")
  }

  window.location.href = "home.html";
})

const regForm = document.getElementById("register-form")
const regName = document.getElementById("register-name")
const regSurname = document.getElementById("register-surname")
const regEmail = document.getElementById("register-email")
const regEmail2 = document.getElementById("register-email2")
const regPass = document.getElementById("register-password")
const regPass2 = document.getElementById("register-password2")


regForm.addEventListener("submit", e => {
  e.preventDefault()

  if(regName.value.length < 2){
    alert("Name can't be empty and should contain two or more letters.")
    regName.classList.add("error")
    return
  }else{
    regName.classList.remove("error")
    regName.classList.add("success")
  }
  
  if(regSurname.value.length < 2){
    alert("Surname can't be empty and should contain two or more letters.")
    regSurname.classList.add("error")
    return
  }else{
    regSurname.classList.remove("error")
    regSurname.classList.add("success")
  }

  if(regEmail.value === ''){
    alert("Email can't be empty.")
    regEmail.classList.add("error")
    return
  }else{
    regEmail.classList.remove("error")
    regEmail.classList.add("success")
  }

  if(!(regEmail.value === regEmail2.value)){
    alert("Emails do not match.")
    regEmail.classList.add("error")
    regEmail2.classList.add("error")
    return
  }else{
    regEmail.classList.remove("error")
    regEmail.classList.add("success")
    regEmail2.classList.remove("error")
    regEmail2.classList.add("success")
  }

  if(regPass.value.length < 8){
    alert("Password should be 8 or more symbols long and cannot be empty.")
    regPass.classList.add("error")
    return
  }else{
    regPass.classList.remove("error")
    regPass.classList.add("success")
  }

  if(!(regPass.value === regPass2.value)){
    alert("Passwords do not match.")
    regPass.classList.add("error")
    regPass2.classList.add("error")
    console.log(regPass.value)
    console.log(regPass2.value)
    return
  }else{
    regPass.classList.remove("error")
    regPass.classList.add("success")
    regPass2.classList.remove("error")
    regPass2.classList.add("success")
  }

  window.location.href = "home.html";
})