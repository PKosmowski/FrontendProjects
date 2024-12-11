const shareButton = document.getElementById('shareButton')
const shareOptions = document.getElementById('shareOptions')
shareOptions.style.visibility = 'hidden'

shareButton.onclick = () => {
    console.log('witam');
    shareButton.style.backgroundColor = "hsl(217, 19%, 35%)"
    shareOptions.style.visibility = 'visible'
    

}
