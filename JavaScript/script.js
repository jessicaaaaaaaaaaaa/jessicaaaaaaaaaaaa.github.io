$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();


  var classes_to_remove = ["look-right","look-left", "look-down", "look-up","look-down-right","look-down-left","look-up-right","look-up-left"];

function removeClasses () {
    for(var x = 0;x<classes_to_remove.length;x++) {
        $(".head").removeClass(classes_to_remove[x]);
        $(".hair").removeClass(classes_to_remove[x]);
        $(".neck").removeClass(classes_to_remove[x]);
    }
}

function direction(e) {
    //look left
    if( e.clientX <= window.innerWidth/10) { 
        removeClasses();

        $(".head").addClass("look-left");
        $(".hair").addClass("look-left");
        $(".neck").addClass("look-left");
    }
    //look right
    if( e.clientX >= window.innerWidth / 10) { 
        removeClasses();

        $(".head").addClass("look-right");
        $(".hair").addClass("look-right");
        $(".neck").addClass("look-right");
    }
    //look down
    if( e.clientY >= (window.innerHeight -(window.innerHeight / 1.5))) {
        removeClasses();

        $(".head").addClass("look-down");
        $(".hair").addClass("look-down");
        $(".neck").addClass("look-down");
    }

    // look down right 
    if( e.clientY >= (window.innerHeight -(window.innerHeight/1.5)) && e.clientX >= (window.innerWidth/5)) { 
        removeClasses();

        $(".head").addClass("look-down-right");
        $(".hair").addClass("look-down-right");
        $(".neck").addClass("look-down-right");
    }

    // look down left
    if( e.clientY >= (window.innerHeight -(window.innerHeight)) &&  e.clientX<= window.innerWidth/10) {
        removeClasses();

        $(".head").addClass("look-down-left");
        $(".hair").addClass("look-down-left");
        $(".neck").addClass("look-down-left");
    }

    // look up right 
    if( e.clientY <= ((window.innerHeight/10)) && e.clientX >= (window.innerWidth/5)) { 
        removeClasses();

        $(".head").addClass("look-up-right");
        $(".hair").addClass("look-up-right");
        $(".neck").addClass("look-up-right");
    }

    if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) && 
     e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
        removeClasses();
    }
}
window.addEventListener("mousemove", function (e) {
    direction(e);
})