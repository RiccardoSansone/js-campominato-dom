// Consegna 1
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// Consegna 2
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html,
// e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo 
// una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e 
// la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
    


const genera = document.getElementById('genera');//salvo in una variabile il nodo della dom dove c'é il bottone genera
let limit;//creo una variabile e gli salvo dentro il limite che dovrá rispettare il ciclo
const nodo = document.getElementById('node');//salvo in una variabile il nodo della dom dove c'é il mio container flex
let points = 0;

let numeriBomba = []; //creo un array vuoto per pushare successivamente i 16 numeri randomici
const facile = document.getElementById('facile');//salvo in una variabile il bottone per la scelta
const intermedia = document.getElementById('intermedia');//salvo in una variabile il bottone per la scelta
const difficile = document.getElementById('difficile');//salvo in una variabile il bottone per la scelta
facile.addEventListener('click', function(){
    limit = 100;
});
intermedia.addEventListener('click', function(){
    limit = 81;
});
difficile.addEventListener('click', function(){
    limit = 49;
});

genera.addEventListener('click', function(){//aggiungo un eventListener al click del bottone genera 
    createGrid(nodo, limit);//richiamo la funzione all'interno dell'eventListener
})

function createGrid(domElement, limit){//creo la funzione assegnandogli due parametri, domElement=al nodo della dom in cui si deve appendere, limit=al valore che deve rispettare il ciclo
    domElement.innerHTML = '' ;
    numeriBomba = [];
    points = 0;
    while(numeriBomba[15] == null){
        let numRandom = Math.floor((Math.random() * limit) + 1 );
        let flag = false
        for(let i = 0; i < 16; i++){
            if(numRandom == numeriBomba[i]){
                flag = true
            }
        }
        if(flag == false){
            numeriBomba.push(numRandom);
        }
    }
    
    console.log(numeriBomba)
    for (let i = 0; i < limit; i++) {//creo il ciclo
        const buildElement = document.createElement('div');//creo dinamicamente un elemento della dom e lo salvo in una variabile
        buildElement.innerHTML = (i + 1);//aggiungo all'elemento il valore della posizione che occupa  + 1
        buildElement.classList.add('cube');//assegno all'elemento la classe cube
        buildElement.style = "width:calc(100% /" + Math.sqrt(limit) + ")"
        domElement.append(buildElement);//appendo al nodo della dom l'elemento creato
    
        buildElement.addEventListener('click', function(){//aggiungo un eventListener al click dell'elemento
            let flag = false 
            for(let j = 0; j < numeriBomba.length; j++){
                if(numeriBomba[j] == buildElement.innerHTML){
                    flag = true;
                }
            }
            if(flag == true){
                buildElement.classList.toggle('bomba');
                if(alert('Sei esploso! punteggio : ' + points)){}
                else    window.location.reload(); 
            } else {
                buildElement.classList.toggle('bg-azure');//all'elemento gli aggiungo/tolgo la classe bg-azure
                points++;
                if((limit - 16) == points){
                    if(alert('Hai vinto! punteggio : ' + points)){}
                    else    window.location.reload(); 
                }
            }
            console.log(buildElement.innerHTML);//stampo in console il valore precedentemente assegnato all'elemento
        })

    }

}

