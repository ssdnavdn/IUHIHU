function sendData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name,
        email,
        message
    };

  if (Telegram && Telegram.WebApp) {
    Telegram.WebApp.sendData(JSON.stringify(data)); // отправка данных боту
    Telegram.WebApp.close(); // закрытие WebApp
  } else {
    alert("Telegram API не инициализирован.");
  }
}
