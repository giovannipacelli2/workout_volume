'use strict'

let form = document.forms.data;
const tableHtml = `<table id='workout-table'><thead><tr><th>Nome esercizio</th><th>Carico da utilizzare</th></tr></thead><tbody id='body'></tbody></table>`;

let table = null;

let clear = document.body.querySelector("#clear");

clear.onclick = ()=>{
    if (table){
        clearTable(table);
    }
    else return;
};

let firstTime = false;

import {volume} from '../module/volume.js'

form.addEventListener( "submit", calculateWeight );

function calculateWeight(e) {

    e.preventDefault();

    let inputs = form.querySelectorAll("#data input");
    
    for ( let input of inputs) {    /* Controlla che tutti i campi siano compliati */
        if ( input.value == "" ){
            alert("Compilare tutti i campi!");
            return;
        }
    }
    /* Conversione delle stringe di input in numeri*/
    let reps = +form.reps.value;
    let weight = +form.weight.value;
    let repsToDo = +form.repsToDo.value;

    /* Controllo che i tipi forniti siano giusti */
    if ( isNaN(reps) || isNaN(weight) ) {
        alert("Compilare correttamente i campi!");
        return;
    }

    let maximal = findMaximal( reps, weight );  /*calcolo del massimale*/

    if (repsToDo > 20) {
        repsToDo = ">20";   /* Adattamento per numero di reps superiore a 20 */
    }

    let vol = volume.getVolume(repsToDo);  /*Preleva il volume di allenamento date le reps da fare*/

    /* Controlla se il numero di reps rientra nel range giusto */
    if ( !vol ) {
        alert("Reps da scheda non corretto");
        form.repsToDo.focus();
        return;
    }

    /*Istruzione che deve essere richiamata solo la prima volta che si invia il form*/

    if ( !firstTime ) {
        form.insertAdjacentHTML('afterend', tableHtml);

        /* Crea ed inserisce una table nel documento */

        firstTime = true;
    }

    table = document.body.querySelector("#workout-table");

    let finalWeight = maximal * vol;

    /* Inserisce le righe nella tabella indicata */

    insertTable( table, form.exercise.value, finalWeight.toFixed(1) );

    /* Pulisce il form e porta il focus sul primo campo input */

    clearInput(form);

    return;

}

function findMaximal( reps, weight) {
    let minMaximal = weight/(1.0278-(0.0278*reps));
    let maxMaximal = weight*(1+(0.033*reps));

    return (minMaximal + maxMaximal)/2;
}



function insertTable( table, name, weight ) {

    let html = `
                <td>${name}</td>
                <td class="f-center">
                    <span style="width:80%;">${weight} kg</span>
                    <span style="width:20%;" class="close">x</span>
                </td>`;

    // Crea una nuova riga
    let tr = document.createElement("TR");

    // Inserisce nella nuova riga gli elementi, compresa la X di chiusura
    tr.innerHTML = html;

    let tbody = table.querySelector("#body");
    tbody.append(tr);

    // Selezione del bottone X
    let xButton = tr.querySelector(".close");

    // Listener sul bottone
    xButton.onclick = (e)=> {

        if ( !e.target.classList.contains("close") ) return;

        // Rimuove la riga
        let td = e.target.closest("TR");
        td.remove();

        // Rimuove il listener
        xButton.onclick = null;
    };

}

function clearInput(form) {
    let inputs = form.querySelectorAll("input");

    for ( let input of inputs ) {
        input.value = "";
    }
    inputs[0].focus();
}

function clearTable(elem) {
    elem.remove();

    // Fa si che si rigeneri il codice HTML della tabella
    firstTime = false;
}