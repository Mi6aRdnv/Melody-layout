$(document).ready(function () {
    var currentFloore = 2;
    var btnup = $(".btn-up");
    var btndown = $(".btn-down");
    var modal = $(".modal");
    var path = $(".img__home path");
    var close = $(".modal__close-btn");
    var viewFlats = $(".viewFlats");

    $(".img__home path").on('mouseover', function(){
        $(".img__home path").removeClass("current-floor");
        currentFloore = $(this).attr('data-floore');
        $(".info__counter").text(currentFloore);
    });

    path.on('click', function () {
        modal.toggleClass('is-open');
    });
    close.on('click', function () {
        modal.toggleClass('is-open');
    });
    viewFlats.on('click', function () {
        modal.toggleClass('is-open');
    });

    btnup.on('click', function() {
        if (currentFloore < 18) {
            currentFloore++;
            usCurrentFloore = currentFloore.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGroupping: false });
            $(".info__counter").text(usCurrentFloore);
            $(".img__home path").removeClass("current-floor");
            $(`[data-floore=${usCurrentFloore}]`).toggleClass("current-floor");
        }
    });
    btndown.on('click', function() {
        if (currentFloore > 2) {
            currentFloore--;
            usCurrentFloore = currentFloore.toLocaleString("en-US", { minimumIntegerDigits: 2,
            useGroupping: false });
            $(".info__counter").text(usCurrentFloore);
            $(".img__home path").removeClass("current-floor");
            $(`[data-floore=${usCurrentFloore}]`).toggleClass("current-floor");
        }
    });
    
});