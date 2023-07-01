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
  console.log(formRegistration);

  for (let i = 0; i < formRegistration.length; i++) {
    if (i >= 0 && i <= 5) {
      formRegistration[i].classList.add("form-registration");
    } else if (i >= 6 && i <= 7) {
      formRegistration[i].classList.add("form-about");
    } else if (i >= 8 && i <= 9) {
      formRegistration[i].classList.add("form-random");
    }
  }
  console.log(formRegistration);

  const testFormreg = document.querySelectorAll(".col-md-6");
  console.log(testFormreg);

  testFormreg.forEach(function (item) {
    item.classList.add("new-form-class");
  });
  testFormreg[0].classList.add("test-main-class");
  console.log(testFormreg);

  const testfNavLink = document.querySelectorAll(".nav-link");
  console.log(testfNavLink);

  testfNavLink.forEach(function (item) {
    item.classList.add("new-class");
  });
  testfNavLink[3].classList.add("test-class");
  console.log(testfNavLink);

  const testMainh1 = document.querySelector(".mainh1");
  console.log(testMainh1);
  testMainh1.classList.add("test-second-h1");
  console.log(testMainh1);

  const testWraper = document.querySelector(".wraper");
  console.log(testWraper);
  testWraper.classList.add("test-wraper1");
  console.log(testWraper);
  testWraper.classList.remove("test-remove-wraper");
  console.log(testWraper);

  const testLegend = document.querySelector(".primary-legend");
  console.log(testLegend);
  testLegend.classList.add("test-primary-legend1");
  console.log(testLegend);
  testLegend.classList.remove("test-remove");
  console.log(testLegend);
});
