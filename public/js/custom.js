//kan graceful degradation hebben door `display: none` hier naartoe te halen en het erop te zetten als het laadt. Of eventueel: geen slidedown maar alleen een slide up.
function displayServerMessage () {
	$svm = $("p.server_msg");
	if (!isEmpty($svm)) {
		setTimeout(function(){$svm.delay(300).slideDown(300).delay(3000).slideUp(300)}, 1000);
	}
}

function isEmpty( el ){
	return !$.trim(el.html())
}

displayServerMessage();


//reset forms on back button (back button stuff is hackish)
$(window).bind("pageshow", function(event) {
		var form = $('form');
		form[0].reset();
});