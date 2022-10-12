$(document).ready( () => {
    const slickOptions =  {
        autoplay: true,         
        dots: false,  
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',    
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>'
    };  
    $(".slider").slick(slickOptions);

    // $('.footer__form-button').on('click', () => {
    //     const email = $('#email').val();
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "jucax03@gmail.com",
    //         Password : "juquinha",
    //         To : 'jucax03@gmail.com',
    //         From : email,
    //         Subject : "Por favor me adiocione na newsletter",
    //         Body : `Olá,
    //         Eu gostaria de ser adicionando na newsletter do site.
    //         Meu email é ${email}.

    //         Obrigado!
    //         `,
    //     }).then(function (message) {
    //         alert("mail sent successfully")
    //       }); 
    // });
    $(".footer__form-button").on("click", () => {
        const email = $("#email").val();
    
        const emailOptions = {
          Host: "smtp.gmail.com",
          Username: "jucax03@gmail.com",
          Password: "j3333333",
          To: "jucax03@gmail.com",
          From: email,
          Subject: "Por favor me adicione na newsletter",
          Body: `Olá,
          
          Eu gostaria de ser adicionado na newsletter do site.
          Meu email é ${email}.
          
          Obrigado!
          `,
        };
    
        Email.send(emailOptions).then((message) => {
          alert(message);
        });
      });    
  });

