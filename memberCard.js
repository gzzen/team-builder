export class MemberCard {
	
	constructor(name, description, age, img) {
		this.name = name;
		this.description = description;
		this.age = age;
		this.img = img;
	}

	newCard(document) {
		let card = document.createElement("div");

		let nameText = document.createElement("p");
		nameText.textContent = `Name: ${this.name}`;
		card.appendChild(nameText);

		let imgContent = document.createElement("img");
		imgContent.src = this.img;
		imgContent.alt = this.name;
		imgContent.referrerPolicy = "no-referrer"; // magic code to load image from web
		card.appendChild(imgContent);

		const cardsDiv = document.getElementById("cards");
		cardsDiv.appendChild(card);
	}
}