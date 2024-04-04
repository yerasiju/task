function openSidebar() {
  document.getElementById("sidebar").style.width = "200px";
  document.getElementById("content")[0].style.marginLeft = "200px";
}
function closeSidebar() {
  document.getElementById("sidebar").style.width = 0;
  document.getElementById("content")[0].style.marginLeft = 0;
}
/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sidebar Example</title>
    <link rel="stylesheet" href="sidebar.css" />
  </head>
  <body>
    <div class="sidebar" id="sidebar">
      <a href="#" onclick="closeSidebar()">Close</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
    <div class="content">
      <button onclick="openSidebar()">Open Sidebar</button>
      <p>Main Content</p>
    </div>

    <script src="sidebar.js"></script>
  </body>
</html>
*/
