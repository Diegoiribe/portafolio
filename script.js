const lengueta = document.querySelector("[data-lengueta]");
const text__secundario = document.querySelector("[data-text]");
const lenguetacierre = document.querySelector(".lengueta");

lengueta.onclick = () => {
	lengueta.classList.add("active");
	text__secundario.classList.toggle("active");
	if (lenguetacierre.classList.contains("active")) {
		lengueta.classList.remove("active");
		lenguetacierre.classList.remove("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};
lenguetacierre.onclick = () => {
	lenguetacierre.classList.add("active");
};

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");

c1.onclick = () => {
	if (c1.classList.contains("active")) {
		c1.classList.remove("active");
	} else {
		c1.classList.add("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c2.onclick = () => {
	if (c2.classList.contains("active")) {
		c2.classList.remove("active");
	} else {
		c2.classList.add("active");
		c1.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c3.onclick = () => {
	if (c3.classList.contains("active")) {
		c3.classList.remove("active");
	} else {
		c3.classList.add("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c4.onclick = () => {
	if (c4.classList.contains("active")) {
		c4.classList.remove("active");
	} else {
		c4.classList.add("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c5.classList.remove("active");
	}
};

c5.onclick = () => {
	c5.classList.toggle("active");
	c1.classList.remove("active");
	c2.classList.remove("active");
	c3.classList.remove("active");
	c4.classList.remove("active");
};
