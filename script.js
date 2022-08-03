const contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
        .then(()=> {
            // url thankks you
            window.location.href = "https://luqmannurhakim.github.io/Terimakasih.github.io/";
        })
        .catch((e)=> alert('Eror occured'));
})