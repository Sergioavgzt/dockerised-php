
$(document).ready(function(){
	// появление с анимацией двух планет при клике на .tt-wrapper
	$(".tt-wrapper").click(function(){
		// задержка до окончания анимации .tt-wrapper по клику, описана в стилях
		setTimeout(function() { 
			// меняется класс с .sstroi на sstroiend по клику на .tt-wrapper
			$(".sstroi").toggleClass("sstroiend");
			$(".sfolio").toggleClass("sfolioend");
		}, 1000);
	});

});




