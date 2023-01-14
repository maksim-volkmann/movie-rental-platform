const pre = document.querySelectorAll('.pre')
console.log(pre)
const next = document.querySelectorAll('.next')
console.log(next)
const rentTime = document.querySelectorAll('.movie-time-selection')

next.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if(parseInt(rentTime[index].innerHTML) === 168){
      alert("Max hours reached!")
      return
    }else{
      rentTime[index].innerHTML = parseInt(rentTime[index].innerHTML) + 12 + 'h'
    }
    console.log(rentTime[index])


  })
})


pre.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if(parseInt(rentTime[index].innerHTML) === 12){
      alert("Minimum rent is 12h.")
      return
    }else{
      rentTime[index].innerHTML = parseInt(rentTime[index].innerHTML) - 12 + 'h'
    }
    console.log(rentTime[index])


  })
})