document.addEventListener("DOMContentLoaded", () => {

	const memberForm = document.getElementById("memberform");
	memberForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(memberForm);

		let mname = formData.get("fname");
		let mdescription = formData.get("fdescription");
		let mage = formData.get("fage");
		let mimg = formData.get("fimg");

		console.log(mname);
		console.log(mage);
	});

});