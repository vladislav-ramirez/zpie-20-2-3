/** путь к директории с изображениями */
var dir = 'galery/';
/** количество изображений в папке */
var size = 5;
/** контекст на элемент slider */
var slider = document.getElementById('slider');
/** индекс текущего изображения */
var i = 2;

var left = document.getElementById('left');
var right = document.getElementById('right');

/** 
* Функция загружает файлы изображений в слидер. Добавляет изображения по названию "i.jpg" где i номер изображения и так до тех пор пока индекс меньше значения переменной size содержащее значение количества изображений в папке (указывается программистом вручную)
*/
function SliderInit()
{
	var img;
	for (var imageIndex = 1; imageIndex <= size; imageIndex++)
	{
		img = document.createElement("img");
		img.setAttribute("src", (dir+imageIndex+".jpg"));
		img.setAttribute("class", "SliderElement");
		img.setAttribute("onclick", ("ImageShow("+imageIndex+")"));
		slider.appendChild(img);
	}
	document.getElementsByClassName('SliderElement')[i-1].style.boxShadow="0px 0px 5px 5px pink";
}

/** 
* Функция выводит изображение в HeadPicture div
*/
function ImageShow(index)
{
	if(index!=i)
	{
		transformation(0);
		//убираем старую подсветку
		document.getElementsByClassName('SliderElement')[i-1].style.boxShadow="none";
		//подсвечиваем в слидере
		document.getElementsByClassName('SliderElement')[index-1].style.boxShadow="0px 0px 5px 5px red";
		setTimeout(transformation, 400, 1);

		//устанавливаем новое изображение для div
		left.style.background = "url("+dir+index+".jpg)";
		right.style.background = "url("+dir+index+".jpg)";
		//задаем размеры для каждого div
		left.style.backgroundSize = "200% 100%";
		right.style.backgroundSize = "200% 100%";
		//устанавливаем позицию изображения для div
		left.style.backgroundPosition = "0 0";
		right.style.backgroundPosition = "100% 0";

		i=index;
	}
}

function transformation(param)
{
	if(param)
	{
		left.style.transform="scale(2, 2)  translateX(25%) translateY(25%) rotate3d(1,2,3,360deg)";
		right.style.transform="scale(2, 2) translateX(-25%) translateY(25%) rotate3d(1,2,3,360deg)";
	}
	if(!param)
	{
		left.style.transform="scale(0.5, 0.5)  translateX(-25%) translateY(-25%)";
		right.style.transform="scale(0.5, 0.5) translateX(25%) translateY(-25%)";
	}
}
/** 
* Функция выводит следующее изображение из слидера в область просмотра (если таковое имеется)
*/
function BackImage()
{
	if(i > 1)
	{
		ImageShow(i-1);
	}
}

/** 
* Функция выводит предыдущее изображение из слидера в область просмотра (если таковое имеется)
*/
function NextImage()
{
	if(i < size)
	{
		ImageShow(i+1);
	}
}

SliderInit();
ImageShow(1);