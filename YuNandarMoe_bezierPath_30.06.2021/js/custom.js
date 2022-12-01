var svg = $('#Layer_1'),
  plane = $('.plane'),
  pathString = $("#lisaPath").attr('d'),
  lisaPath = Snap.path.toCubic(pathString),
  arrayPath = [];

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    offset: -60
  }
});

function calcOffset() {
    offset = plane.position().top;
    if ($( window ).width()>640) {
    var real_position = offset + 91;

    $('#helicopeter_path').height(real_position);
    if (real_position > 37.300018310546875) {
      $('#helicopeter_path').height(real_position);
    } else {
      $('#helicopeter_path').height(0);
    }
  } else {
    var real_position = offset + 20;
    $('#helicopeter_path').height(real_position);
    if (real_position > 37.300018310546875) {
      $('#helicopeter_path').height(real_position);
    } else {
      $('#helicopeter_path').height(0);
    }
  }
}

function setUpPoint(segment) {
  for (var i = 0; i < segment.length; i += 2) {
    //create a new object for the point so it can be passed to the bezier plugin
    var point = {};
    point.x = segment[i];
    point.y = segment[i + 1];
    //add the point to the array
    arrayPath.push(point);
  } //loop end
}

// loop through the curves collection
for (var i = 0; i < lisaPath.length; i++) {
  var segment = lisaPath[i],
    point;
  // the first element returned in the array is a letter, remove it
  segment.shift();
  //call the function to set up the points based on the segment returned
  point = setUpPoint(segment);
}

var tween1 = new TimelineMax()
  .add(TweenMax.to(plane, 1, {
    bezier: {
      values: arrayPath,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    onUpdate: calcOffset
  }));


// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: ".flight_animate",
    duration: svg.height()
  })
  .setTween(tween1)
  .addTo(controller)
    .on("update", function (e) { 
    var stDiv = $("#scrollDirection"),
        st = e.target.controller().info("scrollDirection");
    
    if (st === 'FORWARD') {
      plane.attr('src', 'img/plane_forward.png');
    } else if (st === 'REVERSE') {
      plane.attr('src', 'img/plane_forward.png');
    };

});
/*$(document).ready(function(){
  $('.plane').css('opacity', 0);
  $(window).scroll(function(){
    if ($('html,body').scrollTop()>1) {
        $('.plane').css('opacity', 1);
    } else {
        $('.plane').css('opacity', 0);
    }
  });
});*/