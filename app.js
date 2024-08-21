document.addEventListener("DOMContentLoaded", function () {
    const flowerCards = document.querySelectorAll(".flower-card");

    flowerCards.forEach(card => {
        card.querySelector(".select-flower").addEventListener("click", function () {
            const flowerName = card.getAttribute("data-flower-name");
            const price = card.getAttribute("data-price");
            const description = card.getAttribute("data-description");

            const data = { flower_name: flowerName, price: price, description: description };

            Telegram.WebApp.sendData(JSON.stringify(data));  // Отправка данных в Telegram WebApp
        });
    });
});
