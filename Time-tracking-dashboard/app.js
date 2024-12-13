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
}

dailyButton.addEventListener("click", showDaily)
weeklyButton.addEventListener("click", showWeekly)
monthlyButton.addEventListener("click", showMonthly)