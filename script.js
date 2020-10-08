



//when DOM ready
$(function(){

    for(i=0;i<12;i++){
        $('<div>',{
            class: 'row' + ' r' + i
        }).appendTo('.container')

        .append('<div class="col-md-1 time">Time</div>')
        .append('<div class="col-md-10 content point">content</div>')
        .append('<div class="col-md-1 save point">save</div>');
    }


});