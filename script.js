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

const today = new Date();

const trip = new Date(APP.startDate);

const diff = trip - today;

const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

<button id="startBtn">

START JOURNEY

</button>

</div>

</div>

`;
