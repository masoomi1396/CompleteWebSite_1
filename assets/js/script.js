const hamburgerMenu = document.getElementById('hamburger');
const closeMenu = document.getElementById('nav-close');
const menuList = document.querySelectorAll('#nav-menu li');

hamburgerMenu.addEventListener('click', () => {
    document.querySelector("#nav-menu").classList.remove('hidden');
})
closeMenu.addEventListener('click', () => {
    document.querySelector("#nav-menu").classList.add('hidden');
})
menuList.forEach((li) => {
    li.addEventListener("click", () => {
        document.querySelector("#nav-menu").classList.add('hidden');
    })
})
//Mobile Menu

const tabs = document.querySelectorAll(".tabs_wrap>ul>li");
const tabElements = document.querySelectorAll(".item_wrap");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const tabVal = tab.getAttribute('data-tabs');
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        if (tabVal == 'all') {
            tabElements.forEach(element => {
                element.classList.remove('hidden');
            })
        }
        else if (tabVal == 'food') {
            tabElements.forEach(element => {
                element.classList.add('hidden');
                if (element.classList.contains('food')) {
                    element.classList.remove('hidden');
                }
            })
        }
        else if (tabVal == 'snack') {
            tabElements.forEach(element => {
                element.classList.add('hidden');
                if (element.classList.contains('snack')) {
                    element.classList.remove('hidden');
                }
            })
        }
        else if (tabVal == 'beverage') {
            tabElements.forEach(element => {
                element.classList.add('hidden');
                if (element.classList.contains('beverage')) {
                    element.classList.remove('hidden');
                }
            })
        }
    })
})
//tabs 

const swiper = new Swiper('.swiper', {
    // If we need pagination
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor:true,
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    }
  },
});
//swiper

const scrollBtn = document.getElementById('scrollButton');
window.addEventListener('scroll',()=>{
    if(this.scrollY >= 250)
    {
        scrollBtn.classList.remove('-bottom-1/2');
        scrollBtn.classList.add('bottom-4');
    }
    else{
        scrollBtn.classList.add('-bottom-1/2');
        scrollBtn.classList.remove('bottom-4');
    }
})
//Scroll Button

window.addEventListener('scroll',()=>{
    const header = document.getElementsByTagName('header')[0];
    if(this.scrollY >= 50)
    {
        header.classList.add('border-b');
    }
    else{
        header.classList.remove('border-b');
    }
})
//Header Border

const activeLink = ()=>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-menu>ul>li>a');
    let current = 'home';
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop - 60)
        {
            current = section.getAttribute('id');
        }
    })
    navLinks.forEach(item => {
        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current))
        {
            item.classList.add('text-secondaryColor');
        }
    })
}
window.addEventListener('scroll',activeLink);
//Active Link 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:200,
    reset: true
});

sr.reveal(".home__image");
sr.reveal(".home__content",{origin: "bottom"});
sr.reveal(".category__card",{interval:300});
sr.reveal(".promo__card_1",{origin:'left',delay:400});
sr.reveal(".promo__card_2",{origin:'right',delay:400});
sr.reveal(".about__image",{origin:'bottom',delay:400});
sr.reveal(".about__content",{origin:'top',delay:400});
sr.reveal(".menu__items",{origin:'left',delay:400});
sr.reveal(".customer__section",{origin:'right',delay:400});
sr.reveal(".footer");