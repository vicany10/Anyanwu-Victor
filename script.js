document.getElementById("contactBtn").addEventListener("click",function () {
    const email=document.getElementById("email");
    if (email.style.display === "none") {
        email.style.display ="block";
        this.textContent ="Hide Email";
    } else{
        email.style.display="none";
        this.textContent="Click to Reveal Email";
    }
});