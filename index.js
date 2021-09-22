var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
    $("#intro_guide").click(function () {
        $("html,body").animate({
            scrollTop: $("#intro").offset().top
        },
            { duration: 500, easing: "swing" });
        return false;
    });
    $("#skills_guide").click(function () {
        $("html,body").animate({
            scrollTop: $("#skills").offset().top
        },
            { duration: 500, easing: "swing" });
        return false;
    });
    $("#projects_guide").click(function () {
        $("html,body").animate({
            scrollTop: $("#projects").offset().top
        },
            { duration: 500, easing: "swing" });
        return false;
    });
    $("#contact_guide").click(function () {
        $("html,body").animate({
            scrollTop: $("#contact").offset().top
        },
            { duration: 500, easing: "swing" });
        return false;
    });
});

