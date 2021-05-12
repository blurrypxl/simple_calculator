// Mengambil data number dan operator untuk ditampikan kedalam screen
const screen = document.querySelector('.scr-section')
/*
* Membuat fungsi dengan nama scrUpdate untuk menampilkan nilai-nilai
* yang akan dimasukan kedalam screen calculator
*/
const scrUpdate = (evtName) => {
  screen.value = evtName
}

// Mengambil data class numbers pada html
const number = document.querySelectorAll('.numbers')
/*
* Menggunakan forEach untuk mengambil setiap data
* dam memberikan argumen num pada setiap data
*/
number.forEach((num) => {
  /*
  * Menggunakan event listener click untuk mengambil setiap nilai
  * yang ada pada argumen num
  */
  num.addEventListener('click', (evtNum) => {
    inputNum(evtNum.target.value)
    scrUpdate(currNum)
  })
})

// Membuat value screen menampung 2 value numbers
/*
* Membuat fungsi dengan nama inputNum untuk memproses nilai
* varabel dengan nama currNum dan membuat screen menampung value
* lebih dari 1 digit
*/
let currNum = '0'

const inputNum = (number) => {
  if (currNum === '0') {
    currNum = number
  } else {
    currNum += number
  }
}
