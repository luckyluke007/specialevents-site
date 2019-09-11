function adjustIframes() {
    $("iframe").each(function() {
        var e = $(this),
            a = e.data("proportion"),
            i = e.attr("width"),
            t = e.width();
        a || (a = e.attr("height") / i, e.data("proportion", a)), t != i && e.css("height", Math.round(t * a) + "px")
    })
}
$(document).ready(function() {
    $("body").addClass("js");
    var e = $("body").innerWidth();
    e <= 767 && ($(".page-top-right").hide(), $("#mainNav").hide());
    var a = 0;
    $(".mobile-menu").click(function() {
        return 0 == a ? ($(".page-top-right").slideDown(300), $("#mainNav").slideDown(300), $(this).addClass("active"), a = 1, !1) : ($(".page-top-right").slideUp(300), $("#mainNav").slideUp(300), $(this).removeClass("active"), a = 0, !1)
    });
    var e = $("body").innerWidth();
    if ($(window).resize(function() {
        var e = $("body").innerWidth();
        e <= 767 && 0 == a ? ($(".page-top-right").hide(), $("#mainNav").hide()) : ($(".page-top-right").show(), $("#mainNav").show())
    }), $(".sidebar li > ul").each(function() {
        var e = $(this),
            a = e.find("li");
        0 !== a.length && a.filter(".excluded").length === a.length && e.hide()
    }), document.querySelectorAll(".main-navigation li a span"))
        for (var i = document.querySelectorAll(".main-navigation li a span"), t = 0; t < i.length; t++)
            i[t].removeAttribute("style");
    if (document.querySelector(".secondary-name a")) {
        for (var n = document.querySelector(".secondary-name a").innerHTML.split(" "), r = ["of", "and", "is", "&amp;"], t = 0; t < n.length; t++)
            for (var o = 0; o < r.length; o++)
                n[t].toLowerCase() == r[o] && (n[t] = '<span class="flourish">' + n[t] + "</span>");
        var d = n.join(" ");
        document.querySelector(".secondary-name a").innerHTML = d
    }
}), $(window).on("resize load", adjustIframes), $(window).load(function() {
    $('.contentBox a:has(img)').css('border', '0px solid transparent');
    $(".article-image img").each(function() {
        var e = this.naturalWidth + 16;
        $(this).parent().css({
            width: e
        })
    })
});

