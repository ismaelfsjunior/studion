$(document).ready( () => {
  // menu
    $('.navbar__menu-btn').on('click', function () {
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass("fa-bars");
        $(this).find('i').toggleClass("fa-square-xmark");
    });
    const slickOptions =  {
        autoplay: true,         
        dots: false,  
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',    
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>'
    };  
    $(".slider").slick(slickOptions);

    const slickOptionsdepoiment =  {
      autoplay: true,  
      dots: true,       
      prevArrow: '<button type="button" class="slick-prev slider__depoimento_prev-arrow">Previous</button>',    
      nextArrow: '<button type="button" class="slick-next slider__depoimento_next-arrow">Previous</button>'
    }; 
    $(".slider__depoimento").slick(slickOptionsdepoiment); 
  });
