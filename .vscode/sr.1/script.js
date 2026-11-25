//Клас 1
class BaseDataService {
    constructor(url, apiKey) {
        this.url = url;
        this.apiKey = apiKey;
    }

    async getData() {
        const response = await fetch(this.url, {
            method: "GET",
            headers: {
                "X-Master-Key": this.apiKey
            }
        });

        if (!response.ok) {
            throw new Error(
                `Помилка HTTP: ${response.status}`
            );
        }

        const result = await response.json();

        return result.record;
    }
}

// Клас 2
class NewspaperService extends BaseDataService {

    constructor(url, apiKey) {
        super(url, apiKey);
    }

    async getNewspapers() {
        const data = await this.getData();

        if (!data || !Array.isArray(data.newspapers)) {
            throw new Error("Некоректна структура JSON-файлу");
        }

        return data.newspapers;
    }

    getPrintedNewspapers(newspapers) {
        return newspapers.filter(
            newspaper => newspaper.type === "printed"
        );
    }

    getElectronicNewspapers(newspapers) {
        return newspapers.filter(
            newspaper => newspaper.type === "electronic"
        );
    }
}

// Функції
function displayNewspapers(newspapers, containerId) {
    const container = document.getElementById(containerId);

    // Очищення попереднього вмісту
    container.innerHTML = "";

    if (newspapers.length === 0) {
        container.innerHTML =
            '<p class="empty-message">Видань не знайдено.</p>';
        return;
    }

    newspapers.forEach(newspaper => {
        const card = document.createElement("div");

        card.className = "newspaper-card";

        const name = document.createElement("h4");
        name.textContent = newspaper.name;

        const country = document.createElement("p");
        country.textContent = `Країна: ${newspaper.country}`;

        const language = document.createElement("p");
        language.textContent = `Мова: ${newspaper.language}`;

        const frequency = document.createElement("p");
        frequency.textContent =
            `Періодичність: ${newspaper.frequency}`;

        const year = document.createElement("p");
        year.textContent =
            `Рік заснування: ${newspaper.year}`;

        card.append(name, country, language, frequency, year);

        container.appendChild(card);
    });
}
// JSON файл
const BIN_ID = "6b04e9baffd5d16053d919c3";
const API_KEY = "$2a$10$MTisYq6v6n3whUKkrxU91.CG5KCuCj0La7MlulK6jISmKc38D7aGC";

const API_URL =
    `https://api.jsonbin.io/v3/b/6b04e9baffd5d16053d919c3/latest`;

const newspaperService = new NewspaperService(
    API_URL,
    API_KEY
);

async function loadNewspapers() {
    const button = document.getElementById("loadButton");
    const status = document.getElementById("status");

    button.disabled = true;
    status.classList.remove("error");
    status.textContent = "Завантаження даних...";

    try {
        // Отримання газет із JSONBin
        const newspapers =
            await newspaperService.getNewspapers();

        // Розподіл газет на групи
        const printed =
            newspaperService.getPrintedNewspapers(newspapers);

        const electronic =
            newspaperService.getElectronicNewspapers(newspapers);

        // Відображення газет
        displayNewspapers(printed, "printedList");

        displayNewspapers(electronic, "electronicList");

        // Оновлення статистики
        document.getElementById("totalCount").textContent =
            newspapers.length;

        document.getElementById("printedCount").textContent =
            printed.length;

        document.getElementById("electronicCount").textContent =
            electronic.length;

        status.textContent =
            "Дані успішно завантажено з хмарного сховища.";

    } catch (error) {
        console.error("Помилка:", error);

        status.classList.add("error");
        status.textContent =
            "Не вдалося завантажити дані. Перевірте Bin ID, API-ключ та підключення до Інтернету.";

    } finally {
        button.disabled = false;
    }
}

// Обробка натискання кнопки
document.getElementById("loadButton")
    .addEventListener("click", loadNewspapers);

