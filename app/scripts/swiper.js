 // swiper //////////////////////////////////////////////////////////////////

  // slider on main page
  var swiper = new Swiper('.mainSlider-js', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  // slider on main page //////////////////////////////////////////////////////////////////

  // slider of current works //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabCurrent-js', {
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1
      }
    }
  });
  // slider of current works end //////////////////////////////////////////////////////////////////

  // slider of flabRewards //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabRewards-js', {
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  // slider of flabRewards end //////////////////////////////////////////////////////////////////

  // slider of flabPartners //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabPartners-js', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  // slider of flabPartners end //////////////////////////////////////////////////////////////////

  // slider of flabReviews
  var swiper = new Swiper('.flabReviews-js', {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 100,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  });
  // slider of flabReviews end //////////////////////////////////////////////////////////////////

  // slider of flabReviews //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabSecurities-js', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      991: {
        slidesPerView: 3
      },
      575: {
        slidesPerView: 2
      }
    }
  });
  // slider of flabReviews end //////////////////////////////////////////////////////////////////

  // slider of flabBlog //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabBlog-js', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  // slider of flabBlog end //////////////////////////////////////////////////////////////////

  // slider of flabMainSlider //////////////////////////////////////////////////////////////////
  var swiper = new Swiper('.flabMainSlider-js', {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    loopedSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });
  // slider of flabMainSlider end //////////////////////////////////////////////////////////////////

  // slider of flabTeam
  var swiper = new Swiper('.flabTeam-js', {
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30
      }
      
    }
  });
  // slider of flabTeam end

  // swiper end //////////////////////////////////////////////////////////////////