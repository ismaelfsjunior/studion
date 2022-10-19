$('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass("fa-bars");
    $(this).find('i').toggleClass("fa-square-xmark");
});