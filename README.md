Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:


:party_wizard: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.

        *   Human Coding
            * Impostare HTML e css per la struttura che dovra essere gestita dal js
            * Creare un event listener per il bottone di avvio e usare un ciclo per generare le caselle.
            * aggiungere un event listener alle singole caselle che quando cliccate cambiano la classe e loggano il contento della casella.
            /// SECONDA PARTE


Seconda parte

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

            * Generare 16 numeri casuali che corrisponderanno alle caselle delle bombe (numeri diversi) - Potrei fare questo con una funzione che crea un array di 16 numeri.
            * Quando l utente clicca con la cella della bomba la cella diventa rossa (craere una classe per le celle bomba. ) E bisogna far terminare la partita (come fare?) - Potrei creare un ciclo while che appena clicki il numero presente nell'array bomba è uguale al numero dell index della cella creata - spunta il messaggio sotto.
            * Creare un contatore di celle -non bomba- cliccate (come fare?)
        