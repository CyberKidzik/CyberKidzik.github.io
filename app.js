let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let selectedBouquet = "";
let quantity = 1;

function selectBouquet(bouquet) {
  selectedBouquet = bouquet;
  tg.MainButton.setText(`Вы выбрали: ${bouquet} (1)`);
  tg.MainButton.show();
}

function increaseQuantity() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
  tg.MainButton.setText(`Вы выбрали: ${selectedBouquet} (${quantity})`);
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById('quantity').textContent = quantity;
    tg.MainButton.setText(`Вы выбрали: ${selectedBouquet} (${quantity})`);
  }
}

function sendData() {
  const data = {
    bouquet: selectedBouquet,
    quantity: quantity
  };
  tg.sendData(JSON.stringify(data));
  tg.close();
}

tg.MainButton.onClickHandler(() => {
  sendData();
});
