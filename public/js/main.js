// hamburger

const hamburger = document.getElementById("hamburger")
const navItem = document.getElementById('nav-item')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navItem.classList.toggle('hidden')
})


// nav scroll
window.onscroll = () => {
    const header = document.querySelector('header')


    if (window.pageYOffset > 10) {
        header.classList.add('navbar-fixed')



    } else {
        header.classList.remove('navbar-fixed')
    }

}



// nav-item active

const item = document.querySelectorAll('.nav-item-a')

item.forEach(e => {
    e.addEventListener('click', () => {
        item.forEach(item => item.classList.remove('nav-bot', 'text-sky-400'))
        e.classList.add('nav-bot', 'text-sky-400')
    })

});




// dark mode

document.addEventListener("DOMContentLoaded", function () {
    const darkMode = document.getElementById("darkMode");
    const html = document.querySelector('html')

    const darkImage = document.getElementById('DarkImage');
    // Mengambil status dark mode dari penyimpanan lokal saat halaman dimuat
    const isDarkMode = localStorage.getItem("darkMode") === "true";


    // Mengubah tema sesuai dengan status dark mode yang tersimpan
    if (isDarkMode) {
        html.classList.add("dark");

    }

    // Menangani klik tombol untuk mengaktifkan/deaktifkan dark mode
    darkMode.addEventListener("click", function () {
        let darkm = html.classList.toggle("dark");

        if (darkm) {
            darkImage.src = "./image/sun.png"
        } else {
            darkImage.src = "./image/moon.png"
        }

        // Menyimpan status dark mode ke penyimpanan lokal
        localStorage.setItem("darkMode", html.classList.contains("dark"));


    });
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        darkImage.src = "./image/sun.png"
    } else {
        document.documentElement.classList.remove('dark')
        darkImage.src = "./image/moon.png"
    }


});





// animation typing
const typed = new Typed('#typing', {
    strings: ["Frontend Developer", "Mobile Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,

})
