export async function loadCards() {
	const path = "./members.json";
	try {
		const response = await fetch(path);
		if (!response.ok) {
			throw new Error();
		}
		const data = await response.json();
		return Promise.resolve(data);
	} catch (err) {
		return Promise.reject("unable to load cards");
	}
}

export async function saveCards(cards) {
	// hard to do with vanilla JS, as required
}