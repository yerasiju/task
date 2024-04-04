let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modal</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <button type="submit" class="btn" onclick="openPopup()">Submit</button>
      <div class="popup" id="popup">
        <img src="c:\Users\Админ\Downloads\404-tick.png" />
        <h2>Thank You!</h2>
        <p>Your details has been successfully submitted. Thanks!</p>
        <button type="button" onclick="closePopup()">OK</button>
      </div>
    </div>
  </body>
</html>

 */
