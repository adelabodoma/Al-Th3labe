jQuery(document).ready(function ($) {
  const sliderNx = document.querySelector(".slider .swiper-button-next");
  const sliderPr = document.querySelector(".slider .swiper-button-prev");
  const sliderPagination = document.querySelector(".post-slider .swiper-pagination");



  new Swiper("#testimonialsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: "#testimonialsSwiper .swiper-pagination",
      clickable: true,
    },
  });


  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);



  // SEARCH CODE
  $('#openSearchForm').on('click', function (e) {
    e.preventDefault();
    $('#searchForm').show();
  })

  $('#openSearchFormMobile').on('click', function (e) {
    e.preventDefault();
    $('#searchForm').show();
  })

  $('#closeSearchForm').on('click', function (e) {
    e.preventDefault();
    $('#searchForm').hide()
  })

  // MOBILE MENU EVENTS
  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");

  openMenuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    $("#mobileMenu").fadeIn("slow");
  });

  closeMenuBtn.addEventListener("click", function (e) {
    e.preventDefault();
    $("#mobileMenu").fadeOut("slow");
  });

  // RENDER MOBILE MENU
  mobileNavMenuRender();


  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener("click", topFunction);

  window.onscroll = function () {
    scrollFunction(topButton, headerNav);
  };


  // WOW JS
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )

  setTimeout(()=>{
    wow.init();
  }, 1000)
});

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    $(".event-details__container").css("bottom", "50px");
  } else {
    $(".event-details__container").css("bottom", "-250px");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

  navExpand.forEach((item) => {
    item
        .querySelector(".nav-expand-content")
        .insertAdjacentHTML("afterbegin", backLink);
    item
        .querySelector(".nav-link")
        .addEventListener("click", () => item.classList.add("active"));
    item
        .querySelector(".nav-back-link")
        .addEventListener("click", () => item.classList.remove("active"));
  });

  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById("openMenu");
  const closeMenuBtn = document.getElementById("closeMenu");

  openMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeIn("slow");
  });

  closeMenuBtn.addEventListener("click", function () {
    $(".header__mobile").fadeOut("slow");
  });
}