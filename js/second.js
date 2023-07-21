const form = document.querySelector("form");
const result = document.querySelector("#result");
const underWeight = document.querySelector(".under-weight");
const normal = document.querySelector(".normal");
const overWeight = document.querySelector(".overweight");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters).toFixed(0)

    result.textContent = bmi;
    if (height === '' || height < 0 || isNaN(height)) {
        result.textContent = "Please give a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = "Please give a valid weight";
    }
    else if (bmi < 18.6) {
        underWeight.classList.add("indicate")
    } else if (bmi > 18.6 && bmi < 24.9) {
        normal.classList.add("indicate");
    } else if (bmi > 24.9) {
        overWeight.classList.add("indicate");
    }
    height = ''
    weight = ''
});