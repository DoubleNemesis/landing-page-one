    const header = document.getElementsByTagName('header')
    const logo = document.getElementsByClassName('logo')
    const arrowButton = document.getElementById('arrow-button')
    const scrollTarget = document.getElementById('scroll-to-here')
    const hiddenMenu = document.getElementById('hidden-menu')
    const burger = document.getElementById('burger')
    let isScrolledDown = false;


//header scroll effect   
    const getScroll = () => {
        let amountScrolled = Math.round(window.scrollY)
        if (amountScrolled > 60) {
            header[0].style.backgroundColor = '#0d2241'
            header[0].style.borderBottom = '1px solid #00acea'
            logo[0].style.animation = 'goUp forwards 1s'
            isScrolledDown = true
        }
        else {
            if (isScrolledDown) {
                header[0].style.backgroundColor = 'transparent'
                header[0].style.borderBottom = 'unset'
                logo[0].style.animation = 'goDown forwards 1s'
                isScrolledDown = false
            }
            // logo[0].style.marginTop = '1.8rem'
        }
    }

    window.addEventListener('scroll', getScroll)

// show / hide menu

burger.addEventListener('click', function(){ 
    hiddenMenu.style.display = "inline"
})

function closeMenu(){
    hiddenMenu.style.display = 'none'
}


//hero button scroll down

arrowButton.addEventListener('click', function(){
    scrollTarget.scrollIntoView(true)
})

//icons animation on hover
    const iconsList = document.getElementsByClassName('icon-small')

    Array.from(iconsList).forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
            e.target.children[2].style.animation = 'lineIn .5s forwards'
            e.target.children[3].style.animation = 'vLineIn .5s forwards'
            e.target.children[4].style.animation = 'textIn .5s forwards'
        })
        element.addEventListener('mouseleave', function (e) {
            e.target.children[2].style.animation = 'lineOut .5s'
            e.target.children[3].style.animation = 'vLineOut .5s'
            e.target.children[4].style.animation = 'textOut .5s'
        })
    })