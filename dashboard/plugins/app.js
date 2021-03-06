let wWidth, wHeight;
function initSmoothScroll() {
    $(".smooth-scroll").on("click", function(t) {
        t.preventDefault(),
        $("body, html").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1e3)
    }),
    $(".smoothScroll").on("click", function(t) {
        t.preventDefault(),
        $("body, html").animate({
            scrollTop: $($(this).data("scrolltarget")).offset().top
        }, 1e3)
    })
}
function initWow() {
    (new WOW).init()
}
function initButter() {
    var t = iOS();
    console.log(t),
    0 == t && wWidth > 991 && $("#butterWrapper").length && butter.init({
        wrapperId: "butterWrapper",
        wrapperDamper: .1
    })
}
function fn_nav_toggle() {
    var t, o = $("[data-nav-toggle]");
    o.length > 0 && wWidth > 0 && o.off("click.toggle").on("click.toggle", function() {
        t = $(this).data("nav-toggle");
        var e = $(t).first();
        return e.length > 0 && (e.hasClass("show") ? (e.removeClass("show"),
        e.find(".nav-item").removeClass("animate__animated animate__fadeInUp"),
        $("body").css("overflow", "auto"),
        o.removeClass("open")) : (e.addClass("show"),
        e.find(".nav-item").addClass("animate__animated animate__fadeInUp"),
        $("body").css("overflow", "hidden"),
        o.addClass("open"))),
        !1
    })
}
$(document).ready(()=>{
    wWidth = $(window).width(),
    wHeight = $(window).height(),
    AOS.init(),
    initSmoothScroll(),
    fn_nav_toggle(),
    initWow(),
    console.log("Ready!")
}
),
$(window).on("load resize", ()=>{
    wWidth = $(window).width(),
    wHeight = $(window).height()
}
);
//# sourceMappingURL=maps/app.min.js.map
