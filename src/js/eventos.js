jQuery.fn.toggleText = function(a,b) {
    return   this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
    }

    $(document).ready(function(){
    $('.events__copy-info').before('<span id="spanvalor">Mais Informações</span>');
    $('.events__copy-info').css('display', 'none')
    $('span', '#box-toggle').click(function() {
    $(this).next().slideToggle('slow')
    .siblings('.events__copy-info:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
    //console.log(document.getElementById('spanvalor').innerText); 
    if(document.getElementById('spanvalor').innerText === 'Mais Informações'){
        $('.events__copy-div').css('background-color', '#F5F5F5')
    }else{
        $('.events__copy-div').css('background-color', '#FFF')
    };         
    $(this).toggleText('Mais','Menos')
    .siblings('span').next('.events__copy-info:visible').prev()
    .toggleText('Mais','Menos')  
    });
    })