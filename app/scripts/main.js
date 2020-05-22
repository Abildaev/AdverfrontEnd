'use strict';

$(document).ready(function () {

  // thanks message
  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      jQuery.fancybox.close();
      $('.flabThanks-wrap').css('display', 'flex');
    });
    return false;
  });

  $(document).on('click', function (e) {
    $('.flabThanks-wrap').fadeOut();
  });
  // thanks message end


  // clickEffect //////////////////////////////////////////////////////////////////
  var clickEffect = {
    init: function init() {
      $(document).on('click', function (e) {
        $('<div class="flabCursor">').css({
          top: e.clientY,
          left: e.clientX
        }).appendTo($(document.body)).on('animationend webkitAnimationEnd', function () {
          $(this).remove();
        });
      });
    }
  };
  clickEffect.init();
  // clickEffect end //////////////////////////////////////////////////////////////////


  // right panel //////////////////////////////////////////////////////////////
  // if (Modernizr.mq('(min-width: 1200px)')) {
  $('body').scroll(function () {
    var head_h = $('.flabHeader').height();
    var windowTop = $('body').scrollTop();
    if (head_h < windowTop) {
      $('.flabApperance').addClass('flabShow');
    } else {
      $('.flabApperance').removeClass('flabShow');
    }
  });
  // Let's rotate this mother!


  // };
  // right panel end //////////////////////////////////////////////////////////////

  // smooth scroll down //////////////////////////////////////////////////////////////
  $('.flabSmooth').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 800);
  });
  // smooth scroll down end //////////////////////////////////////////////////////////////

  // menu header //////////////////////////////////////////////////////////////
  $('.flabHamburger, .flabAgTrigger').on('click', function () {
    $('.flabHiddenMnu').addClass('flabHiddenMnu--open');
    $('.flabHiddenMnu').removeClass('flabHiddenMnu--close');
  });

  $('.close-js').on('click', function () {
    $('.flabHiddenMnu').addClass('flabHiddenMnu--close');
    $('.flabHiddenMnu').removeClass('flabHiddenMnu--open');
  });

  $('.angle-js').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('angle-jsRotate');
  });
  // menu header end //////////////////////////////////////////////////////////////

 

  // portfolio filter //////////////////////////////////////////////////////////////////
  $(window).on('load', function () {
    var filterSelector = '*';

    // bind button click
    $('.flabPortfolio__filters ul').on('click', 'li', function () {
      filterSelector = $(this).attr('data-filter');
      $grid.isotope('updateSortData').isotope();
      // change is-filtered-out class
      $items.filter(filterSelector).removeClass('is-filtered-out');
      $items.not(filterSelector).addClass('is-filtered-out');
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });

    // portfolio filter  end //////////////////////////////////////////////////////////////////

    // select portfolio  //////////////////////////////////////////////////////////////////
    $('.select-js').on('click', function () {
      $('.backgroundBlack').addClass('dbbg');
      $('.flabPortfolio__filters').slideDown();
    });

    $('.flabPortfolio__filters ul li a').on('click', function () {
      $('.flabPortfolio__filters').slideUp();
      $('.backgroundBlack').removeClass('dbbg');
    });
  });
  // select portfolio end  //////////////////////////////////////////////////////////////////

  // tabs vacancy //////////////////////////////////////////////////////////////////
  (function ($) {
    $('.vacancyTabs-js').addClass('active').find('> li:eq(0)').addClass('current');

    $('.vacancyTabs-js li a').click(function (g) {
      var tab = $(this).closest('.flabTab'),
        index = $(this).closest('li').index();

      tab.find('vacancyTabs-js > li > a').removeClass('flabTabCurrent');
      $(this).closest('a').addClass('flabTabCurrent');

      tab.find('.flabTabContent-js').find('.tabItems-js').not('.tabItems-js:eq(' + index + ')').slideUp();
      tab.find('.flabTabContent-js').find('.tabItems-js:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

  // tabs vacancy end //////////////////////////////////////////////////////////////////

  // rotate background parallax
  $('body').scroll(function () {
    var y = $(this).scrollTop(),
      speed = 0.5,
      spin = y * speed,
      $FlabRotateFigure = $('.flabParallax');
    $FlabRotateFigure.css({
      '-webkit-transform': 'rotate(' + spin + 'deg)',
      '-moz-transform': 'rotate(' + spin + 'deg)',
      '-o-transform': 'rotate(' + spin + 'deg)',
      'transform': 'rotate(' + spin + 'deg)'
    });
  });
  // rotate background parallax end





  // services 3d card //////////////////////////////////////////////////////////////////
  // (function handleHover() {
  //   let win = $(window);
  //   let el = $();
  //   let children = $();
  //   let w = 0;
  //   let h = 0;
  //   let ratio = 0.10;

  //   let absoluteOffsetX = 0, absoluteOffsetY = 0, relativeOffsetX = 0, relativeOffsetY = 0;

  //   $('.3dCArd-js').on('mouseenter', function(e) {
  //     el = $(this);
  //     children = el.children();
  //     w = el.outerWidth();
  //     h = el.outerHeight();

  //     console.log('mouseenter');
  //   }).on('mousemove', function(e) {
  //     absoluteOffsetX = e.offsetX - w/2;
  //     absoluteOffsetY = e.offsetY - h/2;
  //     relativeOffsetX = absoluteOffsetX * 40 / w * 2 * ratio;
  //     relativeOffsetY = absoluteOffsetY * 40 / h * 2 * ratio;

  //     children.css({
  //       'transform': `rotateY(${relativeOffsetX}deg) rotateX(${relativeOffsetY * -1}deg)`,
  //       'transition': '.05s',
  //     });

  //     $(this).find('h2,p,a,.surfacing').css('transform','translateX('+relativeOffsetX+'px');

  //   }).on('mouseleave', function() {
  //     children.css({
  //       'transform': 'none',
  //       'transition': '1s',
  //     });
  //   });

  // })();
  // services 3d card end //////////////////////////////////////////////////////////////////

});

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
