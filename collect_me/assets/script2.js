$(document).ready(function() { 
$('img').draggable();});

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
