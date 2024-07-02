 var tablinks = document.getElementsByClassName("tab-links");
     var tabcontents = document.getElementsByClassName("tab-contents");

     function openTab(tabname) {
         for (tablink of tablinks) {
             tablink.classList.remove("active-link")
         }
         for (tablink of tabcontents) {
             tablink.classList.remove("active-tab")
         }
         event.currentTarget.classList.add("active-link");
         document.getElementById(tabname).classList.add("active-tab")
     }
     //toggle list----------------------
     let menuIcon=document.querySelector('#menu-icon');
     let navbar=document.querySelector('.navbar');

     menuIcon.onclick=()=>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
     }










 //scroll section active list
 let sections =document.querySelectorAll('section');
 let navLinks=document.querySelectorAll('header nav a');

 window.onscroll= () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset=sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })
    //sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //------------------------------------------remove toggle icon and navbar when click navbar link scroll;

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 }
//-----------------scrollreveal;
ScrollReveal({ 
    reset: true,
   distance:'80px',
   duration:2000,
   delay:200



});
ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container .portfolio-box, .contact form'  ,{ origin:'top' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

//--------------------------typed js

const typed= new Typed('.multiple-text',{
 strings: ['Frontend Web Developer','Junior Software Engineer'],
 typeSpeed:100,
 backSpeed:100,
 backDelay:1000,
 loop:true
});

//form validation using javascript;
function fn1(){
    var uname=document.forms["myform"]["uname"].value;
    var email=document.forms["myform"]["email"].value;
    var number=document.forms["myform"]["number"].value;
    var subject=document.forms["myform"]["subject"].value;
    
    if(uname==null || uname==""){
        document.getElementById("errorbox").innerHTML="Enter Your Name";
        return false;
    }
    
       if(email==null || email==""){
            document.getElementById("errorbox").innerHTML="Enter Your Email";
          return false;
        }
        if(number==null || number==""){
            document.getElementById("errorbox").innerHTML="Enter Your Mobile Number";
          return false;
        }
        if(subject==null || subject==""){
            document.getElementById("errorbox").innerHTML="Enter Your subject";
          return false;
        }
        if(uname!=='' || uname!==''){
            alert("Login Successfully");
        }
    }

