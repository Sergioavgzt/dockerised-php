$(document).ready(function(){
	var beepOne = $("#beep-one")[0];	//sript audio при нажатии мыши на Сайтосфера
	$(".tt-wrapper img").mousedown(function() {
		beepOne.play();
	});
	
	var beepff = $("#beep-ff")[0];	//	sript audio при нажатии мыши на Фотосфера
	$(".ff-wrapper img").mousedown(function() {
		beepff.play();
	});

});