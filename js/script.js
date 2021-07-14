const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

new WOW().init();

const counter = document.querySelectorAll('.rating__prosent'),
lines = document.querySelectorAll('.rating__line span');

counter.forEach((item, i) => {
    lines [i].style.width = item.innerHTML;
});

    //отправка писем

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      URL: "mailer/smart.php",
      data: $(this).serialize()
    }).done (function() {
      $(this).find("input").val("");
      


      $('form').trigger('reset');
    });
    return false;

  }); 


