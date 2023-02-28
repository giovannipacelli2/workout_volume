'use strict'

import React from "react";


export default function Info() {
    return (
        <div id="info-page" className="window-page">
            <div id="info-container" className="window-container">
                <div className="close close-window" id ="exit-page-info">x</div>
                <div className="how-to-use">
                    <h3>Effettuare il test: max reps con max carico</h3>

                    <ul>
                        <li>Inserire le reps eseguite ed il carico utilizzato</li>
                        <li>Scegliere almeno una delle opzioni contrassegnate con *</li>
                    </ul>

                    
                </div>
            </div>

        </div>
    );
}