Campo Minato
===

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

## Steps
- Basando sulla griglia creata, creo una serie di funzioni.
- Una funzione che, basandosi su un generatore di numeri casuali fino al numero della griglia, crea un array dove inserisce il numero delle bombe.
- L'array delle bombe e il numero delle caselle viene confrontato, percè se il box selezionato ha l'id che coincide con un id di una bomba, il gioco termina
- al click vengono aggiunte le classi
- Al termine del gioco faccio apparire un messaggio con il punteggio e con un over sulla plancia di gioco




