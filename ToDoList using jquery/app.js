$('ul').on('click','li',function(){
    
    $(this).toggleClass('completed');

})

$('input[type="text"]').keypress(function (event) { 
    if(event.which===13){
        const todoText=$(this).val();

        const todo=`<li> <span><i class="fas fa-trash-alt"></i>&nbsp</span>${todoText}</li>`;

        $('ul').append(todo);
        $(this).val("");
    }
});

$('ul').on('click','span',function(event){
    
    
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();  //to stop event bubbelling
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle();
})
