function getUsers() {
	return fetch('https://api.github.com/users')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data.slice(0, 4);
		})
}

function getRepos(name) {
	return fetch('https://api.github.com/users/' + name + '/repos')
		.then((response) => response.json())
		.then((data) => data.slice(0, 5));
}

const app = document.getElementById("app");

getUsers().then(function (data) {
	data.forEach(function (user) {
		createUser(user.login, user.avatar_url)
	});
});

function createUser(name, photo) {
	const card = document.createElement("div");
	card.setAttribute("class", "card");

	const img = document.createElement("img");
	img.setAttribute("alt", name);
	img.setAttribute("src", photo);

	const h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode(name));

	const details = document.createElement('details');

	const summary = document.createElement('summary');
	summary.appendChild(document.createTextNode('Repositorios:'));
	details.appendChild(summary);

	getRepos(name).then((response) => {
		response.forEach((value) => {
			const repo = document.createElement('a');
			repo.href = value.html_url;
			repo.className = 'button-repo';
			repo.textContent = value.name;

			details.appendChild(repo);

		});
	})

	const a = document.createElement("a");
	a.setAttribute("class", "button");
	a.setAttribute("target", "blank");
	a.setAttribute("href", "https://github.com/" + name);
	a.appendChild(document.createTextNode("GitHub"));

	card.appendChild(img);
	card.appendChild(h2);
	card.appendChild(details);
	card.appendChild(a);
	app.appendChild(card);
}

