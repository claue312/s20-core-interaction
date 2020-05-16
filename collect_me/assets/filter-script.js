 $( function() {
    $( ".ok" ).draggable();
  } );
 function marquee(a, b) {
    var width = b.width();
    var start_pos = a.width();
    var end_pos = -width;

    function scroll() {
        if (b.position().left <= -width) {
            b.css('left', start_pos);
            scroll();
        }
        else {
            time = (parseInt(b.position().left, 10) - end_pos) *
                (20000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
            b.animate({
                'left': -width
            }, time, 'linear', function() {
                scroll();
            });
        }
    }

    b.css({
        'width': width,
        'left': start_pos
    });
    scroll(a, b);
    
    b.mouseenter(function() {     // Remove these lines
        b.stop();                 //
        b.clearQueue();           // if you don't want
    });                           //
    b.mouseleave(function() {     // marquee to pause
        scroll(a, b);             //
    });                           // on mouse over
    
}

$(document).ready(function() {
    marquee($('#display'), $('#text'));  //Enter name of container element & marquee element
});

$(function(){
  $( "#thing" ).draggable();
});

$(document).ready(function(){
    $("#button2").bind('click', shuffle);        
    function shuffle(){
        $(".words").each(function(){
            var divs = $(this).find('img');
            for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
            var i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
              $('img').draggable()
        });   
    
            
    }
     });
