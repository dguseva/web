// HTML-елементи
const countryInput = document.getElementById("countryInput");
const countryList = document.getElementById("countryList");


// Створення масиву для збереження країн
const countries = [];


// Обробка натискання клавіші Enter

countryInput.addEventListener("keydown", function(event) {

    // Перевірка натискання Enter
    if (event.key === "Enter") {

        // Отримання введеної країни
        const country = countryInput.value.trim();

        // Перевірка чи поле не порожнє
        if (country !== "") {

            // Додавання країни до масиву
            countries.push(country);

            // Виведення всіх країн через кому
            countryList.textContent = countries.join(", ");

            // Очищення поля введення
            countryInput.value = "";

        } else {

            alert("Введіть назву країни!");
        }
    }

});
