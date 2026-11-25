// Масиви з інформацією про концерти
const performers = [
    "The Weeknd",
];

const locations = [
    "London, Tottentham Hotspur Stadium",
];

const concertDates = [
    "2026-11-15",
];


// Отримання кнопки та блоку результатів
const checkButton = document.getElementById("checkConcerts");
const concertResults = document.getElementById("concertResults");


// Функція перевірки концертів

function checkConcerts() {

    // Очищення попередніх результатів
    concertResults.innerHTML = "";

    // Отримання сьогоднішньої дати
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    // Перебір усіх концертів
    for (let i = 0; i < performers.length; i++) {

        // Перетворення дати концерту в об'єкт Date
        const concertDate = new Date(
            concertDates[i] + "T00:00:00"
        );

        // Різниця між датами у мілісекундах
        const difference = concertDate - today;

        // Переведення мілісекунд у дні
        const daysLeft = Math.round(
            difference / (1000 * 60 * 60 * 24)
        );

        // Створення блоку для результату
        const result = document.createElement("div");

        result.className = "result-item";

        // Інформація про концерт
        let message = "";

        // Перевірка дати
        if (daysLeft === 0) {

            message = "Сьогодні відбувається концерт!";

        } else if (daysLeft === 5) {

            message = "Сьогодні останній термін придбання квитка!";

        } else if (daysLeft > 5) {

            message = "До концерту залишилося " +
                daysLeft + " днів.";

        } else {

            message = "Термін придбання квитка минув або концерт уже відбувся.";
        }

        // Формування HTML результату
        result.innerHTML = `
            <h3>${performers[i]}</h3>

            <p><strong>Дата концерту:</strong>
            ${concertDates[i]}</p>

            <p><strong>Місце проведення:</strong>
            ${locations[i] || "Невідома адреса проведення концерту"}</p>

            <p class="success">${message}</p>
        `;

        // Додавання результату на сторінку
        concertResults.appendChild(result);
    }
}


// Обробник натискання кнопки
checkButton.addEventListener("click", checkConcerts);
