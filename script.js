const app = document.getElementById("app");

app.innerHTML = `

<div class="hero">

<div class="wave"></div>

<div class="content">

<h1>${APP.title}</h1>

<h2>Welcome, ${APP.name}</h2>

<p>

今日は君のためだけに用意した

特別な旅。

</p>

<p>${APP.date}</p>

<button id="startBtn">

START JOURNEY

</button>

</div>

</div>

`;
