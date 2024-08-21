// Инициализация объекта Telegram WebApp
let tg = window.Telegram.WebApp;

// Развернем WebApp в полный экран
tg.expand();

// Настройки главной кнопки
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// Переменная для хранения выбранного элемента
let item = "";

// Функция для обновления состояния главной кнопки
function updateMainButton(text, value) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(text);
        item = value;
        tg.MainButton.show();
    }
}

// Массив с информацией о букетах
const bouquets = [
    { id: "btn1", text: "Вы выбрали Букет Роз!", item: "Букет Роз" },
    { id: "btn2", text: "Вы выбрали Весенний Букет!", item: "Весенний Букет" },
    { id: "btn3", text: "Вы выбрали Ромашковый Букет!", item: "Ромашковый Букет" },
    { id: "btn4", text: "Вы выбрали Летний Букет!", item: "Летний Букет" },
    { id: "btn5", text: "Вы выбрали Осенний Букет!", item: "Осенний Букет" },
    { id: "btn6", text: "Вы выбрали Зимний Букет!", item: "Зимний Букет" }
];

bouquets.forEach(bouquet => {
    document.getElementById(bouquet.id).addEventListener("click", function() {
        updateMainButton(bouquet.text, bouquet.item);
    });
});

// Обработка клика главной кнопки
Telegram.WebApp.onEvent('mainButtonClicked', function() {
    // Закрываем WebApp и передаем данные в бота
    tg.close();
    fetch('/webData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: item })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
