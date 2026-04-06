$(function () {
  // --------------------------------
  // ヘッダー
  // --------------------------------
  const header = document.querySelector("header");
  const toggle = document.querySelector(".toggle");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  const closeMenu = () => {
    header.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  document.addEventListener("click", () => {
    if (header.classList.contains("active")) {
      closeMenu();
    }
  });

  // --------------------------------
  // スライダー
  // --------------------------------
  $(".slide-items").slick({
    centerMode: true,
    centerPadding: "10%",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // --------------------------------
  // モーダル
  // --------------------------------
  $(".js-modal-open").on("click", function (e) {
    e.preventDefault();
    const target = $(this).data("modal");
    $("#" + target).addClass("active");
    $("body").addClass("no-scroll");
  });

  $(".js-modal-close").on("click", function () {
    $(this).closest(".modal").removeClass("active");
    $("body").removeClass("no-scroll");
  });

  // 電話モーダル
  $(".js-tel-open").on("click", function () {
    $("#tel-modal").addClass("active");
  });

  $(".js-tel-close").on("click", function () {
    $("#tel-modal").removeClass("active");
  });
});
