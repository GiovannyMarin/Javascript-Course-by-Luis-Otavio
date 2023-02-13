const paragrafos = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

const bodyStyle = getComputedStyle(document.body); // pega os css do body
const backgroundColorBody = bodyStyle.backgroundColor;

for (i in ps) {
	const p = ps[i];
	if (i == 0) {
		p.style.backgroundColor = backgroundColorBody;
	}
	if (i == 1) {
		p.style.backgroundColor = "red";
	}
	if (i == 2) {
		p.style.backgroundColor = "blue";
	}
	if (i == 3) {
		p.style.backgroundColor = "green";
	} else {
	}
}
