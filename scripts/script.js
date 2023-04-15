const filterInput = document.getElementById("filter");
const projectList = document.getElementById("project-list");

filterInput.addEventListener("keyup", () => {
	const filterText = filterInput.value.toLowerCase();
	const projectItems = projectList.querySelectorAll(".project");

	projectItems.forEach((projectItem) => {
		const projectText = projectItem.textContent.toLowerCase();

		if (projectText.includes(filterText)) {
			projectItem.style.display = "block";
		} else {
			projectItem.style.display = "none";
		}
	});
});

function goBack() {
    window.history.back();
}
