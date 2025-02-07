
// const form = document.querySelector('#login-form');
// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');

// form.addEventListener("submit", function(clickevent){
//     clickevent.preventDefault();

//     const username = usernameInput.value
//     const password = passwordInput.value

//     const usernamePattern = /^[a-åA-Å]{6,12}$/;
//     const passwordPattern = /^[a-zA-Z0-9]{8,16}$/;
 

//     let isUsernameValid = usernamePattern.test(username);
//     let isPasswordValid = passwordPattern.test(password);

//     if (!isUsernameValid) {
//         alert('Brukernavn må være mellom 6-12 bokstaver (a-å, A-Å).');
//     } else {
//         console.log(username);
//     }
//     if (!isPasswordValid) {
//         alert('Passord må være mellom 8-16 tegn og inneholde bokstaver og tall.');
//     } else {
//         console.log(password);
//     }

//     async function getData(username, password){
    
//         try {
//             const result = await fetch("http://localhost:3150/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({username, password})
//             })
//             const json = await result.json();
//             console.log(json);
//         } catch (err) {
//             console.log(err);
//         }
//     }
//         getData()

// });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("survey-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            question1: document.getElementById("question1").value,
            question2: document.getElementById("question2").value,
            question3: document.getElementById("question3").value,
            question4: document.getElementById("question4").value,
            question5: document.getElementById("question5").value,
        };

        try {
            // Send data to backend
            const response = await fetch("http://10.12.10.170:3250/submit-survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                window.location.href = "/thank-you"; // Redirect to thank-you page
                console.log('it work');
            } else {
                alert("Noe gikk galt. Prøv igjen senere!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Serverfeil. Prøv igjen senere!");
        }
    });
});

// async function getData(){
    
// try {
//     const result = await fetch("http://localhost:3150/")
//     const json = await result.json();
//     console.log(json);
// } catch (err) {
//     console.log(err);
// }
// }
// getData()