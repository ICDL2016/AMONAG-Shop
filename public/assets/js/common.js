$(function() {


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});





$(document).ready(function () {

	var sizer = '.sizer';

	var container = $('.wrap__item');

	container.imagesLoaded(function () {
		container.masonry({
			itemSelector: '.item-masonry',
			columnWidth: sizer
		});
	});

	var sizer__post = '.sizer__post';

		var containerPost = $('.wrap__item_post');

		containerPost.imagesLoaded(function () {
			containerPost.masonry({
				itemSelector: '.item-masonry_post',
				columnWidth: sizer__post
			});
		});


	$(".burger").click(function(){
		$(".sidebar__nav").slideToggle();
	});

	$(".language").click(function(){
		$(".lang__list").slideToggle();
	});


	$(".language").click(function(){
		$(".sidebar__nav").slideUp();
	});

	$(".burger").click(function(){
		$(".lang__list").slideUp();
	});


	$( ".mobile__search_btn" ).click(function() {
		$( ".search__block input[type='text']" ).fadeIn( 300, "linear" );
	});

	// $( ".favourites__link" ).hover(
	//   function() {
	//     $( this ).closest(".item-masonry").find('.item__price').toggleClass('price__hover');
	//   }, function() {
	//     $( this ).closest(".item-masonry").find('.item__price').toggleClass('price__hover');
	//   }
	// );


});


(function($){
	$(function() {

		$('.jQtooltip').each(function() {
			var el = $(this);
			var title = el.attr('title');
			if (title && title != '') {
				el.attr('title', '').append('<div>' + title + '</div>');
				var width = el.find('div').width();
				var height = el.find('div').height();
				el.hover(
					function() {
						el.find('div')
							.clearQueue()
							.delay(200)
							.animate({width: width + 20, height: height + 20}, 200).show(200)
							.animate({width: width, height: height}, 200);
					},
					function() {
						el.find('div')
							.animate({width: width + 20, height: height + 20}, 150)
							.animate({width: 'hide', height: 'hide'}, 150);
					}
				).mouseleave(function() {
					if (el.children().is(':hidden')) el.find('div').clearQueue();
				});
			}
		})

	})
})(jQuery)



$(document).ready(function(){
	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i; //name-_09@mail09-.ru
	var mail = $('#mail');

	mail.blur(function(){
		if(mail.val() != ''){
			if(mail.val().search(pattern) == 0){
				$('#valid').css('display','none').text('Подходит');
				$('#submit').attr('disabled', false);
				mail.removeClass('error').addClass('ok');
			}else{
				$('#valid').css('display','block').text('Не подходит');
				$('#submit').attr('disabled', true);
				mail.addClass('error');
			}
		}else{
			$('#valid').css('display','block').text('Поле e-mail не должно быть пустым!');
			mail.addClass('error');
			$('#submit').attr('disabled', true);
		}
	});
});


$( ".nav__btn>li" ).click(function() {
	$( this ).toggleClass( "pt__none" );
});



$(document).ready(function(){

	// Устанавливаем обработчик потери фокуса для всех полей ввода текста
	$('input#name,input#login,input#password, input#email, input#email-fg, textarea#message').unbind().blur( function(){

		// Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
		var id = $(this).attr('id');
		var val = $(this).val();

		// После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
		switch(id)
		{

			// Проверка поля "Имя"
			case 'name':
				var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

				// Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
				// то добавляем этому полю класс .not_error,
				// и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

				if(val.length > 2 && val != '' && rv_name.test(val))
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text(' ')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}

				// Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
				// и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле "Имя" обязательно для заполнения')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;


			// Проверка поля "Имя"
			case 'login':
				var rv_login = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

				// Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
				// то добавляем этому полю класс .not_error,
				// и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

				if(val.length > 2 && val != '' && rv_login.test(val))
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text(' ')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}

				// Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
				// и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле "Логин" обязательно для заполнения')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;

			// Проверка поля "Имя"
			case 'password':
				var rv_password = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

				// Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
				// то добавляем этому полю класс .not_error,
				// и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

				if(val.length > 2 && val != '' && rv_password.test(val))
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text(' ')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}

				// Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
				// и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле "пароль" обязательно для заполнения')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;


			// Проверка email
			case 'email':
				var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
				if(val != '' && rv_email.test(val))
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text('')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле "Email" обязательно для заполнения<br> &bull; поле должно содержать правильный email-адрес<br> (например: example123@mail.ru)')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;

			// Проверка email
			case 'email-fg':
				var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
				if(val != '' && rv_email.test(val))
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text('')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле должно содержать правильный email-адрес<br> (например: example123@mail.ru)')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;


			// Проверка поля "Сообщение"
			case 'message':
				if(val != '' && val.length < 5000)
				{
					$(this).addClass('not_error');
					$(this).next('.error-box').text(' ')
						.css('color','white')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				else
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error-box').html('&bull; поле "Сообщение" обязательно для заполнения')
						.css('color','#c9c0c0')
						.animate({'paddingLeft':'10px'},400)
						.animate({'paddingLeft':'5px'},400);
				}
				break;


		} // end switch(...)

	}); // end blur()


	// Теперь отправим наше письмо с помощью AJAX
	$('form#feedback-form').submit(function(e){

		// Запрещаем стандартное поведение для кнопки submit
		e.preventDefault();

		// После того, как мы нажали кнопку "Отправить", делаем проверку,
		// если кол-во полей с классов .not_error равно 3(так как у нас всего 3 поля), то есть все поля заполнены верно,
		// выполняем наш Ajax сценарий и отправляем письмо адресату

		if($('.not_error').length == 3)
		{

			// Eще одним моментов является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
			// и вызываем метод .serialize().
			// Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

			$.ajax({
				url: 'send.php',
				type: 'post',
				data: $(this).serialize(),

				beforeSend: function(xhr, textStatus){
					$('form#feedback-form :input').attr('disabled','disabled');
				},

				success: function(response){
					$('form#feedback-form :input').removeAttr('disabled');
					$('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
					alert(response);
				}
			}); // end ajax({...})
		}
		else
		{
			return false;
		}
		// Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
		// останавливая отправку сообщения в невалидной форме


	}); // end submit()

	$(".wrapper_tab .tab").click(function() {
		$(".wrapper_tab .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$( ".lang__show" ).click(function() {
		$( '.left__sidebar_box' ).toggleClass( "active" );
		$( "body" ).toggleClass( "open-sidebar" );
	});

	$( ".close__window" ).click(function() {
        $( '.left__sidebar_box' ).removeClass( "active" );
        $( "body" ).removeClass( "open-sidebar" );
        $('.close__window').css('display','none');
    });

    $('.hint').click(function () {
        $(this).children('span').fadeToggle(400);
    });



}); // end script


$( ".comment__btn" ).click(function() {
	$( ".hide__open_block" ).slideToggle( "slow", function() {
	});
});

$( ".write__comment" ).click(function() {
	$( this ).parent().parent().parent().next('.open__write_block').slideToggle( "slow", function() {
	});
});

$( ".write__comment" ).click(function() {
	$( this ).parent().parent().parent().parent().next('.open__write_block').slideToggle( "slow", function() {
	});
});

$( ".turn__btn" ).click(function() {
	$( this ).toggleClass( "active" );
});

$( ".turn__btn" ).click(function() {
	$( this ).parent().parent().parent().parent().find('.comment__text').toggleClass( "show" );
});

$( "button.edit__button" ).click(function() {
	$( this ).parent().parent().parent().parent().parent().find('.open__write_block-edit').slideToggle( "slow", function() {
	});
});

$( ".articles__header .icon a" ).click(function() {
	$( this ).toggleClass( "active" );
});

$( ".what__is_it" ).click(function() {
	$( this ).find('.explained').fadeToggle( 300 );
});

$( ".order__lang li a" ).click(function() {
	$( this ).toggleClass( "active" );
});


$( ".jQtooltip" ).click(function() {
	$( this ).find('div').toggleClass( 'active' );
});


$( ".head__quest_icon i" ).click(function() {
	$( '.head__quest_icon .explained').fadeToggle( 300 );
});

$(".subscription__unit .favourites__link").hover(function() {
  	$( ".item-masonry .btn.item__btn" ).css("background", "rgba(14, 122, 205, 1)");
  	$( ".item-masonry .item__auth" ).css("background", "rgba(14, 122, 205, 1)");
  	$( ".item-masonry .btn__subscribe" ).css("background", "rgba(14, 122, 205, 1)");
}, function() {
  	$( ".item-masonry .btn.item__btn" ).css("background", "rgba(11, 97, 164, 1)");
  	$( ".item-masonry .item__auth" ).css("background", "rgba(11, 97, 164, 1)");
  	$( ".item-masonry .btn__subscribe" ).css("background", "rgba(11, 97, 164, 1)");
});








