$(document).ready(function () {
  /*Check Box*/
  $(".lang-control").change(function () {
    var checked = $(this).is(':checked');
    var lang = $(this).data('lang');
    if (!checked) {
      $(lang).hide();
    } else {
      $(lang).show();
    }
    
    var active = $(".lang-control:checked").length;
    if (active == 2) {
     $(".form-group").children(".row").find("div").css("width","calc((100% - 12px) / 2)");
    } else if (active == 1) {
     $(".form-group").children(".row").find("div").css("width","100%");
    } else {
      $(".form-group").children(".row").find("div").css("width","calc((100% - 24px) / 3)");
    };
});

  /*Add Activity*/
  var i = 1;
  $('#add').click(function () {
    i++;
    $('#dynamic_field').append('<div class="form-group form-file" id="row' + i + '"><input type="file" class="form-file-input" id="customFile"><label class="form-file-label" for="customFile"></label><a href="#" class="icon color-danger align-right btn-remove" id="' + i + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></a></div>');
  });
  $(document).on('click', '.btn-remove', function () {
    var button_id = $(this).attr("id");
    $('#row' + button_id + '').remove();
  });

  /*Add Textbox*/
  var i = 1;
  $('#addTxt').click(function () {
    i++;
    $('#dynamic_field').append('<div class="form-group form-file" id="row' + i + '"><div class="row"><div class="col-md-10"><input type="text" class="form-control" id="" placeholder="Multi Text"></div><div class="col-md-2"><a href="#" class="icon color-danger align-right btn-remove-txt" id="' + i + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></a></div></div></div>');
  });
  $(document).on('click', '.btn-remove-txt', function () {
    var button_id = $(this).attr("id");
    $('#row' + button_id + '').remove();
  });
});




