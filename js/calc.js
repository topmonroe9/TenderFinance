'use strict'
//  Activate bootstrap scrollspy
$('body').scrollspy({ 
    target: '#navbar_1',
    offset: 140
});

// Go to specific div with animation
$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    $('#phone').mask('+0 (000) 000-00-00');
    $('#inn').mask('0000 0000 00 00');
});

function typecheck () {
    if ((type === 'opt1') || (type === 'opt2') || (type === 'opt3')) {
        $('#fztype .custom-control-input').removeClass('is-invalid').addClass('is-valid');
    } else {
        $("#errorMess").removeClass('invisible').addClass('visible').text("Выберите категорию гарантии");
        $('#fztype .custom-control-input').removeClass('is-valid').addClass('is-invalid');
        return false;
    }
}



$(document).ready(function () {
    $("#exitnum").autoNumeric('init');


});

jQuery(function ($) {
    $('#summ').autoNumeric('init');
});

//datapicker

$.datepicker.setDefaults($.datepicker.regional["ru"]);
$('#dateStart, #dateEnd').datepicker({
    minDate: "+1",
    defaultDate: "+1w",
    maxDate: "+1885d",
    changeMonth: true,
    changeYear: true,

    onSelect: function(date, datepicker) {
        if (datepicker.id == "dateStart") {
            $('#dateEnd').datepicker("setDate", date)
                .datepicker("enable").datepicker("option", "minDate", date)
        }

        if (!$('#dateEnd').datepicker("isDisabled")) {
            var startDate = $('#dateStart').datepicker("getDate");
            var endDate = $('#dateEnd').datepicker("getDate");
 
            var diff = (endDate - startDate)/1000/60/60/24;
            $('#days').val( diff + ' дней'); 
            
        }
    }
}).filter("#dateEnd").datepicker("disable");



//modalForm send
$('#getServiceModal').on('shown.bs.modal', function () {
   $('#messageModal').val("Здравствуйте. Я хочу получить банковскую гарантию согласно рассчитаной на сайте стоимости - " + $('#exitnum').html());
  });

$('#submitFormModal').on('click', function () {
    var fbForm = {
        name: $('#nameModal').val(),
        phone: $('#phoneModal').val(),
        email: $('#emailModal').val(),
        message: $('#messageModal').val(),
    };

console.log(fbForm);

    if ((fbForm.name == '')||(fbForm.name == undefined)) {
        $("#fbMessageModal").removeClass('invisible').addClass('alert-danger visible').text("Введите Имя");
        $('#nameModal').addClass('is-invalid');
        return false;
    }  else {
            $('#nameModal').removeClass('is-invalid').addClass('is-valid');
    }


    if ((fbForm.email == '') && (fbForm.phone == '')) {
        $("#fbMessageModal").removeClass('invisible').addClass('alert-danger visible').text("Введите телефон или почту, чтобы мы смогли с вами связаться");
        $('#emailModal').addClass('is-invalid');
        $('#phoneModal').addClass('is-invalid');
        return false;
    } else {
         if ((!fbForm.email == '') && (!fbForm.phone == '')) {
            $('#emailModal').removeClass('is-invalid').addClass('is-valid');
            $('#phoneModal').removeClass('is-invalid').addClass('is-valid');
         } else if (!fbForm.email == ''){
            $('#emailModal').removeClass('is-invalid').addClass('is-valid');
            $('#phoneModal').removeClass('is-invalid is-valid');
        } else if (!fbForm.phone == '') {
            $('#phoneModal').removeClass('is-invalid').addClass('is-valid');
            $('#emailModal').removeClass('is-invalid is-valid');

    }}

    $.ajax({
        url:'js/mail1.php',
        type: 'POST',
        cache: false,
        data: { 'name': fbForm.name, 'phone': fbForm.phone, 'email': fbForm.email, 'message': fbForm.message},
        dataType: 'html',
        beforeSend: function() {
            $("#submitFormModal").prop('disabled', true);

        },
        success: function(data) {
           if(!data)
            alert("Произошла ошибка");
            else 
            $('#mailFormModal').trigger('reset');
            $('#phoneModal').removeClass('is-invalid is-valid');
            $('#emailModal').removeClass('is-invalid is-valid');
            $('#nameModal').removeClass('is-invalid is-valid');
            $("#submitFormModal").prop('disabled', false);
            $('#getServiceModal').modal('hide');
            $('#sendSuccessModal').modal('show');
        },
    })
})



$('#getServiceModal').on('shown.bs.modal', function () {
   $('#messageModal').val("Здравствуйте. Я хочу получить банковскую гарантию согласно рассчитаной на сайте стоимости - " + $('#exitnum').html());
  });

$('#submitFormModal').on('click', function () {
    var fbForm = {
        name: $('#nameModal').val(),
        phone: $('#phoneModal').val(),
        email: $('#emailModal').val(),
        message: $('#messageModal').val(),
    };

    if ((fbForm.name == '')||(fbForm.name == undefined)) {
        $("#fbMessageModal").removeClass('invisible').addClass('alert-danger visible').text("Введите Имя");
        $('#nameModal').addClass('is-invalid');
        return false;
    }  else {
            $('#nameModal').removeClass('is-invalid').addClass('is-valid');
    }


    if ((fbForm.email == '') && (fbForm.phone == '')) {
        $("#fbMessageModal").removeClass('invisible').addClass('alert-danger visible').text("Введите телефон или почту, чтобы мы смогли с вами связаться");
        $('#emailModal').addClass('is-invalid');
        $('#phoneModal').addClass('is-invalid');
        return false;
    } else {
         if ((!fbForm.email == '') && (!fbForm.phone == '')) {
            $('#emailModal').removeClass('is-invalid').addClass('is-valid');
            $('#phoneModal').removeClass('is-invalid').addClass('is-valid');
         } else if (!fbForm.email == ''){
            $('#emailModal').removeClass('is-invalid').addClass('is-valid');
            $('#phoneModal').removeClass('is-invalid is-valid');
        } else if (!fbForm.phone == '') {
            $('#phoneModal').removeClass('is-invalid').addClass('is-valid');
            $('#emailModal').removeClass('is-invalid is-valid');

    }}

    $.ajax({
        url:'js/mail1.php',
        type: 'POST',
        cache: false,
        data: { 'name': fbForm.name, 'phone': fbForm.phone, 'email': fbForm.email, 'message': fbForm.message},
        dataType: 'html',
        beforeSend: function() {
            $("#submitFormModal").prop('disabled', true);

        },
        success: function(data) {
           if(!data)
            alert("Произошла ошибка");
            else 
            $('#mailFormModal').trigger('reset');
            $('#phoneModal').removeClass('is-invalid is-valid');
            $('#emailModal').removeClass('is-invalid is-valid');
            $('#nameModal').removeClass('is-invalid is-valid');
            $("#submitFormModal").prop('disabled', false);
            $('#getServiceModal').modal('hide');
            $('#sendSuccessModal').modal('show');
        },
    })
})


// $('#getServiceModal2').on('shown.bs.modal', function () {
//     $('#messageModal2').val("Здравствуйте. Я хочу получить банковскую гарантию согласно рассчитаной на сайте стоимости - " + $('#exitnum').html());
//    });
 
 $('#submitFormModal2').on('click', function () {
     var fbForm = {
         name: $('#nameModal2').val(),
         phone: $('#phoneModal2').val(),
         email: $('#emailModal2').val(),
         message: $('#messageModal2').val(),
     };

 
     if ((fbForm.name == '')||(fbForm.name == undefined)) {
         $("#fbMessageModal2").removeClass('invisible').addClass('alert-danger visible').text("Введите Имя");
         $('#nameModal2').addClass('is-invalid');
         return false;
     }  else {
             $('#nameModal2').removeClass('is-invalid').addClass('is-valid');
     }
 
 
     if ((fbForm.email == '') && (fbForm.phone == '')) {
         $("#fbMessageModal2").removeClass('invisible').addClass('alert-danger visible').text("Введите телефон или почту, чтобы мы смогли с вами связаться");
         $('#emailModal2').addClass('is-invalid');
         $('#phoneModal2').addClass('is-invalid');
         return false;
     } else {
          if ((!fbForm.email == '') && (!fbForm.phone == '')) {
             $('#emailModal2').removeClass('is-invalid').addClass('is-valid');
             $('#phoneModal2').removeClass('is-invalid').addClass('is-valid');
          } else if (!fbForm.email == ''){
             $('#emailModal2').removeClass('is-invalid').addClass('is-valid');
             $('#phoneModal2').removeClass('is-invalid is-valid');
         } else if (!fbForm.phone == '') {
             $('#phoneModal2').removeClass('is-invalid').addClass('is-valid');
             $('#emailModal2').removeClass('is-invalid is-valid');
 
     }}
 
     $.ajax({
         url:'js/mail1.php',
         type: 'POST',
         cache: false,
         data: { 'name': fbForm.name, 'phone': fbForm.phone, 'email': fbForm.email, 'message': fbForm.message},
         dataType: 'html',
         beforeSend: function() {
             $("#submitFormModal2").prop('disabled', true);
 
         },
         success: function(data) {
            if(!data)
             alert("Произошла ошибка");
             else 
             $('#mailFormModal2').trigger('reset');
             $('#phoneModal2').removeClass('is-invalid is-valid');
             $('#emailModal2').removeClass('is-invalid is-valid');
             $('#nameModal2').removeClass('is-invalid is-valid');
             $("#submitFormModal2").prop('disabled', false);
             $('#getServiceModal2').modal('hide');
             $('#sendSuccessModal2').modal('show');
         },
     })
 })




//calculate
$("#calculate").on("click", function () {
    var inn = $('#inn').val().replace(/ /g,'').trim();
    var summ = $('#summ').autoNumeric('get')
    var days = parseInt($('#days').val());
    var type = $('#type').val();
    var fz = $('input[name=fz]:checked').val();
    var summFormat = summ;
    
    if (inn == "") {
        $("#errorMess").removeClass('invisible').addClass('alert-danger visible').text("Введите ИНН");
        $('#inn').addClass('is-invalid');

        return false;
    } else if (isNaN(inn)) {
        $("#errorMess").removeClass('invisible').addClass('alert-danger visible').text("Инн состоит только из цифр");
        $('#inn').addClass('is-invalid');
        return false;
    } else if ((inn.length != 12) && (inn.length != 10)) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("ИНН должен состоять из 10 или 12 символов");
        $('#inn').addClass('is-invalid');
        return false;
    } else {
        $('#inn').removeClass('is-invalid').addClass('is-valid');
    }

    if (summ == ""){
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("На какую сумму нужна гарантия?");
        $('#summ').addClass('is-invalid');
        return false;
    } else if (summ < 20000) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("Минимальная сумма: 20 000 руб.");
        $('#summ').addClass('is-invalid');
        return false;
    } else if (summ > 1000000000) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("Максимальная сумма: 1 000 000 000 руб.");
        $('#summ').addClass('is-invalid');
        return false;
    } else {
        $('#summ').removeClass('is-invalid').addClass('is-valid');
    }

    if ((days == "")  || (isNaN(days))) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("На сколько дней нужна гарантия?");
        $('#days').addClass('is-invalid');
        return false;
    } else if (days < 60) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("Минимальное количество дней: 60");
        $('#days').addClass('is-invalid');
        return false;
    } else if (days > 1885) {
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("Максимальное количество дней: 1885 ");
        $('#days').addClass('is-invalid');
        return false;
    } else {
        $('#days').removeClass('is-invalid').addClass('is-valid');
    }

    if (type === 'opt0') {
        $('#type').removeClass('is-valid').addClass('is-invalid');
        $("#errorMess").removeClass('alert-primary invisible').addClass('alert-danger visible').text("Выберите категорию гарантии");
        return false;
    } else if ((type === 'opt1') || (type === 'opt2') || (type === 'opt3')){
         $('#type').removeClass('is-invalid').addClass('is-valid');
    }

    if ((fz === '') || (fz === undefined)) {
        $('#errorMess').removeClass('alert-primary invisible').addClass('alert-danger visible').text('Выберите федеральный закон');
        $('#fztype .custom-control-input').removeClass('is-valid').addClass('is-invalid');
        return false;
    } else {
        $('#fztype .custom-control-input').removeClass('is-invalid');

    }
    let typeText
    if (type === 'opt1') {
        typeText = "Гарантия на участие и исполнение";
    } else if (type === 'opt2') {
        typeText = "Гарантия на возврат аванса";
    } else if (type === 'opt3') {
        typeText = "БГ на гарантийный период";
    }

    if (fz === '44fz') {
        fz = '44-ФЗ'
    } else if (fz === '223fz') {
        fz = '223 Закон';
    } else if (fz === '615pp') {
        fz = '615-ПП';
    } else if (fz === 'kbg') {
        fz = 'КБГ';
    }

    if($('avans').checked) {
        var avans = "Есть";
    } else {
        var avans = "Нет";
    }


    if (type === 'opt1') {
        if (summ < 10000000) {
            var i = summ * 0.0068493151 * days;
            i = i / 100;
        } else if (summ >= 10000000) {
            i = summ * 0.0063013699 * days;
            i = i / 100;
        }

    } else if (type === 'opt2') {
        i = summ * 0.0093150685 * days;
        i = i / 100;
    } else if (type === 'opt3') {
        if (summ < 100000) {
            i = 1200;
        } else {
            i = summ * 0.0123287671 * days;
            i = i / 10;
        }
    }

 
    $('#exitnum').autoNumeric('set', i);

    let a = $('#exitnum').html();
    $('#errorMess').removeClass('alert alert-danger invisible').addClass('alert alert-primary').html('Сумма комиссии по банковской гарантии составит: ' + a.bold() + "<br><a id='getService' class='badge badge-warning' data-toggle='modal' data-target='#getServiceModal'>Получить</a> услугу по данному рассчету");




    $.ajax({
        url:'js/mail.php',
        type: 'POST',
        cache: false,
        data: { 'inn': inn, 'summ': summFormat, 'days': days, 'type': typeText, 'fz': fz, 'avans': avans, 'exitSumm': a},
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop('disabled', true);

        },
        success: function(data) {
           if(!data)
            alert("Произошла ошибка");
            else 
            // $('#mailForm').trigger('reset');
            $("#sendMail").prop('disabled', false);
        },
    })


    


});






$('#submitForm').on('click', function(){
    var fbForm = {
        name: $('#name').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        message: $('#message').val(),
    };

    var letters = /^[A-Za-zа-я\sА-Я]+$/;
console.log(fbForm);

    if ((fbForm.name == '')||(fbForm.name == undefined)) {
        $("#fbMessage").removeClass('invisible').addClass('alert-danger visible').text("Введите Имя");
        $('#name').addClass('is-invalid');
        return false;
    }  else {
            $('#name').removeClass('is-invalid').addClass('is-valid');
    }


    if ((fbForm.email == '') && (fbForm.phone == '')) {
        $("#fbMessage").removeClass('invisible').addClass('alert-danger visible').text("Введите телефон или почту, чтобы мы смогли с вами связаться");
        $('#email').addClass('is-invalid');
        $('#phone').addClass('is-invalid');
        return false;
    } else {
         if ((!fbForm.email == '') && (!fbForm.phone == '')) {
            $('#email').removeClass('is-invalid').addClass('is-valid');
            $('#phone').removeClass('is-invalid').addClass('is-valid');
         } else if (!fbForm.email == ''){
            $('#email').removeClass('is-invalid').addClass('is-valid');
            $('#phone').removeClass('is-invalid is-valid');
        } else if (!fbForm.phone == '') {
            $('#phone').removeClass('is-invalid').addClass('is-valid');
            $('#email').removeClass('is-invalid is-valid');

    }}

    $.ajax({
        url:'js/mail1.php',
        type: 'POST',
        cache: false,
        data: { 'name': fbForm.name, 'phone': fbForm.phone, 'email': fbForm.email, 'message': fbForm.message},
        dataType: 'html',
        beforeSend: function() {
            $("#submitForm").prop('disabled', true);

        },
        success: function(data) {
           if(!data)
            alert("Произошла ошибка");
            else 
            $('#mailForm').trigger('reset');
            $('#phone').removeClass('is-invalid is-valid');
            $('#email').removeClass('is-invalid is-valid');
            $('#name').removeClass('is-invalid is-valid');
            $("#submitForm").prop('disabled', false);
            $('#sendSuccessModal').modal('show');  
        },
    })
    



});



var openModalFunc = function openModalFunc () {
    var textInsertFunc = function textInsertFunc (){
        $('#messageModal').val("Здравствуйте. Я хочу получить банковскую гарантию согласно рассчитаной на сайте стоимости - " + $('#exitnum').html());
    };
};