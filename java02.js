
//No 1

let sapi = {
 "pakBudi" : 10 , 
 "pakDayat" : 20 ,
 "pakAmin" : 30

}

if (sapi.pakBudi >= sapi.pakDayat) {
    console.log ("pak budi rich")
} 
else if (sapi.pakBudi <= sapi.pakAmin) {
    console.log ("sapi pak amin lebih banyak")
}
else {
    console.log ("sapi pal budi lebih kecil")
}


//No 2

let sepatuPakRahmat = 32

switch (sepatuPakRahmat) {
    case 32:
        console.log("sepatu di temukan '32'");
        break;

    case 23:
        console.log("sepatu di temukan '23'")
        break;

    case 80:
        console.log("sepatu di temukan '80'")
        break;

    case 54:
        console.log("sepatu di temukan '54'")
        break;
    
    case 33:
        console.log("sepatu di temukan '33'")
        break;

    case 43:
        console.log("sepatu di temukan '43'")
        break;

    case 65:
        console.log("sepatu di temukan '65'")
        break;

    

    default:
        console.log("sepatu tidak ada");
        break;
}