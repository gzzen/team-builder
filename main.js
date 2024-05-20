import { MemberCard } from "./memberCard.js";
import { loadCards } from "./persistency.js";

// add cards
document.addEventListener("DOMContentLoaded", () => {

	const memberForm = document.getElementById("memberform");
	memberForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(memberForm);

		let name = formData.get("fname");
		let description = formData.get("fdescription");
		let age = formData.get("fage");
		let img = formData.get("fimg");

		let card = new MemberCard(name, description, age, img);
		card.newCard(document);

		memberForm.reset();
	});

});


// retrieve cards in JSON file
try {
	let cards = await loadCards();
	// console.log(cards);
	for (let rawCard of cards) {
		// console.log(rawCard);
		let card = new MemberCard(rawCard.name, rawCard.description, rawCard.age, rawCard.img);
		card.newCard(document);
	}

} catch (err) {
	console.log("failed to load cards in JSON file");
}