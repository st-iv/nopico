$(document).ready(function() {   
	var $cbs = $('.calc__check');
	function calcUsage() {
		var total = 0;
		$cbs.each(function(){
			if ($(this).is(":checked")) {
				total = parseFloat(total) + parseFloat($(this).val());
			}
		});
		console.log(total);
	}
	$cbs.click(function(){
		calcUsage();
	});
	calcUsage();

	$("input[name=send]").click( function () { // Событие нажатия на кнопку "Расчёт"
		var action = $("select[name=action]").val(); // Получаем значение действия, которое нужно выполнить
		var num = $("input[name=num]").val() * 1; // Переменная первого числа
		var size = $("input[name=size]").val() * 1; // Переменная второго числа
		var result; // Переменная результата
		if (action == 'Значки') {
			if (num >= 100 && num <= 130) {
				result = num * (180 + total + size); 
			}
			else if (num >= 131 && num <= 150) {
				result = num * (180*0.9 + total + size*0.9); 
			}
		}
		else if (action == 'Спортивные медали'){
			result = num * (300 + size);
		}
		$("input[name=result]").val(result); // записываем результат
	});



});

