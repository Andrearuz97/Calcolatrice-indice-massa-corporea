document.getElementById('bmiForm').addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = bmi;

    let status;
    if (bmi < 18.5) {
        status = 'Sottopeso';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normopeso';
    } else {
        status = 'Sovrappeso';
    }

    document.getElementById('bmiStatus').textContent = status;
});

