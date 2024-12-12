// const button = document.getElementById("subscribe")

// const submitContainer = document.querySelectorAll("container-submit")



// button.onclick = () => {
//   const email = document.getElementById("emailInput").value
//   const submitContainer = document.querySelectorAll("container-submit")
//   if (validateEmail(email)) {
//     console.log('witam');
//     changeVisibility()
    
//   } else {
//       console.log('dziala - niepoprawne');   
//   }
// }

// function changeVisibility() {
//   document.getElementsByClassName('container-submit').style.visibility = "hidden"
// }

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


document.addEventListener("DOMContentLoaded", () => {
  const subscribeButton = document.getElementById("subscribe");
  const submitContainer = document.querySelector(".container-submit");
  const body = document.body;
  const text = document.querySelector(".text")
  const img = document.getElementById("illustration")
  const email = document.getElementById("emailInput").value
  const emailInput = document.getElementById("emailInput")

  const errorMsg = document.getElementById("errorMsg")



  subscribeButton.addEventListener("click", () => {
    // Dodaj klasę `hidden` do całego body
    const email = document.getElementById("emailInput").value

    if (validateEmail(email)) {
      submitContainer.style.display = "flex";
      text.style.display = "none";
    } else {
      emailInput.style.backgroundColor = 'hsl(2 50% 50%)';
      errorMsg.style.display = 'flex'
      emailInput.style.color = 'white'
      
    }
 

    // Pokaż tylko container-submit

  });

  const dismissButton = document.getElementById("dismiss");
  dismissButton.addEventListener("click", () => {
    // Usuń klasę `hidden` i schowaj submit-container
    text.style.display = "flex";
    submitContainer.style.display = "none";
  });
});
