'use strict'

let form = document.forms.data;

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
        const table = "<table id='workout-table'><thead><tr><th>Nome esercizio</th><th>Carico da utilizzare</th></tr></thead><tbody id='body'></tbody></table>";

        form.insertAdjacentHTML('afterend', table);

        /* Crea ed inserisce una table nel documento */

        firstTime = true;
    }

    const table = document.body.querySelector("#workout-table");

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

    let html = `<tr><td>${name}</td><td>${weight} kg</td>`;

    table.querySelector("#body").insertAdjacentHTML('beforeend', html);

}

function clearInput(form) {
    let inputs = form.querySelectorAll("input");

    for ( let input of inputs ) {
        input.value = "";
    }
    inputs[0].focus();
}