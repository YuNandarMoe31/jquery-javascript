new Sortable(accordionExample, {
  animation: 150,
});
 
$(document).ready(function(){
  $(".addToMenu").click(function() { 
    if(".lang-control:checked") {
      var addMenu = [];
      $(".lang-control:checked").each(function() {
        addMenu.push($(this).attr("id"));
      });
      console.log(addMenu);
      for (var i = 0; i < addMenu.length; i++) {      
        $(".accordion").append('<div class="accordion-item col-md-10 my-1"> <h2 class="accordion-header" id="heading"' + addMenu[i] +'> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + addMenu[i] +'" aria-expanded="false" aria-controls="collapse' + addMenu[i] +'">' + addMenu[i]  + '</button> </h2> <div id="collapse' + addMenu[i] +'" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"> <div class="accordion-body"> <div class="row"> <div class="col-md-12 py-1"> <div class="form-group"> <label for="">URL</label> <div class="col-md-12"> <input type="text" id="" class="form-control" placeholder="https://"> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 py-1"> <div class="form-group"> <label for="">Navigation Label</label> <div class="col-md-12"> <input type="text" id="" class="form-control" placeholder="Navigation Label"> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 py-1"> <div class="form-group"> <div class="row"> <div class="col-md-2 px-2"> <a href="#" class="color-danger text-decoration-underline">Remove</a> </div> <div class="col-md-1">|</div> <div class="col-md-2 px-2"> <a href="#" class="color-primary text-decoration-underline">Cancel</a> </div> </div> </div> </div> </div> </div> </div> </div>');
      }
    } 
  })
});
