let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
let quantity = 1;

function updateMainButton(text, value) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText(text);
        item = value;
        tg.MainButton.show();
    }
}

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

Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData(JSON.stringify({ bouquet: item, quantity: quantity }));
    tg.close();
});
