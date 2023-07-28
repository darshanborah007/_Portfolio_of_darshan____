var tabs; 
var allColors = document.documentElement



document.addEventListener("DOMContentLoaded", function () {

    var typed = new Typed(".auto-type", {
        strings: ["Web Developer", "Web-App Developer", "Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })

    let about_screen = document.getElementsByClassName("about")
    about_screen[0].style.paddingLeft = "0"

    let read_btns = document.getElementsByClassName("read-more-btns")
    read_btns[0].style.height = "20px"
    read_btns[0].style.justifyContent = "center"
    read_btns[0].style.marginTop = "5px"


    var scrollLinks = document.querySelectorAll('.smooth-scroll')

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault()

            var targetId = this.getAttribute('href').substr(1)
            var targetElement = document.getElementById(targetId)

            if (targetElement) {

                var targetOffset = targetElement.offsetTop;
                var currentOffset = window.pageYOffset;
                var distance = targetOffset - currentOffset;
                var duration = 800; // Animation duration in milliseconds
                var start;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    var progress = timestamp - start;
                    var percentage = Math.min(progress / duration, 1);
                    window.scrollTo(0, currentOffset + distance * percentage);
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }

                }

            }
            window.requestAnimationFrame(step);
        })
    })


    let all_tabs = document.querySelectorAll(".parallax")
    all_tabs = Array.from(all_tabs)

    function getElementVisibleHeight(element) {
        const elementRect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        const top = Math.max(elementRect.top, 0);
        const bottom = Math.min(elementRect.bottom, viewportHeight);

        const visibleHeight = bottom - top;
        return (visibleHeight / element.offsetHeight) * 100;
    }



    function checkVisibility() {

        for (let i = 0; i < all_tabs.length; i++) {

            if (getElementVisibleHeight(all_tabs[i]) >= 20) {
                let page = all_tabs[i].getAttribute("id")
                if (page == "home") {
                    let activeTab = document.getElementById("home-tab")
                    activeTab.style.color = "var(--purple)"
                    let myID = document.getElementsByClassName("my-info")
                    myID[0].style.right = "0"
                    myID[0].style.opacity = "1"
                    let myPic = document.getElementsByClassName("my-pic")
                    myPic[0].style.right = "0"
                    myPic[0].style.opacity = "1"
                    let myIcon = document.getElementsByClassName("contact-icons")
                    myIcon[0].style.right = "0"
                    myIcon[0].style.opacity = "1"
                }
                else if (page == "services") {
                    let activeTab = document.getElementById("services-tab")
                    activeTab.style.color = "var(--purple)"
                    let myID = document.querySelectorAll(".services > div")
                    let myLbl = document.querySelectorAll(".services > label")
                    let myBtn = document.querySelectorAll(".read-more-btns")
                    myBtn[0].style.left = "0"
                    myBtn[0].style.opacity = "1"
                    myID[0].style.left = "0"
                    myID[1].style.left = "0"
                    myLbl[0].style.left = "0"
                    myID[0].style.opacity = "1"
                    myLbl[0].style.opacity = "1"
                }
                else if (page == "skills") {
                    let activeTab = document.getElementById("skills-tab")
                    activeTab.style.color = "var(--purple)"
                    let myID = document.querySelectorAll(".skills> div")
                    let myLbl = document.querySelectorAll(".skills > label")
                    myID[0].style.left = "0"
                    myLbl[0].style.left = "0"
                    myID[0].style.opacity = "1"
                    myLbl[0].style.opacity = "1"

                }
                else if (page == "about") {
                    let activeTab = document.getElementById("about-tab")
                    activeTab.style.color = "var(--purple)"
                    let myID = document.querySelectorAll(".about > div")
                    myID[0].style.right = "0"
                    myID[0].style.opacity = "1"
                }
                else if (page == "contact") {
                    let activeTab = document.getElementById("contact-tab")
                    activeTab.style.color = "var(--purple)"
                    let myID = document.querySelectorAll(".contact > div")
                    myID[0].style.opacity = "1"
                }
            }
            else {
                let page_remove = all_tabs[i].getAttribute("id")
                if (page_remove == "home") {
                    let activeTab = document.getElementById("home-tab")
                    activeTab.style.color = "var(--white)"
                    let myID = document.getElementsByClassName("my-info")
                    myID[0].style.right = "50%"
                    myID[0].style.opacity = "0"
                    let myPic = document.getElementsByClassName("my-pic")
                    myPic[0].style.right = "-50%"
                    myPic[0].style.opacity = "0"
                    let myIcon = document.getElementsByClassName("contact-icons")
                    myIcon[0].style.right = "-50%"
                    myIcon[0].style.opacity = "0"

                }
                else if (page_remove == "services") {
                    let activeTab = document.getElementById("services-tab")
                    activeTab.style.color = "var(--white)"
                    let myID = document.querySelectorAll(".services > div")
                    let myLbl = document.querySelectorAll(".services > label")
                    let myBtn = document.querySelectorAll(".read-more-btns")
                    myBtn[0].style.left = "-100%"
                    myBtn[0].style.opacity = "0"
                    myID[0].style.left = "-100%"
                    myID[1].style.left = "-100%"
                    myLbl[0].style.left = "-100%"
                    myID[0].style.opacity = "0"
                    myLbl[0].style.opacity = "0"

                }
                else if (page_remove == "skills") {
                    let activeTab = document.getElementById("skills-tab")
                    activeTab.style.color = "var(--white)"
                    let myID = document.querySelectorAll(".skills > div")
                    let myLbl = document.querySelectorAll(".skills > label")
                    myID[0].style.left = "-100%"
                    myLbl[0].style.left = "-100%"
                    myID[0].style.opacity = "0"
                    myLbl[0].style.opacity = "0"
                }
                else if (page_remove == "about") {
                    let activeTab = document.getElementById("about-tab")
                    activeTab.style.color = "var(--white)"
                    let myID = document.querySelectorAll(".about > div")
                    myID[0].style.right = "-50%"
                    myID[0].style.opacity = "0"
                }
                else if (page_remove == "contact") {
                    let activeTab = document.getElementById("contact-tab")
                    activeTab.style.color = "var(--white)"
                    let myID = document.querySelectorAll(".contact > div")
                    myID[0].style.opacity = "0"
                }
            }
        }

    }

    checkVisibility()
    window.addEventListener('scroll', checkVisibility)

})

function showMenuBar () {

    let x = document.querySelectorAll("#new-nav")
    let y = document.querySelectorAll("#new-nav a")
    x[0].style.display = "flex"
    for (let i = 0; i < y.length; i++) {
        y[i].style.display = "flex"
    }
}

function hideMenuBar () {
    
    let x = document.querySelectorAll("#new-nav")
    let y = document.querySelectorAll("#new-nav a")

    setTimeout(function() {
        x[0].style.display = "none"
        for (let i = 0; i < y.length; i++) {
            y[i].style.display = "none"
        }
    }, 100)

}

function changeTheme () {
    var check = getComputedStyle(allColors)
    const c = check.getPropertyValue('--black')
    if (c == "#000000") {
        allColors.style.setProperty("--black", "#ffffff")
        allColors.style.setProperty("--white", "#000000")
        allColors.style.setProperty("--bg", "#e8e9eb")
        allColors.style.setProperty("--purple-darker", "#bbbbbd")
        allColors.style.setProperty("--purple-dark", "#cccdcf")

    }
    else {
        allColors.style.setProperty("--black", "#000000")
        allColors.style.setProperty("--white", "#ffffff")
        allColors.style.setProperty("--bg", "rgb(23, 2, 23)")
        allColors.style.setProperty("--purple-darker", "rgb(42, 10, 42)")
        allColors.style.setProperty("--purple-dark", "rgb(66, 16, 66)")
    }

}