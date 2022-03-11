
//1snacks                               //correzzione completa dell'esercizio

  const playerBasket =                    // creazione nuovo oggetto
    {
        "codice giocatore":"",
        nome: "",
        cognome: "",
        età: "",
        mediapunti:"",
        percentualeDa3:""
    }

playerBasket["codice giocatore"] = playerGenerate();
playerBasket.mediapunti = Math.floor(Math.random()* ((50 + 1) - 0))
playerBasket.percentualeDa3 = Math.floor(Math.random()* ((100 + 1) - 0))

function playerGenerate(){
    return generateRandomString(3) + generateRandomNumber(3)
}
console.log(playerGenerate())

function generateRandomString(iLen) {
    let result = '';
    let stringa = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";

    for (let i = 0; i < iLen; i++) {
      result += stringa.charAt (Math.floor(Math.random() * stringa.length));
    }
    return result;
  }
  function generateRandomNumber(iLen) {
    let result = '';
    let stringa = "1234567890";
    for (let i = 0; i < iLen; i++) {
      result += Math.floor(Math.random() * stringa.length);
    }
    return result;
  }
console.table(playerBasket)

 




//2snacks


 const car =[
    {

        marca: "abarth",
        modello:"fs12",
        alimentazione:"benzina"
    },
    {

        marca: "lexus",
        modello:"fs129",
        alimentazione:"benzina"
    },
    {

        marca: "punto",
        modello:"p1",
        alimentazione:"benzina"
    },
    {

        marca: "dodge",
        modello:"fs123",
        alimentazione:"diesel"
    },
    {
        marca: "bmw",
        modello:"fs19",
        alimentazione:"diesel"
    },
    {

        marca: "jeep",
        modello:"fs6",
        alimentazione:"diesel"
    },
    {
        marca: "maserati",
        modello:"fs13",
        alimentazione:"elettrica"
    },
    {
        marca: "rangerover",
        modello:"fk5",
        alimentazione:"metano"
    },
    {

        marca: "punto",
        modello:"p1",
        alimentazione:"elettrica"
    }
]

const diesel = car.filter((element)=>{
    if(element.alimentazione == "diesel") return true
});
const benzina =car.filter((element)=>{
    if(element.alimentazione == "benzina") return true
});
const altri =car.filter((element)=>{
    if(element.alimentazione != "benzina" && element.alimentazione != "diesel") return true
});
console.table(diesel)
console.table(benzina)
console.table(altri)





//3snacks

 const stringhe =["pippo", "PLUTO","Paperino"]

const newStringa = stringhe.map((element) => {
    return element.charAt(0).toUpperCase()+
    element.substring(1).toLowerCase();
})
console.table(stringhe)
console.table(newStringa)



//4snacks

const animals = [
    {
        nome:"leone",
        famiglia:"felidi",
        classe: "mammiferi"
    },
    {
        nome:"cane",
        famiglia:"canidi",
        classe: "mammiferi"
    },
    {
        nome:"gallina",
        famiglia:"fasianidi",
        classe: "uccelli"
    },
    {
        nome:"gatto",
        famiglia:"felidi",
        classe: "mammiferi" 
    }

]

const animalsFilter = animals.filter((element) =>{
    if(element.classe == "mammiferi") return true
});
console.table(animalsFilter)

 
//5snacks

const people = [
    {
        nome:"sara",
        cognome:"palma",
        eta: "25"
    },
    {
        nome:"marco",
        cognome:"rossi",
        eta: "18"
    },
    {
        nome:"giusy",
        cognome:"grano",
        eta: "15"
    },
    {
        nome:"paola",
        cognome:"mastracci",
        eta: "13" 
    },
    {
        nome:"genoeffo",
        cognome:"felice",
        eta: "19" 
    },
    {
        nome:"antonio",
        cognome:"polselli",
        eta: "36" 
    }
]


const peopleNoDrive = people.filter((element) => {
    if(element.eta < "18") 
    return true
})

const peopleNoDriveFrasi = peopleNoDrive.map((element) =>{
    return element.nome + " " + element.cognome  + " non può guidare";
})
console.table(peopleNoDriveFrasi)
console.table(peopleNoDrive)


const peopleDrive = people.filter((element) => {
    if(element.eta >= "18")
    return true; 
})

const peopleDriveFrasi = peopleDrive.map((element) =>{
    return element.nome + " " + element.cognome + " può guidare"
})
console.table (peopleDriveFrasi)
console.table(peopleDrive) 


