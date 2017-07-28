$(window).load(function () {
  var $catalog = $('.catalog').masonry();
  // поведение элементов каталога

  setTimeout(function () {
    $catalog.masonry('destroy');
    $catalog.masonry({
      itemSelector: '.catalog__item',
      isFitWidth  : true,
      gutter      : 5
    });
  }, 0);
})

$(document).ready(function () {
  //тогглер табов в навигации
  $('.js-authorize').on('click', function (e) {
    e.preventDefault();
    $('.js-tabs').slideToggle();
    $(this).hide();
  })


  // тогглер меню
  $('.js-toggler').on('click tap', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.book-nav').removeClass('active');
  });


  // тогглер меню
  $('.js-toggler-book').on('click tap', function (e) {
    e.stopPropagation();
    $('.book-nav').toggleClass('active');
    $('.nav').removeClass('active')
  });

  //отлавливаем клики и скрываем менюшки
  $(document).click(function (event) {
    if (!$(event.target).closest('.nav').length) {
      if ($('.nav').is(":visible")) {
        $('.nav').removeClass('active');
      }
    }
    if (!$(event.target).closest('.book-nav').length) {
      if ($('.book-nav').is(":visible")) {
        $('.book-nav').removeClass('active');
      }
    }
    if (!$(event.target).closest('.settings').length) {
      $('.settings').fadeOut();
    }
  })


  // табы
  $('.js-tabs').on('click', '.js-tabs-head', function () {
    var $current = $(this);
    $current.addClass('active').siblings().removeClass('active');
    $current.closest('.js-tabs').find('.js-tabs-item').removeClass('active').eq($current.index()).addClass('active');
  });

  $('.js-slide-parent').on('click', '.book-nav__link', function () {
    $(this).parent().toggleClass('active').find('.js-slide-child').slideToggle('fast');
    $(this).parent().siblings().removeClass('active').find('.js-slide-child').slideUp('fast');
  });

  // языки
  $('.click-nav > ul').toggleClass('no-js js');
  $('.click-nav .js ul').hide();
  $('.click-nav .js').click(function (e) {
    $('.click-nav .js ul').slideToggle(200);
    $('.clicker').toggleClass('active');
    $('.click-nav').toggleClass('click-active');
    e.stopPropagation();
  });


  $(document).click(function () {
    if ($('.click-nav .js ul').is(':visible')) {
      $('.click-nav .js ul', this).slideUp();
      $('.clicker').removeClass('active');
      $('.click-nav').removeClass('click-active');
    }
  });

  $('.js-filters-block input').on('click', function () {
    $('.js-filters-block input:checked').length && $('.js-clear-filters').fadeIn()
  })

  $('.js-clear-filters').on('click', function (e) {
    e.preventDefault();
    var $parent = $(this).closest('.js-filters');
    $(this).fadeOut().closest('.js-filters').find('input[type="radio"].js-popular').prop('checked', true);
    $parent.find('input[type="checkbox"]').prop('checked', true);
  });

  $('.js-filters-close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.js-filters').fadeOut();
    $('.js-filters-call').toggleClass('active');
    $('.page-title').toggle();
    $('body').removeClass('oh')

  });

  $('.js-filters-call').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.fa-user').removeClass('active');
    $('.page-title').toggle();
    $('.js-filters').fadeToggle();
    $('body').toggleClass('oh')
  });


  console.log(editHeight)
  //фикс панельки битрикса
  if ($('#bx-panel').length) {
    var offset = $('#bx-panel').height();

    if ($('.js-edit').length) {
      var editHeight = parseInt($('.js-edit').css('top'))
      $('.js-edit').css('top', editHeight + offset + 'px')
    }
    $('.header-container').css('top', offset + 'px');
    $('.nav').css('top', offset + 'px');
    $('.book-nav').css('top', offset + 'px');
    $('.edit-ico').css('margin-top', offset + 50 + 'px');
    $(window).scroll(function (e) {
      var scrollTop = $(this).scrollTop();
      if (scrollTop <= offset) {
        $('.header-container').css('margin-top', -scrollTop + 'px')
        $('.nav').css('margin-top', -scrollTop + 'px')
        $('.book-nav').css('margin-top', -scrollTop + 'px')
      }
      if (scrollTop > offset) {
        $('.header-container').css('margin-top', -offset + 'px')
        $('.nav').css('margin-top', -offset + 'px')
        $('.book-nav').css('margin-top', -offset + 'px')
        $('.edit-ico').css('margin-top', offset + 50 + +'px')
      }
    });
  }


});