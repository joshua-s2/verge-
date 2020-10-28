//  Preloader
jQuery(window).on("load", function() {
    $('#preloader').fadeOut(500);
    $('#app').addClass('show');
});

(function($) {

  'use strict';

    //  Header Fixed
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("animated fadeInDown fixed"), 3000;
        } else {
            $('.header').removeClass("animated fadeInDown fixed"), 3000;
        }
    });

    // Custom Selectbox
    $('.drop-menu').click(function() {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropeddown').slideToggle(300);
    });
    $('.drop-menu').focusout(function() {
        $(this).removeClass('active');
        $(this).find('.dropeddown').slideUp(300);
    });
    $('.drop-menu .dropeddown li').click(function() {
        $(this).parents('.drop-menu').find('span').text($(this).text());
        $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
    });

    // File Upload 
    $(".file-upload-wrapper").on("change", ".file-upload-field", function() {
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
    });

    // Product Image
    $('.product-image').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    });

    // Product Nav
    $('.product-nav').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-image',
      focusOnSelect: true
    });

    // Partners
    $('.partner-items').slick({
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

})(jQuery);

// Ripple Effect
Waves.init();
Waves.attach('.wave-effect');
Waves.attach('.btn');
Waves.attach('button');