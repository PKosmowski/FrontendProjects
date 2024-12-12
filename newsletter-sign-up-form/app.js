const button = document.getElementById("subscribe")
const email = document.getElementById("emailInput").value
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


button.onclick = () => {
    const email = document.getElementById("emailInput").value
    let main = document.getElementsByClassName('start')
    if (validateEmail(email)) {
        console.log('holy!');
        main.className = 'submitted'

        
    } else {
        console.log('dziala - niepoprawne');
        
    }
    
}