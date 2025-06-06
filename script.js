function sendData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name,
        email,
        message
    };

    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close();
}
