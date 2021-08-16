function getUsers() {
	return fetch("https://api.github.com/users")
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return shuffle(data).slice(0, 4);
		})
}

function getRepos(name) {
	return fetch("https://api.github.com/users/" + name + "/repos")
		.then((response) => response.json())
		.then((data) => shuffle(data).slice(0, 5));
}

function shuffle(array) {
	var current = array.length, random;

	while (current != 0) {

		random = Math.floor(Math.random() * current);
		current--;

		[array[current], array[random]] = [array[random], array[current]];
	}

	return array;
}

const app = document.getElementById("app");

getUsers().then(function (data) {
	data.forEach(function (user) {
		createUser(user.login, user.avatar_url)
	});
});

function createUser(name, photo) {
	const card = document.createElement("div");
	card.className = "card";

	const img = document.createElement("img");
	img.setAttribute("alt", name);
	img.setAttribute("src", photo);

	const h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode(name));

	const details = document.createElement("details");

	const summary = document.createElement("summary");
	summary.appendChild(document.createTextNode("Repositorios:"));
	details.appendChild(summary);

	getRepos(name).then((response) => {
		response.forEach((value) => {
			const repo = document.createElement("a");
			repo.href = value.html_url;
			repo.className = "button-repo";
			repo.textContent = value.name;

			details.appendChild(repo);
		});
	})

	const a = document.createElement("a");
	a.className = "button";
	a.target = "blank";
	a.href = "https://github.com/" + name;
	a.appendChild(document.createTextNode("GitHub"));

	card.appendChild(img);
	card.appendChild(h2);
	card.appendChild(details);
	card.appendChild(a);
	app.appendChild(card);
}

