function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,

    }

    emailjs.send("service_bi92bvk", "template_cylob1h", parms).then(alert("Email has been Sent!!"))
}