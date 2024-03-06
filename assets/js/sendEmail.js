function sendMail() {
    let tempParams = {
        to_name: document.getElementById("fullname").value,
        from_name: document.getElementById("emailaddress").value,
        message: document.getElementById("projectsummary").value
    };
    emailjs.send('service_xd1nphv', 'template_qshx18e', tempParams)
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}