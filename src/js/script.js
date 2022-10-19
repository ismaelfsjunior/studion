$(document).ready( () => {
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
