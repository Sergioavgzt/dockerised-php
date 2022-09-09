$(document).ready(function(){
// audio	
	var beepOne = $("#beep-one")[0];	//sript audio при нажатии мыши на Сайтосфера
	$(".tt-wrapper img").mousedown(function() {
		beepOne.play();
	});
	
	var beepff = $("#beep-ff")[0];	//	sript audio при нажатии мыши на Фотосфера
	$(".ff-wrapper img").mousedown(function() {
		beepff.play();
	});
// audio end	

// появление с анимацией двух планет при клике на .tt-wrapper
	$(".tt-wrapper").click(function(){
		// задержка до окончания анимации .tt-wrapper по клику, описана в стилях
		setTimeout(function() { 
			// меняется класс с .sstroi на sstroiend по клику на .tt-wrapper
			$(".sstroi").toggleClass("sstroiend");
			$(".sfolio").toggleClass("sfolioend");
		}, 1000);
	});
// анимация конец

// написание стиха при клике на шапку. При повторном клике - возврат
$('#header p').toggle(
    // при первом клике
    function(){
        // меняем текст шапки
		$(this).text('Вернуться к сферам');
        // прячем движущиеся блоки плавно
        $('.topHeader,.can,.raketa,.dviz').fadeOut(1000);
        // показываем блокнот плавно
        $('#stih').fadeIn(2000);
	}, // конец инструкций при первом клике 
	
	// при втором клике на шапку - обратные действия
    function(){
        $(this).text('Познание безконечно как Вселенная');
	    $('#stih').fadeOut(1000);
        $('.can').fadeIn(2000);
	}
);
// конец написание стиха при клике на шапку	

// стих начало	
    // public variables
    var vLetter = document.getElementById('letter');
    var iSpeedInk = 5;

    // other variables
    var sText = document.getElementById('letter_src').innerHTML;
    var iCurChar = 0;
    var sChars = '<span>';
    var iCurInk = 0;	// считаем количество знаков для обмакивания пера
    var sCurCaret = '';
    var sCaret = "&nbsp;<img src='images/pen.gif' style='position:absolute' />";	// перо

	// функция написания
    var doStep = function () {
        // current char
        var sChar = sText.charAt(iCurChar);

        // default char delay
        var iDelay = 32;

        if (sChar == '') {
            sCurCaret = '';
        } else if (sChar == '|') { // we use | symbol to emulate 'error' symbol
            sChar = '';
            sChars = sChars.substring(0, sChars.length-1);
            iDelay = 64;
        } else if (sChar == '<') { // pass tags
            var iPos = sText.indexOf('>', iCurChar);
            sChar = sText.substring(iCurChar, iPos + 1);
            iCurChar = iPos;
        } else if (sChar == '&') { // pass html entities
            var iPos = sText.indexOf(';', iCurChar);
            sChar = sText.substring(iCurChar, iPos + 1);
            iCurChar = iPos;
        } else if (sChar == '.') { // custom delay in case of . symbol
            iDelay = 300;
        } else if (sChar == ',') { // custom delay in case of , symbol
            iDelay = 100;
        } else if (sChar == ' ') { // custom delay in case of space symbol
            iDelay = 32;
        } else if (iCurChar > 5) {
            sCurCaret = sCaret;
        }

        // расход чернил - бледнеет буква
        if (sChar == ' ') {
            iCurInk += iSpeedInk;
            sChar = '</span><span style="color:RGB(' + (iCurInk) + ',' + (iCurInk) + ',' + (iCurInk) + ')">' + sChar;
        }

        if (document.getElementById('inkwell2').style.visibility == 'visible') {
            sCurCaret = sCaret;
            document.getElementById('inkwell2').style.visibility = 'hidden';
            sChar = '</span><span style="color:RGB(0,0,0)">' + sChar;
        }

        // обмакивание пера в чернильницу после 160 знаков
        if (iCurInk > 160) {
			// прокручиваем окно вверх
			window.scrollTo(0, 420);
            iCurInk = 0;
            document.getElementById('inkwell2').style.visibility = 'visible';
            iDelay = 1000;
            sCurCaret = '';
		}

        // add current char to chars
        sChars += sChar;

        // hide the caret at the end of the letter
        if (iCurChar == sText.length - 1)
            sCurCaret = '';

        // update letter with new chars
        vLetter.innerHTML = sChars + sCurCaret;

        // goto next char
        iCurChar++;

        // next step
        if (iCurChar < sText.length) {
            setTimeout(doStep, 20 + iDelay);
        }
    }

    //запускаем функцию написания после загрузки фона блокнота и с дальнейшей задержкой
    setTimeout(function() { $('#stih').load(doStep()); }, 2500);

// стих конец
	
});// конец ready