$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Designer", "Chess Player"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Designer", "Chess Player"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

/*
shhh... this is my secret function  you can't use it untell
you use my magical number !
*/

function calculateFlag(magicalNumber) {
  const _0x22939a = _0x1825;
  (function (_0x12dd7f, _0x5667c2) {
    const _0x788e88 = _0x1825,
      _0x4eefbf = _0x12dd7f();
    while (!![]) {
      try {
        const _0x4692a6 =
          -parseInt(_0x788e88(0x14c)) / 0x1 +
          (-parseInt(_0x788e88(0x14f)) / 0x2) *
            (parseInt(_0x788e88(0x148)) / 0x3) +
          -parseInt(_0x788e88(0x147)) / 0x4 +
          (-parseInt(_0x788e88(0x144)) / 0x5) *
            (parseInt(_0x788e88(0x14e)) / 0x6) +
          parseInt(_0x788e88(0x149)) / 0x7 +
          (parseInt(_0x788e88(0x145)) / 0x8) *
            (parseInt(_0x788e88(0x14a)) / 0x9) +
          parseInt(_0x788e88(0x14d)) / 0xa;
        if (_0x4692a6 === _0x5667c2) break;
        else _0x4eefbf["push"](_0x4eefbf["shift"]());
      } catch (_0x1d3993) {
        _0x4eefbf["push"](_0x4eefbf["shift"]());
      }
    }
  })(_0x5a24, 0x193eb);
  function _0x5a24() {
    const _0x37d4d9 = [
      "603813LqUoUM",
      "18QNjmLI",
      "substr",
      "195782WpbbvZ",
      "2310170qTtjGr",
      "17058kwdROx",
      "49132DdAjBN",
      "125UPsjAu",
      "686144YjHtGM",
      "fromCharCode",
      "81152zJgZjS",
      "12EFwvmU",
    ];
    _0x5a24 = function () {
      return _0x37d4d9;
    };
    return _0x5a24();
  }
  function _0x1825(_0x7ef042, _0xe67a17) {
    const _0x5a2446 = _0x5a24();
    return (
      (_0x1825 = function (_0x18251a, _0x4d13e0) {
        _0x18251a = _0x18251a - 0x144;
        let _0x536963 = _0x5a2446[_0x18251a];
        return _0x536963;
      }),
      _0x1825(_0x7ef042, _0xe67a17)
    );
  }
  let flag = "";
  for (let i = 0x0; i < magicalNumber["length"]; i += 0x2) {
    let hex = magicalNumber[_0x22939a(0x14b)](i, 0x2);
    flag += String[_0x22939a(0x146)](parseInt(hex, 0x10));
  }
  return flag;
}
