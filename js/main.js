$(function () {
    $('.animate-rotate-1').animatedHeadline({
        animationType: 'rotate-1'
    });

    $('.animate-type').animatedHeadline({
        animationType: 'type'
    });

    $('.animate-rotate-2').animatedHeadline({
        animationType: 'rotate-2'
    });

    $('.animate-loading-bar').animatedHeadline({
        animationType: 'loading-bar'
    });

    $('.animate-slide').animatedHeadline({
        animationType: 'slide'
    });

    $('.animate-clip').animatedHeadline({
        animationType: 'clip'
    });

    $('.animate-zoom').animatedHeadline({
        animationType: 'zoom'
    });

    $('.animate-rotate-3').animatedHeadline({
        animationType: 'rotate-3'
    });

    $('.animate-scale').animatedHeadline({
        animationType: 'scale'
    });

    $('.animate-push').animatedHeadline({
        animationType: 'push'
    });
});

/* 
$(document).ready(function () {
    $("#secondary").click(function () {
        $('#secondary-content').show();
        $('#tertiary-content').hide();
    });

    $("#tertiary").click(function () {
        $('#secondary-content').hide();
        $('#tertiary-content').show();
    });
});

 */
$(document).ready(function () {
    var $achieveTabLinks = $('#achievements .pill-tab-list a[role="tab"]');
    function setActiveAchieveTab($link) {
        $achieveTabLinks.removeClass('active').attr('aria-selected', 'false');
        $link.addClass('active').attr('aria-selected', 'true');
    }

    $('a[href="#academic"]').on('click', function (e) {
        e.preventDefault();
        setActiveAchieveTab($(this));
        $('#academic-content').slideDown('slow');
        $('#acting-content').slideUp('slow');
        $('#public_speaking-content').slideUp('slow');
        $('#leadership-content').slideUp('slow');
    });

    $('a[href="#acting"]').on('click', function (e) {
        e.preventDefault();
        setActiveAchieveTab($(this));
        $('#academic-content').slideUp('slow');
        $('#acting-content').slideDown('slow');
        $('#public_speaking-content').slideUp('slow');
        $('#leadership-content').slideUp('slow');
    });

    $('a[href="#leadership"]').on('click', function (e) {
        e.preventDefault();
        setActiveAchieveTab($(this));
        $('#academic-content').slideUp('slow');
        $('#acting-content').slideUp('slow');
        $('#public_speaking-content').slideUp('slow');
        $('#leadership-content').slideDown('slow');
    });

    $('a[href="#public_speaking"]').on('click', function (e) {
        e.preventDefault();
        setActiveAchieveTab($(this));
        $('#academic-content').slideUp('slow');
        $('#acting-content').slideUp('slow');
        $('#public_speaking-content').slideDown('slow');
        $('#leadership-content').slideUp('slow');
    });
});

$("#successfully-sent").click(function () {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("successfully-sent");

    setTimeout(function () {
        $(".notify").removeClass("active");
        $("#notifyType").removeClass("successfully-sent");
    }, 2000);
});

$(document).ready(function () {
    var mobileBreakpoint = 1024;
    var $mobileToggle = $('.nav-mobile.nav-bar-icon');
    var $mobileMenu = $('#primary-nav');

    if (!$mobileToggle.length || !$mobileMenu.length) {
        return;
    }

    function closeMobileMenu() {
        $mobileMenu.removeClass('is-open');
        $mobileToggle.attr('aria-expanded', 'false');
    }

    $mobileToggle.on('click', function () {
        var isOpen = $mobileMenu.hasClass('is-open');
        if (isOpen) {
            closeMobileMenu();
            return;
        }

        $mobileMenu.addClass('is-open');
        $mobileToggle.attr('aria-expanded', 'true');
    });

    $mobileMenu.find('a[href^="#"]').on('click', function () {
        if (window.innerWidth <= mobileBreakpoint) {
            closeMobileMenu();
        }
    });

    $(window).on('resize', function () {
        if (window.innerWidth > mobileBreakpoint) {
            closeMobileMenu();
        }
    });
});