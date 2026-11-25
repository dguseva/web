// Кнопки, таблиці та поля результату

const sortButton = document.getElementById("sortNumbers");

const numbersTable = document.getElementById("numbersTable");

const sortedNumbers = document.getElementById("sortedNumbers");


// Обробка натискання кнопок

sortButton.addEventListener("click", function() {

    // Створення масиву для чисел
    const numbers = [];

    // Отримання всіх комірок таблиці
    const cells = numbersTable.querySelectorAll("td");

    // Перебір усіх комірок
    cells.forEach(function(cell) {

        // Перетворення тексту комірки на число
        const number = Number(cell.textContent.trim());

        // Додавання числа до масиву
        numbers.push(number);

    });

    // Сортування чисел за зростанням
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Виведення результату через кому
    sortedNumbers.value = numbers.join(", ");

});
