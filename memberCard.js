export class MemberCard {
	
	constructor(name, description, age, img) {
		this.name = name;
		this.description = description;
		this.age = age;
		this.img = img;
	}

	newCard(document) {
		let card = document.createElement("div");
		card.id = "card";

		let nameText = document.createElement("p");
		nameText.id = "name-field";
		nameText.textContent = `${this.name}`;
		card.appendChild(nameText);

		let ageText = document.createElement("p");
		ageText.id = "age-field";
		ageText.textContent = `${this.age} years old`;
		card.appendChild(ageText);

		let desText = document.createElement("p");
		desText.id = "description-field";
		desText.textContent = `${this.description}`;
		card.appendChild(desText);

		let imgContent = document.createElement("img");
		imgContent.src = this.img;
		imgContent.alt = this.name;
		imgContent.referrerPolicy = "no-referrer"; // magic code to load image from web
		card.appendChild(imgContent);

		const cardsDiv = document.getElementById("cards");
		cardsDiv.appendChild(card);
	}
}