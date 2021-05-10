import "styles/_app.scss";
import "bootstrap";

$(function () {
  console.log("Ready!");

  require("scripts/demo");
});

//E-mail Ajax Send

window.onload = function(){
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".contact-page__form, .main__form")
      .addEventListener('submit', (e) => {
        e.preventDefault();
  
        let phone = document.querySelector(".phone-input").value;
        let service = document.querySelector(".form__select").value;
        let name = document.querySelector(".name-input").value;
        let message = document.querySelector(".message-input").value;
  
        console.log(name);
  
        phone = phone.replace(/[\s\-\(\)]/g, "");
        console.log(phone);
        console.log(service);
  
        if (phone.match(/^((\+?3)?8)?0\d{9}$/) != null) {
          sendEmail(phone, service, name, message);
        } else {
          alert("Пожалуйста, введите корректный номер телефона");
        }
      });
  
    //Send Email Data
    function sendEmail(phone, service, name, message) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "master.nav.vse.ruki@gmail.com",
        Password: "kbekkmeipkwlrjxd",
        To: "master.nav.vse.ruki@gmail.com",
        From: "master.nav.vse.ruki@gmail.com",
        Subject: `Новый заказ: ${service}`,
        Body: `
              Имя: ${name}<br/>
              Телефон: ${phone}<br/>
              Услуга: ${service}<br/>
              Детали: ${message}
              `,
      }).then((message) =>
        alert("Спасибо, мы перезвоним вам в течение 10 минут")
      );
    }
  });
  if(document.location.pathname === "/"){
    document.querySelector('.help__btn').addEventListener('click', function (){
      // window.scrollTo({
      //   top: 0,
      //   behavior: "smooth"
      // });
      window.location.href = window.location + 'contact';
    });
  }
  if(document.location.pathname === "/blog"){
    let btns = document.querySelectorAll('.change__page');
    for (let i = 0; i <= btns.length; i++){
      btns[i].addEventListener('click', function(){
        console.log(window.location.href.substring(0, window.location.href.length -5));
        window.location = window.location.href.substring(0, window.location.href.length -5) + '/contact';
      })
    }
    
  }
}

