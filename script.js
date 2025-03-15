
var menuList = document.getElementById("menuList");
menuList.style.height = "0px"; 
menuList.style.paddingTop = "0px"; 
menuList.style.display = "block"; 
menuList.style.position = "fixed"; 
menuList.style.borderRadius = "20px"; 

function toggleMenu() {
    if (menuList.style.height == "0px") {
        menuList.style.height = "auto"; 
        menuList.style.paddingTop = "20px"; 
    } else {
        menuList.style.height = "0px"; 
        menuList.style.paddingTop = "0px"; 
    }
}


function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100; 
    document.getElementById("progressBar").style.width = scrollPercent + "%"; 
}


window.onscroll = function() {
    updateProgressBar();
};


document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});


window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = 'block'; 
    } else {
        scrollTopButton.style.display = 'none'; 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const progressRing = scrollToTopBtn.querySelector('circle');
    const rootElement = document.documentElement;

    const radius = progressRing.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRing.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        progressRing.style.strokeDashoffset = offset;
    }

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        const scrolled = (rootElement.scrollTop / scrollTotal) * 100;

        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }

        requestAnimationFrame(() => {
            setProgress(scrolled);
        });
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    body.classList.toggle("dark-mode", themeToggle.checked);
}

window.onload = () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }
};

function toggleSidebar() {
    const sidebar = document.querySelector('.social-sidebar');
    const toggleArrow = document.querySelector('.toggle-arrow');

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        toggleArrow.style.display = "none";
    } else {
        sidebar.style.display = "none";
        toggleArrow.style.display = "block";
    }
}

function testimonialJs() {
    const swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
testimonialJs();