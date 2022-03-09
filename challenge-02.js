//1

function changeWord(selectedText, changeText, Text) {
  return Text.replace(selectedText, changeText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));




//2

//Penghitungan dan Pengecekan Hasil Modulo
function cekGanjilGenap(bilangan) {
    if(typeof(bilangan)=='number'){
        if (bilangan % 2 == 0) {
            return "bilangan Genap";
          } else {
            return "bilangan Ganjil";
          }
          
    }
    else if (typeof bilangan== "string") {
        return "Error : Invalid data type"
        
    }
}

console.log(cekGanjilGenap(10)) ;
console.log(cekGanjilGenap(3)) ;
console.log(cekGanjilGenap("3")) ;



//3

function validasiEmail(emailAdress) {
    var result = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailAdress.match(regexEmail)) {
        result = false;
    } 
    return result;
}

console.log(validasiEmail("apranata@binar.co.id"));
console.log(validasiEmail("apranata@binar.com"));
console.log(validasiEmail("apranata@binar"));
console.log(validasiEmail("apranata"));
console.log(validasiEmail(3322));
console.log(validasiEmail());


//4


