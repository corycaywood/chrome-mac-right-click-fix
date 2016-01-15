var timeout = true;

document.onmousedown = function(e) {
	if ( timeout && (e.button == 2 || e.ctrlKey == true) ) {
		timeout = false;
		setTimeout(function(){
			timeout = true;
		}, 50)
	}
}

document.onselectstart = function(e) {
	if (!timeout)
		e.preventDefault();
}; 