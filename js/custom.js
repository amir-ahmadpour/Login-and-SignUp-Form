$(document).ready(function () {


    $('.btn-default').click(function () {
        $('.btn-default').removeClass('active');
        $(this).addClass('active');
    });

    $(".sign-up-form").css("display", "none");
    $(".login-form").css("display", "block");


    $(".sign-up-btn").click(function () {

        $(".login-form").css("display", "none");
        $(".sign-up-form").css("display", "block");
    });

    $(".login-btn").click(function () {

        $(".login-form").css("display", "block");
        $(".sign-up-form").css("display", "none");
    });

});