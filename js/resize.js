function EqualizeHeight(selector) {
	const projectElements = document.querySelectorAll(selector);
	let maxHeight = 0;

	projectElements.forEach(element => {
		element.style.height = 'auto';
		if (element.offsetHeight > maxHeight) {
			maxHeight = element.offsetHeight;
		}
	});

	projectElements.forEach(element => {
		element.style.height = maxHeight + 'px';
	});
}

var timeOutFunctionID;

window.addEventListener('resize', async () => {
	clearTimeout(timeOutFunctionID);
	timeOutFunctionID = setTimeout(function() {
		EqualizeHeight(".equalize-height");
	}, 500);
});

window.addEventListener('load', async () => {
	EqualizeHeight(".equalize-height");
});
