const user = document.getElementById("user");
const password = document.getElementById("password");

function validitionUser(user) {
	return /^[a-zA-Z_][a-zA-Z0-9_]{3,16}$/.test(user.value);
}
function validitionPassword(password) {
	return /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password.value);
}

document.addEventListener("submit", (e) => {
	e.preventDefault();
	if (validitionUser(user)) {
		console.log("logging seccess!!!");
	}
	else {
		console.log("unvalid username!");
	}
	if (validitionPassword(password)) {
		console.log("logging seccess!!!");
	}
	else {
		console.log("unvalid password!");
	}
	console.log(password.value);
}
);