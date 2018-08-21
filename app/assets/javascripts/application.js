// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require activestorage
//= require turbolinks
//= require_tree .


document.addEventListener("turbolinks:load", function () {

    $('#prop_info input[type=button]').click(function (e) {
        e.preventDefault();
        $('#prop_info').css("display", "none");
        $('#prop_phys').css("display", "grid");
    });
    $('#prop_phys input[type=button]:first-of-type').click(function (e) {
        e.preventDefault();
        $('#prop_info').css("display", "grid");
        $('#prop_phys').css("display", "none");
    });
    $('#prop_phys input[type=button]:last-of-type').click(function (e) {
        e.preventDefault();
        $('#selection').css("display", "grid");
        $('#prop_phys').css("display", "none");
    });
    $('#selection input[type=button]:first-of-type').click(function (e) {
        e.preventDefault();
        $('#prop_phys').css("display", "grid");
        $('#selection').css("display", "none");
    });

    $('input[name="fiber_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#fiber_div').css("display", "grid");
        } else {
            $('#fiber_div').css("display", "none");
        }
    });

    $('input[name="net_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#net_inf').css("display", "grid");
            $('#coverage').css("display", "grid");
            $('#pms').css("display", "grid");
        } else {
            $('#net_inf').css("display", "none");
            $('#coverage').css("display", "none");
            $('#pms').css("display", "none");
        }
    });

    $('input[name="lvc_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#lvc_div').css("display", "grid");
        } else {
            $('#lvc_div').css("display", "none");
        }
    });

    $('input[name="CCTV_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#CCTV_div').css("display", "grid");
        } else {
            $('#CCTV_div').css("display", "none");
        }
    });

    $('input[name="pbx_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#pbx_div').css("display", "grid");
        } else {
            $('#pbx_div').css("display", "none");
        }
    });
    // $('#net_inf_back').click(function (e) {
    //     e.preventDefault();
    //     $('#prop_phys').css("display", "grid");
    //     $('#net_inf').css("display", "none");
    // });
    // $('#net_inf_next').click(function (e) {
    //     e.preventDefault();
    //     $('#coverage').css("display", "grid");
    //     $('#net_inf').css("display", "none");
    // });
    // $('#coverage_back').click(function (e) {
    //     e.preventDefault();
    //     $('#net_inf').css("display", "grid");
    //     $('#coverage').css("display", "none");
    // });
    // $('#coverage_next').click(function (e) {
    //     e.preventDefault();
    //     $('#pms').css("display", "grid");
    //     $('#coverage').css("display", "none");
    // });
    // $('#pms_back').click(function (e) {
    //     e.preventDefault();
    //     $('#coverage').css("display", "grid");
    //     $('#pms').css("display", "none");
    // });

    $('input[name="property[multiple_buildings]"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#mult_build').fadeIn();
        } else {
            $('#mult_build').hide();
        }
    });

    $('input[name="property[wired_ethernet]"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#wired_enet').fadeIn();
        } else {
            $('#wired_enet').hide();
        }
    });

    $('input[name="new_con_check"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#new_con_data').fadeIn();
        } else {
            $('#new_con_data').hide();
        }
    });

    $('input[name="meeting_rooms_covered"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('#meeting_rooms_cov').fadeIn();
        } else {
            $('#meeting_rooms_cov').hide();
        }
    });

    $('select[name="property[property_status]').on('change', function () {
        if (this.value == 'Under Construction') {
            $("#prop_lvc").show();
            $("#prop_conversion").hide();
        }
        else if (this.value == 'Hotel Conversion') {
            $("#prop_lvc").hide();
            $("#prop_conversion").show();
        }
        else {
            $("#prop_lvc").hide();
            $("#prop_conversion").hide();
        }
    });

    $('select[name="property[int_construction]').on('change', function () {
        if (this.value == 'Other') {
            $("#int_con_comm").show();
        }
        else {
            $("#int_con_comm").hide();
        }
    });

    $('select[name="property[hallways]').on('change', function () {
        if (this.value == 'Other') {
            $("#hallway_comm").show();
        }
        else {
            $("#hallway_comm").hide();
        }
    });

    $('select[name="property[ceil_construction]').on('change', function () {
        if (this.value == 'Other') {
            $("#ceil_con_comm").show();
        }
        else {
            $("#ceil_con_comm").hide();
        }
    });

    $('select[name="property[ext_construction]').on('change', function () {
        if (this.value == 'Other') {
            $("#ext_con_comm").show();
        }
        else {
            $("#ext_con_comm").hide();
        }
    });

    $('#show_login').on('click', function() {
        $('#login_form').toggleClass('is_hidden');
    });

});

   

