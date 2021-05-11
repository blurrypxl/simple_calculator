import {calc} from './object-calculator';// Memanggil Object calc

/* # Mendeklarasikan object class pada dokumen html - START # */
const num = document.querySelectorAll('.numbers');// Mengambil data Class numbers pada html

const op = document.querySelectorAll('.operators');// Mengambil data Class operators pada html

const ac = document.querySelector('.all-clear');// Mengambil data Class all-clear pada html

const deci = document.querySelector('.decimal');// Mengambil data Class decimal pada html

const eq = document.querySelector('.equal');// Mengambil data Class equal pada html
/* # - END # */ 

/* # Menambahkan event listener pada button html - START # */
let elNum = num.addEventListener("click", calc.showResult());// Event listener pada constant num

let elOp = op.addEventListener("click", calc.showResult());// Event listener pada constant op

let elAc = ac.addEventListener("click", calc.showResult());// Event listener pada constant ac

let elDeci = deci.addEventListener("click", calc.showResult());// Event listener pada constant deci

let elEq = eq.addEventListener("click", calc.showResult());// Event listener pada constant eq
/* # - END # */ 
