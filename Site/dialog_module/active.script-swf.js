
$(document).ready(function(){
	$('#Qdialog').keypress(function(e){
		if(e.keyCode==13)
			ask("Qdialog");
		});
});

//"<input /><br>"+	
//"<br><button>Спросить</button>";
// "<input id='b1' value='Ок' onclick='ignore = false;' type='button'/>"

//таймер
// var timer;
//время до появления медального окна 1, зависящее от размера страницы
// var timeout;
// var countignore = 0;
//var ignore = true;
var dialogOn = false;
//подготовка активной среды (создание окон)

function prepare_environment(){
	
	//РАСПОЗНАВАНИЕ РЕЧИ
	//поле с распознаванием речи
	// Задаем API-ключ
	window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';
	// Добавление элемента управления "Поле для голосового ввода".
	
	var textline = new ya.speechkit.Textline(
		'Qdialog', {
			onInputFinished: function(text) {
			ask("Qdialog");
		  }
		});
	
	//КОНЕЦ РАСПОЗНАВАНИЯ РЕЧИ
	
	
}



var textline;

var flagSpeak = false;
function speak(){
	if (!flagSpeak){
		addSpeak();
		flagSpeak = true;
		document.getElementById('speakPNG').src = 'images/mute.png';
	}
	else {
		delSpeak();
		flagSpeak = false;
		document.getElementById('speakPNG').src = 'images/speak.png';

	}

}

function addSpeak(){
	window.ya.speechkit.settings.apikey = '5c6d6536-b453-4589-9bc7-f16c7a795106';
	// Добавление элемента управления "Поле для голосового ввода".
	
	textline = new ya.speechkit.Textline(
		'Qdialog', {
			onInputFinished: function(text) {
			ask("Qdialog");
		  }
		});

	document.getElementById("Qdialog").placeholder = 'Нажмите тут, и говорите';
}

function delSpeak(){
	window.ya.speechkit.Recognizer.finish;

	textline.destroy;
	textline.stop;
	textline.abort;
	textline.pause;
	textline.paused;
	textline.close;
	textline.finish;
	textline.recording = false;
	
	delete window.ya.speechkit.settings.apikey;
	delete window.ya.speechkit.textline;

	document.getElementById("Qdialog").style.backgroundImage = '';
	document.getElementById("Qdialog").onmousemove = function () {};
	document.getElementById("Qdialog").onmousedown = function () {};
	document.getElementById("Qdialog").placeholder = 'Введите вопрос';
}

//запуск подготовки среды при загрузке окна
 //window.onload = function(){prepare_environment();};
//скрытие сообщений при щелчке на фон
// function hide(elem_id){
// 	$("#"+elem_id).css({"display":"none"});
// 	timer=setInterval(alert_over_time, timeout);
// if(ignore)
// {
// try{
// 	var countignore = localStorage.getItem("countignore");
// 	//alert(countignore+"before");
// 	}
// catch(e){
// 	localStorage.setItem("countignore", countignore);


// 	}
// countignore++;
// localStorage.setItem("countignore", countignore);
// //alert(countignore+"перед вызовом");
// if(countignore>2) alert_for_ignore();
// }
// else localStorage.setItem("countignore", 0);

// ignore = true;
// }

//показ сообщений

	// function alert_over_time(){
	// 	$("#alert1").css({"display":"block"});
	// 	clearInterval(timer);
	// }
	// function alert_for_speed(){
	// 	$("#alert2").css({"display":"block"});
	// 	clearInterval(timer);
	// }
	// function alert_for_back(){
	// 	$("#alert3").css({"display":"block"});
	// 	clearInterval(timer);
	// }
	// function alert_for_ignore(){
	// 	$("#alert4").css({"display":"block"});
	// 	clearInterval(timer);
	// 	localStorage.setItem("countignore", 0);
	// }

//ДИАЛОГ
//показ-скрытие диалогового модуля
function toggleDialog(){
	//закрытие
	if(dialogOn){
		$("#dialog").animate({"margin-left":"-25px"}, 1000, function() {});
		$("#textOpenOrClose").text("Нажми, чтобы спросить!");
		dialogOn=false;
		 // timer=setInterval(alert_over_time, timeout);
	}
	//открытие
	else{
		$("#dialog").animate({"margin-left":"-365px"}, 1000, function() {});
		$("#textOpenOrClose").text("Нажми, чтобы скрыть диалоговый модуль!");

		dialogOn=true;
		// clearInterval(timer);
	}
}

//база знаний
var knowledge = [ 
    ["меркурий от солнца", "находится", " на расстоянии примерно 58 млн км"], 
    ["венера от солнца", "находится", " на расстоянии примерно 108,2 млн км"],
    ["земля от солнца", "находится", " на расстоянии примерно 149,6 млн км"],
    ["марс от солнца", "находится", " на расстоянии примерно 227,9  млн км"],
    ["юпитер от солнца", "находится", " на расстоянии примерно 778 млн км"],
    ["сатурн от солнца", "находится", " на расстоянии примерно 1,43 млрд км"],
    ["уран от солнца", "находится", " на расстоянии примерно 2,87 млрд км"],
    ["нептун от солнца", "находится", " на расстоянии примерно 4,5 млрд км"],
    ["радиус меркурия", "равен", " 2440 км"],
    ["радиус венеры", "равен", " 6051 км"],
    ["радиус земли", "равен", " 6371 км"],
    ["радиус марса", "равен", " 3396 км"],
    ["радиус юпитера", "равен", " 71000 км"],
    ["радиус сатурна", "равен", " 60000 км"],
    ["радиус урана", "равен", " 25560  км"],
    ["радиус нептуна", "равен", " 25000 км"],
    ["масса меркурия", "равняется", " 0,329 на 10 в 24-ой степени килограмм"],
    ["масса венеры", "равняется", " 4,81 на 10 в 24-ой степени килограмм"],
    ["масса земли", "равняется", " 5,98 на 10 в 24-ой степени килограмм"],
    ["масса марса", "равняется", " 0,63 на 10 в 24-ой степени килограмм"],
    ["масса юпитера", "равняется", " 1876 на 10 в 24-ой степени килограмм"],
    ["масса сатурна", "равняется", " 561,8 на 10 в 24-ой степени килограмм"],
    ["масса урана", "равняется", " 86 на 10 в 24-ой степени килограмм"],
    ["масса нептуна", "равняется", " 101,6 на 10 в 24-ой степени килограмм"],
    ["масса солнца", "равняется", " 1989 на 10 в 27-ой степени килограмм"],
    ["скорость движения меркурия по орбите", "равняется", " 47,9 км/с"],
    ["скорость движения венеры по орбите", "равняется", "  34,99 км/с"],
    ["скорость движения земли по орбите", "равняется", " 29,765 км/с"],
    ["скорость движения марса по орбите", "равняется", " 24,13 км/с"],
    ["скорость движения юпитера по орбите", "равняется", " 13,06 км/с"],
    ["скорость движения сатурна по орбите", "равняется", " 9,69 км/с"],
    ["скорость движения урана по орбите", "равняется", " от 6,49 до 7,11 км/с"],
    ["скорость движения нептуна по орбите", "равняется", " 5,45 км/с"],
    ["самой большой", "планета является", "  Юпитер (в солнечной системе)"],
    ["самой маленькой", "планета является", "  Меркурий (в солнечной системе)"],
    ["самой тежелой", "планета является", " Юпитера (в солнечной системе)"],
    ["самой легкой", "планета является", "  Меркурий (в солнечной системе)"],
    ["самой горячей", "планета является", "  Венера (в солнечной системе)"],
    ["самой холодной", "планета является", "  Уран (в солнечной системе)"],
    ["ядро солнца  ", "нагревается", "  до 15.7 млн. Келвинов"],
    ["видимая поверхность солнца  ", "нагревается", "  до  5778 Келвинов"],
    ["первый закон кеплера  ", "утверждает", "  что планеты Солнечной системы движутся по эллипсам, в одном из фокусов которого находится Солнце"],
    ["солнечной системой	", "является", "  планетной системой, включающей в себя все естественные космические объекты, обращающиеся вокруг Солнца: планеты и их спутники, карликовые планеты и их спутники, а также малые тела - астероиды, кометы, метеороиды, космическую пыль"],
    
    ["закон инерции ньютона	", "говорит", "  что внешняя сила необходима только для приведения тела в движение, для его остановки или для изменения направления и величины его скорости"],
    ["второй закон кеплера", "утверждает", " что линия, соединяющая Солнце и планету (или компоненты двойной звезды), за равные интервалы времени «заметает» равные площади"],
    ["закон противодействия	", "утверждает", " что взаимодействующие тела прилагают друг к другу равные по величине, но противоположно направленные силы"],
    ["гравитационная постоянная", "равняется", "6.67408 × 10 в -11 м кубических на килограмм в -1 на секунд в -2"],
    ["солнечная система", "-это", "планетная система, включающая в себя все естественные космические объекты, обращающиеся вокруг Солнца: планеты и их спутники, карликовые планеты и их спутники, а также малые тела - астероиды, кометы, метеороиды, космическую пыль"],
    ["солнечная система	", "начситывает", "  8 планет"],
    ["небесная механика", "-это", "раздел астрономии, применяющий законы механики для изучения и вычисления движения небесных тел, в первую очередь Солнечной системы, и вызванных этим явлений "],
    ["большие космические объекты", "-это", "планеты, звёзды и галактики имеют огромную массу и, следовательно, создают значительные гравитационные поля"]

	];

//поиск и вывод ответа и вопроса
function ask(questionInput){
	var question=document.getElementById(questionInput).value.trim();
	//выдвижение диалогового модуля
	$("#dialog").animate({"margin-left":"-365px"}, 1000, function() {});
	dialogOn=true;
	//вывод вопроса
	//document.getElementById("history").innerHTML+="<div class='question'>"+question+"</div>";
	var newDiv=document.createElement("div");
	newDiv.className='question';
	newDiv.innerHTML=question;
	document.getElementById("history").appendChild(newDiv);
	//поиск и вывод ответа
	//document.getElementById("history").innerHTML+="<div class='answer'>"+getAnswer(question)+"</div>";
	//создаем блок <div>
	newDiv=document.createElement("div");
	//задаем класс оформления созданного блока
	newDiv.className='answer';
	//получаем ответ на вопрос и наполняем им созданный блок
	newDiv.innerHTML=getAnswer(question);
	//ОЗВУЧКА - СИНТЕЗ РЕЧИ
	//флаг, нужна ли озвучка (не нужна, если есть анимация)
	var needSound=true;
	//проходим по элементам HTML-кода ответа
	for(var i=0;i<newDiv.childNodes.length;i++){
		//если находим элемент <embed>
		if(newDiv.childNodes[i].tagName=="EMBED"){
			//alert("EMBED detected.");
			//сбрасываем флаг и выходим из цикла
			needSound=false;
			break;
		}
	}
	//если флаг не был сброшен
	if(needSound){
		//добавляем в ответ тег аудио, ссылающийся на звук от синтезатора речи яндекса
		//в обращении к яндексу tts.voicetech.yandex.net указывается:
		// - формат звука: format=wav
		// - язык озвучиваемого текста: lang=ru-RU
		// - ключ, полученный при регистрации в личном кабинете для SpeechKit Cloud API: key=4a4d3a13-d206-45fc-b8fb-e5a562c9f587
		// - озвучиваемый текст, который берется из сгенерированного ответа: text="+newDiv.innerText+"
		//alert("Incoming transmission.");
		newDiv.innerHTML+="<audio controls='true' autoplay='true' src='https://tts.voicetech.yandex.net/generate?format=wav&lang=ru-RU&key=4a4d3a13-d206-45fc-b8fb-e5a562c9f587&text="+(newDiv.innerText||newDiv.textContent)+"'></audio>";
	}
	// КОНЕЦ ОЗВУЧКИ
	document.getElementById("history").appendChild(newDiv);
	// ЕЩЕ КУСОЧЕК ДЛЯ ОЗВУЧКИ
	//запуск звука
	if(newDiv.lastChild.tagName=="AUDIO"){
		newDiv.lastChild.play();
	}
	//прокрутка истории в самый низ
	document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
	//очистка текстового поля для ввода вопроса
	document.getElementById(questionInput).value="";
}

//псевдоокончания сказуемых (глаголов, кратких причастий и прилагательных )
var endings = [ ["ет","(ет|ут|ют)"], ["ут","(ет|ут|ют)"], ["ют","(ет|ут|ют)"],//1 спряжение
        ["ит","(ит|ат|ят)"], ["ат","(ит|ат|ят)"], ["ят","(ит|ат|ят)"],//2 спряжение
        ["ется","(ет|ут|ют)ся"], ["утся","(ет|ут|ют)ся"], ["ются","(ет|ут|ют)ся"],//1 спряжение, возвратные
        ["ится","(ит|ат|ят)ся"], ["атся","(ит|ат|ят)ся"], ["ятся","(ит|ат|ят)ся"],//2 спряжение, возвратные
        ["ен","ен"], ["ена","ена"], ["ено","ено"], ["ены","ены"],//краткие прилагательные
        ["ан","ан"], ["ана","ана"], ["ано","ано"], ["аны","аны"],//краткие прилагательные
        ["жен","жен"], ["жна","жна"], ["жно","жно"], ["жны","жны"],//краткие прилагательные
		["такое","- это"]];//для вопроса "что такое А?" ответ - "А - это ..."
//черный список слов, распознаваемых как сказуемые по ошибке
var blacklist = [ "замена", "замены", "атрибут", "маршрут", "член", "нет" ];
//функция определения сказуемых по соответствующим псевдоокончаниям
function getEnding(word)
{
    //проверка по черному списку
    if (blacklist.indexOf(word)!==-1) return -1;
    //перебор псевдоокончаний
    for (var j = 0; j < endings.length; j++)
    {
		//alert(word.substring(word.length-endings[j][0].length)+"-"+endings[j][0]);
        //проверка, оканчивается ли i-ое слово на j-ое псевдоокончание
        if(word.substring(word.length-endings[j][0].length)==endings[j][0]){
            return j;   //возврат номера псевдоокончания
        }
    }
    return -1;  //если совпадений нет - возврат -1
}

//функция, которая делает первую букву маленькой
function small1(str)
{
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}
//функция, которая делает первую букву большой
function big1(str)
{
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

//главная функция, обрабатывающая запросы клиентов
function getAnswer(question)
{
    //знаки препинания
    var separators = "'\",.!?()[]\\/";
    //получение текста из параметра запроса
    var txt = small1(question);
    //добавление пробелов перед знаками препинания
    for (var i = 0; i < separators.length; i++)
       txt = txt.replace(separators[i], " " + separators[i]);
    //массив слов и знаков препинания
    var words = txt.split(' ');
    //флаг, найден ли ответ
    var result = false;
    //формируемый функцией ответ на вопрос
    var answer="";
    //перебор слов
    for (var i = 0; i < words.length; i++)
    {
		//alert(words[i]);
        //поиск номера псевдоокончания 
        var ending = getEnding(words[i]);
		
        //если псевдоокончание найдено – это сказуемое, подлежащее в вопросе после него
        if (ending >= 0)
        {
			//---ТОЧНЫЙ ПОИСК---
			var subject_array = words.slice(i + 1);
			var subject_text = subject_array.join(" ");
			for (var j = 0; j < knowledge.length; j++) 
				if ((words[i]==knowledge[j][1] || // точное совпадение сказуемого
					words[i].substring(0, words[i].length - endings[ending][0].length) + 
					endings[ending][1]==knowledge[j][1]) && //совпадение сказуемого с подстановкой (такое->- это)
					(subject_text==knowledge[j][0]) || (subject_text==knowledge[j][2])) {//совпадение подлежащего
					//создание простого предложения из семантической связи
					answer+=big1(knowledge[j][0] + " " +
						knowledge[j][1] + " " + knowledge[j][2] + ". ");
					result = true;
					//alert("точное");
				}
			if (result == false) {
				//---ПОИСК С ПОМОЩЬЮ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ---
				//замена псевдоокончания на набор возможных окончаний
				words[i] = words[i].substring(0, words[i].length -
					endings[ending][0].length) + endings[ending][1];
				//создание регулярного выражения для поиска по сказуемому из вопроса
				var predicate = new RegExp(words[i]);
				//для кратких прилагательных захватываем следующее слово
				if (endings[ending][0] == endings[ending][1])
				{
					predicate = new RegExp(words[i] + " " + words[i + 1]);
					i++;
				}
				var subject_array = words.slice(i + 1);
				var subject_text = subject_array.join(" ");
				//создание регулярного выражения для поиска по подлежащему из вопроса
				//из слов подлежащего выбрасываем короткие предлоги (периметр у квадрата = периметр квадрата)
				for (var j = 0; j < subject_array.length; j++){
					if(subject_array[j].length < 3){
						subject_array.splice(j);
						j--;
					}
				}
				var subject_string = subject_array.join(".*");
				//только если в послежащем больше трех символов
				if (subject_string.length>3)
				{
					var subject = new RegExp(".*" +
						subject_string +
						".*");
					//поиск совпадений с шаблонами среди связей семантической сети
					for (var j = 0; j < knowledge.length; j++)
					{
						if (predicate.test(knowledge[j][1]) &&
							(subject.test(knowledge[j][0]) ||
								subject.test(knowledge[j][2])))
						{
							//создание простого предложения из семантической связи
							answer+=big1(knowledge[j][0] + " " +
								knowledge[j][1] + " " + knowledge[j][2] + ". ");
							result = true;
							//alert("регулярки для сказуемого и подлежащего");
						}
					}
					//если совпадений с двумя шаблонами нет,
					if (result == false){
						//поиск совпадений только с шаблоном подлежащего
						for (var j = 0; j < knowledge.length; j++)
						{
							if ((subject.test(knowledge[j][0]) ||
									subject.test(knowledge[j][2])))
							{
								//создание простого предложения из семантической связи
								answer+=big1(knowledge[j][0] + " " +
									knowledge[j][1] + " " + knowledge[j][2] + ". ");
								result = true;
								//alert("регулярка только для подлежащего");
							}
						}
					}
				}
			}
        }
    }
    //если ответа нет
    if(!result)
    	answer = "Ответ не найден. <br/>";
	//если ответ есть - добавляем увеличение картинок
	else
		answer = answer.replace("<img ", "<img onclick='zoom(this.src)'");
    return answer;
}

function zoom(src){
	document.getElementById("img_in_alert").src=src;
	$("#imgalert").css({"display":"block"});
	clearInterval(timer);
}

