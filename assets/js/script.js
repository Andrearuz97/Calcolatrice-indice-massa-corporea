    document.getElementById('bmiForm').addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const nome = document.getElementById('nome').value;
    const descrizione = document.getElementById('descrizione');
    const results = document.getElementById('allResults');
    const bmi = (weight / (height * height)).toFixed(2);
    const reset = document.getElementById('resetButton');
    let status;

    // Valori per le soglie del BMI
    if (gender === 'male') {
        if (age < 18) {
            // Giovani maschi
            status = bmi < 18.5 ? 'Sottopeso' : (bmi >= 18.5 && bmi < 25) ? 'Normopeso' : 'Sovrappeso';
        } else if (age <= 65) {
            // Uomini adulti
            status = bmi < 20.7 ? 'Sottopeso' : (bmi >= 20.7 && bmi < 26.4) ? 'Normopeso' : 'Sovrappeso';
        } else {
            // Uomini anziani
            status = bmi < 23 ? 'Sottopeso' : (bmi >= 23) ? 'Normopeso' : 'Sovrappeso';
        }
    } else { // Femmina
        if (age < 18) {
            // Giovani femmine
            status = bmi < 18.5 ? 'Sottopeso' : (bmi >= 18.5 && bmi < 25) ? 'Normopeso' : 'Sovrappeso';
        } else if (age <= 65) {
            // Donne adulte
            status = bmi < 19.1 ? 'Sottopeso' : (bmi >= 19.1 && bmi < 25.8) ? 'Normopeso' : 'Sovrappeso';
        } else {
            // Donne anziane
            status = bmi < 25 ? 'Sottopeso' : (bmi >= 25) ? 'Normopeso' : 'Sovrappeso';
        }
    }

    document.getElementById('bmiResult').innerHTML = `Risultato BMI: <span class="bmiValue">${bmi}</span>`;
    
    document.getElementById('bmiStatus').innerHTML = `Condizione: <span class="statusValue">${status}</span>`;
    descrizione.innerHTML = `Ciao ${nome}, ti informo che in base ai dati che ci hai fornito il tuo indice di massa corporea è di <span class="bmiValue">${bmi}</span>. Sei in una condizione di <span class="statusValue">${status}</span>.`;

    reset.addEventListener('click', function(){
        results.innerHTML = ''
    })
});
//anno aggiornato
    let date = new Date().getFullYear();
    let anno = document.getElementById('anno');
    anno.innerText = date;