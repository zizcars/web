const user = document.getElementById("user");
// const userValue = user.value;

function validition(user) {
	return /^[a-zA-Z][a-zA-Z0-9_]{3,16}/.test(user.value);
}

console.log(validition(user));

if (validition(user)) {
	console.log("logging seccess!!!");
}
else {
	console.log("error!");
}

document.addEventListener("submit", (e) => {
	e.preventDefault();

}
);