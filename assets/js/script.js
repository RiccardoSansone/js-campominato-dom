// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



const genera = document.querySelector('button');//salvo in una variabile il nodo della dom dove c'é il bottone genera
const limit = 100;//creo una variabile e gli salvo dentro il limite che dovrá rispettare il ciclo
const nodo = document.getElementById('node');//salvo in una variabile il nodo della dom dove c'é il mio container flex

genera.addEventListener('click', function(){//aggiungo un eventListener al click del bottone genera 
    createGrid(nodo, limit);//richiamo la funzione all'interno dell'eventListener
})

function createGrid(domElement, limit){//creo la funzione assegnandogli due parametri, domElement=al nodo della dom in cui si deve appendere, limit=al valore che deve rispettare il ciclo
    for (let i = 0; i < limit; i++) {//creo il ciclo
        const buildElement = document.createElement('div');//creo dinamicamente un elemento della dom e lo salvo in una variabile
        buildElement.innerHTML = (i + 1);//aggiungo all'elemento il valore della posizione che occupa  + 1
        buildElement.classList.add('cube');//assegno all'elemento la classe cube
        domElement.append(buildElement);//appendo al nodo della dom l'elemento creato
    
        buildElement.addEventListener('click', function(){//aggiungo un eventListener al click dell'elemento
            buildElement.classList.toggle('bg-azure');//all'elemento gli aggiungo/tolgo la classe bg-azure
            console.log(buildElement.innerHTML);//stampo in console il valore precedentemente assegnato all'elemento
        })

    }

}