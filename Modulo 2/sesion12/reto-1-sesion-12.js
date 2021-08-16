
/*
	<div class="card">
	<img src="http://example.com" alt="John Doe">
	<h2>John Doe</h2>
	<a href="https://example.com/johndoe" target="blank" class="button">
		GitHub
	</a>
	</div>
*/

function getUsers() {
	return fetch('https://api.github.com/users')
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			return data.slice(0, 4);
		})
}

const app = document.getElementById("app");

getUsers().then(function (data) {
	data.forEach(function(user) {
		createUser(user.login, user.avatar_url)
	}
	);
}
);

function createUser(name, photo) {
	const card = document.createElement("div");
	card.setAttribute("class", "card");

	const img = document.createElement("img");
	img.setAttribute("alt", name);
	img.setAttribute("src", photo);

	const h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode(name));

	const a = document.createElement("a");
	a.setAttribute("class", "button");
	a.setAttribute("target", "blank");
	a.setAttribute("href", "https://github.com/" + name);
	a.appendChild(document.createTextNode("GitHub"));
	
	card.appendChild(img);
	card.appendChild(h2);
	card.appendChild(a);
	app.appendChild(card);
}