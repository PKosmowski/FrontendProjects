const dailyButton = document.getElementById("dailyButton")
const weeklyButton = document.getElementById("weeklyButton")
const monthlyButton = document.getElementById("monthlyButton")

const daily = document.querySelectorAll(".daily")
const weekly = document.querySelectorAll(".weekly")
const monthly = document.querySelectorAll(".monthly")



function showMonthly() {
    daily.forEach(el => {
        el.style.display = "none"
    })
    monthly.forEach(el => {
        el.style.display = "flex"
    })
    weekly.forEach(el => {
        el.style.display = "none"
    })
    dailyButton.style.color = "rgba(255, 255, 255, 0.459)"
    weeklyButton.style.color = "rgba(255, 255, 255, 0.459)"
    monthlyButton.style.color = 'white'
    
}

function showDaily() {
    daily.forEach(el => {
        el.style.display = "flex"
    })
    monthly.forEach(el => {
        el.style.display = "none"
    })
    weekly.forEach(el => {
        el.style.display = "none"
    })
    monthlyButton.style.color = "rgba(255, 255, 255, 0.459)"
    weeklyButton.style.color = "rgba(255, 255, 255, 0.459)"
    dailyButton.style.color = 'white'
}

function showWeekly() {
    daily.forEach(el => {
        el.style.display = "none"
    })
    monthly.forEach(el => {
        el.style.display = "none"
    })
    weekly.forEach(el => {
        el.style.display = "flex"
    })
    monthlyButton.style.color = "rgba(255, 255, 255, 0.459)"
    dailyButton.style.color = "rgba(255, 255, 255, 0.459)"
    weeklyButton.style.color = 'white'
}

dailyButton.addEventListener("click", showDaily)
weeklyButton.addEventListener("click", showWeekly)
monthlyButton.addEventListener("click", showMonthly)