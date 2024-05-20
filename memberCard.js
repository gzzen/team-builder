export class MemberCard {
	
	constructor(name, description, age, img) {
		this.name = name;
		this.description = description;
		this.age = age;
		this.img = img;
	}

	newCard(document) {
		let card = document.createElement("div");
		card.textContent = `Name: ${this.name}`; 
		const cardsDiv = document.getElementById("cards");
		cardsDiv.appendChild(card);
	}
}