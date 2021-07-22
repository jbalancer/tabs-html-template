var	
	messagePlace = document.getElementById('message-place');

function goMes(text,timeout)
{
	var	
		message = document.createElement('p');		
	message.innerHTML = text;
	messagePlace.appendChild(message);
	timeout = timeout * 1000;

	message.onclick = function()
	{
		this.remove();
	}

	setTimeout(function(){
		message.remove();		
	},timeout);
}

goMes('Hello Friend!',3);

var
	tabType  = document.getElementById('tab-type'),
	tabStyle = document.getElementById('tab-style');

var
	editableTab  = document.getElementById('editable-tab'),
	guideHeader  = document.getElementsByClassName('header-for-guide'),
	iconsTag     = ['<i class="fas fa-play"></i>',
				    '<i class="fab fa-html5"></i>',
				    '<i class="fab fa-css3-alt"></i>',
				    '<i class="fas fa-info"></i>',
				    '<i class="far fa-handshake"></i>'],
	headersTag   = ['To Start','HTML','CSS','Guide','At Last'],
	count        = parseInt((guideHeader.length + iconsTag.length) / 2),
	withFrame    = document.getElementsByClassName('frame'),
	withoutFrame = document.getElementsByClassName('noframe'),
	frame        = ['without-bg',
					'alice-blue',
					'alice-blue-once'],
	noFrame      = ['dark-red',
					'navy-blue'];

var
	tabTypePlace  = document.getElementById('tab-type-place'),
	tabStylePlace = document.getElementById('tab-style-place');

function choosing()
{
	var
		tabClassName = tabType.value + ' ' + tabStyle.value;

	for (var i = 0; i < count; i++)
	{
		switch(tabType.value)
		{
			case('icon-tab-wrapper'):
				guideHeader[i].innerHTML = iconsTag[i];
				break;

			case('mob-tab-wrapper'):
				guideHeader[i].innerHTML = iconsTag[i] + headersTag[i];
				break;

			default:
				guideHeader[i].innerHTML = headersTag[i];
				break;
		}
	}

	editableTab.setAttribute('class',tabClassName);

	goMes('TAB_STYLE: ' + tabStyle.value,4);

	tabStylePlace.innerText = tabStyle.value;
}

tabType.addEventListener('change', function(){

	if ( tabType.value == 'icon-tab-wrapper' )
	{
		for (var i = 0; i < withFrame.length; i++)
		{
			withFrame[i].innerHTML = frame[i] + ' ' + 'with-frame';
		}

		for (var i = 0; i < withoutFrame.length; i++)
		{
			withoutFrame[i].innerHTML = noFrame[i] + ' ' + 'without-frame';
		}		
	}
	else
	{
		for (var i = 0; i < withFrame.length; i++)
		{
			withFrame[i].innerHTML = frame[i];
		}

		for (var i = 0; i < withoutFrame.length; i++)
		{
			withoutFrame[i].innerHTML = noFrame[i];
		}
	}

	tabStyle.style.display = 'inline-block';

	goMes('TAB_TYPE: ' + this.value,4);

	tabTypePlace.innerText = tabType.value;

});

tabStyle.addEventListener('change',choosing);

var
	tabCode = document.getElementById('tab-code'),
	allCode = document.getElementById('all-code');

tabCode.onchange = function()
{
	switch(this.value)
	{
		case('show'):
			allCode.style.height = '784px'; goMes('Repeat code displayed',3);
			break;

		case('hide'):
			allCode.style.height = '0'; goMes('Repeat code hidden',3);
			break;

		default:
			goMes('Please reload the page',3);
			break;
	}
}

var
	tabTitles = document.getElementsByClassName('tab-titles');

for (var i = 0; i < tabTitles.length; i++)
{
	tabTitles[i].onclick = function (e)
	{
		goMes('Current Tab: ' + this.textContent,3);
	}
}
