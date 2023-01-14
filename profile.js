const userName = document.querySelector('.username')
userName.textContent = "John"

const userSurname = document.querySelector('.surname')
userSurname.textContent = "Newman"

const userEmail = document.querySelector('.user-email')
userEmail.textContent = "john.newman@mail.com"

const resetEmailBtn = document.querySelector('.reset-email')

resetEmailBtn.addEventListener('click', () => {
  let newEmail = prompt("Please enter new email addres")

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newEmail)){
    userEmail.innerHTML = newEmail
    return
  }

  alert("Email is not valid!")
})

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }
