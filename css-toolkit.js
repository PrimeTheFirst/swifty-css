window.onload = function(){
	let center = document.getElementsByClassName('center')
	center = Array.from(center);

	center.forEach( function(element, index) {
		switch (element.nodeName.toLowerCase()) {
			case "p":
			case "h2":
			case "h1":
			case "h3":
			case "h4":
				element.style.textAlign = 'center'
				break;
			default:
				// statements_def
				break;
		}
	});
}