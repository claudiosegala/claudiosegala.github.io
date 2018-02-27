var open_link = function () {
	var project = event.target.id;
	var newUrl = "https://github.com/claudiosegala/" + project;
	document.location.replace(newUrl);
}