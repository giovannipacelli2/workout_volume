'use strict'

let form = document.forms.data;

let firstTime = false;

import {volume} from '../module/volume.js'

form.onsubmit = function (e){

    e.preventDefault();

    let inputs = form.querySelectorAll("#data input");
    
    for ( let input of inputs) {
        if ( input.value == "" ){
            alert("Compilare tutti i campi!");
            return;
        }
    }

    let reps = +form.reps.value;
    let weight = +form.weight.value;
    let repsToDo = +form.repsToDo.value;

    if ( isNaN(reps) || isNaN(weight) ) {
        alert("Compilare correttamente i campi!");
        return;
    }

    let maximal = findMaximal( reps, weight );

    if (repsToDo > 20) {
        repsToDo = ">20";
    }

    let vol = volume.getVolume(repsToDo);

    if ( !vol ) {
        alert("Reps da scheda non corretto");
        form.repsToDo.focus();
        return;
    }

    if ( !firstTime ) {
        const table = "<table id='workout-table'><thead><tr><th>Nome esercizio</th><th>Carico da utilizzare</th></tr></thead><tbody id='body'></tbody></table>";

        form.insertAdjacentHTML('afterend', table);

        firstTime = true;
    }

    const table = document.body.querySelector("#workout-table");

    let finalWeight = maximal * vol;

    insertTable( table, form.exercise.value, finalWeight.toFixed(1) );

    clearInput(form);

    return;

};

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