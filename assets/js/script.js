$(document).ready(function () {
  $("#tel").mask("+38(000)000-00-00");
  $("select").niceSelect();
  $('[type = "reset"]').click(function () {
    $("select").val("not");
    $("select").niceSelect("update");
  });
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    // $('select').toggleClass('open');
  });

  const formRegistration = document.querySelectorAll(".col-md-6");

  for (let i = 0; i < formRegistration.length; i++) {
    if (i >= 0 && i <= 5) {
      formRegistration[i].classList.add("form-registration");
    } else if (i >= 6 && i <= 7) {
      formRegistration[i].classList.add("form-about");
    } else if (i >= 8 && i <= 9) {
      formRegistration[i].classList.add("form-random");
    }
  }
});
