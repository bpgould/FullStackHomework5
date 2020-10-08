



//when DOM ready
$(function(){

    for(i=0;i<12;i++){
        $('<div>',{
            class: 'row' + ' r' + i
        }).appendTo('.container')
        .append('<div class="col-md-2 time">Time</div>')
        .append('<div class="col-md-9 content point">content</div>')
        .append('<div class="col-md-1 save point">save</div>');
        
        let t = moment();
        let t2 = moment(t).format('hh:mm:ss a');
        console.log(t2);
        $('.time').text(t2 + '');
    }

});

