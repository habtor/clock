setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

// ============================= Themes ===============================

let theme_dots = document.getElementsByClassName("theme_circles")

for (let i = 0; theme_dots.length > i; i++) {
    theme_dots[i].addEventListener('click', function () {
        let theme = this.dataset.theme
        set_theme(theme)
    })
}

function set_theme(theme) {
    if (theme == "dark") {
        document.getElementById("theme_style").href = "dark.css"
    }
    if (theme == "lightt") {
        document.getElementById("theme_style").href = "light.css"
    }    
}
