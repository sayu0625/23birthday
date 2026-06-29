const app = document.getElementById("app");

app.innerHTML = `

<div class="hero">

<div class="wave"></div>

<div class="content">

<h1>${APP.title}</h1>

<h2>Welcome, ${APP.name}</h2>

<p>

駿真の23歳の誕生日をお祝いする旅に行こう！

</p>

<p>${APP.date}</p>

<button id="startBtn">

START JOURNEY

</button>

</div>

</div>

`;
