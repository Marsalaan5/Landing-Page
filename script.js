
var typed = new Typed('#elem', {
    strings: ['Fitness'],
    typeSpeed:400,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

var typed = new Typed('#element', {
    strings: ['YOUR BODY SHAPE'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });


  let scroll = document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
  })
  })


document.getElementById('about-us').addEventListener('click',function(){
    var About = document.getElementById('about');
    About.scrollIntoView({behaviour:'smooth'});
});
document.getElementById('service-us').addEventListener('click',function(){
    var Service = document.getElementById('service');
    Service.scrollIntoView({behaviour:'smooth'});
});
document.getElementById('on-price').addEventListener('click',function(){
    var Price = document.getElementById('price');
    Price.scrollIntoView({behaviour:'smooth'});
});
document.getElementById('contact-me').addEventListener('click',function(){
    var Contact = document.getElementById('contact');
    Contact.scrollIntoView({behaviour:'smooth'});
});
document.getElementById('Home').addEventListener('click',function(){
    var Home = document.getElementById('home-button');
    Home.scrollIntoView({behaviour:'smooth'});
});


