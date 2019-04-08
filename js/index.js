const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//logo image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = 'img/logo.png';

//header image
let headerImage = document.querySelector('#cta-img');
headerImage.src = 'img/header-img.png';

//middle image
let midImage = document.querySelector('#middle-img');
midImage.src = 'img/mid-page-accent.jpg';

//nav bar items
let navBar = document.querySelectorAll('nav a');
navBar[0].textContent = siteContent.nav['nav-item-1'];
navBar[1].textContent = siteContent.nav['nav-item-2'];
navBar[2].textContent = siteContent.nav['nav-item-3'];
navBar[3].textContent = siteContent.nav['nav-item-4'];
navBar[4].textContent = siteContent.nav['nav-item-5'];
navBar[5].textContent = siteContent.nav['nav-item-6'];

//header text
let headerText = document.querySelector('.cta-text h1');
headerText.textContent = siteContent.cta.h1;

//header button
let headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent.cta.button;

//features header
let featuresHeader = document.querySelector('.main-content .top-content:first-child h4');
featuresHeader.textContent = siteContent['main-content']['features-h4'];

//features text
let featuresText = document.querySelector('.main-content .top-content:first-child p');
featuresText.textContent = siteContent['main-content']['features-content'];

//about header
let aboutHeader = document.querySelector('.top-content .text-content:last-child h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

//about text
let aboutText = document.querySelector('.top-content .text-content:last-child p');
aboutText.textContent = siteContent['main-content']['about-content'];

//services text
let servicesText = document.querySelectorAll(".bottom-content .text-content p")[0];
servicesText.textContent = siteContent['main-content']['services-content'];

//services header
let servicesHeader = document.querySelectorAll(".bottom-content .text-content h4")[0];
servicesHeader.textContent = siteContent['main-content']['services-h4'];

//product text
let productText = document.querySelectorAll(".bottom-content .text-content p")[1];
productText.textContent =  siteContent['main-content']['product-content'];

//product header
let productHeader = document.querySelectorAll(".bottom-content .text-content h4")[1];
productHeader.textContent = siteContent['main-content']['product-h4'];

//vision text
let visionText = document.querySelectorAll(".bottom-content .text-content p")[2];
visionText.textContent =  siteContent['main-content']['vision-content'];

//vision header
let visionHeader = document.querySelectorAll(".bottom-content .text-content h4")[2];
visionHeader.textContent = siteContent['main-content']['vision-h4'];

//contact header
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent['contact']["contact-h4"];

//contact address
let contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.textContent = siteContent['contact']['address'];

//contact phone
let contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent['contact']['phone'];

//contact email
let contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.textContent = siteContent['contact']['email'];

//footer (copyright)
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];