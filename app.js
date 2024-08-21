function orderBouquet(bouquetName, price) {
    const data = {
        bouquet_name: bouquetName,
        price: price
    };
    Telegram.WebApp.sendData(JSON.stringify(data));
}

// Инициализация WebApp
Telegram.WebApp.ready();
